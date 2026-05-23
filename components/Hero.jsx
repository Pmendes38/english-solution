"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { contact } from "@/data/site";
import { ASSETS } from "@/lib/assets";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-[var(--brand-blue)] rounded-full blur-[140px] opacity-50 pointer-events-none" />
      <div className="absolute -bottom-20 right-1/4 w-[420px] h-[420px] bg-[var(--accent)] rounded-full blur-[160px] opacity-15 pointer-events-none" />
      <div className="absolute inset-0 bg-brand-grid bg-[length:32px_32px] opacity-30 pointer-events-none" />

      <div className="container-x relative z-10 pt-10 lg:pt-16 pb-12 lg:pb-16 grid lg:grid-cols-[1.05fr_1fr] gap-10 items-center">
        <motion.div initial="hidden" animate="visible" variants={container}>
          <motion.span variants={fadeUp} transition={{ duration: 0.5 }} className="eyebrow">
            INGLÊS QUE TRANSFORMA
          </motion.span>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="heading-display mt-5 text-[clamp(2.5rem,5vw,4rem)]"
          >
            Você fala inglês
            <br />
            desde o primeiro dia.
            <br />
            <span className="text-[var(--accent)]">Seja Imersivo.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-6 text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl"
          >
            Na English Solution, você aprende inglês de verdade:
            com fluência, confiança e resultados que se refletem
            na vida real.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Agendar Aula Experimental
            </a>
            <Link href="/metodologia" className="btn-secondary">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
                <path d="M3 2l9 5-9 5V2z" />
              </svg>
              Como Funciona
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <Image
            src={ASSETS.photos.heroHome}
            alt="Aluna da English Solution com símbolos do Reino Unido e EUA"
            width={1200}
            height={1200}
            priority
            className="relative z-10 w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
