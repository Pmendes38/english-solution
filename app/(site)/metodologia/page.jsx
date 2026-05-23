import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { methodologyPillars, contact } from "@/data/site";

export const metadata = {
  title: "Metodologia",
  description:
    "Conheça a metodologia conversacional da English Solution: você fala desde o primeiro dia.",
};

const steps = [
  {
    n: "01",
    title: "Diagnóstico inicial",
    text: "Avaliamos seu nível atual, objetivo e bagagem para desenhar o caminho ideal.",
  },
  {
    n: "02",
    title: "Imersão conversacional",
    text: "Você começa a falar nas primeiras aulas. A confiança nasce do uso, não da teoria.",
  },
  {
    n: "03",
    title: "Material próprio aplicado",
    text: "Conteúdo prático, sem livros caros obrigatórios, ligado à realidade do aluno.",
  },
  {
    n: "04",
    title: "Acompanhamento individual",
    text: "Cada aluno tem ritmo, meta e acompanhamento próximo do professor.",
  },
  {
    n: "05",
    title: "Vivência além da sala",
    text: "Eventos, conversation clubs e experiências para você viver o idioma.",
  },
];

export default function MethodologyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Metodologia"
        title="Inglês vivido na prática."
        description="Aqui você não passa meses decorando regras antes de falar. Você aprende conversando, ouvindo, interagindo e praticando desde a primeira aula."
      >
        <Link href="/cursos" className="btn-primary">
          Ver cursos
        </Link>
      </PageHeader>

      <section className="py-20 bg-white">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="eyebrow">Nossos pilares</span>
            <h2 className="heading-display text-3xl lg:text-5xl mt-4">
              Cinco pilares que sustentam a metodologia.
            </h2>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {methodologyPillars.map((p, i) => (
              <div
                key={p.title}
                className="rounded-3xl border border-slate-200 p-7 bg-brand-cream/40"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-navy text-white flex items-center justify-center font-serif font-bold flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-brand-navy">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-slate-600 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-cream">
        <div className="container-x">
          <div className="max-w-3xl mb-12">
            <span className="eyebrow">Sua jornada</span>
            <h2 className="heading-display text-3xl lg:text-5xl mt-4">
              Como funciona, do diagnóstico ao domínio.
            </h2>
          </div>

          <ol className="space-y-4">
            {steps.map((s) => (
              <li
                key={s.n}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex items-start gap-5"
              >
                <span className="font-serif font-bold text-brand-red text-3xl">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-bold text-brand-navy text-lg">
                    {s.title}
                  </h3>
                  <p className="text-slate-600 mt-1 leading-relaxed">
                    {s.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTA />
    </>
  );
}
