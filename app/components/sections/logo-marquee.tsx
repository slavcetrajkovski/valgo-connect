// Valgo logo variations used as ticker placeholders (dark/teal marks for the
// light background). Swap for real client logos later.
const LOGO_ROW_A = [
  "/brand/logo-horizontal.png",
  "/brand/wordmark-teal.png",
  "/brand/logomark-teal.png",
  "/brand/logo-emblem-teal.png",
  "/brand/wordmark-black.png",
  "/brand/logomark-teal.png",
  "/brand/wordmark-teal.png",
];

const LOGO_ROW_B = [
  "/brand/wordmark-black.png",
  "/brand/logo-emblem-teal.png",
  "/brand/logo-horizontal.png",
  "/brand/logomark-teal.png",
  "/brand/wordmark-teal.png",
  "/brand/logo-emblem-teal.png",
  "/brand/logomark-teal.png",
];

function MarqueeRow({
  logos,
  reverse,
  duration,
}: {
  logos: string[];
  reverse?: boolean;
  duration: string;
}) {
  return (
    <div className="marquee-x-row overflow-hidden">
      <div
        className={`marquee-x-track ${reverse ? "is-reverse" : ""}`}
        style={{ animationDuration: duration }}
      >
        {/* 4 copies so the loop unit (half the track) stays wider than the
            viewport — no empty gap appears before the loop repeats. */}
        {[...logos, ...logos, ...logos, ...logos].map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element -- local brand mark, intrinsic aspect varies
          <img
            key={i}
            src={src}
            alt=""
            className="mx-10 h-8 w-auto shrink-0 object-contain opacity-70"
          />
        ))}
      </div>
    </div>
  );
}

/** Two rows of brand logos scrolling in opposite directions. */
export function LogoMarquee() {
  return (
    <section className="border-y border-border bg-paper-2">
      <div className="mx-auto w-full max-w-6xl px-6 pb-7 pt-14 text-center">
        <p className="text-base text-fg2">
          Trusted by 300+ of the world&rsquo;s top teams
        </p>
      </div>
      <div className="relative space-y-6 pb-16">
        <MarqueeRow logos={LOGO_ROW_A} duration="42s" />
        <MarqueeRow logos={LOGO_ROW_B} duration="48s" reverse />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-paper-2 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-paper-2 to-transparent" />
      </div>
    </section>
  );
}
