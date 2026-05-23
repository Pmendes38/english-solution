import Link from "next/link";
import { courses } from "@/data/site";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

export default function Courses() {
  return (
    <section id="cursos-todos" className="py-20 lg:py-28">
      <div className="container-x">
        <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="eyebrow">TODOS OS CURSOS</span>
            <h2 className="heading-display mt-5 text-4xl lg:text-5xl">
              Um inglês que funciona para sua realidade.
            </h2>
            <p className="mt-5 text-[var(--text-secondary)] text-lg">
              Do iniciante absoluto ao executivo em reunião internacional,
              temos um caminho desenhado para o seu objetivo.
            </p>
          </div>
          <Link href="/cursos" className="btn-secondary self-start">
            Ver catálogo completo →
          </Link>
        </Reveal>

        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {courses.map((course) => (
            <StaggerItem key={course.slug}>
              <Link
                href={`/cursos/${course.slug}`}
                className="group h-full block bg-[var(--bg-elevated)] rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 hover:-translate-y-1 transition-all flex flex-col"
              >
                <div className="relative h-52 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={course.image}
                    alt={course.title}
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-elevated)]/95 via-[var(--bg-elevated)]/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="bg-white text-[var(--brand-blue)] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                      {course.shortTitle}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {course.title}
                  </h3>
                  <p className="mt-3 text-xs text-[var(--text-muted)] uppercase tracking-widest font-semibold">
                    {course.audience}
                  </p>
                  <p className="mt-4 text-sm text-[var(--text-secondary)] leading-relaxed flex-1">
                    {course.summary}
                  </p>
                  <span className="mt-5 text-[var(--accent)] font-bold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Saber mais →
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
