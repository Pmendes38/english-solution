"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";

const milestones = [
  {
    label: "Mês 0",
    title: "Chegou sem saber nada",
    description: "Rafael começou do absoluto zero — não sabia montar uma frase em inglês.",
  },
  {
    label: "Durante o curso",
    title: "Conversação desde o início",
    description: "Aula após aula, falando de verdade, sem medo de errar.",
  },
  {
    label: "Menos de 1 ano",
    title: "Depoimento todo em inglês",
    description: "Gravou este vídeo inteiro em inglês, com confiança e naturalidade.",
  },
];

export default function RafaelEvolution() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current?.play();
    setPlaying(true);
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="container-x">
        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <span className="eyebrow mx-auto">DO ZERO À FLUÊNCIA</span>
          <h2 className="heading-display mt-4 text-3xl lg:text-5xl">
            A evolução do Rafael em menos de 1 ano
          </h2>
          <p className="mt-5 text-[var(--text-secondary)] text-lg">
            Ele chegou na English Solution sem saber nada de inglês. Em menos
            de um ano, gravou este depoimento inteiro no idioma. Dá o play.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-[420px_1fr] gap-10 lg:gap-16 items-center">
          {/* Vídeo vertical */}
          <Reveal>
            <div className="relative mx-auto w-full max-w-[380px] aspect-[9/16] rounded-3xl overflow-hidden glass-panel">
              <video
                ref={videoRef}
                src="/brand/videos/depoimento-rafael-ingles.mp4"
                poster="/brand/videos/depoimento-rafael-ingles-poster.jpg"
                controls={playing}
                playsInline
                preload="metadata"
                onPause={() => setPlaying(false)}
                onEnded={() => setPlaying(false)}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {!playing && (
                <button
                  type="button"
                  onClick={handlePlay}
                  aria-label="Reproduzir depoimento do Rafael"
                  className="group absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-[var(--bg-base)]/70 via-transparent to-[var(--bg-base)]/20"
                >
                  <span className="w-20 h-20 rounded-full bg-[var(--accent)] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <svg width="28" height="28" viewBox="0 0 22 22" fill="currentColor" aria-hidden="true">
                      <path d="M5 3l14 8-14 8V3z" />
                    </svg>
                  </span>
                  <span className="absolute bottom-5 left-5 right-5 text-left">
                    <span className="inline-block bg-white text-[var(--brand-blue)] text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      100% em inglês
                    </span>
                  </span>
                </button>
              )}
            </div>
          </Reveal>

          {/* Timeline da evolução */}
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute left-[19px] top-2 bottom-2 w-px bg-white/10 hidden sm:block" />
              <ul className="space-y-8">
                {milestones.map((m, i) => (
                  <li key={m.label} className="relative flex gap-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--accent)] text-white font-serif font-bold flex items-center justify-center relative z-10">
                      {i + 1}
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-widest font-bold text-[var(--accent)]">
                        {m.label}
                      </span>
                      <h3 className="text-white font-bold text-lg lg:text-xl mt-1">
                        {m.title}
                      </h3>
                      <p className="text-[var(--text-secondary)] mt-1 leading-relaxed">
                        {m.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10 glass-panel p-6">
                <p className="font-serif text-xl text-white leading-snug">
                  "Se eu consegui, qualquer um consegue. É só começar."
                </p>
                <div className="mt-3 text-sm">
                  <span className="text-white font-bold">Rafael</span>
                  <span className="text-[var(--accent)] font-semibold"> · Aluno English Solution</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
