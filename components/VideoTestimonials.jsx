"use client";

import { useRef, useState } from "react";
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
    <article className="group relative rounded-3xl overflow-hidden bg-brand-navy aspect-[3/4] shadow-xl">
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
          className="absolute inset-0 flex flex-col items-center justify-end p-6 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-transparent text-white"
          aria-label={`Reproduzir depoimento ${item.name}`}
        >
          <span className="w-16 h-16 rounded-full bg-white/95 text-brand-red flex items-center justify-center shadow-2xl mb-auto mt-auto group-hover:scale-110 transition-transform">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="currentColor"
              aria-hidden="true"
            >
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
    <section className="py-24 bg-brand-cream">
      <div className="container-x">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="eyebrow">Depoimentos em vídeo</span>
          <h2 className="heading-display text-4xl lg:text-5xl mt-4">
            Ouça quem já destravou o inglês com a gente.
          </h2>
          <p className="mt-5 text-slate-600 text-lg">
            Histórias reais de alunos que começaram travados e hoje conversam
            com naturalidade.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoTestimonials.map((item) => (
            <VideoCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
