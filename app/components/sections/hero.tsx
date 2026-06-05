import { HeroMarquee } from "@/app/components/sections/hero-marquee";

/** Hero: centered lime serif headline, with a horizontal image marquee beneath. */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-dark">
      {/* centered copy */}
      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 pb-14 pt-32 text-center lg:pb-20 lg:pt-40">
        <h1
          className="text-balance font-sans text-display-2xl text-lime-300"
          style={{ letterSpacing: "0.1px" }}
        >
          Your{" "}
          <span className="accent-serif text-[calc(100%+4px)]">
            extended team,
          </span>{" "}
          already vetted.
        </h1>
        <p className="mt-5 max-w-[600px] text-lg leading-relaxed text-fg-on-dark-2 lg:mt-6 lg:text-xl">
          Senior engineers, designers and operators from Macedonia: screened,
          timezone-aligned and contract-ready in days.
        </p>
        <div className="mt-8 w-full max-w-[420px] sm:w-auto lg:mt-10">
          <a className="btn btn-accent btn-lg w-full sm:w-auto" href="#start">
            Find your team
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>

      {/* horizontal image marquee — two rows, opposite directions */}
      <div aria-hidden className="relative space-y-4 pb-20 lg:space-y-5 lg:pb-28">
        <HeroMarquee />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-bg-dark to-transparent lg:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-bg-dark to-transparent lg:w-32" />
      </div>
    </section>
  );
}
