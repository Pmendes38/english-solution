"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export default function PageHeader({ eyebrow, title, description, children }) {
  return (
    <section className="relative overflow-hidden pt-16 pb-12 lg:pt-24 lg:pb-16">
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-[var(--accent)] rounded-full blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[var(--brand-blue)] rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-brand-grid bg-[length:32px_32px] opacity-30 pointer-events-none" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="container-x relative z-10 max-w-4xl"
      >
        {eyebrow && (
          <motion.span variants={fadeUp} transition={{ duration: 0.5 }} className="eyebrow">
            {eyebrow}
          </motion.span>
        )}
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="heading-display mt-5 text-4xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-6 text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl"
          >
            {description}
          </motion.p>
        )}
        {children && (
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="mt-8">
            {children}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
