import Image from "next/image";
import { contact } from "@/data/site";
import { ASSETS } from "@/lib/assets";
import Reveal from "@/components/motion/Reveal";

export default function CTA() {
  return (
    <section id="agendar" className="pb-12 lg:pb-20 pt-0 lg:pt-[120px] overflow-hidden">
      <div className="container-x relative">

        {/* Subtle blue ambient — stays contained */}
        <div className="absolute -inset-x-20 top-0 bottom-0 bg-[var(--brand-blue)] rounded-full blur-[160px] opacity-[0.12] pointer-events-none" />
        {/* Pessoa fora do Reveal para não ser presa no stacking context da animação */}
        <div className="hidden lg:block absolute right-0 bottom-0 z-50 pointer-events-none w-[700px] xl:w-[820px]">
          <Image
            src={ASSETS.photos.ctaFinalAluno}
            alt="Aluno English Solution"
            width={810}
            height={836}
            className="w-full h-auto"
            priority={false}
          />
        </div>

        <Reveal>
          <div className="relative rounded-3xl border border-white/[0.12] overflow-hidden shadow-[0_0_80px_rgba(227,30,36,0.12)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ASSETS.photos.bgCta}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-6 items-center px-8 lg:px-16 py-12 lg:py-16 min-h-[280px] lg:min-h-[380px]">
              <div className="z-10">
                <span className="inline-flex items-center gap-3 uppercase tracking-[0.16em] text-[12px] font-semibold text-white before:content-[''] before:inline-block before:w-[3px] before:h-3 before:bg-[var(--accent)] before:rounded-sm">
                  SUA NOVA HISTÓRIA COMEÇA AGORA
                </span>
                <h2 className="heading-display mt-5 text-3xl lg:text-5xl">
                  Seu inglês começa agora.
                </h2>
                <p className="mt-5 text-white/80 max-w-xl leading-relaxed text-base lg:text-lg">
                  Agende sua aula experimental gratuita e descubra o método que vai transformar
                  seu futuro com o inglês.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mt-7">
                  <a
                    href={contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Agendar Aula Experimental
                  </a>
                  <a
                    href={contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    Falar no WhatsApp
                  </a>
                </div>
              </div>

              <div className="hidden lg:block" />
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
