/**
 * Google Business Profile API — leitura de reviews.
 *
 * Diferente da Places API (limitada a 5 reviews), a Business Profile API
 * retorna TODOS os reviews do business com paginação real, mas requer:
 *   1. Acesso aprovado: https://developers.google.com/my-business/content/prereqs
 *   2. Ser admin verificado do business no Google Business Profile
 *   3. OAuth 2.0 com refresh_token (gerado uma vez via OAuth Playground)
 *
 * Env vars necessárias (configure no .env e no Vercel):
 *   GBP_CLIENT_ID         — OAuth Client ID (Cloud Console > Credentials)
 *   GBP_CLIENT_SECRET     — OAuth Client Secret
 *   GBP_REFRESH_TOKEN     — Refresh token gerado via OAuth Playground
 *   GBP_ACCOUNT_ID        — accounts/{id} do GBP (string como "accounts/12345678901234567890")
 *   GBP_LOCATION_ID       — locations/{id} do GBP (string como "locations/9876543210987654321")
 *
 * Como pegar accountId / locationId após autenticado:
 *   GET https://mybusinessaccountmanagement.googleapis.com/v1/accounts
 *   GET https://mybusinessbusinessinformation.googleapis.com/v1/{accountId}/locations
 *
 * O fluxo aqui só funciona quando todas as 5 env vars estão presentes.
 * Caso contrário retorna null e o orchestrator cai pra Places API.
 */

const TOKEN_URL = "https://oauth2.googleapis.com/token";
const REVIEWS_BASE = "https://mybusiness.googleapis.com/v4";

let cachedToken = null;
let cachedTokenExpires = 0;

async function getAccessToken() {
  const clientId = process.env.GBP_CLIENT_ID;
  const clientSecret = process.env.GBP_CLIENT_SECRET;
  const refreshToken = process.env.GBP_REFRESH_TOKEN;
  if (!clientId || !clientSecret || !refreshToken) return null;

  // Reusa o access_token se ainda válido (válidos por ~1h)
  const now = Date.now();
  if (cachedToken && now < cachedTokenExpires) return cachedToken;

  const body = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    refresh_token: refreshToken,
    grant_type: "refresh_token",
  });

  try {
    const res = await fetch(TOKEN_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
    if (!res.ok) {
      console.error("[gbp] token exchange failed:", res.status);
      return null;
    }
    const json = await res.json();
    cachedToken = json.access_token;
    cachedTokenExpires = now + (json.expires_in - 60) * 1000;
    return cachedToken;
  } catch (err) {
    console.error("[gbp] token exchange error:", err.message);
    return null;
  }
}

function normalizeGbpReview(r) {
  // Star rating no GBP é enum: ONE, TWO, THREE, FOUR, FIVE
  const ratingMap = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5 };
  return {
    author: r.reviewer?.displayName ?? "Aluno",
    photo: r.reviewer?.profilePhotoUrl ?? null,
    rating: ratingMap[r.starRating] ?? 5,
    text: r.comment ?? "",
    relativeTime: "", // GBP retorna ISO timestamp; cálculo relativo no client
    publishTime: r.createTime ?? null,
  };
}

export async function fetchBusinessProfileReviews({ pageSize = 50 } = {}) {
  const accountId = process.env.GBP_ACCOUNT_ID;
  const locationId = process.env.GBP_LOCATION_ID;
  if (!accountId || !locationId) return null;

  const accessToken = await getAccessToken();
  if (!accessToken) return null;

  const all = [];
  let pageToken = undefined;

  try {
    for (let i = 0; i < 6; i++) {
      // até 6 páginas (300 reviews); ajusta conforme volume
      const url = new URL(
        `${REVIEWS_BASE}/${accountId}/${locationId}/reviews`
      );
      url.searchParams.set("pageSize", String(pageSize));
      if (pageToken) url.searchParams.set("pageToken", pageToken);

      const res = await fetch(url, {
        headers: { Authorization: `Bearer ${accessToken}` },
        next: { revalidate: 60 * 60 * 6 },
      });
      if (!res.ok) {
        console.error(
          "[gbp] reviews fetch failed:",
          res.status,
          await res.text().catch(() => "")
        );
        break;
      }
      const json = await res.json();
      for (const r of json.reviews ?? []) all.push(normalizeGbpReview(r));

      pageToken = json.nextPageToken;
      if (!pageToken) break;
    }

    return {
      averageRating: null, // GBP retorna em endpoint separado se precisar
      totalReviewCount: all.length,
      reviews: all,
    };
  } catch (err) {
    console.error("[gbp] fetch error:", err.message);
    return null;
  }
}
