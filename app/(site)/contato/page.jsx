import Image from "next/image";
import PageHeader from "@/components/PageHeader";
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
          <form className="bg-[var(--bg-elevated)] border border-white/5 rounded-3xl p-8 lg:p-10 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm font-semibold text-white mb-2 block">Nome</span>
                <input type="text" name="name" className="input-dark w-full" placeholder="Seu nome completo" />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-white mb-2 block">WhatsApp</span>
                <input type="tel" name="phone" className="input-dark w-full" placeholder="(61) 99999-9999" />
              </label>
            </div>

            <label className="block">
              <span className="text-sm font-semibold text-white mb-2 block">E-mail</span>
              <input type="email" name="email" className="input-dark w-full" placeholder="seu@email.com" />
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-white mb-2 block">Qual seu objetivo?</span>
              <select name="goal" className="input-dark w-full" defaultValue="">
                <option value="" disabled>Selecione…</option>
                <option>Aula experimental</option>
                <option>Curso para mim</option>
                <option>Curso para meu time / empresa</option>
                <option>Outro</option>
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-white mb-2 block">Mensagem</span>
              <textarea name="message" rows={4} className="input-dark w-full resize-none" placeholder="Conta um pouco sobre o que você procura…" />
            </label>

            <p className="text-xs text-[var(--text-muted)]">
              Ao enviar, você concorda em receber retorno pelos canais informados.
            </p>

            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center"
            >
              Enviar mensagem
            </a>
          </form>

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
