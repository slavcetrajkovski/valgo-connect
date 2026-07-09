import { HeroConnection } from "@/app/components/sections/hero-connection";
import { BOOKING_URL } from "@/app/lib/links";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-dark">
      {/* dotted texture across the whole hero, feathered top & bottom */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(203,232,82,0.12) 1.1px, transparent 1.1px)",
          backgroundSize: "22px 22px",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, #000 18%, #000 70%, transparent)",
          maskImage:
            "linear-gradient(to bottom, transparent, #000 18%, #000 70%, transparent)",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-336 grid-cols-1 items-center gap-14 px-6 pb-20 pt-32 lg:grid-cols-[1fr_0.9fr] lg:gap-10 lg:pb-28 lg:pt-40">
        {/* Copy — left */}
        <div className="max-w-2xl text-center lg:text-left">
          <h1 className="font-sans text-display-2xl text-lime-300 lg:text-display-lg">
            <span className="block lg:whitespace-nowrap">Same talent.</span>
            <span className="accent-serif block lg:whitespace-nowrap">
              A fraction of the cost.
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-135 text-lg leading-relaxed text-fg-on-dark-2 lg:mx-0 lg:mt-6 lg:text-xl">
            Valgo Connect connects US businesses with vetted European
            professionals, fully managed and ready to work inside your existing
            workflow.
          </p>
          <div className="mt-8 flex justify-center lg:mt-10 lg:justify-start">
            <a
              className="btn btn-accent btn-lg w-full sm:w-auto"
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Find your team
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        {/* Business visual — right */}
        <HeroConnection />
      </div>
    </section>
  );
}
