import Link from "next/link";
import { featuredCourses } from "@/data/site";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

export default function FeaturedCourses() {
  return (
    <section id="cursos" className="py-16 lg:py-20">
      <div className="container-x">
        <div className="backdrop-blur-md bg-white/[0.04] border border-white/10 rounded-2xl p-7 lg:p-12">
          <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div className="max-w-xl">
              <span className="eyebrow">NOSSOS CURSOS</span>
              <h2 className="heading-display mt-4 text-3xl lg:text-4xl">
                Um inglês que funciona<br />para sua realidade
              </h2>
            </div>

            <Link href="/cursos" className="btn-secondary text-sm self-start">
              Ver todos os cursos →
            </Link>
          </Reveal>

          <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredCourses.map((c) => (
              <StaggerItem key={c.slug}>
                <Link
                  href={`/cursos/${c.slug}`}
                  className="group block relative aspect-[4/5] rounded-xl overflow-hidden transition-all"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.image}
                    alt={c.title}
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#000b1e] via-[#000b1e]/60 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="inline-block bg-white text-[#000b1e] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                      {c.tag}
                    </span>
                    <h3 className="text-white font-bold text-base lg:text-lg leading-snug">
                      {c.title}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-1 text-[var(--accent)] font-bold text-sm group-hover:translate-x-1 transition-transform">
                      Saiba mais →
                    </span>
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
