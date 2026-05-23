import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import { courses, contact, faqs } from "@/data/site";
import { ASSETS } from "@/lib/assets";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) return {};
  return { title: course.title, description: course.summary };
}

const stepsTemplate = [
  { title: "Diagnóstico", description: "Avaliamos seu nível e objetivos para desenhar a trilha ideal." },
  { title: "Imersão", description: "Você começa a falar desde a primeira aula, sem decorar regras." },
  { title: "Prática", description: "Conversação em situações reais, com vocabulário aplicado." },
  { title: "Resultado", description: "Confiança e fluência reais, com acompanhamento individual." },
];

export default async function CoursePage({ params }) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) notFound();

  const related = courses.filter((c) => c.slug !== course.slug).slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow={`CURSO · ${course.shortTitle}`}
        title={course.title}
        description={course.description}
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Quero esse curso
          </a>
          <Link href="/cursos" className="btn-secondary">
            Ver todos os cursos
          </Link>
        </div>
      </PageHeader>

      <section>
        <div className="container-x -mt-8 lg:-mt-12 relative z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-64 lg:h-96 object-cover object-top rounded-3xl border border-white/10"
          />
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-x grid sm:grid-cols-3 gap-4">
          {[
            { icon: ASSETS.icons.pessoas, label: "Para quem é", value: course.audience },
            { icon: ASSETS.icons.calendario, label: "Duração", value: course.duration },
            { icon: ASSETS.icons.local, label: "Formato", value: course.format },
          ].map((info) => (
            <div
              key={info.label}
              className="bg-[var(--bg-elevated)] border border-white/5 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <Image src={info.icon} alt="" width={28} height={28} />
                <span className="text-xs uppercase tracking-widest font-bold text-[var(--accent)]">
                  {info.label}
                </span>
              </div>
              <div className="text-white font-semibold">{info.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-16 lg:pb-20">
        <div className="container-x grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <span className="eyebrow">O QUE VOCÊ VAI VIVENCIAR</span>
            <h2 className="heading-display mt-5 text-3xl lg:text-4xl">
              Programa do curso
            </h2>

            <ul className="mt-8 grid sm:grid-cols-2 gap-4">
              {course.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 bg-[var(--bg-elevated)] border border-white/5 rounded-2xl p-5"
                >
                  <span className="w-8 h-8 rounded-full bg-[var(--accent)] text-white flex items-center justify-center font-bold flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-white font-medium">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside>
            <div className="bg-gradient-to-br from-[var(--bg-elevated)] to-[var(--brand-blue)] rounded-2xl p-7 border border-white/5 sticky top-24">
              <h3 className="font-serif font-bold text-2xl text-white">
                Pronto para começar?
              </h3>
              <p className="mt-3 text-[var(--text-secondary)] text-sm leading-relaxed">
                Agende uma aula experimental gratuita e veja a metodologia na
                prática.
              </p>
              <div className="flex flex-col gap-3 mt-6">
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                >
                  Agendar Aula Experimental
                </a>
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">COMO FUNCIONA</span>
            <h2 className="heading-display mt-5 text-3xl lg:text-4xl">
              Sua jornada no curso
            </h2>
          </div>

          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stepsTemplate.map((s, i) => (
              <li
                key={s.title}
                className="bg-[var(--bg-elevated)] border border-white/5 rounded-2xl p-6"
              >
                <div className="font-serif font-bold text-[var(--accent)] text-3xl">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-white font-bold text-lg mt-2">{s.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm mt-2 leading-relaxed">
                  {s.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-x">
          <div className="flex items-end justify-between gap-6 mb-10">
            <h2 className="heading-display text-3xl lg:text-4xl">
              Outros cursos
            </h2>
            <Link href="/cursos" className="text-[var(--accent)] font-bold">
              Ver todos →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {related.map((c) => (
              <Link
                key={c.slug}
                href={`/cursos/${c.slug}`}
                className="group block bg-[var(--bg-elevated)] rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 hover:-translate-y-1 transition-all"
              >
                <div className="relative h-44 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.image}
                    alt={c.title}
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-elevated)]/95 via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <div className="text-xs uppercase tracking-widest font-bold text-[var(--accent)]">
                    {c.shortTitle}
                  </div>
                  <h3 className="mt-2 text-lg font-bold text-white">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                    {c.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={faqs.slice(0, 4)} showAllLink />
      <CTA />
    </>
  );
}
