/** Nav link pointing to an on-page section. */
export function NavItem({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="text-fg-on-dark/85 transition-colors hover:text-fg-on-dark"
    >
      {label}
    </a>
  );
}
