import Image from "next/image";
import Link from "next/link";
import { contact, schedule, courses } from "@/data/site";
import { ASSETS } from "@/lib/assets";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-base)] border-t border-white/5">
      <div className="container-x py-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <Image
            src={ASSETS.logo}
            alt="English Solution"
            width={180}
            height={72}
            className="h-16 w-auto mb-5"
          />
          <p className="text-[var(--text-secondary)] leading-relaxed max-w-sm">
            Inglês que transforma. Resultados que te levam mais longe.
          </p>
          <div className="flex gap-3 mt-6">
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-white/10 hover:border-white/30 flex items-center justify-center text-[var(--text-secondary)] hover:text-white transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.3-1-.4-2.2-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.3 2.2-.4 1.2-.1 1.6-.1 4.8-.1zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.2-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1zM12 7.4a4.6 4.6 0 110 9.2 4.6 4.6 0 010-9.2zm0 7.6a3 3 0 100-6 3 3 0 000 6zm5-7.8a1.1 1.1 0 110 2.2 1.1 1.1 0 010-2.2z" />
              </svg>
            </a>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-full border border-white/10 hover:border-white/30 flex items-center justify-center text-[var(--text-secondary)] hover:text-white transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">Institucional</h4>
          <ul className="space-y-3 text-[var(--text-secondary)] text-sm">
            <li><Link href="/metodologia" className="hover:text-white transition-colors">Metodologia</Link></li>
            <li><Link href="/diferenciais" className="hover:text-white transition-colors">Diferenciais</Link></li>
            <li><Link href="/depoimentos" className="hover:text-white transition-colors">Depoimentos</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link href="/duvidas" className="hover:text-white transition-colors">Dúvidas</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">Cursos</h4>
          <ul className="space-y-3 text-[var(--text-secondary)] text-sm">
            {courses.slice(0, 5).map((c) => (
              <li key={c.slug}>
                <Link href={`/cursos/${c.slug}`} className="hover:text-white transition-colors">
                  {c.title}
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
          <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">Contato</h4>
          <ul className="space-y-3 text-[var(--text-secondary)] text-sm">
            <li className="flex items-start gap-2">
              <Image src={ASSETS.icons.local} alt="" width={16} height={16} className="mt-0.5" />
              <span>{contact.city}</span>
            </li>
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

          <h4 className="font-semibold text-white text-sm uppercase tracking-wider mt-7 mb-3">Horários</h4>
          <ul className="space-y-2 text-[var(--text-secondary)] text-sm">
            {schedule.map((s) => (
              <li key={s.label}>
                <span className="text-white font-medium">{s.label}:</span> {s.value}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-x py-6 text-[var(--text-muted)] text-sm flex flex-col sm:flex-row justify-between gap-4">
          <span>© {new Date().getFullYear()} English Solution. Todos os direitos reservados.</span>
          <span>{contact.city}</span>
        </div>
      </div>
    </footer>
  );
}
