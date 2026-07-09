import Image from "next/image";
import { NavItem } from "@/app/components/ui/nav-item";
import { MobileNav } from "@/app/components/sections/mobile-nav";
import { BOOKING_URL } from "@/app/lib/links";

const NAV_LINKS = [
  { label: "What we offer", href: "#offer" },
  { label: "Why North Macedonia", href: "#why" },
  { label: "How it works", href: "#how" },
  { label: "FAQ", href: "#faq" },
];

/** Transparent overlay nav that sits on top of the hero. */
export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="relative mx-auto flex h-20 w-full max-w-[88rem] items-center justify-between px-6 lg:px-10">
        <Image
          src="/brand/logo-horizontal-white.png"
          alt="Valgo Connect"
          width={200}
          height={44}
          className="h-12 w-auto lg:h-14"
          priority
        />
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 text-[0.95rem] lg:flex">
          {NAV_LINKS.map((link) => (
            <NavItem key={link.label} label={link.label} href={link.href} />
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            className="btn btn-accent btn-sm hidden sm:inline-flex"
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a call
          </a>
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
