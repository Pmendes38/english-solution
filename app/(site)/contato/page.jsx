import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { contact, schedule } from "@/data/site";
import { ASSETS } from "@/lib/assets";

export const metadata = {
  title: "Contato",
  description:
    "Fale com a English Solution. WhatsApp, telefone, Instagram e endereço da escola em Valparaíso de Goiás.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="FALE COM A GENTE"
        title="Estamos prontos pra te receber."
        description="WhatsApp, telefone ou Instagram: escolha o canal que preferir."
      />

      <section className="py-16 lg:py-24">
        <div className="container-x grid lg:grid-cols-[3fr_2fr] gap-10 items-start">
          <ContactForm />

          <aside className="space-y-4">
            <div className="bg-[var(--bg-elevated)] border border-white/5 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <Image src={ASSETS.icons.whatsapp} alt="" width={28} height={28} />
                <span className="text-xs uppercase tracking-widest font-bold text-[var(--accent)]">WhatsApp</span>
              </div>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold text-lg hover:text-[var(--accent)] transition-colors"
              >
                {contact.phoneDisplay}
              </a>
            </div>

            <div className="bg-[var(--bg-elevated)] border border-white/5 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <Image src={ASSETS.icons.local} alt="" width={28} height={28} />
                <span className="text-xs uppercase tracking-widest font-bold text-[var(--accent)]">Endereço</span>
              </div>
              <div className="text-white font-semibold">{contact.addressLine}</div>
            </div>

            <div className="bg-[var(--bg-elevated)] border border-white/5 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Image src={ASSETS.icons.calendario} alt="" width={28} height={28} />
                <span className="text-xs uppercase tracking-widest font-bold text-[var(--accent)]">Horários</span>
              </div>
              <ul className="space-y-1 text-[var(--text-secondary)] text-sm">
                {schedule.map((s) => (
                  <li key={s.label}>
                    <span className="text-white font-medium">{s.label}:</span> {s.value}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
