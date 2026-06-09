import type { ReactNode } from "react";
import Image from "next/image";
import {
  FooterColumn,
  type FooterColumnData,
} from "@/app/components/ui/footer-column";
import { SocialLink } from "@/app/components/ui/social-link";
import { Photo } from "@/app/components/ui/photo";

const FOOTER_SERVICES: FooterColumnData[] = [
  {
    title: "Web & Mobile",
    arrow: true,
    links: ["Web design", "Web development", "iOS apps", "Android apps", "QA & testing"],
  },
  {
    title: "Marketing",
    arrow: true,
    links: ["Digital marketing", "SEO", "Paid media", "Social & content"],
  },
  {
    title: "Back office & setup",
    arrow: true,
    links: [
      "Accounting & finance",
      "Operations & admin",
      "HR & payroll",
      "Entity setup & management",
    ],
  },
];

const FOOTER_COMPANY: FooterColumnData[] = [
  {
    title: "Main",
    links: ["Our talent", "How it works", "Pricing", "Reviews", "About us", "Careers"],
  },
  {
    title: "Learn",
    links: ["Blog", "Guides", "Reports", "Customer stories", "Help center"],
  },
];

const LEGAL_LINKS = ["Privacy policy", "Terms of use", "Status", "DMCA"];

const SOCIALS: { label: string; icon: ReactNode }[] = [
  {
    label: "LinkedIn",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3 0-2.95-1.8-2.95s-2.08 1.4-2.08 2.85V21H9z" />
      </svg>
    ),
  },
  {
    label: "X",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M18.2 2H21l-6.5 7.4L22 22h-6l-4.7-6.1L5.8 22H3l7-8L2 2h6.2l4.3 5.6zM16.1 20h1.6L7.9 4H6.2z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M22 12s0-3.1-.4-4.5a2.6 2.6 0 0 0-1.8-1.8C18.3 5.3 12 5.3 12 5.3s-6.3 0-7.8.4A2.6 2.6 0 0 0 2.4 7.5C2 8.9 2 12 2 12s0 3.1.4 4.5a2.6 2.6 0 0 0 1.8 1.8c1.5.4 7.8.4 7.8.4s6.3 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8c.4-1.4.4-4.5.4-4.5zM10 15V9l5.2 3z" />
      </svg>
    ),
  },
];

/** Image-backed footer with link columns, oversized wordmark, and socials. */
export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-bg-dark text-fg-on-dark">
      <Photo
        seed="valgo-footer"
        width={1600}
        height={900}
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-linear-to-b from-teal-900/85 via-teal-900/90 to-teal-900" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-20 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.35fr_1fr]">
          <div>
            <h3 className="text-sm font-semibold text-fg-on-dark">Services</h3>
            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
              {FOOTER_SERVICES.map((col) => (
                <FooterColumn key={col.title} col={col} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-fg-on-dark">Company</h3>
            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-10">
              {FOOTER_COMPANY.map((col) => (
                <FooterColumn key={col.title} col={col} />
              ))}
            </div>
          </div>
        </div>

        {/* giant wordmark */}
        <div className="mt-16 overflow-hidden">
          <p className="font-sans text-[15vw] font-semibold leading-none tracking-tight text-fg-on-dark/95 sm:text-[12vw]">
            Valgo <span className="accent-serif text-lime-300">Connect</span>
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-8 border-t border-white/10 pt-10 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-fg-on-dark-2">
            © {new Date().getFullYear()} Valgo Connect. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-fg-on-dark-2">
            {LEGAL_LINKS.map((l) => (
              <a
                key={l}
                href="#"
                className="transition-colors hover:text-fg-on-dark"
              >
                {l}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            {SOCIALS.map((s) => (
              <SocialLink key={s.label} label={s.label}>
                {s.icon}
              </SocialLink>
            ))}
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime-500">
              <Image
                src="/brand/logomark-teal.png"
                alt=""
                width={36}
                height={36}
                className="h-5 w-5 object-contain"
              />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
