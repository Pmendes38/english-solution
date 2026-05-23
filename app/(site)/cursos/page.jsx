import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { courses, contact } from "@/data/site";

export const metadata = {
  title: "Cursos",
  description:
    "Conheça todos os cursos da English Solution: do iniciante ao avançado, intensivos, business, online e in company.",
};

export default function CoursesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Cursos"
        title="Um caminho para cada objetivo."
        description="Do iniciante absoluto ao profissional em reuniões internacionais. Escolha a modalidade certa para você."
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Falar com a equipe
          </a>
          <Link href="/metodologia" className="btn-ghost-light">
            Ver metodologia
          </Link>
        </div>
      </PageHeader>

      <section className="py-20 bg-white">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Link
              key={course.slug}
              href={`/cursos/${course.slug}`}
              className="group bg-white rounded-3xl p-7 border border-slate-200 hover:-translate-y-1 transition-all shadow-sm hover:shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs uppercase tracking-widest font-bold text-brand-red">
                  {course.shortTitle}
                </span>
                <span className="text-xs text-slate-500">{course.format}</span>
              </div>

              <h2 className="text-2xl font-serif font-bold text-brand-navy leading-tight">
                {course.title}
              </h2>
              <p className="mt-3 text-sm text-slate-500">{course.audience}</p>

              <p className="mt-5 text-slate-600 leading-relaxed flex-1">
                {course.summary}
              </p>

              <span className="mt-7 text-brand-red font-bold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                Saber mais →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
