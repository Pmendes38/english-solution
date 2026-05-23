"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { videoTestimonials } from "@/data/site";

function VideoCard({ item }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (!item.videoSrc) return;
    const v = videoRef.current;
    if (!v) return;
    v.play();
    setPlaying(true);
  };

  return (
    <article className="group relative rounded-3xl overflow-hidden bg-[var(--bg-elevated)] aspect-[3/4] border border-white/5">
      {item.videoSrc ? (
        <video
          ref={videoRef}
          src={item.videoSrc}
          poster={item.poster}
          controls={playing}
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.poster}
          alt={item.name}
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
      )}

      {!playing && (
        <button
          type="button"
          onClick={handlePlay}
          disabled={!item.videoSrc}
          className="absolute inset-0 flex flex-col items-center justify-end p-6 bg-gradient-to-t from-[var(--bg-base)]/95 via-[var(--bg-base)]/30 to-transparent text-white"
          aria-label={`Reproduzir depoimento ${item.name}`}
        >
          <span className="w-16 h-16 rounded-full bg-[var(--accent)] text-white flex items-center justify-center shadow-2xl mb-auto mt-auto group-hover:scale-110 transition-transform">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor" aria-hidden="true">
              <path d="M5 3l14 8-14 8V3z" />
            </svg>
          </span>
          <div className="text-left w-full">
            <div className="font-bold text-lg">{item.name}</div>
            <div className="text-sm text-white/70">{item.role}</div>
          </div>
        </button>
      )}
    </article>
  );
}

export default function VideoTestimonials() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <span className="eyebrow mx-auto">DEPOIMENTOS EM VÍDEO</span>
          <h2 className="heading-display mt-5 text-4xl lg:text-5xl">
            Ouça quem já destravou o inglês com a gente.
          </h2>
          <p className="mt-5 text-[var(--text-secondary)] text-lg">
            Histórias reais de alunos que começaram travados e hoje conversam
            com naturalidade.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
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
      </div>
    </section>
  );
}
