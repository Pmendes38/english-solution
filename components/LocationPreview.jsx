import Image from "next/image";
import Link from "next/link";
import { contact } from "@/data/site";
import { ASSETS } from "@/lib/assets";
import Reveal from "@/components/motion/Reveal";

export default function LocationPreview() {
  return (
    <section id="localizacao" className="py-16 lg:py-20">
      <div className="container-x grid lg:grid-cols-[696fr_1091fr] gap-6 lg:gap-8 items-stretch">
        <Reveal>
          <div className="bg-[var(--bg-elevated)] border border-white/5 rounded-2xl p-7 lg:p-8 h-full">
            <span className="eyebrow">VENHA CONHECER A ESCOLA</span>
            <h2 className="heading-display mt-4 text-3xl lg:text-4xl">
              Estamos esperando<br /> por você!
            </h2>

            <div className="mt-7 space-y-4">
              <div className="flex items-start gap-3">
                <Image src={ASSETS.iconsWhite.local} alt="" width={24} height={24} className="mt-1 flex-shrink-0" />
                <div className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  Ed. Bulgainville centro - Etapa A,<br />
                  Quadra 06, Lote 2, Sala 202 -<br />
                  Valparaizo I, Valparaíso de Goiás -<br />
                  GO, 72876-640
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Image src={ASSETS.icons.telefone} alt="" width={24} height={24} className="flex-shrink-0" />
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-secondary)] text-sm hover:text-white"
                >
                  {contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Image src={ASSETS.iconsWhite.whatsapp} alt="" width={24} height={24} className="flex-shrink-0" />
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-secondary)] text-sm hover:text-white"
                >
                  Fale no WhatsApp
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                Agendar Aula
              </a>
              <a
                href={contact.mapsQuery}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
              >
                Como chegar
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="bg-[var(--bg-elevated)] border border-white/5 rounded-2xl overflow-hidden h-full min-h-[420px] relative">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(120,160,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(120,160,255,0.08) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-gradient-to-br from-[var(--bg-elevated)]/40 to-[var(--brand-blue)]/30"
              aria-hidden="true"
            />

            <div className="absolute top-5 left-5 right-5 z-10 bg-white rounded-xl p-4 shadow-2xl max-w-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="font-bold text-[var(--brand-gray-dark)] text-sm leading-tight">
                    English Solution Valparaíso
                  </div>
                  <p className="text-[var(--brand-gray-dark)]/60 text-xs mt-1 leading-snug">
                    Ed. Bulgainville centro - Etapa A, Quadra 06, Lote 2, Sala 202 -
                    Valparaizo I, Valparaíso de Goiás - GO, 72876-640, Brasil
                  </p>
                  <div className="flex items-center gap-1 mt-2">
                    <span className="text-[var(--brand-gray-dark)] font-bold text-xs">5.0</span>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} width="11" height="11" viewBox="0 0 20 20" fill="#FBBC04" aria-hidden="true">
                        <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9 4.8 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                      </svg>
                    ))}
                    <span className="text-[var(--brand-gray-dark)]/60 text-xs ml-1">(200)</span>
                  </div>
                </div>
                <a
                  href={contact.mapsQuery}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir no Google Maps"
                  className="w-7 h-7 rounded-full bg-[var(--brand-blue)] text-white flex items-center justify-center flex-shrink-0"
                >
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 11l8-8M11 3H5M11 3v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-10 h-10 rounded-full bg-[var(--accent)] flex items-center justify-center shadow-2xl ring-4 ring-white/20">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                </svg>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
