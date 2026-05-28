import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
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
        eyebrow="NOSSOS CURSOS"
        title="Tem um caminho certo pro seu inglês."
        description="Do primeiro 'hello' à reunião internacional. Escolha por onde começar — a gente te leva até a fluência."
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
          <Link href="/metodologia" className="btn-secondary">
            Ver metodologia
          </Link>
        </div>
      </PageHeader>

      <section className="py-16 lg:py-20">
        <StaggerGroup className="container-x grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((course) => (
            <StaggerItem key={course.slug}>
              <Link
                href={`/cursos/${course.slug}`}
                className="group h-full glass-panel overflow-hidden hover:border-white/20 hover:-translate-y-1 transition-all flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={course.image}
                    alt={course.title}
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-base)]/90 via-[var(--bg-base)]/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="bg-white text-[var(--brand-blue)] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                      {course.shortTitle}
                    </span>
                    <span className="text-white/80 text-[10px] font-semibold uppercase tracking-widest">
                      {course.format}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-bold text-white leading-tight">
                    {course.title}
                  </h2>
                  <p className="mt-2 text-xs text-[var(--text-muted)] uppercase tracking-widest font-semibold">
                    {course.audience}
                  </p>
                  <p className="mt-4 text-sm text-[var(--text-secondary)] leading-relaxed flex-1">
                    {course.summary}
                  </p>
                  <span className="mt-6 text-[var(--accent)] font-bold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Saber mais →
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <CTA />
    </>
  );
}
