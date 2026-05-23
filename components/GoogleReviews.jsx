import { reviews as fallbackReviews, contact } from "@/data/site";
import { fetchGoogleReviews } from "@/lib/google-reviews";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill={i < count ? "#FBBC04" : "#E5E7EB"}
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9 4.8 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleG() {
  return (
    <svg width="22" height="22" viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.5 6.1 29.5 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.3-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.7 16 19 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.5 6.1 29.5 4 24 4 16.3 4 9.7 8.4 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.4 0 10.3-2 14-5.4l-6.5-5.3C29.6 35 26.9 36 24 36c-5.3 0-9.7-3.1-11.3-7.5l-6.5 5C9.5 39.6 16.2 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.3 4.1-4.2 5.4l6.5 5.3C40.6 35.5 44 30.2 44 24c0-1.3-.1-2.3-.4-3.5z"
      />
    </svg>
  );
}

function initials(name) {
  if (!name) return "?";
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
}

function avatarColor(name) {
  const colors = [
    "bg-blue-600",
    "bg-emerald-600",
    "bg-rose-600",
    "bg-amber-600",
    "bg-violet-600",
    "bg-sky-600",
    "bg-pink-600",
  ];
  const i =
    name
      ?.split("")
      .reduce((acc, c) => acc + c.charCodeAt(0), 0) % colors.length || 0;
  return colors[i];
}

function ReviewCard({ review }) {
  return (
    <article className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all flex flex-col h-full">
      <div className="flex items-center gap-3">
        {review.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={review.photo}
            alt={review.author}
            className="w-11 h-11 rounded-full object-cover"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div
            className={`w-11 h-11 rounded-full ${avatarColor(
              review.author
            )} text-white flex items-center justify-center font-bold`}
            aria-hidden="true"
          >
            {initials(review.author)}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-brand-navy truncate">
            {review.author}
          </div>
          <div className="flex items-center gap-2 mt-0.5">
            <Stars count={Math.round(review.rating)} />
            <span className="text-xs text-slate-500">
              {review.relativeTime}
            </span>
          </div>
        </div>
        <GoogleG />
      </div>
      <p className="mt-4 text-slate-700 leading-relaxed text-sm whitespace-pre-line line-clamp-[12]">
        {review.text}
      </p>
    </article>
  );
}

export default async function GoogleReviews() {
  const data = await fetchGoogleReviews();
  const isReal = !!data;

  const reviews = isReal
    ? data.reviews
    : fallbackReviews.map((r) => ({
        author: r.name,
        photo: null,
        rating: 5,
        text: r.text,
        relativeTime: r.role,
      }));

  const rating = isReal ? data.rating ?? 5.0 : 5.0;
  const count = isReal ? data.userRatingCount ?? 190 : 190;
  const reviewsUrl = isReal && data.mapsUri ? data.mapsUri : contact.googleReviewsUrl;

  return (
    <section id="depoimentos" className="py-24 bg-white">
      <div className="container-x">
        <Reveal className="text-center mb-12 max-w-3xl mx-auto">
          <span className="eyebrow">Avaliações do Google</span>
          <h2 className="heading-display text-4xl lg:text-5xl mt-4">
            A escola de inglês mais bem avaliada da região.
          </h2>
          <p className="mt-5 text-slate-600 text-lg">
            Avaliações reais de quem viveu a experiência da English Solution —
            diretamente do Google.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-2xl px-5 py-3 shadow-sm">
              <GoogleG />
              <div className="leading-tight text-left">
                <div className="font-bold text-brand-navy">Google Reviews</div>
                <div className="text-sm text-slate-500 flex items-center gap-2">
                  <span className="font-semibold text-brand-navy">
                    {rating.toFixed(1)}
                  </span>
                  <Stars count={Math.round(rating)} />
                  <span>— {count}+ avaliações</span>
                </div>
              </div>
            </div>

            <a
              href={reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Ver avaliações no Google
            </a>
          </div>
        </Reveal>

        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.slice(0, 8).map((r, i) => (
            <StaggerItem key={`${r.author}-${i}`}>
              <ReviewCard review={r} />
            </StaggerItem>
          ))}
        </StaggerGroup>

        {!isReal && (
          <p className="mt-8 text-center text-xs text-slate-400 max-w-2xl mx-auto">
            Configurando integração: defina <code>GOOGLE_PLACES_API_KEY</code>{" "}
            e <code>GOOGLE_PLACE_ID</code> em <code>.env.local</code> para
            exibir as avaliações em tempo real.
          </p>
        )}
      </div>
    </section>
  );
}
