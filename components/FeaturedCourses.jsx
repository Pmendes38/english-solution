"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion } from "framer-motion";
import { featuredCourses } from "@/data/site";
import Reveal from "@/components/motion/Reveal";

function CourseCard({ course }) {
  return (
    <Link
      href={`/cursos/${course.slug}`}
      className="group flex-shrink-0 w-[280px] sm:w-[310px] lg:w-[338px] block relative rounded-[10px] overflow-hidden select-none"
      style={{ aspectRatio: "338/425" }}
      draggable={false}
    >
      {/* Photo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={course.image}
        alt={course.tag}
        className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
        draggable={false}
      />

      {/* Gradient overlay — top transparent → bottom dark (matches Figma) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(3,30,77,0) 12.85%, #000b1e 73.88%)",
        }}
      />

      {/* Border overlay */}
      <div className="absolute inset-0 rounded-[10px] border-2 border-white/40 pointer-events-none" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        {/* Badge */}
        <span className="inline-block bg-white text-[#000c1f] text-[13px] font-semibold tracking-[0.15px] px-3 py-1 rounded-[8px] mb-3">
          {course.tag}
        </span>

        <h3 className="text-white font-semibold text-xl lg:text-[22px] leading-tight">
          {course.title}
        </h3>

        <p className="mt-1 text-white/80 font-light text-sm lg:text-[15px] leading-snug">
          {course.subtitle}
        </p>

        <span className="mt-3 inline-flex items-center gap-1.5 text-[#dc1e28] font-semibold text-base group-hover:translate-x-1 transition-transform">
          Saiba mais →
        </span>
      </div>
    </Link>
  );
}

export default function FeaturedCourses() {
  const containerRef = useRef(null);

  return (
    <section id="cursos" className="py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[var(--brand-blue)] rounded-full blur-[160px] opacity-[0.12] pointer-events-none" />
      <div className="container-x">
        <div className="glass-panel rounded-2xl p-7 lg:p-12">
          <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div className="max-w-xl">
              <span className="eyebrow">NOSSOS CURSOS</span>
              <h2 className="heading-display mt-4 text-3xl lg:text-4xl">
                Um inglês que funciona<br />para sua realidade
              </h2>
            </div>

            <Link href="/cursos" className="btn-secondary text-sm self-start flex-shrink-0">
              Ver todos os cursos →
            </Link>
          </Reveal>

          {/* Draggable scroll container */}
          <div ref={containerRef} className="overflow-hidden -mx-1 px-1">
            <motion.div
              drag="x"
              dragConstraints={containerRef}
              dragElastic={0.08}
              dragMomentum={false}
              className="flex gap-4 lg:gap-5 cursor-grab active:cursor-grabbing"
              style={{ width: "max-content" }}
            >
              {featuredCourses.map((c) => (
                <CourseCard key={c.slug} course={c} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
