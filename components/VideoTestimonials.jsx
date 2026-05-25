"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { videoTestimonials } from "@/data/site";

function VideoCard({ item }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (!item.videoSrc) return;
    videoRef.current?.play();
    setPlaying(true);
  };

  return (
    <article className="group relative rounded-2xl overflow-hidden bg-[var(--bg-elevated)] aspect-[4/5] border border-white/5">
      {item.videoSrc ? (
        <video
          ref={videoRef}
          src={item.videoSrc}
          poster={item.poster}
          controls={playing}
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : item.poster ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.poster}
          alt={item.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : null}

      {!playing && (
        <button
          type="button"
          onClick={handlePlay}
          disabled={!item.videoSrc}
          className="absolute inset-0 flex flex-col items-center justify-end p-5 bg-gradient-to-t from-[var(--bg-base)]/95 via-[var(--bg-base)]/40 to-transparent text-white"
          aria-label={`Reproduzir depoimento ${item.name}`}
        >
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform">
            <svg width="56" height="56" viewBox="0 0 42 42" fill="none" aria-hidden="true">
              <path d="M17 27.2857V14.7143L28.4286 20.3732L17 27.2857Z" fill="white" />
              <path d="M41 21C41 32.0457 32.0457 41 21 41C9.95431 41 1 32.0457 1 21C1 9.95431 9.95431 1 21 1C32.0457 1 41 9.95431 41 21Z" stroke="white" strokeWidth="2" />
              <path d="M17 27.2857V14.7143L28.4286 20.3732L17 27.2857Z" stroke="white" strokeWidth="2" />
            </svg>
          </span>
          <div className="text-left w-full">
            <div className="font-bold">{item.name}</div>
            <div className="text-xs text-white/70">{item.role}</div>
          </div>
        </button>
      )}
    </article>
  );
}

export default function VideoTestimonials() {
  return (
    <section className="py-16 lg:py-20">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start"
        >
          {/* Left col */}
          <div className="lg:w-1/3 flex-shrink-0">
            <span className="eyebrow">HISTÓRIAS REAIS</span>
            <h2 className="heading-display mt-4 text-3xl lg:text-4xl">
              Ouça quem já destravou o inglês com a gente
            </h2>
            <p className="mt-4 text-[var(--text-secondary)]">
              Alunos reais. Resultados reais.
            </p>
            <a href="#depoimentos" className="btn-secondary mt-6 self-start text-sm inline-flex">
              Ver mais depoimentos →
            </a>
          </div>

          {/* Right col */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            className="lg:w-2/3 grid sm:grid-cols-3 gap-5 w-full"
          >
            {videoTestimonials.map((item) => (
              <motion.div
                key={item.name}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
                }}
              >
                <VideoCard item={item} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
