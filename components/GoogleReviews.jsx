import Image from "next/image";
import { contact } from "@/data/site";
import { fetchAllReviews } from "@/lib/reviews-source";
import { extraReviews } from "@/data/extra-reviews";
import { ASSETS } from "@/lib/assets";
import Reveal from "@/components/motion/Reveal";
import ReviewsMarquee from "@/components/ReviewsMarquee";

function dedupKey(r) {
  const text = (r.text || "").replace(/\s+/g, "").slice(0, 60).toLowerCase();
  return `${(r.author || "").toLowerCase()}|${text}`;
}

function mergeUniqueReviews(...lists) {
  const seen = new Set();
  const out = [];
  for (const list of lists) {
    if (!Array.isArray(list)) continue;
    for (const r of list) {
      const k = dedupKey(r);
      if (!seen.has(k) && r && r.text && r.text.trim().length > 0) {
        seen.add(k);
        out.push({ photo: null, rating: 5, relativeTime: "", ...r });
      }
    }
  }
  return out;
}

function Stars({ count = 5, size = 14 }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill={i < count ? "#F8A702" : "rgba(255,255,255,0.15)"}
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9 4.8 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default async function GoogleReviews() {
  const data = await fetchAllReviews();
  const apiReviews = data?.reviews ?? [];

  // Mescla reviews reais da API com extras verificados (copiados
  // manualmente do Google Maps). Dedup automático por autor+texto.
  const allReviews = mergeUniqueReviews(apiReviews, extraReviews);

  const rating = data?.rating ?? 5.0;
  const count = data?.userRatingCount ?? 200;
  const reviewsUrl = data?.mapsUri ?? contact.googleReviewsUrl;

  return (
    <section id="depoimentos" className="py-16 lg:py-20">
      <div className="container-x">
        <Reveal>
          <div className="relative text-center max-w-3xl mx-auto mb-10">
            <Image
              src={ASSETS.photos.ornamentRight}
              alt=""
              width={120}
              height={140}
              className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 opacity-80 h-24 w-auto scale-x-[-1]"
              aria-hidden="true"
            />
            <Image
              src={ASSETS.photos.ornamentLeft}
              alt=""
              width={120}
              height={140}
              className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 opacity-80 h-24 w-auto scale-x-[-1]"
              aria-hidden="true"
            />
            <h2 className="heading-display text-3xl lg:text-4xl px-12 sm:px-20">
              A escola de inglês mais bem avaliada da região
            </h2>
            <p className="mt-4 text-[var(--text-secondary)] text-sm">
              Avaliações de quem já vive a experiência da English School
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <div className="flex items-center gap-3 border border-white/[0.12] rounded-2xl px-6 py-4 min-h-[80px]" style={{background:"linear-gradient(to bottom,#001f56,#000e25)"}}>
              <svg width="40" height="40" viewBox="0 0 48 48" aria-hidden="true">
                <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.5 6.1 29.5 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.3-.4-3.5z" />
                <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.5 6.1 29.5 4 24 4 16.3 4 9.7 8.4 6.3 14.7z" />
                <path fill="#4CAF50" d="M24 44c5.4 0 10.3-2 14-5.4l-6.5-5.3C29.6 35 26.9 36 24 36c-5.3 0-9.7-3.1-11.3-7.5l-6.5 5C9.5 39.6 16.2 44 24 44z" />
                <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.3 4.1-4.2 5.4l6.5 5.3C40.6 35.5 44 30.2 44 24c0-1.3-.1-2.3-.4-3.5z" />
              </svg>
              <div className="text-left">
                <div className="font-bold text-white text-sm leading-none">Google</div>
                <div className="flex items-center gap-2 mt-1.5">
                  <Stars count={Math.round(rating)} size={14} />
                  <span className="font-bold text-white">{rating.toFixed(1)}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 border border-white/[0.12] rounded-2xl px-6 py-4 min-h-[80px]" style={{background:"linear-gradient(to bottom,#001f56,#000e25)"}}>
              <Image src={ASSETS.iconsWhite.estrela} alt="" width={42} height={42} className="h-[42px] w-auto" />
              <div className="text-left leading-tight">
                <div className="font-bold text-white text-base">Mais de {count}</div>
                <div className="text-[var(--text-secondary)] text-xs mt-0.5">Avaliações</div>
              </div>
            </div>

            <div className="flex items-center gap-3 border border-white/[0.12] rounded-2xl px-6 py-4 min-h-[80px]" style={{background:"linear-gradient(to bottom,#001f56,#000e25)"}}>
              <Image src={ASSETS.iconsWhite.alvo} alt="" width={42} height={42} className="h-[42px] w-auto" />
              <div className="text-left leading-tight">
                <div className="font-bold text-white text-base">Nota máxima</div>
                <div className="text-[var(--text-secondary)] text-xs mt-0.5">em atendimento</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <ReviewsMarquee reviews={allReviews} />

      <div className="container-x mt-8 text-center">
        <a
          href={reviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          Ver no Google →
        </a>
      </div>
    </section>
  );
}
