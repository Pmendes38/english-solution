const NEW_PLACES_ENDPOINT = "https://places.googleapis.com/v1/places";
const LEGACY_PLACE_DETAILS =
  "https://maps.googleapis.com/maps/api/place/details/json";

const REFERER =
  process.env.GOOGLE_API_REFERER || "https://english-solution-sigma.vercel.app/";

function normalizeNewReview(r) {
  return {
    author: r.authorAttribution?.displayName ?? "Aluno",
    photo: r.authorAttribution?.photoUri ?? null,
    rating: r.rating ?? 5,
    text: r.originalText?.text ?? r.text?.text ?? "",
    relativeTime: r.relativePublishTimeDescription ?? "",
    publishTime: r.publishTime ?? null,
  };
}

function normalizeLegacyReview(r) {
  return {
    author: r.author_name ?? "Aluno",
    photo: r.profile_photo_url ?? null,
    rating: r.rating ?? 5,
    text: r.text ?? "",
    relativeTime: r.relative_time_description ?? "",
    publishTime: r.time ? new Date(r.time * 1000).toISOString() : null,
  };
}

function dedupKey(r) {
  // author + primeiros 60 chars do texto sem espaços
  const text = (r.text || "").replace(/\s+/g, "").slice(0, 60).toLowerCase();
  return `${(r.author || "").toLowerCase()}|${text}`;
}

async function callNewApi(placeId, apiKey, languageCode = "pt-BR") {
  try {
    const res = await fetch(
      `${NEW_PLACES_ENDPOINT}/${placeId}?languageCode=${languageCode}`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask":
            "displayName,rating,userRatingCount,reviews,googleMapsUri",
          Referer: REFERER,
          "Accept-Language": languageCode,
        },
        next: { revalidate: 60 * 60 * 6 },
      }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return {
      meta: {
        name: data.displayName?.text ?? "English Solution",
        rating: data.rating ?? null,
        userRatingCount: data.userRatingCount ?? null,
        mapsUri: data.googleMapsUri ?? null,
      },
      reviews: (data.reviews ?? []).map(normalizeNewReview),
    };
  } catch (err) {
    console.error("[google-reviews] new api err:", languageCode, err.message);
    return null;
  }
}

async function callLegacyApi(placeId, apiKey, language = "pt-BR", sort = "newest") {
  try {
    const params = new URLSearchParams({
      place_id: placeId,
      fields: "name,rating,user_ratings_total,reviews,url",
      reviews_sort: sort,
      language,
      key: apiKey,
    });
    const res = await fetch(
      `${LEGACY_PLACE_DETAILS}?${params.toString()}`,
      {
        headers: { Referer: REFERER },
        next: { revalidate: 60 * 60 * 6 },
      }
    );
    if (!res.ok) return null;
    const data = await res.json();
    if (data.status !== "OK" || !data.result) return null;
    const r = data.result;
    return {
      meta: {
        name: r.name ?? "English Solution",
        rating: r.rating ?? null,
        userRatingCount: r.user_ratings_total ?? null,
        mapsUri: r.url ?? null,
      },
      reviews: (r.reviews ?? []).map(normalizeLegacyReview),
    };
  } catch (err) {
    console.error(
      "[google-reviews] legacy api err:",
      language,
      sort,
      err.message
    );
    return null;
  }
}

export async function fetchGoogleReviews() {
  const placeId = process.env.GOOGLE_PLACE_ID;
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!placeId || !apiKey) return null;

  // Multi-chamada: variando endpoint, idioma e ordenação para maximizar
  // o conjunto único de reviews retornados pela API do Google.
  const calls = await Promise.all([
    callNewApi(placeId, apiKey, "pt-BR"),
    callNewApi(placeId, apiKey, "en"),
    callLegacyApi(placeId, apiKey, "pt-BR", "newest"),
    callLegacyApi(placeId, apiKey, "pt-BR", "most_relevant"),
    callLegacyApi(placeId, apiKey, "en", "newest"),
    callLegacyApi(placeId, apiKey, "en", "most_relevant"),
  ]);

  // Pega o metadata do primeiro retorno válido
  const firstValid = calls.find((c) => c && c.meta);
  if (!firstValid) return null;

  const meta = firstValid.meta;

  // Dedup por author+text
  const seen = new Set();
  const merged = [];
  for (const c of calls) {
    if (!c) continue;
    for (const r of c.reviews) {
      const k = dedupKey(r);
      if (!seen.has(k) && r.text && r.text.trim().length > 0) {
        seen.add(k);
        merged.push(r);
      }
    }
  }

  // Ordenar por data de publicação desc (mais recentes primeiro)
  merged.sort((a, b) => {
    const ta = a.publishTime ? new Date(a.publishTime).getTime() : 0;
    const tb = b.publishTime ? new Date(b.publishTime).getTime() : 0;
    return tb - ta;
  });

  return {
    name: meta.name,
    rating: meta.rating,
    userRatingCount: meta.userRatingCount,
    mapsUri: meta.mapsUri,
    reviews: merged,
  };
}
