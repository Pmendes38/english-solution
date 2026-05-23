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
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* glows */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[var(--brand-blue)] rounded-full blur-[140px] opacity-50 pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-[var(--accent)] rounded-full blur-[160px] opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-brand-grid bg-[length:32px_32px] opacity-30 pointer-events-none" />

      <div className="container-x relative z-10 pt-12 lg:pt-20 pb-12 lg:pb-20 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial="hidden" animate="visible" variants={container}>
          <motion.span variants={fadeUp} transition={{ duration: 0.5 }} className="eyebrow">
            INGLÊS QUE TRANSFORMA
          </motion.span>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="heading-display mt-5 text-[clamp(2.5rem,6vw,4.5rem)]"
          >
            Domine o inglês.
            <br />
            Expanda o mundo.
            <br />
            <span className="text-[var(--accent)]">Seja imersivo.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-7 text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl"
          >
            Na English Solution, você aprende inglês de verdade: com fluência,
            confiança e resultados que se refletem na vida real.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-9"
          >
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Agendar Aula Experimental
              <span aria-hidden="true">→</span>
            </a>
            <Link href="/metodologia" className="btn-secondary">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
                <path d="M3 2l9 5-9 5V2z" />
              </svg>
              Como funciona
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--brand-blue)]/40 via-transparent to-[var(--accent)]/20 rounded-[40px] blur-3xl" />

          <Image
            src={ASSETS.photos.heroHome}
            alt="Aluna da English Solution sorrindo, com símbolos da Inglaterra e EUA ao fundo"
            width={1200}
            height={1200}
            priority
            className="relative z-10 w-full h-auto"
          />

          {/* Card branco flutuante */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute -bottom-4 right-4 lg:right-8 z-20 bg-white rounded-2xl shadow-2xl p-4 flex items-center gap-3 max-w-[260px]"
          >
            <div className="w-11 h-11 rounded-xl bg-[var(--accent)] flex items-center justify-center flex-shrink-0">
              <Image src={ASSETS.icons.calendario} alt="" width={26} height={26} />
            </div>
            <div className="leading-tight">
              <div className="text-[10px] uppercase tracking-widest text-[var(--accent)] font-bold">
                AULA EXPERIMENTAL
              </div>
              <div className="text-[var(--brand-gray-dark)] font-bold text-sm">
                Gratuita e sem compromisso
              </div>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] text-xs font-bold mt-1 inline-block hover:underline"
              >
                Quero experimentar →
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
