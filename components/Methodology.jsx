import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

const pillars = [
  {
    number: "01",
    title: "Conversação desde a primeira aula",
    description: "Sem meses decorando regras. Você fala, ouve, interage e ganha confiança desde o início.",
  },
  {
    number: "02",
    title: "Experiência prática e imersiva",
    description: "Atividades em grupo, simulações reais e situações do dia a dia para vivenciar o idioma.",
  },
  {
    number: "03",
    title: "Aulas dinâmicas e humanas",
    description: "Professores próximos, turmas reduzidas e ambiente acolhedor para você se sentir à vontade.",
  },
  {
    number: "04",
    title: "Sem dependência de livros caros",
    description: "Material próprio, atualizado e prático. Você não precisa comprar livros importados todo semestre.",
  },
  {
    number: "05",
    title: "Foco em confiança para falar",
    description: "Mais do que gramática: trabalhamos a perda do medo de errar e a fluência real de comunicação.",
  },
];

export default function Methodology() {
  return (
    <section id="metodologia" className="py-16 lg:py-24">
      <div className="container-x grid lg:grid-cols-[1fr_1.15fr] gap-12 items-start">
        <Reveal>
          <span className="eyebrow">NOSSA METODOLOGIA</span>
          <h2 className="heading-display mt-5 text-4xl lg:text-5xl">
            Inglês vivido na prática.
          </h2>
          <p className="mt-6 text-[var(--text-secondary)] leading-relaxed">
            Aqui você não passa meses decorando regras antes de falar.
            Você aprende conversando, ouvindo, interagindo e praticando
            desde a primeira aula.
          </p>
          <Link href="/metodologia" className="btn-secondary mt-8 text-sm">
            Entenda como funciona →
          </Link>
        </Reveal>

        <StaggerGroup className="flex flex-col gap-3">
          {pillars.map((p) => (
            <StaggerItem key={p.title}>
              <div className="flex items-start gap-4 bg-[var(--bg-elevated)] border border-white/5 rounded-2xl p-5 hover:border-white/15 transition-colors">
                <div className="bg-[var(--accent)] text-white font-bold w-10 h-10 flex items-center justify-center rounded-lg flex-shrink-0">
                  {p.number}
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">{p.title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm mt-1 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
