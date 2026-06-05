import { img } from "@/app/lib/images";

type PhotoProps = {
  seed: string;
  width: number;
  height: number;
  alt?: string;
  className?: string;
  priority?: boolean;
};

export function Photo({
  seed,
  width,
  height,
  alt = "",
  className,
  priority,
}: PhotoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- placeholder photography
    <img
      src={img(seed, width, height)}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      className={className}
    />
  );
}
