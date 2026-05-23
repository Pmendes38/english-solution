import Image from "next/image";
import { ASSETS } from "@/lib/assets";
import Reveal from "@/components/motion/Reveal";

export default function FeaturedTestimonial() {
  return (
    <section className="py-12 lg:py-20">
      <div className="container-x">
        <Reveal>
          <div className="bg-[var(--bg-elevated)] border border-white/5 rounded-3xl overflow-hidden grid lg:grid-cols-[1.4fr_1fr] gap-0">
            <div className="p-8 lg:p-14 relative">
              <span
                aria-hidden="true"
                className="absolute top-6 left-8 text-[var(--accent)] font-serif text-[140px] leading-none opacity-40 select-none"
              >
                “
              </span>
              <div className="relative pt-16 lg:pt-20">
                <p className="font-serif text-2xl lg:text-3xl text-white leading-snug">
                  A metodologia da English Solution fez eu destravar meu
                  inglês e abrir portas que antes pareciam distantes.
                </p>
                <div className="mt-8">
                  <div className="font-bold text-white">Lucas Andrade</div>
                  <div className="text-sm text-[var(--accent)] font-semibold">
                    Aluno English Solution
                  </div>
                </div>
              </div>
            </div>

            <div className="relative min-h-[320px] lg:min-h-0">
              <Image
                src={ASSETS.photos.depoimentos[0]}
                alt="Lucas Andrade, aluno da English Solution"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[var(--bg-elevated)]/30" />

              <button
                type="button"
                className="absolute bottom-6 left-6 flex items-center gap-3 text-white"
                aria-label="Assista ao depoimento"
              >
                <span className="w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center shadow-2xl">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
                    <path d="M3 2l9 5-9 5V2z" />
                  </svg>
                </span>
                <span className="text-sm font-semibold">
                  Assista ao depoimento
                </span>
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
