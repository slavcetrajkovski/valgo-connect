import Image from "next/image";
import { Reveal } from "@/app/components/motion";
import { CompareIcon } from "@/app/components/ui/compare-icon";
import { CompareMark } from "@/app/components/ui/compare-mark";

const COMPARE_COLS = [
  "Speed",
  "Flexibility",
  "Quality",
  "Scalability",
  "Efficiency",
  "Vetting",
];

type CompareRow = {
  name: string;
  desc: string;
  marks: boolean[];
  brand?: boolean;
  icon?: string;
};

const COMPARE_ROWS: CompareRow[] = [
  {
    name: "Valgo",
    brand: true,
    desc: "Senior, pre-vetted specialists backed by matching built to strengthen every team.",
    marks: [true, true, true, true, true, true],
  },
  {
    name: "In-house hiring",
    icon: "users",
    desc: "Hiring full-time takes months and locks you into fixed headcount you can't flex.",
    marks: [false, false, true, false, true, true],
  },
  {
    name: "Recruiting agencies",
    icon: "briefcase",
    desc: "Traditional agencies can be slow, costly and built around rigid, padded processes.",
    marks: [false, true, true, false, false, false],
  },
  {
    name: "Freelancers",
    icon: "profile",
    desc: "Freelancers can be unreliable and hard to scale, with inconsistent quality and vetting.",
    marks: [true, true, false, false, false, false],
  },
  {
    name: "Offshore outsourcing",
    icon: "globe",
    desc: "Cheap on paper, but timezone gaps and thin screening cost you quality and speed.",
    marks: [true, false, false, true, true, false],
  },
];

const FIRST_COL =
  "sticky left-0 z-10 flex w-32 shrink-0 grow self-stretch items-center px-3 md:w-56 lg:w-[447px] lg:pl-0";
const DATA_COL =
  "flex w-24 shrink-0 grow-0 items-center justify-center px-3 lg:w-36";

export function ComparisonTable() {
  return (
    <section className="surface-dark">
      <div className="mx-auto w-full max-w-[96rem] px-6 py-24 lg:px-12 lg:py-32">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-fg-on-dark-2">
            Valgo vs. the alternatives
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl text-balance font-sans text-display-xl text-fg-on-dark">
            Hiring or traditional outsourcing?{" "}
            <span className="accent-serif text-lime-300">Neither.</span>
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="no-scrollbar gradient-mask-r mt-12 flex flex-row overflow-x-auto lg:mt-16">
            <div className="flex w-fit min-w-full shrink-0 flex-col">
              <div className="flex flex-row items-center border-b border-white/10 py-3 lg:py-8">
                <div className={`${FIRST_COL} bg-bg-dark`} />
                {COMPARE_COLS.map((c) => (
                  <div key={c} className={DATA_COL}>
                    <span className="text-center font-sans text-xs text-fg-on-dark md:text-base lg:font-serif lg:text-2xl">
                      {c}
                    </span>
                  </div>
                ))}
              </div>

              {COMPARE_ROWS.map((row) =>
                row.brand ? (
                  <div
                    key={row.name}
                    className="relative isolate flex flex-row items-center rounded-lg py-3 text-teal-900 lg:py-8"
                  >
                    <span
                      aria-hidden
                      className="absolute inset-0 -z-[1] rounded-lg bg-lime-500"
                    />
                    <div className={`${FIRST_COL} bg-lime-500`}>
                      <div className="flex flex-row items-center gap-4 lg:gap-10">
                        <span className="hidden aspect-square w-20 shrink-0 items-center justify-center lg:flex">
                          <Image
                            src="/brand/logomark-teal.png"
                            alt="Valgo"
                            width={220}
                            height={160}
                            className="h-full w-full object-contain"
                          />
                        </span>
                        <div className="flex flex-col gap-3">
                          <Image
                            src="/brand/wordmark-teal.png"
                            alt="Valgo"
                            width={400}
                            height={80}
                            className="h-5 w-auto object-contain lg:h-7"
                          />
                          <span className="hidden max-w-[324px] text-base text-teal-900/75 lg:block">
                            {row.desc}
                          </span>
                        </div>
                      </div>
                    </div>
                    {row.marks.map((m, i) => (
                      <div key={i} className={DATA_COL}>
                        <span className="block w-5 lg:w-8">
                          <CompareMark on={m} />
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div
                    key={row.name}
                    className="flex flex-row items-center border-b border-white/10 py-3 last:border-b-0 lg:py-8"
                  >
                    <div className={`${FIRST_COL} bg-bg-dark`}>
                      <div className="flex flex-row items-center gap-4 lg:gap-10">
                        <span className="hidden aspect-square w-20 shrink-0 items-center justify-center rounded-lg bg-white/10 text-fg-on-dark lg:flex">
                          <span className="block h-10 w-10">
                            <CompareIcon name={row.icon ?? ""} />
                          </span>
                        </span>
                        <div className="flex flex-col gap-3">
                          <span className="font-sans text-base font-medium text-fg-on-dark lg:text-2xl">
                            {row.name}
                          </span>
                          <span className="hidden max-w-[324px] text-base text-fg-on-dark-2 lg:block">
                            {row.desc}
                          </span>
                        </div>
                      </div>
                    </div>
                    {row.marks.map((m, i) => (
                      <div key={i} className={DATA_COL}>
                        <span className="block w-5 text-fg-on-dark lg:w-8">
                          <CompareMark on={m} />
                        </span>
                      </div>
                    ))}
                  </div>
                ),
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
