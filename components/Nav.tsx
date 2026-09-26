"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { mainNav } from "@/lib/data/nav";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-night/5 bg-cream/90 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-[4.25rem] items-center justify-between gap-4">
          <Logo />

          <nav className="hidden xl:flex items-center gap-1">
            {mainNav.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-muted hover:text-forest rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/assistant"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-forest hover:bg-sand rounded-full transition-colors"
            >
              <Sparkles className="h-4 w-4" />
              Nora
            </Link>
            <Button href="/professionals" variant="outline" size="sm">
              Find a Service
            </Button>
            <Button href="/plan" size="sm">
              Get Started
            </Button>
          </div>

          <button
            type="button"
            className="xl:hidden p-2 rounded-xl hover:bg-sand text-ink"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden border-t border-night/5 bg-cream">
          <div className="mx-auto max-w-7xl px-4 py-4 space-y-1">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-ink font-medium hover:bg-sand"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <Button href="/assistant" variant="outline" onClick={() => setOpen(false)}>
                Ask Nora
              </Button>
              <Button href="/plan" onClick={() => setOpen(false)}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
