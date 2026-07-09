import { Reveal } from "@/app/components/motion";
import { BOOKING_URL } from "@/app/lib/links";

/** Closing call-to-action band. */
export function CtaBand() {
  return (
    <section id="start" className="surface-dark">
      <div className="mx-auto w-full max-w-6xl px-6 py-28 text-center md:py-40">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-sans text-display-xl text-fg-on-dark">
            Build your team{" "}
            <span className="accent-serif text-lime-300">this week.</span>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-5 max-w-xl text-lg text-fg-on-dark-2">
            Tell us the role. We&apos;ll send a matched shortlist within 72
            hours. No retainers, no risk.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              className="btn btn-accent btn-lg"
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Find your team
              <span aria-hidden>→</span>
            </a>
            <a
              className="btn btn-lg border border-white/25 text-fg-on-dark hover:bg-white/10"
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Talk to us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
