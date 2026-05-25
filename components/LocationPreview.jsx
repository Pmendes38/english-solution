import Image from "next/image";
import { contact } from "@/data/site";
import { ASSETS } from "@/lib/assets";
import Reveal from "@/components/motion/Reveal";

export default function LocationPreview() {
  const mapsKey = process.env.GOOGLE_MAPS_EMBED_KEY;
  const embedSrc = mapsKey
    ? `https://www.google.com/maps/embed/v1/place?key=${mapsKey}&q=English+Solution+Valpara%C3%ADso+de+Goi%C3%A1s&zoom=16`
    : null;

  return (
    <section id="localizacao" className="py-16 lg:py-20">
      <div className="container-x grid lg:grid-cols-[696fr_1091fr] gap-6 lg:gap-8 items-stretch">
        <Reveal>
          <div className="glass-panel rounded-2xl p-7 lg:p-8 h-full">
            <span className="eyebrow">VENHA CONHECER A ESCOLA</span>
            <h2 className="heading-display mt-4 text-3xl lg:text-4xl">
              Estamos esperando<br /> por você!
            </h2>

            <div className="mt-7 space-y-4">
              <div className="flex items-start gap-3">
                <Image src={ASSETS.iconsWhite.local} alt="" width={24} height={24} className="h-6 w-auto mt-1 flex-shrink-0" />
                <div className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  Ed. Bulgainville centro - Etapa A,<br />
                  Quadra 06, Lote 2, Sala 202 -<br />
                  Valparaizo I, Valparaíso de Goiás -<br />
                  GO, 72876-640
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Image src={ASSETS.icons.telefone} alt="" width={24} height={24} className="h-6 w-auto flex-shrink-0" />
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
                <Image src={ASSETS.iconsWhite.whatsapp} alt="" width={24} height={24} className="h-6 w-auto flex-shrink-0" />
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
          <div className="backdrop-blur-md bg-white/[0.04] border border-white/10 rounded-2xl overflow-hidden h-full min-h-[420px] relative">
            {embedSrc ? (
              <iframe
                src={embedSrc}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "420px", filter: "invert(90%) hue-rotate(180deg) saturate(0.8)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização English Solution"
                className="absolute inset-0 w-full h-full"
              />
            ) : (
              <iframe
                src={`https://maps.google.com/maps?q=English+Solution+Valpara%C3%ADso+de+Goi%C3%A1s&output=embed&z=16`}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "420px", filter: "invert(90%) hue-rotate(180deg) saturate(0.8)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização English Solution"
                className="absolute inset-0 w-full h-full"
              />
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
