import Image from "next/image";
import { contact } from "@/data/site";
import { ASSETS } from "@/lib/assets";
import Reveal from "@/components/motion/Reveal";

export default function CTA() {
  return (
    <section id="agendar" className="py-12 lg:py-16">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/5 min-h-[300px] lg:min-h-[360px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ASSETS.photos.bgCta}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-6 items-end px-8 lg:px-14 py-12 lg:py-14">
              <div>
                <span className="inline-flex items-center gap-3 uppercase tracking-[0.16em] text-[12px] font-semibold text-white before:content-[''] before:inline-block before:w-[3px] before:h-3 before:bg-[var(--accent)] before:rounded-sm">
                  SUA NOVA HISTÓRIA COMEÇA AGORA
                </span>
                <h2 className="heading-display mt-5 text-3xl lg:text-5xl">
                  Seu inglês começa agora.
                </h2>
                <p className="mt-5 text-white/80 max-w-xl leading-relaxed">
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

              <div className="relative hidden lg:block h-[360px]">
                <Image
                  src={ASSETS.photos.ctaFinalAluno}
                  alt="Aluno English Solution"
                  fill
                  className="object-contain object-bottom"
                  sizes="500px"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
