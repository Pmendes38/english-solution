import Link from "next/link";
import { courses } from "@/data/site";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import HoverCard from "@/components/motion/HoverCard";

export default function Courses() {
  return (
    <section id="cursos" className="py-24 bg-white">
      <div className="container-x">
        <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
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
        </Reveal>

        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <StaggerItem key={course.slug}>
              <HoverCard className="h-full">
                <Link
                  href={`/cursos/${course.slug}`}
                  className="group block h-full bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-shadow"
                >
                  <div className="relative h-48 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={course.image}
                      alt={course.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/20 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="bg-white/95 text-brand-navy text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                        {course.shortTitle}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col">
                    <h3 className="text-xl font-serif font-bold text-brand-navy leading-tight">
                      {course.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-500 uppercase tracking-widest font-semibold">
                      {course.audience}
                    </p>
                    <p className="mt-4 text-sm text-slate-600 leading-relaxed flex-1">
                      {course.summary}
                    </p>
                    <span className="mt-6 text-brand-red font-bold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Saber mais →
                    </span>
                  </div>
                </Link>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
