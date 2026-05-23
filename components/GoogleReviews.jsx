import { reviews, contact } from "@/data/site";

const GOOGLE_REVIEWS_EMBED = process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_EMBED || "";

export default function GoogleReviews() {
  return (
    <section id="depoimentos" className="py-24 bg-white">
      <div className="container-x">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="eyebrow">Avaliações do Google</span>
          <h2 className="heading-display text-4xl lg:text-5xl mt-4">
            A escola de inglês mais bem avaliada da região.
          </h2>
          <p className="mt-5 text-slate-600 text-lg">
            5.0 no Google com mais de 190 avaliações reais — pessoas reais
            falando da experiência delas com a English Solution.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-2xl px-5 py-3 shadow-sm">
              <svg
                width="28"
                height="28"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
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
              <div className="leading-tight text-left">
                <div className="font-bold text-brand-navy">Google Reviews</div>
                <div className="text-sm text-slate-500">
                  5.0 ★★★★★ — 190+ avaliações
                </div>
              </div>
            </div>

            <a
              href={contact.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Ver avaliações no Google
            </a>
          </div>
        </div>

        {GOOGLE_REVIEWS_EMBED ? (
          <div
            className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm"
            dangerouslySetInnerHTML={{ __html: GOOGLE_REVIEWS_EMBED }}
          />
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="bg-brand-cream/60 border border-slate-200 rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all flex flex-col"
              >
                <div
                  className="text-yellow-500 text-xl mb-4"
                  aria-label="5 estrelas"
                >
                  ★★★★★
                </div>
                <p className="text-slate-700 leading-relaxed flex-1">
                  “{review.text}”
                </p>
                <div className="mt-6 pt-4 border-t border-slate-200">
                  <div className="font-bold text-brand-navy">
                    {review.name}
                  </div>
                  <div className="text-sm text-slate-500">{review.role}</div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
