import Link from "next/link";
import Image from "next/image";
import { featuredCourses } from "@/data/site";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

export default function FeaturedCourses() {
  return (
    <section id="cursos" className="py-20 lg:py-28">
      <div className="container-x">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
          <Reveal className="relative pl-6">
            {/* bolinhas decorativas verticais */}
            <div className="absolute left-0 top-0 flex flex-col gap-1.5">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full ${
                    i === 0 ? "bg-[var(--accent)]" : "bg-white/20"
                  }`}
                />
              ))}
            </div>

            <span className="eyebrow">NOSSOS PROGRAMAS</span>
            <h2 className="heading-display mt-5 text-4xl lg:text-5xl">
              O inglês certo para cada fase da sua jornada.
            </h2>
            <p className="mt-6 text-[var(--text-secondary)] leading-relaxed">
              Cursos completos, flexíveis e práticos para você evoluir com
              consistência.
            </p>
            <Link
              href="/cursos"
              className="inline-flex items-center gap-2 mt-7 text-[var(--accent)] font-bold hover:gap-3 transition-all"
            >
              Ver todos os cursos
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>

          <StaggerGroup className="grid sm:grid-cols-2 gap-5">
            {featuredCourses.map((c) => (
              <StaggerItem key={c.slug}>
                <Link
                  href={`/cursos/${c.slug}`}
                  className="group relative block bg-[var(--bg-elevated)] rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 hover:-translate-y-1 transition-all"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={c.image}
                      alt={c.title}
                      className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-elevated)] via-[var(--bg-elevated)]/40 to-transparent" />

                    {c.badge && (
                      <span className="absolute top-3 left-3 bg-[var(--accent)] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                        {c.badge}
                      </span>
                    )}

                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <span className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--accent)] mb-2">
                        {c.tag}
                      </span>
                      <h3 className="text-white font-bold text-base lg:text-lg leading-tight">
                        {c.title}
                      </h3>
                    </div>

                    <div className="absolute bottom-5 right-5 w-9 h-9 rounded-full bg-[var(--accent)] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
