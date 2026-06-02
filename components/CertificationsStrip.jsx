import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/lib/assets";

/**
 * Selo "Authorized Centers TOEFL TYS | TOEIC Testing".
 * Padrão ATTC: marca English Solution permanece dominante; logos ETS
 * são uso referencial, em pílula branca para legibilidade no dark.
 *
 * Logos normalizados pela mesma altura efetiva (h-6) — o "*" e o
 * texto de cada um têm proporções diferentes, então ajustamos a
 * altura individualmente para que o conjunto fique visualmente
 * equilibrado.
 *
 * variant="footer" => versão compacta no rodapé
 * variant="hero"   => callout grande na home com mapa do entorno
 */

function TOEFLLogo({ className }) {
  return (
    <Image
      src={ASSETS.certifications.toefl}
      alt="TOEFL"
      width={160}
      height={64}
      className={className}
    />
  );
}

function TOEICLogo({ className }) {
  return (
    <Image
      src={ASSETS.certifications.toeic}
      alt="TOEIC"
      width={200}
      height={96}
      className={className}
    />
  );
}

export default function CertificationsStrip({ variant = "hero" }) {
  if (variant === "footer") {
    return (
      <Link
        href="/certificacoes"
        className="group inline-flex items-center gap-5 bg-white rounded-2xl px-6 py-3.5 shadow-lg hover:shadow-xl transition-all"
        aria-label="Centro autorizado TOEFL e TOEIC — saiba mais"
      >
        <TOEFLLogo className="h-7 w-auto" />
        <span className="block h-7 w-px bg-black/15" aria-hidden="true" />
        <TOEICLogo className="h-7 w-auto" />
        <span className="ets-mark text-[10px] uppercase tracking-widest text-[var(--brand-gray-dark)] hidden sm:inline whitespace-nowrap pl-1 border-l border-black/15">
          Authorized Center
        </span>
      </Link>
    );
  }

  // variant="hero" — callout com mapa do entorno sul de Brasília
  // Mapa centralizado entre Valparaíso de Goiás e cidades vizinhas,
  // com pin do English Solution.
  const mapSrc =
    "https://www.google.com/maps?q=English+Solution+Valpara%C3%ADso+de+Goi%C3%A1s&z=10&output=embed";

  return (
    <section className="py-12 lg:py-16">
      <div className="container-x">
        <div className="glass-panel rounded-3xl overflow-hidden grid lg:grid-cols-[1.1fr_1fr] gap-0">
          {/* Coluna esquerda: texto + logos + CTA */}
          <div className="p-7 lg:p-10 flex flex-col justify-center">
            <span className="eyebrow">CENTRO AUTORIZADO</span>
            <h3 className="text-white font-serif font-bold text-2xl lg:text-[34px] leading-tight mt-3">
              Único centro aplicador oficial{" "}
              <span className="ets-mark-first">TOEFL</span>
              <sup>®</sup> e <span className="ets-mark-first">TOEIC</span>
              <sup>®</sup> no entorno sul de Brasília
            </h3>
            <p className="mt-4 text-[var(--text-secondary)] text-sm lg:text-base leading-relaxed">
              Aplicamos os principais testes internacionais de proficiência
              direto em Valparaíso de Goiás. Sem precisar atravessar Brasília
              ou ir até Goiânia.
            </p>

            {/* Logos balanceados em pílulas brancas */}
            <div className="mt-6 flex items-center gap-3">
              <div className="bg-white rounded-xl px-4 py-2.5 flex items-center">
                <TOEFLLogo className="h-8 w-auto" />
              </div>
              <div className="bg-white rounded-xl px-4 py-2.5 flex items-center">
                <TOEICLogo className="h-8 w-auto" />
              </div>
            </div>

            <Link
              href="/certificacoes"
              className="btn-primary text-sm mt-7 self-start"
            >
              Conhecer as certificações →
            </Link>
          </div>

          {/* Coluna direita: mapa do entorno sul */}
          <div className="relative min-h-[320px] lg:min-h-[420px] bg-[var(--bg-elevated)]">
            <iframe
              src={mapSrc}
              title="English Solution — único centro aplicador no entorno sul de Brasília"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
              style={{ filter: "invert(90%) hue-rotate(180deg) saturate(0.8)" }}
            />
            {/* Overlay com nome da área */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3.5 py-2 shadow-lg pointer-events-none">
              <div className="text-[10px] uppercase tracking-widest font-bold text-[var(--accent)]">
                Cobertura
              </div>
              <div className="text-[var(--brand-gray-dark)] text-sm font-bold leading-tight">
                Entorno sul de Brasília
              </div>
            </div>
            {/* Pin do English Solution */}
            <div className="absolute bottom-4 left-4 bg-white rounded-lg px-3 py-2 shadow-lg flex items-center gap-2 pointer-events-none">
              <span className="w-3 h-3 rounded-full bg-[var(--accent)] shadow-[0_0_0_4px_rgba(227,30,36,0.25)]" />
              <span className="text-[var(--brand-gray-dark)] text-xs font-semibold">
                English Solution
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
