"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { contact, heroStats } from "@/data/site";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-br from-white via-white to-brand-cream py-20 lg:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-brand-grid bg-[length:24px_24px] opacity-40 pointer-events-none" />

      <motion.div
        initial={{ x: -80, y: -40, opacity: 0, rotate: 0 }}
        animate={{ x: -80, y: -40, opacity: 0.95, rotate: 12 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 w-72 h-72 bg-brand-navy rounded-[60px]"
      />
      <motion.div
        initial={{ x: 60, y: 60, opacity: 0, rotate: 0 }}
        animate={{ x: 60, y: 60, opacity: 0.95, rotate: 12 }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -bottom-24 -right-16 w-80 h-80 bg-brand-red rounded-[60px]"
      />

      <div className="container-x grid lg:grid-cols-2 gap-14 items-center relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 bg-white shadow-md rounded-full px-4 py-2 text-sm font-semibold text-brand-navy mb-6 border border-slate-200"
          >
            <span className="text-yellow-500">★</span>
            <span>5.0 no Google • 190+ avaliações reais</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="heading-display text-5xl lg:text-7xl"
          >
            Você fala inglês{" "}
            <span className="text-brand-red">desde o primeiro dia.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-6 text-lg lg:text-xl text-slate-600 leading-relaxed max-w-xl"
          >
            Aprenda inglês falando, praticando e vivendo o idioma. Sem
            enrolação. Sem depender de livros caros. Conversação prática desde
            a primeira aula.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-10"
          >
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-5"
            >
              Agendar Aula Experimental
            </a>
            <Link href="/metodologia" className="btn-secondary text-lg px-8 py-5">
              Conhecer Metodologia
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-8 mt-10 text-sm text-slate-600 font-medium"
          >
            {heroStats.map((stat) => (
              <div key={stat.value}>
                <span className="block text-3xl font-serif font-bold text-brand-navy">
                  {stat.value}
                </span>
                {stat.label}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -top-6 -left-6 w-full h-full border-4 border-brand-navy rounded-[40px]" />

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop"
            alt="Alunos da English Solution conversando em inglês"
            className="rounded-[40px] shadow-2xl object-cover h-[560px] lg:h-[650px] w-full relative z-10"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute -bottom-6 -right-6 z-20 bg-white rounded-2xl shadow-2xl px-5 py-4 flex items-center gap-3"
          >
            <Image
              src="/brand/logo.svg"
              alt=""
              width={42}
              height={42}
              aria-hidden="true"
            />
            <div className="leading-tight">
              <div className="text-xs uppercase tracking-widest text-brand-red font-bold">
                Aula experimental
              </div>
              <div className="text-brand-navy font-bold">Gratuita</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
