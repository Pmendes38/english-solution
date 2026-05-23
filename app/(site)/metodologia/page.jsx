import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Differentials from "@/components/Differentials";
import CTA from "@/components/CTA";
import { ASSETS } from "@/lib/assets";
import { contact } from "@/data/site";

export const metadata = {
  title: "Metodologia",
  description:
    "Conheça a metodologia conversacional da English Solution: você fala desde o primeiro dia.",
};

const pillars = [
  {
    icon: ASSETS.icons.conversas,
    title: "Conversação desde a primeira aula",
    description:
      "Sem meses decorando regras antes de falar. Aqui você usa o inglês na prática desde a primeira aula, em situações reais e dinâmicas.",
    image: ASSETS.photos.depoimentos[1],
  },
  {
    icon: ASSETS.icons.rede,
    title: "Experiências práticas e imersivas",
    description:
      "Aulas dinâmicas com temas do mundo real: viagens, trabalho, entretenimento e cultura. Aprendizado contextualizado de verdade.",
    image: ASSETS.photos.comunidade[2],
  },
  {
    icon: ASSETS.icons.pessoas,
    title: "Professores especialistas e próximos",
    description:
      "Acompanhamento humanizado. Cada aluno tem nome, ritmo e meta. Nada de turmas gigantescas onde você é mais um número.",
    image: ASSETS.photos.depoimentos[2],
  },
  {
    icon: ASSETS.icons.livro,
    title: "Sem dependência de livros caros",
    description:
      "Material próprio incluso, atualizado e pensado para a realidade do aluno brasileiro. Você não compra nada importado.",
    image: ASSETS.photos.estudante,
  },
  {
    icon: ASSETS.icons.alvo,
    title: "Aulas ao vivo em pequenos grupos",
    description:
      "Mais prática, mais atenção, mais resultados. Turmas reduzidas para garantir que todo mundo fala, escuta e evolui.",
    image: ASSETS.photos.comunidade[0],
  },
];

const journey = [
  { icon: ASSETS.icons.alvo, title: "Diagnóstico", description: "Avaliamos seu nível atual e objetivo." },
  { icon: ASSETS.icons.conversas, title: "Imersão", description: "Você fala desde o primeiro dia." },
  { icon: ASSETS.icons.livro, title: "Prática", description: "Material aplicado a situações reais." },
  { icon: ASSETS.icons.pessoas, title: "Acompanhamento", description: "Suporte individual constante." },
  { icon: ASSETS.icons.rede, title: "Vivência", description: "Conversation clubs e eventos." },
];

export default function MethodologyPage() {
  return (
    <>
      <PageHeader
        eyebrow="NOSSA METODOLOGIA"
        title="Inglês vivido na prática."
        description="Aqui você não passa meses decorando regras antes de falar. Você aprende conversando, ouvindo, interagindo e praticando desde a primeira aula."
      >
        <Link href="/cursos" className="btn-primary">
          Ver cursos
        </Link>
      </PageHeader>

      <section className="py-16 lg:py-20">
        <div className="container-x space-y-16 lg:space-y-24">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`grid lg:grid-cols-2 gap-10 items-center ${
                i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/5 aspect-[5/4]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <div className="w-14 h-14 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center mb-5">
                  <Image src={p.icon} alt="" width={32} height={32} />
                </div>
                <h2 className="heading-display text-3xl lg:text-4xl">{p.title}</h2>
                <p className="mt-5 text-[var(--text-secondary)] leading-relaxed">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-x">
          <div className="max-w-3xl mb-12">
            <span className="eyebrow">JORNADA DO ALUNO</span>
            <h2 className="heading-display mt-5 text-3xl lg:text-5xl">
              Como funciona, do diagnóstico ao domínio.
            </h2>
          </div>

          <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {journey.map((s, i) => (
              <li
                key={s.title}
                className="bg-[var(--bg-elevated)] border border-white/5 rounded-2xl p-6 relative"
              >
                <div className="absolute top-4 right-4 text-[var(--accent)]/30 font-serif font-bold text-3xl">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <Image src={s.icon} alt="" width={36} height={36} className="mb-4" />
                <h3 className="font-bold text-white">{s.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm mt-2 leading-relaxed">
                  {s.description}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-12 text-center">
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Quero experimentar essa metodologia
            </a>
          </div>
        </div>
      </section>

      <Differentials />
      <CTA />
    </>
  );
}
