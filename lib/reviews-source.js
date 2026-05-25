import { fetchGoogleReviews } from "@/lib/google-reviews";
import { fetchBusinessProfileReviews } from "@/lib/google-business-profile";

/**
 * Orchestrator de fontes de reviews:
 *   1. Tenta Business Profile API (todos os reviews, requer OAuth)
 *   2. Cai para Places API multi-chamada (até ~8-10 únicos)
 *   3. Se ambos falharem, retorna null
 *
 * Sempre retorna apenas reviews REAIS do Google — nunca curados.
 */
export async function fetchAllReviews() {
  // 1. Business Profile (preferido — sem limite de 5)
  const gbp = await fetchBusinessProfileReviews();
  if (gbp && Array.isArray(gbp.reviews) && gbp.reviews.length > 0) {
    return {
      source: "gbp",
      rating: gbp.averageRating ?? null,
      userRatingCount: gbp.totalReviewCount ?? null,
      mapsUri: null,
      reviews: gbp.reviews,
    };
  }

  // 2. Places API (multi-chamada com dedup)
  const places = await fetchGoogleReviews();
  if (places && Array.isArray(places.reviews) && places.reviews.length > 0) {
    return {
      source: "places",
      rating: places.rating,
      userRatingCount: places.userRatingCount,
      mapsUri: places.mapsUri,
      reviews: places.reviews,
    };
  }

  return null;
}
