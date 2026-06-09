import { Reveal } from "@/app/components/motion";
import { Photo } from "@/app/components/ui/photo";

const FEATURE_CARDS = [
  {
    img: "valgo-feature-1",
    panel: "bg-lime-500",
    titleClass: "text-teal-900",
    accentClass: "text-teal-800",
    descClass: "text-teal-900/75",
    pre: "",
    accent: "Flexible",
    post: " engagement model",
    desc: "Access a broad range of senior specialists, scale up or down as needed, and only pay for the talent you actually use.",
  },
  {
    img: "valgo-feature-2",
    panel: "bg-teal-900",
    titleClass: "text-fg-on-dark",
    accentClass: "text-lime-300",
    descClass: "text-fg-on-dark-2",
    pre: "Top ",
    accent: "Macedonian talent",
    post: "",
    desc: "Developers, designers, marketers, accountants and operators, screened for skill and communication long before they reach your inbox.",
  },
  {
    img: "valgo-feature-3",
    panel: "bg-paper-2",
    titleClass: "text-fg1",
    accentClass: "text-teal-700",
    descClass: "text-fg2",
    pre: "Full ",
    accent: "entity setup",
    post: " & management",
    desc: "Need your own presence abroad? We register your legal entity in North Macedonia and run payroll, HR, compliance, banking and day-to-day operations through a trusted local operator.",
  },
];

/** Three feature cards; the description expands on hover (always open on touch). */
export function FeatureGrid() {
  return (
    <section id="work" className="surface-dark">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 lg:py-32">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-fg-on-dark-2">
            Easy &amp; hassle-free
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl text-balance font-sans text-display-xl text-fg-on-dark">
            World-class talent. More value per dollar.{" "}
            <span className="accent-serif text-lime-300">
              Made to keep up with you.
            </span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {FEATURE_CARDS.map((c, i) => (
            <Reveal key={c.accent} delay={i * 90}>
              <div className="group relative h-[30rem] overflow-hidden rounded-[20px]">
                <Photo
                  seed={c.img}
                  width={700}
                  height={900}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className={`absolute inset-x-0 bottom-0 ${c.panel} p-6`}>
                  <h3
                    className={`font-sans text-2xl font-semibold ${c.titleClass}`}
                  >
                    {c.pre}
                    <span className={`accent-serif ${c.accentClass}`}>
                      {c.accent}
                    </span>
                    {c.post}
                  </h3>
                  {/* collapsed on desktop until hover; always open on touch */}
                  <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      <p
                        className={`pt-3 text-sm leading-relaxed ${c.descClass}`}
                      >
                        {c.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
