"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const LINKS = [
  { label: "What we offer", href: "#offer" },
  { label: "Why North Macedonia", href: "#why" },
  { label: "How it works", href: "#how" },
  { label: "FAQ", href: "#faq" },
];

/**
 * Mobile menu — a left-side drawer that slides in over a dimmed backdrop.
 * Dependency-free (no Radix/shadcn) so it stays aligned with the project's
 * bespoke Tailwind v4 theme. Locks body scroll and closes on Esc / backdrop.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-fg-on-dark transition-colors hover:border-lime-300 hover:text-lime-300"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          aria-hidden
        >
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </button>

      {/* backdrop */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden
        className={`fixed inset-0 z-40 bg-teal-900/70 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!open}
        className={`fixed inset-y-0 left-0 z-50 flex w-[86%] max-w-sm flex-col bg-linear-to-b from-teal-800 to-teal-900 shadow-xl transition-transform duration-[400ms] ease-out-expo ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* lime spine — a bright accent down the trailing edge */}
        <span
          aria-hidden
          className="absolute inset-y-0 right-0 w-1 bg-linear-to-b from-lime-300 to-lime-600"
        />

        <div className="flex items-center justify-between px-6 pt-6">
          <Image
            src="/brand/logo-horizontal-white.png"
            alt="Valgo Connect"
            width={160}
            height={36}
            className="h-9 w-auto"
          />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-fg-on-dark transition-colors hover:bg-white/10"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden
            >
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        <nav className="mt-8 flex flex-col gap-1 px-3">
          {LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between rounded-xl px-3 py-3.5 text-2xl font-medium text-fg-on-dark transition-colors hover:bg-white/5 hover:text-lime-300"
            >
              {label}
              <span
                aria-hidden
                className="text-fg-on-dark-2 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-lime-300"
              >
                →
              </span>
            </a>
          ))}
        </nav>

        <div className="mt-auto border-t border-white/10 p-6">
          {/* TODO: point at cal.com booking link */}
          <a
            href="#book"
            onClick={() => setOpen(false)}
            className="btn btn-accent btn-lg w-full"
          >
            Book a call
            <span aria-hidden>→</span>
          </a>
        </div>
      </aside>
    </div>
  );
}
