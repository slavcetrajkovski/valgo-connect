"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Parallax — drifts its children as the element moves through the viewport.
 * `speed` 0.1–0.4 is subtle; negative drifts the other way.
 */
export function Parallax({
  speed = 0.18,
  className,
  children,
}: {
  speed?: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const fromCenter = rect.top + rect.height / 2 - window.innerHeight / 2;
      el.style.transform = `translate3d(0, ${(fromCenter * -speed).toFixed(2)}px, 0)`;
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}

/**
 * Reveal — fades + lifts its children into place the first time they
 * scroll into view. `delay` staggers items in a group.
 */
export function Reveal({
  delay = 0,
  className,
  children,
}: {
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className ?? ""} transition-all duration-700 ease-out ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/**
 * SlotNumber — rolls each digit like a slot reel the first time it scrolls
 * into view. Non-digit characters (+, %, k, "months") fade in. Settles on
 * the real value, so it degrades to plain text under reduced motion.
 */
export function SlotNumber({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [rolled, setRolled] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      setRolled(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRolled(true);
          io.disconnect();
        }
      },
      { threshold: 0.45 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const reduce = typeof window !== "undefined" && prefersReducedMotion();
  let digitIndex = 0;

  return (
    <span
      ref={ref}
      className={className}
      style={{ display: "inline-flex", alignItems: "flex-end", lineHeight: 1 }}
      aria-label={value}
    >
      {value.split("").map((ch, i) => {
        if (/[0-9]/.test(ch)) {
          const d = Number(ch);
          const delay = digitIndex * 110;
          digitIndex++;
          // strip holds 0-9 three times; land two cycles down for the roll
          const target = ((20 + d) * 100) / 30;
          return (
            <span
              key={i}
              aria-hidden
              style={{
                display: "inline-block",
                height: "1em",
                overflow: "hidden",
                verticalAlign: "bottom",
              }}
            >
              <span
                style={{
                  display: "flex",
                  flexDirection: "column",
                  transform: rolled
                    ? `translateY(-${target}%)`
                    : "translateY(0)",
                  transition: reduce
                    ? "none"
                    : `transform 1.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
                }}
              >
                {Array.from({ length: 30 }, (_, k) => (
                  <span
                    key={k}
                    style={{
                      display: "flex",
                      height: "1em",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {k % 10}
                  </span>
                ))}
              </span>
            </span>
          );
        }
        return (
          <span
            key={i}
            aria-hidden
            style={{
              whiteSpace: "pre",
              opacity: rolled ? 1 : 0,
              transition: reduce ? "none" : "opacity 0.5s ease 0.45s",
            }}
          >
            {ch}
          </span>
        );
      })}
    </span>
  );
}
