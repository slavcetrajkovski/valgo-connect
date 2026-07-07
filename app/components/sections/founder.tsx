import Image from "next/image";
import { Reveal } from "@/app/components/motion";

const LINKEDIN_URL = "https://www.linkedin.com/in/chris-ristovski/";

export function Founder() {
  return (
    <section id="founder" className="bg-paper-2">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.85fr)_1fr] lg:gap-16">
          <Reveal>
            <figure className="relative">
              <div className="overflow-hidden rounded-3xl bg-bg-dark shadow-lg ring-1 ring-ink/5">
                <Image
                  src="/chris.jpg"
                  alt="Chris, founder of Valgo Connect"
                  width={1024}
                  height={1024}
                  className="aspect-square w-full object-cover"
                  priority
                />
              </div>
              <figcaption className="mt-4 text-sm text-fg2">
                <span className="font-semibold text-fg1">Chris Ristovski</span>{" "}
                · Founder, Valgo Connect
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
              Meet the founder
            </p>
            <h2 className="mt-5 font-sans text-display-lg text-fg1">
              World-class talent isn&rsquo;t bound by{" "}
              <span className="accent-serif text-teal-700">a zip code.</span>
            </h2>

            <div className="mt-6 space-y-4 text-lg leading-relaxed text-fg2">
              <p>
                I&rsquo;m Chris. After 6 years building and scaling teams across
                the US and Europe, I kept running into the same thing:
                extraordinary engineers, designers and operators in North
                Macedonia, and US companies who never thought to look there.
                Valgo Connect exists to close that gap.
              </p>
              <p>
                Every professional we place is someone I&rsquo;d put on my own
                team. We handle the vetting, contracts, payroll and compliance,
                so you get the talent without the overhead, and a partner on the
                ground who actually knows the region, the people, and how to get
                things done here.
              </p>
              <p className="text-fg1">
                Don&rsquo;t take my word for it. Look me up.
              </p>
            </div>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2.5 rounded-pill bg-[#0A66C2] px-5 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3 0-2.95-1.8-2.95s-2.08 1.4-2.08 2.85V21H9z" />
              </svg>
              Connect with me on LinkedIn
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
