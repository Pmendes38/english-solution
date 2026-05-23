import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { differentials } from "@/data/site";

export const metadata = {
  title: "Diferenciais",
  description:
    "O que torna a English Solution a escola de inglês mais bem avaliada da região.",
};

export default function DifferentialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Diferenciais"
        title="Por que somos referência na região."
        description="Não é só uma escola de inglês. É uma comunidade, uma metodologia e um time apaixonado por ver gente destravando a fala."
      />

      <section className="py-20 bg-white">
        <div className="container-x grid md:grid-cols-2 gap-5">
          {differentials.map((d, i) => (
            <div
              key={d.title}
              className="rounded-3xl border border-slate-200 p-7 bg-brand-cream/40 flex items-start gap-5"
            >
              <span className="font-serif font-bold text-brand-red text-3xl flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="text-xl font-serif font-bold text-brand-navy">
                  {d.title}
                </h2>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  {d.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
