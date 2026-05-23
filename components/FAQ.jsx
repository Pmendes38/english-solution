"use client";

import Link from "next/link";
import { useState } from "react";
import { faqs } from "@/data/site";

export default function FAQ({ items, showAllLink = true }) {
  const list = items ?? faqs;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container-x max-w-4xl">
        <div className="text-center mb-12">
          <span className="eyebrow">FAQ</span>
          <h2 className="heading-display text-4xl lg:text-5xl mt-4">
            Dúvidas frequentes
          </h2>
        </div>

        <div className="space-y-4">
          {list.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="border border-slate-200 rounded-2xl bg-brand-cream/40 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-6 flex items-start justify-between gap-4"
                >
                  <h3 className="font-serif font-bold text-lg lg:text-xl text-brand-navy">
                    {item.question}
                  </h3>
                  <span
                    aria-hidden="true"
                    className={`text-brand-red text-2xl font-bold transition-transform flex-shrink-0 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {showAllLink && (
          <div className="mt-10 text-center">
            <Link href="/duvidas" className="btn-secondary">
              Ver todas as dúvidas
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
