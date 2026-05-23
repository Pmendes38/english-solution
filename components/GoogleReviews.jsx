import Image from "next/image";
import { reviews as fallbackReviews, contact } from "@/data/site";
import { fetchGoogleReviews } from "@/lib/google-reviews";
import { ASSETS } from "@/lib/assets";
import Reveal from "@/components/motion/Reveal";
import ReviewsMarquee from "@/components/ReviewsMarquee";

function Stars({ count = 5, size = 14 }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill={i < count ? "#E31E24" : "rgba(255,255,255,0.15)"}
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9 4.8 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function shuffleSeeded(arr, seed = 7) {
  const a = [...arr];
  let s = seed;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s / 233280) * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default async function GoogleReviews() {
  const data = await fetchGoogleReviews();
  const isReal = !!data;

  const curated = fallbackReviews.map((r) => ({
    author: r.name,
    photo: null,
    rating: 5,
    text: r.text,
    relativeTime: r.relativeTime ?? r.role,
  }));

  const realReviews = isReal ? data.reviews : [];
  const allReviews = shuffleSeeded([...realReviews, ...curated]);

  const rating = isReal ? data.rating ?? 5.0 : 5.0;
  const count = isReal ? data.userRatingCount ?? 200 : 200;
  const reviewsUrl = isReal && data.mapsUri ? data.mapsUri : contact.googleReviewsUrl;

  return (
    <section id="depoimentos" className="py-16 lg:py-20">
      <div className="container-x">
        <Reveal>
          <div className="relative text-center max-w-3xl mx-auto mb-10">
            <Image
              src={ASSETS.photos.ornamentLeft}
              alt=""
              width={120}
              height={140}
              className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 opacity-80 h-24 w-auto"
              aria-hidden="true"
            />
            <Image
              src={ASSETS.photos.ornamentRight}
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

          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <div className="flex items-center gap-3 bg-[var(--bg-elevated)] border border-white/10 rounded-full px-5 py-2.5">
              <svg width="22" height="22" viewBox="0 0 48 48" aria-hidden="true">
                <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.5 6.1 29.5 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.3-.4-3.5z" />
                <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.5 6.1 29.5 4 24 4 16.3 4 9.7 8.4 6.3 14.7z" />
                <path fill="#4CAF50" d="M24 44c5.4 0 10.3-2 14-5.4l-6.5-5.3C29.6 35 26.9 36 24 36c-5.3 0-9.7-3.1-11.3-7.5l-6.5 5C9.5 39.6 16.2 44 24 44z" />
                <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.3 4.1-4.2 5.4l6.5 5.3C40.6 35.5 44 30.2 44 24c0-1.3-.1-2.3-.4-3.5z" />
              </svg>
              <span className="font-bold text-white">Google</span>
              <span className="font-bold text-white">{rating.toFixed(1)}</span>
              <Stars count={Math.round(rating)} size={14} />
            </div>

            <div className="flex items-center gap-2 bg-[var(--bg-elevated)] border border-white/10 rounded-full px-5 py-2.5">
              <Image src={ASSETS.icons.pessoas} alt="" width={22} height={22} />
              <span className="text-white text-sm">
                <span className="font-bold">Mais de {count}</span> Avaliações
              </span>
            </div>

            <div className="flex items-center gap-2 bg-[var(--bg-elevated)] border border-white/10 rounded-full px-5 py-2.5">
              <Image src={ASSETS.icons.shield} alt="" width={22} height={22} />
              <span className="text-white text-sm">
                <span className="font-bold">Nota máxima</span> em atendimento
              </span>
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
