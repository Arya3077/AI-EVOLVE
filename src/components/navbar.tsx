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
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [prevPathname, setPrevPathname] = React.useState(pathname);

  // Close mobile menu during render when route changes
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  return (
    <div className="w-full px-4 sm:px-6 py-4">
      <header className="max-w-6xl mx-auto bg-background/80 backdrop-blur-md rounded-full px-5 sm:px-8 py-3 transition-colors duration-200 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full"
        >
          <Logo className="h-6 sm:h-7 w-auto text-foreground group-hover:opacity-90 transition-opacity" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-mono font-extrabold uppercase tracking-wider transition-colors relative py-1 ${
                  isActive
                    ? "text-[#FF7F00]"
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF7F00] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          
          <Link
            href="/#join"
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#FF7F00] text-black hover:bg-[#FF7F00]/90 font-mono text-xs font-black uppercase tracking-wider shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>JOIN US</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2.5 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
            className="p-2 text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto bg-background p-6 rounded-[24px] shadow-xl space-y-4 animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col space-y-3" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-mono font-bold uppercase tracking-wider py-2 border-b border-border/40 ${
                  pathname === link.href ? "text-[#FF7F00]" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-2">
            <Link
              href="/#join"
              className="w-full py-3 px-5 rounded-full bg-[#FF7F00] text-black font-mono font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>JOIN US</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
