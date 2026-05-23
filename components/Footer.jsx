import Image from "next/image";
import Link from "next/link";
import { contact, navigation, schedule } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-brand-navy-dark text-white">
      <div className="container-x py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="bg-white/5 rounded-2xl p-4 inline-block mb-6">
            <Image
              src="/brand/logo.svg"
              alt="English Solution"
              width={180}
              height={72}
              className="h-16 w-auto"
            />
          </div>

          <p className="text-white/70 leading-relaxed">
            Você fala inglês desde o primeiro dia.
          </p>

          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-white/80 hover:text-white"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.2-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1zM12 7.4a4.6 4.6 0 110 9.2 4.6 4.6 0 010-9.2zm0 7.6a3 3 0 100-6 3 3 0 000 6zm5-7.8a1.1 1.1 0 110 2.2 1.1 1.1 0 010-2.2z" />
            </svg>
            {contact.instagramHandle}
          </a>
        </div>

        <div>
          <h4 className="font-serif font-bold text-lg mb-5">Cursos</h4>
          <ul className="space-y-3 text-white/70 text-sm">
            {navigation.primary[0].children.slice(0, 6).map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  className="hover:text-white transition-colors"
                >
                  {child.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/cursos"
                className="text-brand-red font-bold hover:text-white transition-colors"
              >
                Ver todos →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif font-bold text-lg mb-5">Contato</h4>
          <ul className="space-y-3 text-white/70 text-sm">
            <li>{contact.city}</li>
            <li>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {contact.instagramHandle}
              </a>
            </li>
          </ul>

          <h4 className="font-serif font-bold text-lg mt-8 mb-5">Horários</h4>
          <ul className="space-y-2 text-white/70 text-sm">
            {schedule.map((s) => (
              <li key={s.label}>
                <span className="font-semibold text-white">{s.label}:</span>{" "}
                {s.value}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif font-bold text-lg mb-5">Institucional</h4>
          <ul className="space-y-3 text-white/70 text-sm">
            <li>
              <Link href="/metodologia" className="hover:text-white transition-colors">
                Metodologia
              </Link>
            </li>
            <li>
              <Link href="/diferenciais" className="hover:text-white transition-colors">
                Diferenciais
              </Link>
            </li>
            <li>
              <Link href="/depoimentos" className="hover:text-white transition-colors">
                Depoimentos
              </Link>
            </li>
            <li>
              <Link href="/localizacao" className="hover:text-white transition-colors">
                Localização
              </Link>
            </li>
            <li>
              <Link href="/duvidas" className="hover:text-white transition-colors">
                Dúvidas
              </Link>
            </li>
            <li>
              <a
                href={contact.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Google Business
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 text-white/50 text-sm flex flex-col sm:flex-row justify-between gap-4">
          <span>
            © {new Date().getFullYear()} English Solution. Todos os direitos
            reservados.
          </span>
          <span>{contact.city}</span>
        </div>
      </div>
    </footer>
  );
}
