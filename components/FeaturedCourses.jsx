import Link from "next/link";
import { featuredCourses } from "@/data/site";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

export default function FeaturedCourses() {
  return (
    <section id="cursos" className="py-16 lg:py-24">
      <div className="container-x">
        <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="eyebrow">NOSSOS CURSOS</span>
            <h2 className="heading-display mt-5 text-4xl lg:text-5xl">
              Um inglês que funciona<br />para sua realidade
            </h2>
          </div>

          <Link href="/cursos" className="btn-secondary self-start">
            Ver todos os cursos →
          </Link>
        </Reveal>

        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {featuredCourses.map((c) => (
            <StaggerItem key={c.slug}>
              <Link
                href={`/cursos/${c.slug}`}
                className="group block bg-[var(--bg-elevated)] rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 hover:-translate-y-1 transition-all"
              >
                <div className="relative aspect-[337/240] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.image}
                    alt={c.title}
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-elevated)] via-[var(--bg-elevated)]/30 to-transparent" />
                </div>
                <div className="px-6 pt-1 pb-7">
                  <span className="inline-block bg-[var(--accent)] text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                    {c.tag}
                  </span>
                  <h3 className="text-white font-bold text-base lg:text-lg leading-snug min-h-[3rem]">
                    {c.title}
                  </h3>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[var(--accent)] font-bold text-sm group-hover:translate-x-1 transition-transform">
                    Saiba mais →
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
