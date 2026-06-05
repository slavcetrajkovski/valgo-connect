import { Reveal } from "@/app/components/motion";
import { Photo } from "@/app/components/ui/photo";

const TESTIMONIALS = [
  {
    quote:
      "We met three senior engineers in four days and hired two. The screening was the real deal, no babysitting required.",
    name: "Marta Velkova",
    role: "VP Engineering, Lumen",
    avatar: "t1",
  },
  {
    quote:
      "Same workday overlap as our Berlin team, half the hiring overhead. It changed how we scale.",
    name: "David Ruiz",
    role: "CTO, BasePoint",
    avatar: "t2",
  },
  {
    quote:
      "The design talent out of Skopje is genuinely exceptional. Valgo just made it reachable.",
    name: "Aimee Laurent",
    role: "Head of Product, Orelo",
    avatar: "t3",
  },
];

/** Customer testimonial cards. */
export function Testimonials() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24">
      <Reveal>
        <h2 className="font-sans text-display-lg text-fg1">
          Wins, told by{" "}
          <span className="accent-serif text-teal-700">our customers.</span>
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={i * 100}>
            <figure className="flex h-full flex-col rounded-2xl border border-border bg-paper p-7">
              <blockquote className="flex-1 text-lg leading-relaxed text-fg1">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <Photo
                  seed={t.avatar}
                  width={96}
                  height={96}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-semibold text-fg1">{t.name}</div>
                  <div className="text-sm text-fg2">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
