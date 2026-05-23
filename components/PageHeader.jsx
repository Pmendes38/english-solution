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
    <section className="relative bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy-light text-white py-20 lg:py-28 overflow-hidden">
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-red rounded-full blur-3xl opacity-30" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-brand-navy-light rounded-full blur-3xl opacity-40" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="container-x relative z-10 max-w-4xl"
      >
        {eyebrow && (
          <motion.span
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="inline-block uppercase tracking-[0.25em] text-xs font-semibold text-brand-red"
          >
            {eyebrow}
          </motion.span>
        )}
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="font-serif font-bold text-4xl lg:text-6xl mt-4 leading-tight"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-6 text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl"
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
