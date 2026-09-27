"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Logo } from "./logo";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/resources", label: "Resources" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

/* Every colour resolves through a token, so `data-theme` on <html> re-themes
   the bar with no markup change. The bottom border is deliberately 1px and
   low-contrast — it separates the bar from the page, it does not announce
   itself. */
export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [prevPathname, setPrevPathname] = React.useState(pathname);

  // Close mobile menu during render on route change
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--bg)]">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-5 py-3.5 sm:px-6">
        {/* Brand */}
        <Link
          href="/"
          aria-label="AI Evolve — home"
          className="shrink-0 rounded-sm text-[var(--text)] transition-opacity duration-200 hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
        >
          <Logo className="h-6 w-auto sm:h-7" />
        </Link>

        {/* Desktop links. The gap steps up with the viewport (16px at `md`,
            24px at `lg`, 28px at `xl`) because five links plus the pill is
            genuinely tight at 768px — at a flat 28px the row overflowed the
            viewport by 4px and produced a horizontal scrollbar. `whitespace-nowrap`
            on each link and on the pill keeps every label on one line. */}
        <nav
          className="hidden items-center gap-4 md:flex lg:gap-6 xl:gap-7"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative whitespace-nowrap py-1 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] ${
                  isActive
                    ? "text-[var(--accent)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link
            href="/#join"
            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] sm:px-5"
          >
            Join us
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-colors hover:text-[var(--text)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-[var(--border)] bg-[var(--bg)] md:hidden">
          <nav
            className="mx-auto flex w-full max-w-6xl flex-col px-5 py-4 sm:px-6"
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`border-b border-[var(--border)] py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[var(--accent)]"
                      : "text-[var(--text-muted)] hover:text-[var(--text)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/#join"
              className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            >
              Join us
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
