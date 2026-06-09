/** Hero showcase reel — full-bleed, edges feathered so it blends into the dark bg. */

const featherMask = {
  WebkitMaskImage:
    "linear-gradient(to bottom, transparent, #000 14%, #000 72%, transparent), linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)",
  WebkitMaskComposite: "source-in",
  maskImage:
    "linear-gradient(to bottom, transparent, #000 14%, #000 72%, transparent), linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)",
  maskComposite: "intersect",
} as const;

export function HeroVideo() {
  return (
    <div className="relative w-full">
      {/* Mobile reel — below the sm breakpoint */}
      <video
        className="h-auto w-full object-cover sm:hidden"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Valgo Connect — building distributed teams"
        style={featherMask}
      >
        <source src="/valgo-mobile.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Desktop reel — sm and up */}
      <video
        className="hidden h-auto w-full object-cover sm:block sm:h-115 lg:h-155"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Valgo Connect — building distributed teams"
        style={featherMask}
      >
        <source src="/valgo-desktop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
