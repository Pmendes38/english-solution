import Link from "next/link";
import { methodologyPillars } from "@/data/site";

export default function Methodology() {
  return (
    <section
      id="metodologia"
      className="py-24 bg-brand-navy text-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-72 h-72 bg-brand-red rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-navy-light rounded-full blur-3xl opacity-30" />

      <div className="container-x relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <span className="eyebrow text-brand-red">Metodologia</span>
            <h2 className="font-serif font-bold text-4xl lg:text-6xl mt-4 leading-tight">
              Inglês vivido na prática.
            </h2>
            <p className="mt-8 text-lg text-white/80 leading-relaxed">
              Aqui você não passa meses decorando regras antes de falar. Você
              aprende conversando, ouvindo, interagindo e praticando desde a
              primeira aula.
            </p>
            <Link
              href="/metodologia"
              className="btn-ghost-light mt-8"
            >
              Conhecer a metodologia
            </Link>
          </div>

          <div className="grid gap-4">
            {methodologyPillars.map((item, i) => (
              <div
                key={item.title}
                className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-red flex items-center justify-center font-serif font-bold text-white flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-2 text-white/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
