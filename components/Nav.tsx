"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Sparkles, Map, Search } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { mainNav } from "@/lib/data/nav";

export function Nav() {
  const [open, setOpen] = useState(false);

  // Primary links for desktop (avoid overcrowding); full list in mobile drawer
  const desktopNav = mainNav.filter((item) =>
    ["/plan", "/resources", "/services", "/immigration", "/housing", "/jobs", "/professionals", "/about"].includes(item.href)
  );

  return (
    <header className="sticky top-0 z-50 border-b border-night/5 bg-cream/95 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-[4.25rem] items-center justify-between gap-3">
          <Logo />

          <nav className="hidden xl:flex items-center gap-0.5" aria-label="Primary">
            {desktopNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2.5 text-sm font-medium rounded-lg transition-colors min-h-11 inline-flex items-center ${
                  item.href === "/plan"
                    ? "text-forest bg-sand/80 hover:bg-sand"
                    : "text-muted hover:text-forest"
                }`}
              >
                {item.href === "/plan" && <Map className="h-3.5 w-3.5 mr-1.5" aria-hidden />}
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/resources#search"
              className="inline-flex items-center gap-1.5 min-h-11 px-3 py-2 text-sm font-medium text-muted hover:text-forest hover:bg-sand rounded-full transition-colors"
              aria-label="Search Knowledge Hub"
            >
              <Search className="h-4 w-4" />
              <span className="hidden lg:inline">Search guides</span>
            </Link>
            <Link
              href="/assistant"
              className="inline-flex items-center gap-1.5 min-h-11 px-3 py-2 text-sm font-medium text-forest hover:bg-sand rounded-full transition-colors"
            >
              <Sparkles className="h-4 w-4" />
              Nora
            </Link>
            <Button href="/#needs" variant="outline" size="sm" className="min-h-11">
              What do you need?
            </Button>
            <Button href="/plan" size="sm" className="min-h-11">
              Build My Canada Plan
            </Button>
          </div>

          <button
            type="button"
            className="xl:hidden p-2.5 min-h-11 min-w-11 rounded-xl hover:bg-sand text-ink inline-flex items-center justify-center"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden border-t border-night/5 bg-cream max-h-[calc(100dvh-4rem)] overflow-y-auto">
          <div className="mx-auto max-w-7xl px-4 py-4 space-y-1 pb-8">
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
          </div>
        </div>
      )}
    </header>
  );
}
