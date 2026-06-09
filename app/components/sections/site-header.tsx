import Image from "next/image";
import { NavItem } from "@/app/components/ui/nav-item";
import { MobileNav } from "@/app/components/sections/mobile-nav";

const NAV_LINKS = [
  { label: "Services", hasMenu: true },
  { label: "Our talent" },
  { label: "Why Valgo", hasMenu: true },
  { label: "Resources", hasMenu: true },
  { label: "Pricing" },
  { label: "Entity setup" },
];

/** Transparent overlay nav that sits on top of the hero. */
export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="mx-auto flex h-20 w-full max-w-[88rem] items-center justify-between px-6 lg:px-10">
        <div className="flex items-center gap-9">
          <Image
            src="/brand/logo-horizontal-white.png"
            alt="Valgo Connect"
            width={200}
            height={44}
            className="h-12 w-auto lg:h-14"
            priority
          />
          <div className="hidden items-center gap-7 text-[0.95rem] lg:flex">
            {NAV_LINKS.map((link) => (
              <NavItem
                key={link.label}
                label={link.label}
                hasMenu={link.hasMenu}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a className="btn btn-accent btn-sm hidden sm:inline-flex" href="#start">
            Find your team
          </a>
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
