import Image from "next/image";
import Link from "next/link";
import { contact, schedule } from "@/data/site";
import { ASSETS } from "@/lib/assets";
import CertificationsStrip from "@/components/CertificationsStrip";

const featuredFooterCourses = [
  { slug: "intensivo-de-ferias", label: "Intensivo de Férias" },
  { slug: "business-english", label: "Business English" },
  { slug: "curso-online", label: "Curso Online" },
  { slug: "ingles-para-empresas", label: "Inglês para Empresas" },
  { slug: "aulas-particulares", label: "Aulas Particulares" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-base)] border-t border-white/5">
      <div className="container-x py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Image
            src={ASSETS.logo}
            alt="English Solution"
            width={400}
            height={113}
            className="h-10 w-auto mb-5"
          />
          <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-xs">
            Inglês que transforma. Resultados que te levam mais longe.
          </p>
          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex w-10 h-10 rounded-full border border-white/10 hover:border-white/30 items-center justify-center text-[var(--text-secondary)] hover:text-white transition-colors mt-5"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.3-1-.4-2.2-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.3 2.2-.4 1.2-.1 1.6-.1 4.8-.1zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.2-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1zM12 7.4a4.6 4.6 0 110 9.2 4.6 4.6 0 010-9.2zm0 7.6a3 3 0 100-6 3 3 0 000 6zm5-7.8a1.1 1.1 0 110 2.2 1.1 1.1 0 010-2.2z" />
            </svg>
          </a>
        </div>

        <div>
          <h4 className="font-semibold text-white text-xs uppercase tracking-widest mb-5">Institucional</h4>
          <ul className="space-y-3 text-[var(--text-secondary)] text-sm">
            <li><Link href="/metodologia" className="hover:text-white transition-colors">Metodologia</Link></li>
            <li><Link href="/diferenciais" className="hover:text-white transition-colors">Diferenciais</Link></li>
            <li><Link href="/certificacoes" className="hover:text-white transition-colors">Certificações</Link></li>
            <li><Link href="/depoimentos" className="hover:text-white transition-colors">Depoimentos</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link href="/duvidas" className="hover:text-white transition-colors">Dúvidas</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white text-xs uppercase tracking-widest mb-5">Cursos</h4>
          <ul className="space-y-3 text-[var(--text-secondary)] text-sm">
            {featuredFooterCourses.map((c) => (
              <li key={c.slug}>
                <Link href={`/cursos/${c.slug}`} className="hover:text-white transition-colors">
                  {c.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/cursos" className="text-[var(--accent)] font-semibold hover:text-white transition-colors">
                Todos os cursos →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white text-xs uppercase tracking-widest mb-5">Contato</h4>
          <ul className="space-y-3 text-[var(--text-secondary)] text-sm">
            <li>{contact.city}</li>
            <li>
              <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                {contact.instagramHandle}
              </a>
            </li>
          </ul>

          <h4 className="font-semibold text-white text-xs uppercase tracking-widest mt-7 mb-3">Horários</h4>
          <ul className="space-y-1.5 text-[var(--text-secondary)] text-sm">
            {schedule.map((s) => (
              <li key={s.label}>
                <span className="text-white">{s.label}:</span> {s.value}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Selo Authorized Centers ETS — padrão ATTC */}
      <div className="border-t border-white/5">
        <div className="container-x py-7 flex flex-col lg:flex-row items-center justify-between gap-5">
          <div className="flex flex-col items-center lg:items-start gap-2">
            <CertificationsStrip variant="footer" />
            <span className="ets-mark text-[10px] uppercase tracking-widest text-[var(--text-muted)]">
              Authorized Centers TOEFL TYS | TOEIC Testing
            </span>
          </div>
          <p className="text-[var(--text-muted)] text-[11px] leading-relaxed max-w-md text-center lg:text-right">
            <span className="ets-mark-first">TOEFL</span>
            <sup>®</sup>, <span className="ets-mark-first">TOEIC</span>
            <sup>®</sup> e respectivos logotipos são marcas registradas da{" "}
            <span className="ets-mark-first">ETS</span>
            <sup>®</sup>, utilizadas sob licença para o centro autorizado
            English Solution.
          </p>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-x py-5 text-[var(--text-muted)] text-xs flex flex-col sm:flex-row justify-between gap-3">
          <span>© {new Date().getFullYear()} English Solution. Todos os direitos reservados.</span>
          <span>Valparaíso de Goiás · GO</span>
        </div>
      </div>
    </footer>
  );
}
