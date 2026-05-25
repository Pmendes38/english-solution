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
    <section id="hero" className="relative overflow-visible">
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-[var(--brand-blue)] rounded-full blur-[160px] opacity-50 pointer-events-none" />
      <div className="absolute -bottom-20 right-1/4 w-[480px] h-[480px] bg-[var(--accent)] rounded-full blur-[180px] opacity-15 pointer-events-none" />
      <div className="absolute inset-0 bg-brand-grid bg-[length:32px_32px] opacity-30 pointer-events-none" />

      <div className="container-x relative z-10 pt-6 lg:pt-10 pb-10 lg:pb-16 grid lg:grid-cols-[1fr_0.95fr] gap-4 lg:gap-6 items-start">
        <motion.div initial="hidden" animate="visible" variants={container} className="lg:pr-8 lg:self-center lg:-mt-20">
          <motion.span variants={fadeUp} transition={{ duration: 0.5 }} className="eyebrow">
            INGLÊS QUE TRANSFORMA
          </motion.span>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="heading-display mt-6 text-[clamp(2.5rem,5.5vw,5.5rem)] lg:text-[clamp(2.4rem,4.2vw,5.8rem)]"
          >
            Você fala inglês
            <br />
            desde o primeiro dia.
            <br />
            <span className="text-[var(--accent)]">Seja Imersivo</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-8 text-lg lg:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl"
          >
            Na English Solution, você aprende inglês de verdade:
            com fluência, confiança e resultados que se refletem
            na vida real.
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
              className="btn-primary text-base px-8 py-5"
            >
              Agendar Aula Experimental
              <span aria-hidden="true">→</span>
            </a>
            <Link href="/metodologia" className="btn-secondary text-base px-8 py-5">
              <Image src={ASSETS.icons.play} alt="" width={22} height={22} />
              Como Funciona
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative -mr-6 sm:-mr-8 lg:-mr-12 xl:-mr-20"
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
