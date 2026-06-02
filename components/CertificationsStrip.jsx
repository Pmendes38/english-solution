import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/lib/assets";

/**
 * Selo "Authorized Centers TOEFL TYS | TOEIC Testing".
 * Segue diretrizes ATTC:
 *  - Marca da escola continua dominante (esta strip é compacta e secundária)
 *  - Logos da ETS exibidos em pílula branca (uso referencial)
 *  - Texto "Authorized Centers ..." em Arial bold ao lado
 *
 * variant="footer" => versão compacta para rodapé
 * variant="hero"   => versão de destaque (callout de credibilidade)
 */
export default function CertificationsStrip({ variant = "hero" }) {
  if (variant === "footer") {
    return (
      <Link
        href="/certificacoes"
        className="group inline-flex items-center gap-4 bg-white rounded-2xl px-5 py-3 shadow-lg hover:shadow-xl transition-all"
        aria-label="Centro autorizado TOEFL e TOEIC — saiba mais"
      >
        <Image
          src={ASSETS.certifications.toefl}
          alt="TOEFL"
          width={120}
          height={48}
          className="h-7 w-auto"
        />
        <span className="block h-7 w-px bg-black/15" aria-hidden="true" />
        <Image
          src={ASSETS.certifications.toeic}
          alt="TOEIC"
          width={120}
          height={48}
          className="h-5 w-auto"
        />
        <span
          className="ets-mark text-[10px] uppercase tracking-widest text-[var(--brand-gray-dark)] hidden sm:inline whitespace-nowrap"
        >
          Authorized Center
        </span>
      </Link>
    );
  }

  // variant="hero" — callout de credibilidade
  return (
    <section className="py-10 lg:py-14">
      <div className="container-x">
        <div className="glass-panel rounded-2xl px-6 lg:px-10 py-7 lg:py-8 flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
          <div className="flex items-center gap-5 flex-shrink-0">
            <div className="bg-white rounded-xl px-5 py-3 flex items-center">
              <Image
                src={ASSETS.certifications.toefl}
                alt="TOEFL"
                width={160}
                height={64}
                className="h-10 w-auto"
              />
            </div>
            <div className="bg-white rounded-xl px-5 py-3 flex items-center">
              <Image
                src={ASSETS.certifications.toeic}
                alt="TOEIC"
                width={160}
                height={64}
                className="h-7 w-auto"
              />
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left">
            <span className="eyebrow">CENTRO AUTORIZADO</span>
            <h3 className="text-white font-serif font-bold text-2xl lg:text-3xl mt-2 leading-tight">
              Único centro aplicador oficial{" "}
              <span className="ets-mark-first">TOEFL</span>
              <sup>®</sup> e <span className="ets-mark-first">TOEIC</span>
              <sup>®</sup> em 30 km
            </h3>
            <p className="mt-3 text-[var(--text-secondary)] text-sm lg:text-base leading-relaxed max-w-2xl">
              Aplicamos os principais testes internacionais de proficiência em
              Valparaíso de Goiás. Sua certificação reconhecida no mundo todo,
              feita aqui pertinho.
            </p>
          </div>

          <Link
            href="/certificacoes"
            className="btn-primary text-sm flex-shrink-0"
          >
            Saiba mais →
          </Link>
        </div>
      </div>
    </section>
  );
}
