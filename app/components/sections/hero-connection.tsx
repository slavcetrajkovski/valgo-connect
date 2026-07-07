/**
 * Hero business visual — an abstract US ↔ North Macedonia connection.
 * Pure SVG/CSS (no JS): a curved link between two glowing nodes with a
 * flowing arc and a travelling pulse, framed by vetted-talent role chips.
 * All motion is CSS-driven, so the global reduced-motion rule freezes it.
 */

const ARC = "M140,170 C 250,70 345,115 410,255";

/** Vetted-talent chips — spread across roles, not just IT. */
const ROLE_CHIPS = [
  { label: "Full-Stack Engineer", left: "46%", top: "11%", delay: "0s" },
  { label: "Product Designer", left: "82%", top: "28%", delay: "0.7s" },
  { label: "Accountant", left: "87%", top: "43%", delay: "1.4s" },
  { label: "Marketing Lead", left: "19%", top: "70%", delay: "2.1s" },
  { label: "Operations Manager", left: "34%", top: "56%", delay: "2.8s" },
];

export function HeroConnection() {
  return (
    <div className="animate-rise mx-auto w-full max-w-160">
      <div className="relative aspect-5/4 w-full select-none">
      {/* soft brand glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 70% at 62% 46%, rgba(71,181,163,0.28) 0%, transparent 62%)",
        }}
      />
      <svg
        viewBox="0 0 560 460"
        className="absolute inset-0 h-full w-full overflow-visible"
        role="img"
        aria-label="A vetted professional in North Macedonia connected to a business in the United States"
      >
        <defs>
          <linearGradient id="arc-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--teal-300)" />
            <stop offset="100%" stopColor="var(--lime-300)" />
          </linearGradient>
        </defs>

        {/* faint base arc */}
        <path
          d={ARC}
          fill="none"
          stroke="rgba(203,232,82,0.18)"
          strokeWidth="1.5"
        />
        {/* flowing dashed arc */}
        <path
          d={ARC}
          fill="none"
          stroke="url(#arc-grad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="6 10"
          style={{ animation: "arc-flow 1.1s linear infinite" }}
        />
        {/* travelling pulse riding the arc */}
        <circle
          r="4.5"
          fill="var(--lime-100)"
          style={{
            offsetPath: `path("${ARC}")`,
            animation: "arc-travel 3.2s var(--ease-in-out-soft) infinite",
          }}
        />

        {/* US node */}
        <g>
          <circle
            cx="140"
            cy="170"
            r="12"
            fill="rgba(71,181,163,0.5)"
            style={{
              transformBox: "fill-box",
              transformOrigin: "center",
              animation: "node-ping 2.6s var(--ease-out-expo) infinite",
            }}
          />
          <circle cx="140" cy="170" r="7" fill="var(--teal-300)" />
          <circle cx="140" cy="170" r="3" fill="var(--paper)" />
        </g>

        {/* North Macedonia node — the Valgo hub (emblem overlaid in HTML) */}
        <circle
          cx="410"
          cy="255"
          r="18"
          fill="rgba(166,204,46,0.45)"
          style={{
            transformBox: "fill-box",
            transformOrigin: "center",
            animation: "node-ping 2.6s var(--ease-out-expo) 0.6s infinite",
          }}
        />
      </svg>

      {/* Valgo emblem — the Macedonia hub */}
      <span
        className="absolute flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-lime-300/40 bg-teal-900 shadow-glow-lime"
        style={{ left: "73%", top: "55%" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- local brand asset */}
        <img
          src="/brand/logomark-lime.png"
          alt="Valgo"
          className="h-8 w-8 object-contain"
        />
      </span>

      {/* location labels */}
      <span
        className="absolute -translate-x-1/2 text-[11px] font-semibold uppercase tracking-[0.16em] text-fg-on-dark-2"
        style={{ left: "25%", top: "43%" }}
      >
        United States
      </span>
      <span
        className="absolute -translate-x-1/2 text-xs font-semibold uppercase tracking-[0.16em] text-lime-300"
        style={{ left: "73%", top: "65%" }}
      >
        North Macedonia
      </span>

      {/* vetted-talent role chips */}
      {ROLE_CHIPS.map((chip) => (
        <span
          key={chip.label}
          className="absolute hidden -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-pill border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-fg-on-dark backdrop-blur-sm sm:inline-flex"
          style={{
            left: chip.left,
            top: chip.top,
            animation: `chip-float 5s ease-in-out ${chip.delay} infinite`,
          }}
        >
          <span className="text-lime-300" aria-hidden>
            ✓
          </span>
          {chip.label}
        </span>
      ))}
      {/* "and more" — the roster runs deeper than what's shown */}
      <span
        className="absolute hidden -translate-x-1/2 items-center whitespace-nowrap rounded-pill border border-dashed border-white/20 px-3 py-1.5 text-xs font-medium text-fg-on-dark-2 sm:inline-flex"
        style={{
          left: "62%",
          top: "78%",
          animation: "chip-float 5s ease-in-out 3.5s infinite",
        }}
      >
        + more roles
      </span>

      {/* value caption */}
      <span
        className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded-pill border border-white/10 bg-teal-900/70 px-3 py-1.5 text-[11px] text-fg-on-dark-2 backdrop-blur-md sm:px-4 sm:py-2 sm:text-sm"
        style={{ top: "89%" }}
      >
        Same working hours ·{" "}
        <span className="accent-serif text-lime-300">a fraction of the cost</span>
      </span>
      </div>

      {/* mobile role list — chips read as a wrapped list below the visual */}
      <ul className="mt-6 flex flex-wrap justify-center gap-2 sm:hidden">
        {ROLE_CHIPS.map((chip) => (
          <li
            key={chip.label}
            className="inline-flex items-center gap-1.5 rounded-pill border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-fg-on-dark"
          >
            <span className="text-lime-300" aria-hidden>
              ✓
            </span>
            {chip.label}
          </li>
        ))}
        <li className="inline-flex items-center rounded-pill border border-dashed border-white/20 px-3 py-1.5 text-xs font-medium text-fg-on-dark-2">
          + more roles
        </li>
      </ul>
    </div>
  );
}
