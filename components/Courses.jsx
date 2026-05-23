import Link from "next/link";
import { courses } from "@/data/site";

export default function Courses() {
  return (
    <section id="cursos" className="py-24 bg-white">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="eyebrow">Nossos cursos</span>
            <h2 className="heading-display text-4xl lg:text-5xl mt-4">
              Um inglês que funciona para sua realidade.
            </h2>
            <p className="mt-5 text-slate-600 text-lg">
              Do iniciante absoluto ao executivo em reunião internacional —
              temos um caminho desenhado para o seu objetivo.
            </p>
          </div>
          <Link href="/cursos" className="btn-secondary self-start">
            Ver todos os cursos
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <Link
              key={course.slug}
              href={`/cursos/${course.slug}`}
              className="group bg-white rounded-3xl p-7 border border-slate-200 hover:-translate-y-1 transition-all shadow-sm hover:shadow-xl flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-navy text-white flex items-center justify-center font-serif font-bold mb-5 group-hover:bg-brand-red transition-colors">
                {course.shortTitle.charAt(0)}
              </div>
              <h3 className="text-xl font-serif font-bold text-brand-navy mb-2 leading-tight">
                {course.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-1">
                {course.summary}
              </p>
              <span className="mt-6 text-brand-red font-bold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                Saber mais →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
