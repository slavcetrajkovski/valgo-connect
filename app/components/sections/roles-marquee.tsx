import { HeroMarquee } from "@/app/components/sections/hero-marquee";
import { Reveal } from "@/app/components/motion";

/** "Every role" — the brand image ticker, two rows scrolling opposite ways. */
export function RolesMarquee() {
  return (
    <section className="relative overflow-hidden bg-bg-dark py-20 lg:py-28">
      <Reveal className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-fg-on-dark-2">
          One partner, every role
        </p>
        <h2 className="mx-auto mt-5 text-balance font-sans text-display-lg text-lime-300">
          Whoever you need,{" "}
          <span className="accent-serif">vetted and ready to deliver.</span>
        </h2>
      </Reveal>

      {/* horizontal image ticker — two rows, opposite directions */}
      <div
        aria-hidden
        className="relative mt-14 space-y-4 lg:mt-16 lg:space-y-5"
      >
        <HeroMarquee />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-bg-dark to-transparent lg:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-bg-dark to-transparent lg:w-32" />
      </div>
    </section>
  );
}
