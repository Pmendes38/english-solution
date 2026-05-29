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
    icon: ASSETS.iconsWhite.conversas,
    title: "Conversação desde a primeira aula",
    description:
      "Esquece meses decorando regra antes de abrir a boca. Aqui você fala inglês na primeira aula — em situações reais, com gente de verdade.",
    image: ASSETS.photos.depoimentos[1],
  },
  {
    icon: ASSETS.iconsWhite.ambiente,
    title: "Experiências práticas e imersivas",
    description:
      "Viagem, trabalho, série, música. As aulas trazem o mundo real pra dentro da sala — você aprende usando o inglês que vai usar de verdade.",
    image: ASSETS.photos.comunidade[2],
  },
  {
    icon: ASSETS.iconsWhite.pessoas,
    title: "Professores próximos e dedicados",
    description:
      "Aqui você tem nome, ritmo e meta. Nada de turma lotada onde você vira número. O professor acompanha sua evolução de perto.",
    image: ASSETS.photos.depoimentos[2],
  },
  {
    icon: ASSETS.iconsWhite.alvo,
    title: "Sem livro caro obrigatório",
    description:
      "Material próprio, atualizado e pensado pro aluno brasileiro — já incluso. Você não gasta uma fortuna em livro importado todo semestre.",
    image: ASSETS.photos.estudante,
  },
  {
    icon: ASSETS.iconsWhite.shield,
    title: "Turmas reduzidas, ao vivo",
    description:
      "Mais prática, mais atenção, mais resultado. Turma pequena garante que todo mundo fala, escuta e evolui em cada aula.",
    image: ASSETS.photos.comunidade[0],
  },
];

const journey = [
  { icon: ASSETS.iconsWhite.alvo, title: "Diagnóstico", description: "Avaliamos seu nível e seu objetivo." },
  { icon: ASSETS.iconsWhite.conversas, title: "Imersão", description: "Você fala desde o primeiro dia." },
  { icon: ASSETS.iconsWhite.estrela, title: "Prática", description: "Inglês aplicado a situações reais." },
  { icon: ASSETS.iconsWhite.pessoas, title: "Acompanhamento", description: "Suporte individual constante." },
  { icon: ASSETS.iconsWhite.ambiente, title: "Vivência", description: "Conversation clubs e eventos." },
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
              <div className="relative rounded-3xl overflow-hidden border border-white/5 aspect-[4/3]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div>
                <div className="w-14 h-14 rounded-xl bg-[var(--accent)] flex items-center justify-center mb-5">
                  <Image src={p.icon} alt="" width={32} height={32} className="h-8 w-auto" />
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
              <li key={s.title} className="glass-panel p-6 relative">
                <div className="absolute top-4 right-4 text-[var(--accent)]/30 font-serif font-bold text-3xl">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <Image src={s.icon} alt="" width={36} height={36} className="h-9 w-auto mb-4" />
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
