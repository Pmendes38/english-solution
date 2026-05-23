"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { contact, navigation } from "@/data/site";
import { ASSETS } from "@/lib/assets";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--bg-base)]/80 backdrop-blur-md border-b border-white/5">
      <div className="container-x flex items-center justify-between h-[72px] gap-6">
        <Link href="/" className="flex items-center flex-shrink-0" aria-label="English Solution">
          <Image
            src={ASSETS.logo}
            alt="English Solution"
            width={150}
            height={56}
            priority
            className="h-12 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm">
          {navigation.primary.map((item) =>
            item.children ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setCoursesOpen(true)}
                onMouseLeave={() => setCoursesOpen(false)}
              >
                <Link
                  href={item.href}
                  className="font-medium text-[var(--text-secondary)] hover:text-white transition-colors flex items-center gap-1"
                >
                  {item.label}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    aria-hidden="true"
                    className={`transition-transform ${coursesOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                {coursesOpen && (
                  <div className="absolute top-full left-0 pt-3 w-72">
                    <div className="bg-[var(--bg-elevated)] border border-white/10 rounded-2xl shadow-2xl p-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-3 rounded-xl text-[var(--text-secondary)] hover:bg-white/5 hover:text-white transition-colors font-medium text-sm"
                        >
                          {child.label}
                        </Link>
                      ))}
                      <Link
                        href="/cursos"
                        className="block px-4 py-3 mt-1 rounded-xl text-[var(--accent)] font-bold border-t border-white/10 text-sm"
                      >
                        Ver todos os cursos →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="font-medium text-[var(--text-secondary)] hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center">
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            Agendar Aula Experimental
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden inline-flex flex-col gap-1.5 p-2"
          aria-label="Abrir menu"
          aria-expanded={mobileOpen}
        >
          <span className="w-6 h-0.5 bg-white" />
          <span className="w-6 h-0.5 bg-white" />
          <span className="w-6 h-0.5 bg-white" />
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-white/5 bg-[var(--bg-base)]">
          <div className="container-x py-6 flex flex-col gap-1">
            {navigation.primary.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 font-semibold text-white"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 pb-2 flex flex-col gap-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 text-sm text-[var(--text-secondary)]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-4"
            >
              Aula Experimental
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
