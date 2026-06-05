import { Reveal, SlotNumber } from "@/app/components/motion";

const ROI_STATS = [
  {
    value: "300+",
    desc: "Startups, scale-ups and enterprises trust Valgo to staff senior talent, fast.",
  },
  {
    value: "12k+",
    desc: "Engineering and design hours delivered across client teams every month.",
    link: true,
  },
  {
    value: "94%",
    desc: "Of trial engagements convert into long-term hires.",
  },
  {
    value: "72h",
    desc: "Median time from a brief to a matched, contract-ready shortlist.",
    link: true,
  },
];

/** "Success in numbers" — headline figures roll into place like a slot reel. */
export function RoiStats() {
  return (
    <section id="proof" className="bg-paper-2">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 lg:py-32">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-fg3">
            Success in numbers
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl text-balance font-sans text-display-xl text-fg1">
            The best return on{" "}
            <span className="accent-serif">your investment</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-16 gap-y-12 lg:grid-cols-2 lg:gap-y-20">
          {ROI_STATS.map((r, i) => (
            <Reveal key={r.value} delay={i * 80}>
              <div className="flex items-end justify-between gap-6 border-b border-border pb-6">
                <div className="max-w-[16rem]">
                  <p className="leading-relaxed text-fg2">{r.desc}</p>
                  {r.link && (
                    <a
                      href="#"
                      className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-fg1 transition-colors hover:text-teal-700"
                    >
                      Read the talent benchmark report
                      <span aria-hidden>↗</span>
                    </a>
                  )}
                </div>
                <SlotNumber
                  value={r.value}
                  className="font-serif text-[clamp(3.5rem,7vw,6.5rem)] leading-none text-fg1"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
