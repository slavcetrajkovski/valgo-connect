import { HeroVideo } from "@/app/components/sections/hero-video";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-dark">
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
          World-class North Macedonian talent for US businesses: developers,
          designers, marketers, accountants and operators — screened, time-zone
          aligned and ready in days.
        </p>
        <div className="mt-8 w-full max-w-[420px] sm:w-auto lg:mt-10">
          <a className="btn btn-accent btn-lg w-full sm:w-auto" href="#start">
            Find your team
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>

      {/* showcase reel */}
      <HeroVideo />
    </section>
  );
}
