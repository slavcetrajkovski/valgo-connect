/** Nav link with an optional dropdown caret. */
export function NavItem({
  label,
  hasMenu,
}: {
  label: string;
  hasMenu?: boolean;
}) {
  return (
    <a
      href="#"
      className="group inline-flex items-center gap-1 text-fg-on-dark/85 transition-colors hover:text-fg-on-dark"
    >
      {label}
      {hasMenu && (
        <svg
          width="11"
          height="11"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden
          className="mt-px opacity-70 transition-transform group-hover:translate-y-0.5"
        >
          <path
            d="M2.5 4.5 6 8l3.5-3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </a>
  );
}
