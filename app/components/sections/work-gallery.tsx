import { Reveal } from "@/app/components/motion";
import { Photo } from "@/app/components/ui/photo";

type Work = {
  seed: string;
  role: string;
  company: string;
  outcome: string;
  ratio: string;
};

const WORK: Work[] = [
  {
    seed: "vteam-design",
    role: "Product design squad",
    company: "B2B SaaS",
    outcome: "Full rebrand shipped in 5 weeks",
    ratio: "aspect-[4/5]",
  },
  {
    seed: "vteam-react",
    role: "Senior React engineers",
    company: "Fintech scale-up",
    outcome: "In production by sprint two",
    ratio: "aspect-[4/3]",
  },
  {
    seed: "vteam-ops",
    role: "RevOps & data",
    company: "Marketplace",
    outcome: "Pipeline rebuilt, 3 roles filled",
    ratio: "aspect-square",
  },
  {
    seed: "vteam-brand",
    role: "Brand & motion",
    company: "Climate startup",
    outcome: "Launch film and site, one pod",
    ratio: "aspect-[4/3]",
  },
  {
    seed: "vteam-platform",
    role: "Platform team",
    company: "Health tech",
    outcome: "Infra migration, zero downtime",
    ratio: "aspect-[4/5]",
  },
  {
    seed: "vteam-fullstack",
    role: "Full-stack pod",
    company: "E-commerce",
    outcome: "Headless replatform in a quarter",
    ratio: "aspect-[4/3]",
  },
];

export function WorkGallery() {
  return (
    <section className="mx-auto mt-10 w-full max-w-6xl px-6 pb-24">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <Reveal>
          <h2 className="max-w-2xl text-balance font-sans text-display-lg text-fg1">
            See how teams{" "}
            <span className="accent-serif text-teal-700">
              build with Valgo.
            </span>
          </h2>
          <p className="mt-4 max-w-xl text-pretty text-lg text-fg2">
            A look at the squads we&rsquo;ve matched, and what they shipped.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <a
            href="#work"
            className="group inline-flex shrink-0 items-center gap-2 rounded-pill text-base font-semibold text-teal-700 transition-colors hover:text-teal-800"
          >
            View all case studies
            <span
              aria-hidden
              className="transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:transition-none"
            >
              →
            </span>
          </a>
        </Reveal>
      </div>

      <div className="mt-12 gap-x-5 [column-fill:balance] sm:columns-2 lg:columns-3">
        {WORK.map((w, i) => (
          <Reveal
            key={w.seed}
            delay={(i % 3) * 90}
            className="mb-5 break-inside-avoid"
          >
            <a
              href="#work"
              aria-label={`${w.role} for a ${w.company} — ${w.outcome}`}
              className="group block focus:outline-none"
            >
              <div className="relative overflow-hidden rounded-2xl bg-paper-3 shadow-sm ring-1 ring-ink/5 transition-shadow duration-300 group-hover:shadow-lg group-focus-visible:ring-2 group-focus-visible:ring-teal-500">
                <Photo
                  seed={w.seed}
                  width={800}
                  height={1000}
                  alt={`${w.role} for a ${w.company}`}
                  className={`w-full ${w.ratio} object-cover transition-transform duration-900 ease-out-expo group-hover:scale-[1.05] group-focus-visible:scale-[1.05] motion-reduce:transition-none motion-reduce:group-hover:scale-100`}
                />
                <span className="pointer-events-none absolute bottom-3 right-3 inline-flex translate-y-1 items-center gap-1.5 rounded-pill bg-lime-500 px-3 py-1.5 text-sm font-semibold text-teal-900 opacity-0 shadow-md transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none">
                  View work
                  <span aria-hidden>→</span>
                </span>
              </div>
              <div className="mt-3 px-1">
                <div className="text-[0.95rem] font-semibold text-fg1">
                  {w.role}
                </div>
                <div className="mt-0.5 text-sm text-fg2">
                  {w.company} · {w.outcome}
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
