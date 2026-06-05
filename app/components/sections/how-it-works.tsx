import Image from "next/image";
import { Parallax, Reveal } from "@/app/components/motion";

/** Editorial image + text row explaining the screening flow. */
export function HowItWorks() {
  return (
    <section id="how" className="mx-auto w-full max-w-6xl px-6 py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <Parallax speed={0.08}>
            <div className="surface-mesh relative flex aspect-[9/7] w-full items-center justify-center overflow-hidden rounded-2xl">
              <div
                aria-hidden
                className="absolute left-1/2 top-1/2 h-3/5 w-3/5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-500/20 blur-3xl"
              />
              <Image
                src="/brand/logomark-lime.png"
                alt="Valgo Connect winged lynx emblem"
                width={520}
                height={380}
                className="relative w-2/3 max-w-[360px] object-contain"
                priority
              />
            </div>
          </Parallax>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">
            How it works
          </p>
          <h2 className="mt-4 font-sans text-display-lg text-fg1">
            Talent that clears the bar{" "}
            <span className="accent-serif text-teal-700">
              before you spend a minute.
            </span>
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-fg2">
            Every candidate passes a technical and communication screen. Share a
            role, and a matched shortlist lands in your inbox within 72 hours,
            contract-ready, with no sourcing slog.
          </p>
          <div className="mt-7 flex flex-wrap gap-x-10 gap-y-3 text-sm font-medium text-fg1">
            <span>✓ Vetted seniors</span>
            <span>✓ EU + US overlap</span>
            <span>✓ 30-day swap</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
