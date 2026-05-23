const PLACES_ENDPOINT = "https://places.googleapis.com/v1/places";

function timeAgo(unixSeconds) {
  if (!unixSeconds) return "";
  const now = Date.now();
  const diff = now - unixSeconds * 1000;
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);
  if (years > 0) return `há ${years} ${years === 1 ? "ano" : "anos"}`;
  if (months > 0) return `há ${months} ${months === 1 ? "mês" : "meses"}`;
  if (days > 0) return `há ${days} ${days === 1 ? "dia" : "dias"}`;
  if (hours > 0) return `há ${hours} h`;
  if (minutes > 0) return `há ${minutes} min`;
  return "agora";
}

export async function fetchGoogleReviews() {
  const placeId = process.env.GOOGLE_PLACE_ID;
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!placeId || !apiKey) return null;

  try {
    const res = await fetch(`${PLACES_ENDPOINT}/${placeId}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask":
          "displayName,rating,userRatingCount,reviews,googleMapsUri",
      },
      next: { revalidate: 60 * 60 * 6 },
    });
    if (!res.ok) {
      console.error(
        "[google-reviews] Places API request failed:",
        res.status,
        await res.text()
      );
      return null;
    }
    const data = await res.json();
    return {
      name: data.displayName?.text ?? "English Solution",
      rating: data.rating ?? null,
      userRatingCount: data.userRatingCount ?? null,
      mapsUri: data.googleMapsUri ?? null,
      reviews: (data.reviews ?? []).map((r) => ({
        author: r.authorAttribution?.displayName ?? "Aluno",
        photo: r.authorAttribution?.photoUri ?? null,
        rating: r.rating ?? 5,
        text: r.originalText?.text ?? r.text?.text ?? "",
        relativeTime:
          r.relativePublishTimeDescription ?? timeAgo(r.publishTime?.seconds),
      })),
    };
  } catch (err) {
    console.error("[google-reviews] fetch error:", err);
    return null;
  }
}
