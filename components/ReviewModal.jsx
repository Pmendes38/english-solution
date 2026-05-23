"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
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
    <svg width="22" height="22" viewBox="0 0 48 48" aria-hidden="true">
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

export default function ReviewModal({ review, onClose }) {
  useEffect(() => {
    if (!review) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [review, onClose]);

  return (
    <AnimatePresence>
      {review && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-navy/70 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Avaliação de ${review.author}`}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-white rounded-3xl shadow-2xl max-w-xl w-full max-h-[85vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar avaliação"
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-brand-navy flex items-center justify-center transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <path
                  d="M4 4l8 8M12 4l-8 8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div className="p-7 border-b border-slate-100 flex items-center gap-4">
              {review.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={review.photo}
                  alt={review.author}
                  className="w-14 h-14 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div
                  className={`w-14 h-14 rounded-full ${avatarColor(
                    review.author
                  )} text-white flex items-center justify-center font-bold text-lg`}
                  aria-hidden="true"
                >
                  {initials(review.author)}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="font-serif font-bold text-brand-navy text-lg">
                  {review.author}
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Stars count={Math.round(review.rating)} />
                  <span className="text-sm text-slate-500">
                    {review.relativeTime}
                  </span>
                </div>
              </div>
              <GoogleG />
            </div>

            <div className="p-7 overflow-y-auto">
              <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                {review.text}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
