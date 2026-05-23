"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "@/data/site";

export default function FAQ({ items, showAllLink = true, max = 3 }) {
  const list = items ?? (showAllLink ? faqs.slice(0, max) : faqs);
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="faq" className="py-16 lg:py-20">
      <div className="container-x max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="eyebrow mx-auto">DÚVIDAS RELEVANTES</span>
          <h2 className="heading-display mt-4 text-3xl lg:text-4xl">
            Perguntas que sempre recebemos
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
          className="space-y-3"
        >
          {list.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={item.question}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
                }}
                className="bg-[var(--bg-elevated)] border border-white/5 rounded-xl overflow-hidden hover:border-white/15 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4"
                >
                  <h3 className="text-white text-sm lg:text-base">
                    {item.question}
                  </h3>
                  <span
                    aria-hidden="true"
                    className={`text-[var(--accent)] text-xl font-bold transition-transform flex-shrink-0 leading-none ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-[var(--text-secondary)] text-sm leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {showAllLink && (
          <div className="mt-10 text-center">
            <Link href="/duvidas" className="btn-secondary text-sm">
              Ver todas as perguntas →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
