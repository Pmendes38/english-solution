import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { contact, schedule } from "@/data/site";
import { ASSETS } from "@/lib/assets";

export const metadata = {
  title: "Localização",
  description:
    "Onde fica a English Solution em Valparaíso de Goiás. Endereço, horários e contato.",
};

const infoCards = [
  {
    icon: ASSETS.iconsWhite.local,
    label: "Endereço",
    value: contact.addressLine,
  },
  {
    icon: ASSETS.iconsWhite.estrela,
    label: "Horários",
    value: schedule.map((s) => `${s.label}: ${s.value}`).join(" · "),
  },
  {
    icon: ASSETS.iconsWhite.whatsapp,
    label: "Contato direto",
    value: contact.phoneDisplay,
    href: contact.whatsapp,
  },
];

export default function LocationPage() {
  return (
    <>
      <PageHeader
        eyebrow="LOCALIZAÇÃO"
        title="Venha conhecer a escola."
        description="Estamos em Valparaíso de Goiás. Ambiente acolhedor pensado para o aluno se sentir em casa."
      />

      <section className="py-16 lg:py-20">
        <div className="container-x">
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {infoCards.map((c) => (
              <div key={c.label} className="glass-panel p-6">
                <Image src={c.icon} alt="" width={36} height={36} className="h-9 w-auto mb-4" />
                <div className="text-xs uppercase tracking-widest font-bold text-[var(--accent)]">
                  {c.label}
                </div>
                {c.href ? (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-2 text-white font-semibold hover:text-[var(--accent)] transition-colors"
                  >
                    {c.value}
                  </a>
                ) : (
                  <div className="mt-2 text-white font-semibold">{c.value}</div>
                )}
              </div>
            ))}
          </div>

          <div className="rounded-3xl overflow-hidden border border-white/10">
            <iframe
              src={contact.mapsEmbedSrc}
              title="Localização da English Solution"
              className="w-full h-[480px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="grid sm:grid-cols-3 gap-5 mt-12">
            {ASSETS.photos.comunidade.map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={src}
                src={src}
                alt={`Ambiente English Solution ${i + 1}`}
                className="w-full aspect-[4/5] object-cover object-center rounded-2xl border border-white/5"
              />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
