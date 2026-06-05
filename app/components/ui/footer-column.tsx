export type FooterColumnData = {
  title: string;
  arrow?: boolean;
  links: string[];
};

/** A titled column of footer links. */
export function FooterColumn({ col }: { col: FooterColumnData }) {
  return (
    <div>
      <p className="flex items-center gap-1 text-sm font-semibold text-fg-on-dark">
        {col.title}
        {col.arrow && (
          <span aria-hidden className="text-fg-on-dark-2">
            ↗
          </span>
        )}
      </p>
      <ul className="mt-4 space-y-2.5">
        {col.links.map((l) => (
          <li key={l}>
            <a
              href="#"
              className="text-sm text-fg-on-dark-2 transition-colors hover:text-fg-on-dark"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
