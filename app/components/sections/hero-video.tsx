/** Hero showcase reel — full-bleed, edges feathered so it blends into the dark bg. */
export function HeroVideo() {
  return (
    <div className="relative w-full">
      <video
        className="h-auto w-full object-cover sm:h-115 lg:h-155"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Valgo Connect — building distributed teams"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, #000 14%, #000 72%, transparent), linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)",
          WebkitMaskComposite: "source-in",
          maskImage:
            "linear-gradient(to bottom, transparent, #000 14%, #000 72%, transparent), linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)",
          maskComposite: "intersect",
        }}
      >
        <source src="/valgo-connect_1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
