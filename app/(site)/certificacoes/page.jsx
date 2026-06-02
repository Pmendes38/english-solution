import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { contact } from "@/data/site";
import { ASSETS } from "@/lib/assets";

export const metadata = {
  title: "Certificações Internacionais — TOEFL e TOEIC",
  description:
    "Único centro autorizado a aplicar TOEFL e TOEIC no entorno sul de Brasília. Certificações reconhecidas em mais de 150 países, aplicadas em Valparaíso de Goiás.",
};

const toeicSections = [
  {
    title: "Listening Comprehension",
    meta: "Duração: 45 min · 100 questões",
    items: [
      "Fotografias — 10 questões",
      "Pergunta-Resposta — 30",
      "Diálogos Rápidos — 30",
      "Diálogos Curtos — 30",
    ],
  },
  {
    title: "Reading Comprehension",
    meta: "Duração: 75 min · 100 questões",
    items: [
      "Frases Incompletas — 40",
      "Texto para Completar — 12",
      "Interpretação (Simples/Duplos) — 48",
    ],
  },
];

const toeflLevels = [
  {
    name: "TOEFL® ITP",
    level: "Nível 1 — Intermediário a Avançado",
    detail: "140 perguntas · 115 min · Escala 310-677",
  },
  {
    name: "TOEFL® Junior",
    level: "Standard Test",
    detail: "126 perguntas · 1h25 · Escala 600-900",
  },
  {
    name: "TOEFL® Primary",
    level: "Step 1 / Step 2",
    detail: "Step 1: 80 questões · 60 min — Step 2: 76 questões · 60 min",
  },
];

export default function CertificacoesPage() {
  return (
    <>
      <PageHeader
        eyebrow="CERTIFICAÇÕES INTERNACIONAIS"
        title="O único centro aplicador oficial no entorno sul de Brasília."
        description={
          <>
            A English Solution é Authorized Center{" "}
            <span className="ets-mark-first">TOEFL</span>
            <sup>®</sup> TYS e <span className="ets-mark-first">TOEIC</span>
            <sup>®</sup> Testing. Aqui você faz, no mesmo lugar onde estudou,
            os principais testes internacionais de proficiência em inglês.
          </>
        }
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Quero agendar meu teste
          </a>
          <a href="#tests" className="btn-secondary">
            Ver detalhes dos testes
          </a>
        </div>
      </PageHeader>

      {/* Selo de credenciamento */}
      <section className="pt-8 lg:pt-12 pb-4">
        <div className="container-x">
          <div className="glass-panel rounded-2xl px-6 lg:px-10 py-8 grid sm:grid-cols-2 gap-8 items-center">
            <div className="flex items-center justify-center sm:justify-end gap-5">
              <div className="bg-white rounded-2xl px-7 py-5 flex items-center">
                <Image
                  src={ASSETS.certifications.toefl}
                  alt="TOEFL"
                  width={240}
                  height={96}
                  className="h-12 w-auto"
                />
              </div>
              <div className="bg-white rounded-2xl px-7 py-5 flex items-center">
                <Image
                  src={ASSETS.certifications.toeic}
                  alt="TOEIC"
                  width={240}
                  height={96}
                  className="h-[30px] w-auto"
                />
              </div>
            </div>
            <div className="text-center sm:text-left">
              <span className="eyebrow">CREDENCIAMENTO OFICIAL</span>
              <p className="mt-3 text-white text-lg lg:text-xl leading-snug">
                Credenciada pela <span className="ets-mark-first">ETS</span>
                <sup>®</sup>, instituição responsável pelos exames mais
                reconhecidos do mundo.
              </p>
              <p className="mt-3 text-[var(--text-secondary)] text-sm">
                Os testes são aplicados aqui em Valparaíso de Goiás. Aluno
                English Solution tem prioridade na agenda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Por que se certificar */}
      <section className="py-16 lg:py-20" id="tests">
        <div className="container-x">
          <div className="max-w-3xl mb-12">
            <span className="eyebrow">POR QUE SE CERTIFICAR</span>
            <h2 className="heading-display mt-4 text-3xl lg:text-5xl">
              Sua proficiência reconhecida em mais de 150 países.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Universidade",
                description:
                  "Aceito por instituições de ensino e programas educacionais que recebem alunos estrangeiros.",
              },
              {
                title: "Carreira",
                description:
                  "Padrão mundial em mais de 14.000 empresas e agências para avaliação de inglês profissional.",
              },
              {
                title: "Visto e expatriação",
                description:
                  "Comprovação aceita em processos de imigração, estudo no exterior e contratações internacionais.",
              },
              {
                title: "Padrão CEFR",
                description:
                  "Resultados nivelados pelo Common European Framework, mesma escala usada globalmente.",
              },
            ].map((b) => (
              <div key={b.title} className="glass-panel p-6">
                <h3 className="text-white font-bold text-lg">{b.title}</h3>
                <p className="mt-2 text-[var(--text-secondary)] text-sm leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOEIC */}
      <section className="py-16 lg:py-20">
        <div className="container-x">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-14 items-start">
            <div className="lg:sticky lg:top-28">
              <div className="bg-white rounded-2xl px-7 py-5 inline-flex items-center mb-6">
                <Image
                  src={ASSETS.certifications.toeic}
                  alt="TOEIC"
                  width={240}
                  height={96}
                  className="h-[30px] w-auto"
                />
              </div>
              <span className="eyebrow">PARA O MERCADO DE TRABALHO</span>
              <h2 className="heading-display mt-4 text-3xl lg:text-4xl">
                <span className="ets-mark-first">TOEIC</span>
                <sup>®</sup> Listening &amp; Reading
              </h2>
              <p className="mt-5 text-[var(--text-secondary)] leading-relaxed">
                O <span className="ets-mark">TOEIC</span>
                <sup>®</sup> é, há mais de 40 anos, o padrão mundial para
                aferição internacional de inglês no mercado de trabalho.
                Usado por mais de 14.000 empresas em mais de 150 países.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-[var(--text-secondary)]">
                <li>· Colaboradores internacionalmente qualificados</li>
                <li>· Ferramenta de decisão para RH</li>
                <li>· Avalia proficiência dentro dos padrões CEFR</li>
                <li>· Mais de 8 milhões de testes aplicados/ano</li>
              </ul>
            </div>

            <div className="space-y-5">
              {toeicSections.map((s) => (
                <div key={s.title} className="glass-panel p-7">
                  <h3 className="text-white font-bold text-xl">{s.title}</h3>
                  <p className="text-[var(--accent)] text-xs font-bold uppercase tracking-widest mt-1">
                    {s.meta}
                  </p>
                  <ul className="mt-5 space-y-2 text-[var(--text-secondary)] text-sm">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-start gap-2">
                        <span className="text-[var(--accent)] mt-0.5">•</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TOEFL */}
      <section className="py-16 lg:py-20">
        <div className="container-x">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-14 items-start">
            <div className="lg:sticky lg:top-28">
              <div className="bg-white rounded-2xl px-7 py-5 inline-flex items-center mb-6">
                <Image
                  src={ASSETS.certifications.toefl}
                  alt="TOEFL"
                  width={240}
                  height={96}
                  className="h-12 w-auto"
                />
              </div>
              <span className="eyebrow">PARA ESCOLAS E UNIVERSIDADES</span>
              <h2 className="heading-display mt-4 text-3xl lg:text-4xl">
                <span className="ets-mark-first">TOEFL</span>
                <sup>®</sup> ITP, Junior e Primary
              </h2>
              <p className="mt-5 text-[var(--text-secondary)] leading-relaxed">
                A família <span className="ets-mark">TOEFL</span>
                <sup>®</sup> TYS cobre todas as fases da jornada acadêmica.
                Resultado reconhecido por instituições no Brasil e no mundo
                para colocação de aluno em nível correto, ingresso e
                programas de intercâmbio.
              </p>
            </div>

            <div className="space-y-5">
              {toeflLevels.map((l) => (
                <div key={l.name} className="glass-panel p-7">
                  <h3 className="text-white font-bold text-xl">{l.name}</h3>
                  <p className="text-[var(--accent)] text-xs font-bold uppercase tracking-widest mt-1">
                    {l.level}
                  </p>
                  <p className="mt-4 text-[var(--text-secondary)] text-sm leading-relaxed">
                    {l.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA dedicado */}
      <section className="py-12">
        <div className="container-x">
          <div className="glass-panel rounded-3xl px-8 lg:px-14 py-10 lg:py-14 grid lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
            <div>
              <span className="eyebrow">AGENDE SEU TESTE</span>
              <h2 className="heading-display mt-4 text-3xl lg:text-4xl">
                Faça seu <span className="ets-mark-first">TOEFL</span>
                <sup>®</sup> ou <span className="ets-mark-first">TOEIC</span>
                <sup>®</sup> aqui em Valparaíso.
              </h2>
              <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
                Sem precisar ir até Brasília ou Goiânia. Aplicação oficial,
                certificado reconhecido mundialmente, com a estrutura da
                English Solution.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base"
              >
                Falar com o centro aplicador
              </a>
              <a href="/cursos" className="btn-secondary text-sm text-center">
                Ver cursos preparatórios
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
