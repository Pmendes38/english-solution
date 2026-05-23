import Image from "next/image";
import Link from "next/link";
import { contact, schedule } from "@/data/site";
import { ASSETS } from "@/lib/assets";
import Reveal from "@/components/motion/Reveal";

export default function LocationPreview() {
  return (
    <section id="localizacao" className="py-20 lg:py-28">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-stretch">
        <Reveal>
          <div className="bg-[var(--bg-elevated)] border border-white/5 rounded-2xl p-8 lg:p-10 h-full">
            <span className="eyebrow">VENHA CONHECER A ESCOLA</span>
            <h2 className="heading-display mt-5 text-3xl lg:text-4xl">
              Estamos esperando por você!
            </h2>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-3">
                <Image src={ASSETS.icons.local} alt="" width={28} height={28} className="mt-1" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-[var(--accent)] font-bold">Endereço</div>
                  <div className="text-white font-semibold mt-1">{contact.addressLine}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Image src={ASSETS.icons.whatsapp} alt="" width={28} height={28} className="mt-1" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-[var(--accent)] font-bold">WhatsApp</div>
                  <a
                    href={contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold hover:text-[var(--accent)] mt-1 inline-block"
                  >
                    {contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Image src={ASSETS.icons.calendario} alt="" width={28} height={28} className="mt-1" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-[var(--accent)] font-bold">Horários</div>
                  <ul className="text-[var(--text-secondary)] text-sm mt-1 space-y-0.5">
                    {schedule.map((s) => (
                      <li key={s.label}>
                        <span className="text-white">{s.label}:</span> {s.value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-9">
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                Agendar visita
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
          <div className="rounded-2xl overflow-hidden border border-white/10 h-full min-h-[420px]">
            <iframe
              src={contact.mapsEmbedSrc}
              title="Localização da English Solution"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
