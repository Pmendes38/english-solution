import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/lib/assets";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

const pillars = [
  {
    icon: ASSETS.icons.conversas,
    title: "Conversação desde a primeira aula",
    description: "Você fala inglês desde o início do curso.",
  },
  {
    icon: ASSETS.icons.rede,
    title: "Experiências práticas e imersivas",
    description: "Aulas dinâmicas com temas do mundo real.",
  },
  {
    icon: ASSETS.icons.pessoas,
    title: "Professores especialistas e próximos",
    description: "Acompanhamento humanizado.",
  },
  {
    icon: ASSETS.icons.livro,
    title: "Sem dependência de livros caros",
    description: "Todo o material incluso e atualizado.",
  },
  {
    icon: ASSETS.icons.alvo,
    title: "Aulas ao vivo em pequenos grupos",
    description: "Mais prática, mais atenção, mais resultados.",
  },
];

export default function Methodology() {
  return (
    <section id="metodologia" className="py-20 lg:py-28">
      <div className="container-x grid lg:grid-cols-2 gap-14 items-start">
        <Reveal>
          <span className="eyebrow">NOSSA METODOLOGIA</span>
          <h2 className="heading-display mt-5 text-4xl lg:text-5xl">
            Inglês vivido na prática.
          </h2>
          <p className="mt-6 text-[var(--text-secondary)] leading-relaxed">
            Aqui você não passa meses decorando regras antes de falar. Você
            aprende conversando, ouvindo, interagindo e praticando desde a
            primeira aula.
          </p>
          <Link
            href="/metodologia"
            className="inline-flex items-center gap-2 mt-8 text-[var(--accent)] font-bold hover:gap-3 transition-all"
          >
            Entenda como funciona
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>

        <StaggerGroup className="flex flex-col gap-4">
          {pillars.map((p) => (
            <StaggerItem key={p.title}>
              <div className="flex items-start gap-4 bg-[var(--bg-elevated)] border border-white/5 rounded-2xl p-5 hover:bg-[var(--bg-overlay)] transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0">
                  <Image src={p.icon} alt="" width={28} height={28} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">{p.title}</h3>
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
