export type FooterColumnData = {
  title: string;
  arrow?: boolean;
  links: string[];
};

/** A titled column of footer links. */
export function FooterColumn({ col }: { col: FooterColumnData }) {
  return (
    <div>
      <p className="flex items-center gap-1.5 text-lg font-semibold text-fg-on-dark">
        {col.title}
        {col.arrow && (
          <span aria-hidden className="text-fg-on-dark-2">
            ↗
          </span>
        )}
      </p>
      <ul className="mt-5 space-y-3">
        {col.links.map((l) => (
          <li key={l}>
            <a
              href="#"
              className="text-base text-fg-on-dark-2 transition-colors hover:text-fg-on-dark"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
