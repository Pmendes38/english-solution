import Image from "next/image";
import { contact } from "@/data/site";
import { ASSETS } from "@/lib/assets";
import Reveal from "@/components/motion/Reveal";

export default function CTA() {
  return (
    <section id="agendar" className="py-12 lg:py-20">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden bg-gradient-to-br from-[var(--bg-elevated)] via-[var(--brand-blue)] to-[var(--bg-base)] rounded-3xl border border-white/5">
            {/* ornamentos */}
            <div className="absolute -top-32 -left-32 w-72 h-72 bg-[var(--accent)] rounded-full blur-3xl opacity-20 pointer-events-none" />
            <Image
              src={ASSETS.icons.rede}
              alt=""
              width={400}
              height={400}
              aria-hidden="true"
              className="absolute top-4 left-1/3 opacity-[0.06] pointer-events-none"
            />

            <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-8 items-end p-8 lg:p-14 min-h-[400px]">
              <div className="z-10">
                <span className="eyebrow">SUA NOVA HISTÓRIA COMEÇA AGORA</span>
                <h2 className="heading-display mt-5 text-4xl lg:text-6xl">
                  Seu inglês começa agora.
                </h2>
                <p className="mt-6 text-[var(--text-secondary)] text-lg leading-relaxed max-w-xl">
                  Comece hoje com uma aula experimental gratuita. Sem
                  compromisso. 100% online ou presencial.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-9">
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
                    <Image
                      src={ASSETS.icons.whatsapp}
                      alt=""
                      width={18}
                      height={18}
                    />
                    Falar no WhatsApp
                  </a>
                </div>

                <div className="flex items-center gap-3 mt-7">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-white/20 to-white/5 border-2 border-[var(--bg-elevated)] flex items-center justify-center text-[10px] font-bold text-white"
                      >
                        {i}
                      </div>
                    ))}
                  </div>
                  <span className="text-[var(--text-secondary)] text-sm">
                    +200 pessoas agendaram essa semana
                  </span>
                </div>
              </div>

              <div className="relative hidden lg:block h-[420px]">
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
