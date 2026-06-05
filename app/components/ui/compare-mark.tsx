/**
 * Comparison-row mark — Phosphor check when a capability is supported, cross when not.
 * Monochrome: inherits the row's text color via `currentColor` (Superside treatment).
 * Sized by its wrapper; the SVG fills 100%.
 */
export function CompareMark({ on }: { on: boolean }) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 256 256"
      fill="none"
      aria-hidden
    >
      {on ? (
        <polyline
          points="216 72 104 184 48 128"
          stroke="currentColor"
          strokeWidth={16}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <g
          stroke="currentColor"
          strokeWidth={16}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="200" y1="56" x2="56" y2="200" />
          <line x1="200" y1="200" x2="56" y2="56" />
        </g>
      )}
    </svg>
  );
}
