import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import HoverCard from "@/components/motion/HoverCard";
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
        <StaggerGroup className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <StaggerItem key={course.slug}>
              <HoverCard className="h-full">
                <Link
                  href={`/cursos/${course.slug}`}
                  className="group h-full block bg-white rounded-3xl overflow-hidden border border-slate-200 hover:shadow-2xl transition-shadow shadow-sm flex flex-col"
                >
                  <div className="relative h-60 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={course.image}
                      alt={course.title}
                      className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/20 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="bg-white/95 text-brand-navy text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                        {course.shortTitle}
                      </span>
                      <span className="text-white/90 text-xs font-semibold">
                        {course.format}
                      </span>
                    </div>
                  </div>

                  <div className="p-7 flex flex-col flex-1">
                    <h2 className="text-2xl font-serif font-bold text-brand-navy leading-tight">
                      {course.title}
                    </h2>
                    <p className="mt-3 text-sm text-slate-500">
                      {course.audience}
                    </p>
                    <p className="mt-5 text-slate-600 leading-relaxed flex-1">
                      {course.summary}
                    </p>
                    <span className="mt-7 text-brand-red font-bold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Saber mais →
                    </span>
                  </div>
                </Link>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <CTA />
    </>
  );
}
