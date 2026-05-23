"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import ReviewModal from "@/components/ReviewModal";

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 20 20"
          fill={i < count ? "#FBBC04" : "#E5E7EB"}
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9 4.8 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleG() {
  return (
    <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.5 6.1 29.5 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.3-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.5 6.1 29.5 4 24 4 16.3 4 9.7 8.4 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.4 0 10.3-2 14-5.4l-6.5-5.3C29.6 35 26.9 36 24 36c-5.3 0-9.7-3.1-11.3-7.5l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.3 4.1-4.2 5.4l6.5 5.3C40.6 35.5 44 30.2 44 24c0-1.3-.1-2.3-.4-3.5z" />
    </svg>
  );
}

function initials(name) {
  if (!name) return "?";
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
}

function avatarColor(name) {
  const colors = [
    "bg-blue-600",
    "bg-emerald-600",
    "bg-rose-600",
    "bg-amber-600",
    "bg-violet-600",
    "bg-sky-600",
    "bg-pink-600",
  ];
  const i =
    name?.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0) %
      colors.length || 0;
  return colors[i];
}

function ReviewCard({ review, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex-shrink-0 w-[340px] sm:w-[380px] bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-brand-red/30 transition-all text-left flex flex-col h-[260px] focus:outline-none focus:ring-2 focus:ring-brand-red/40"
      aria-label={`Ler avaliação completa de ${review.author}`}
    >
      <div className="flex items-center gap-3">
        {review.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={review.photo}
            alt={review.author}
            className="w-11 h-11 rounded-full object-cover flex-shrink-0"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div
            className={`w-11 h-11 rounded-full ${avatarColor(
              review.author
            )} text-white flex items-center justify-center font-bold flex-shrink-0`}
            aria-hidden="true"
          >
            {initials(review.author)}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-brand-navy truncate">
            {review.author}
          </div>
          <div className="flex items-center gap-2 mt-0.5">
            <Stars count={Math.round(review.rating)} />
            <span className="text-xs text-slate-500 truncate">
              {review.relativeTime}
            </span>
          </div>
        </div>
        <GoogleG />
      </div>

      <p className="mt-4 text-slate-700 text-sm leading-relaxed line-clamp-5 flex-1">
        {review.text}
      </p>

      <span className="mt-3 text-brand-red font-bold text-sm inline-flex items-center gap-1">
        Ler avaliação completa →
      </span>
    </button>
  );
}

export default function ReviewsMarquee({ reviews }) {
  const [selected, setSelected] = useState(null);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef(null);

  if (!reviews?.length) return null;

  // Triplicate so the loop is seamless even with few reviews
  const loop = [...reviews, ...reviews, ...reviews];

  // Speed: ~25s per "set"; adjust to taste
  const setWidth = reviews.length * 396; // approx card+gap width
  const duration = Math.max(20, reviews.length * 6);

  return (
    <>
      <div
        ref={containerRef}
        className="relative overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10" />

        <motion.div
          className="flex gap-4"
          animate={{ x: paused ? undefined : [0, -setWidth] }}
          transition={{
            duration,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ width: "max-content" }}
        >
          {loop.map((r, i) => (
            <ReviewCard
              key={`${r.author}-${i}`}
              review={r}
              onClick={() => setSelected(r)}
            />
          ))}
        </motion.div>
      </div>

      <ReviewModal review={selected} onClose={() => setSelected(null)} />
    </>
  );
}
