"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles, Map, Search, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { mainNav } from "@/lib/data/nav";

/** Secondary destinations grouped under "Explore" on desktop to keep the header on one line. */
const exploreNav = [
  { label: "Services directory", href: "/services", note: "All areas of newcomer life" },
  { label: "Immigration", href: "/immigration", note: "Orientation + official sources" },
  { label: "Settlement", href: "/settlement", note: "Everyday setup" },
  { label: "Cities", href: "/cities", note: "Short city orientation guides" },
  { label: "Housing", href: "/housing", note: "Sample listings" },
  { label: "Jobs", href: "/jobs", note: "Sample listings" },
  { label: "Marketplace", href: "/professionals", note: "Sample profiles" },
  { label: "About", href: "/about", note: "Founder + what Norra is" },
];

function ExploreMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    function onDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="explore-menu"
        className="px-3 py-2.5 text-sm font-medium rounded-lg transition-colors min-h-11 inline-flex items-center gap-1 whitespace-nowrap text-muted hover:text-forest"
      >
        Explore
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden />
      </button>
      {open && (
        <div
          id="explore-menu"
          className="absolute left-0 top-full mt-2 w-72 rounded-2xl border border-night/5 bg-white p-2 shadow-xl"
        >
          <ul>
            {exploreNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex flex-col rounded-xl px-3 py-2.5 min-h-11 hover:bg-sand transition-colors"
                >
                  <span className="text-sm font-medium text-ink">{item.label}</span>
                  <span className="text-xs text-muted">{item.note}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="print-hide sticky top-0 z-50 border-b border-night/5 bg-cream/95 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-[4.25rem] items-center justify-between gap-3">
          <div className="flex items-center gap-4 xl:gap-6 min-w-0">
            <Logo />

            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Primary">
              <Link
                href="/plan"
                className="px-3 py-2.5 text-sm font-medium rounded-lg transition-colors min-h-11 inline-flex items-center whitespace-nowrap text-forest bg-sand/80 hover:bg-sand"
              >
                <Map className="h-3.5 w-3.5 mr-1.5" aria-hidden />
                My Canada Plan
              </Link>
              <Link
                href="/resources"
                className="px-3 py-2.5 text-sm font-medium rounded-lg transition-colors min-h-11 inline-flex items-center whitespace-nowrap text-muted hover:text-forest"
              >
                Knowledge Hub
              </Link>
              <ExploreMenu />
            </nav>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <Link
              href="/resources#search"
              className="hidden lg:inline-flex items-center gap-1.5 min-h-11 min-w-11 justify-center px-3 py-2 text-sm font-medium text-muted hover:text-forest hover:bg-sand rounded-full transition-colors whitespace-nowrap"
              aria-label="Search Knowledge Hub"
            >
              <Search className="h-4 w-4" aria-hidden />
              <span className="hidden xl:inline">Search</span>
            </Link>
            <Link
              href="/assistant"
              className="hidden lg:inline-flex items-center gap-1.5 min-h-11 px-3 py-2 text-sm font-medium text-forest hover:bg-sand rounded-full transition-colors whitespace-nowrap"
            >
              <Sparkles className="h-4 w-4" aria-hidden />
              Nora
            </Link>
            <Button href="/#needs" variant="outline" size="sm" className="max-xl:hidden min-h-11 whitespace-nowrap">
              What do you need?
            </Button>
            <Button href="/plan" size="sm" className="max-sm:hidden min-h-11 whitespace-nowrap">
              Build my plan
            </Button>
            <button
              type="button"
              className="lg:hidden p-2.5 min-h-11 min-w-11 rounded-xl hover:bg-sand text-ink inline-flex items-center justify-center"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav-drawer"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden border-t border-night/5 bg-cream max-h-[calc(100dvh-4rem)] overflow-y-auto"
        >
          <nav className="mx-auto max-w-7xl px-4 py-4 space-y-1 pb-8" aria-label="Mobile primary">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block px-3 py-3 min-h-11 rounded-xl font-medium hover:bg-sand ${
                  item.href === "/plan" ? "text-forest bg-sand/60" : "text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <Button href="/resources#search" variant="outline" className="min-h-12" onClick={() => setOpen(false)}>
                Search guides
              </Button>
              <Button href="/assistant" variant="outline" className="min-h-12" onClick={() => setOpen(false)}>
                Ask Nora
              </Button>
              <Button href="/#needs" variant="outline" className="min-h-12" onClick={() => setOpen(false)}>
                What do you need help with?
              </Button>
              <Button href="/plan" className="min-h-12" onClick={() => setOpen(false)}>
                Build My Canada Plan
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
