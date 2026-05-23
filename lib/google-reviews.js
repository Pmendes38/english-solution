const NEW_PLACES_ENDPOINT = "https://places.googleapis.com/v1/places";
const LEGACY_PLACE_DETAILS = "https://maps.googleapis.com/maps/api/place/details/json";

function normalizeNewReview(r) {
  return {
    author: r.authorAttribution?.displayName ?? "Aluno",
    photo: r.authorAttribution?.photoUri ?? null,
    rating: r.rating ?? 5,
    text: r.originalText?.text ?? r.text?.text ?? "",
    relativeTime: r.relativePublishTimeDescription ?? "",
  };
}

function normalizeLegacyReview(r) {
  return {
    author: r.author_name ?? "Aluno",
    photo: r.profile_photo_url ?? null,
    rating: r.rating ?? 5,
    text: r.text ?? "",
    relativeTime: r.relative_time_description ?? "",
  };
}

async function tryNewApi(placeId, apiKey) {
  const res = await fetch(`${NEW_PLACES_ENDPOINT}/${placeId}`, {
    headers: {
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask":
        "displayName,rating,userRatingCount,reviews,googleMapsUri",
    },
    next: { revalidate: 60 * 60 * 6 },
  });
  if (!res.ok) return null;
  const data = await res.json();
  return {
    name: data.displayName?.text ?? "English Solution",
    rating: data.rating ?? null,
    userRatingCount: data.userRatingCount ?? null,
    mapsUri: data.googleMapsUri ?? null,
    reviews: (data.reviews ?? []).map(normalizeNewReview),
  };
}

async function tryLegacyApi(placeId, apiKey) {
  const params = new URLSearchParams({
    place_id: placeId,
    fields: "name,rating,user_ratings_total,reviews,url",
    reviews_sort: "newest",
    language: "pt-BR",
    key: apiKey,
  });
  const res = await fetch(`${LEGACY_PLACE_DETAILS}?${params.toString()}`, {
    next: { revalidate: 60 * 60 * 6 },
  });
  if (!res.ok) return null;
  const data = await res.json();
  if (data.status !== "OK" || !data.result) return null;
  const r = data.result;
  return {
    name: r.name ?? "English Solution",
    rating: r.rating ?? null,
    userRatingCount: r.user_ratings_total ?? null,
    mapsUri: r.url ?? null,
    reviews: (r.reviews ?? []).map(normalizeLegacyReview),
  };
}

export async function fetchGoogleReviews() {
  const placeId = process.env.GOOGLE_PLACE_ID;
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!placeId || !apiKey) return null;

  try {
    const fromNew = await tryNewApi(placeId, apiKey);
    if (fromNew && fromNew.reviews.length > 0) return fromNew;

    const fromLegacy = await tryLegacyApi(placeId, apiKey);
    if (fromLegacy) return fromLegacy;

    return null;
  } catch (err) {
    console.error("[google-reviews] fetch error:", err);
    return null;
  }
}
