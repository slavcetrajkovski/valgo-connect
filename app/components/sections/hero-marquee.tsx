import Image from "next/image";
import { Photo } from "@/app/components/ui/photo";

/** One tile in the hero marquee — a photo, a lime panel, a stat, or an emblem. */
type Card =
  | { kind: "img"; seed: string; aspect: string }
  | { kind: "lime"; label: string }
  | { kind: "stat"; value: string; label: string }
  | { kind: "emblem" };

const ROW_A: Card[] = [
  { kind: "img", seed: "vteam1", aspect: "aspect-[4/5]" },
  { kind: "lime", label: "300+ vetted specialists" },
  { kind: "img", seed: "voffice", aspect: "aspect-[4/3]" },
  { kind: "img", seed: "vcode", aspect: "aspect-[4/5]" },
  { kind: "stat", value: "4.9", label: "Avg client rating" },
  { kind: "img", seed: "vstudio", aspect: "aspect-[4/3]" },
];

const ROW_B: Card[] = [
  { kind: "img", seed: "vportrait", aspect: "aspect-[4/5]" },
  { kind: "emblem" },
  { kind: "img", seed: "vmeeting", aspect: "aspect-[4/3]" },
  { kind: "img", seed: "vdesk", aspect: "aspect-[4/5]" },
  { kind: "stat", value: "72h", label: "To a shortlist" },
  { kind: "img", seed: "vlaptop", aspect: "aspect-[4/3]" },
];

function HeroCard({ card }: { card: Card }) {
  const base = "mx-2.5 h-full shrink-0 overflow-hidden rounded-2xl";
  switch (card.kind) {
    case "img":
      return (
        <div className={`${base} ${card.aspect}`}>
          <Photo
            seed={card.seed}
            width={640}
            height={640}
            className="h-full w-full object-cover"
          />
        </div>
      );
    case "lime":
      return (
        <div
          className={`${base} flex aspect-[4/5] flex-col items-center justify-center gap-3 bg-lime-500 p-5 text-center`}
        >
          <Image
            src="/brand/logomark-teal.png"
            alt=""
            width={56}
            height={56}
            className="h-10 w-10 object-contain"
          />
          <span className="text-sm font-semibold text-teal-900">
            {card.label}
          </span>
        </div>
      );
    case "stat":
      return (
        <div
          className={`${base} flex aspect-[4/5] flex-col justify-end bg-teal-800 p-5`}
        >
          <div className="font-sans text-display-md text-lime-300">
            {card.value}
          </div>
          <div className="mt-1 text-sm text-fg-on-dark-2">{card.label}</div>
        </div>
      );
    case "emblem":
      return (
        <div
          className={`${base} flex aspect-square items-center justify-center border border-white/10 bg-teal-900 p-5`}
        >
          <Image
            src="/brand/logomark-lime.png"
            alt=""
            width={72}
            height={72}
            className="h-12 w-12 object-contain"
          />
        </div>
      );
  }
}

function MarqueeRow({
  cards,
  reverse,
  duration,
}: {
  cards: Card[];
  reverse?: boolean;
  duration: string;
}) {
  return (
    <div className="h-44 overflow-hidden lg:h-56">
      <div
        className={`marquee-x-track h-full ${reverse ? "is-reverse" : ""}`}
        style={{ animationDuration: duration }}
      >
        {/* 4 copies: the loop shifts by half the track (2 sets ≈ 2870px),
            wider than any viewport, so no empty gap ever appears. */}
        {[...cards, ...cards, ...cards, ...cards].map((card, i) => (
          <HeroCard key={i} card={card} />
        ))}
      </div>
    </div>
  );
}

/** Two rows of brand imagery scrolling horizontally in opposite directions. */
export function HeroMarquee() {
  return (
    <>
      <MarqueeRow cards={ROW_A} duration="46s" />
      <MarqueeRow cards={ROW_B} duration="54s" reverse />
    </>
  );
}
