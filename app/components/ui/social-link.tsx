import type { ReactNode } from "react";

/** Footer social glyph in a bordered circle. */
export function SocialLink({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-fg-on-dark-2 transition-colors hover:border-white/50 hover:text-fg-on-dark"
    >
      {children}
    </a>
  );
}
