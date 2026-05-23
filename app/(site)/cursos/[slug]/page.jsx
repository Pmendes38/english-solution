import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import { courses, contact, faqs } from "@/data/site";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) return {};
  return {
    title: course.title,
    description: course.summary,
  };
}

export default async function CoursePage({ params }) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) notFound();

  const related = courses.filter((c) => c.slug !== course.slug).slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow={`Curso • ${course.shortTitle}`}
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
          <Link href="/cursos" className="btn-ghost-light">
            Ver todos os cursos
          </Link>
        </div>
      </PageHeader>

      <section className="py-20 bg-white">
        <div className="container-x grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <span className="eyebrow">O que você vai vivenciar</span>
            <h2 className="heading-display text-3xl lg:text-4xl mt-3">
              Programa do curso
            </h2>

            <ul className="mt-8 grid sm:grid-cols-2 gap-4">
              {course.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 bg-brand-cream/60 rounded-2xl p-5 border border-slate-200"
                >
                  <span
                    aria-hidden="true"
                    className="w-8 h-8 rounded-full bg-brand-red text-white flex items-center justify-center font-bold flex-shrink-0"
                  >
                    ✓
                  </span>
                  <span className="text-brand-navy font-semibold">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 p-8 rounded-3xl bg-brand-navy text-white">
              <h3 className="font-serif font-bold text-2xl">
                Pronto para começar?
              </h3>
              <p className="mt-2 text-white/80">
                Agende uma aula experimental gratuita e veja a metodologia na
                prática.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Agendar Aula Experimental
                </a>
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-light"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
              <div className="text-xs uppercase tracking-widest font-bold text-brand-red">
                Para quem é
              </div>
              <div className="mt-2 font-semibold text-brand-navy">
                {course.audience}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
              <div className="text-xs uppercase tracking-widest font-bold text-brand-red">
                Duração
              </div>
              <div className="mt-2 font-semibold text-brand-navy">
                {course.duration}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
              <div className="text-xs uppercase tracking-widest font-bold text-brand-red">
                Formato
              </div>
              <div className="mt-2 font-semibold text-brand-navy">
                {course.format}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-20 bg-brand-cream">
        <div className="container-x">
          <div className="flex items-end justify-between gap-6 mb-10">
            <h2 className="heading-display text-3xl lg:text-4xl">
              Outros cursos
            </h2>
            <Link href="/cursos" className="text-brand-red font-bold">
              Ver todos →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((c) => (
              <Link
                key={c.slug}
                href={`/cursos/${c.slug}`}
                className="bg-white rounded-3xl p-6 border border-slate-200 hover:-translate-y-1 transition-all shadow-sm hover:shadow-xl"
              >
                <div className="text-xs uppercase tracking-widest font-bold text-brand-red">
                  {c.shortTitle}
                </div>
                <h3 className="mt-2 text-xl font-serif font-bold text-brand-navy">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {c.summary}
                </p>
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
