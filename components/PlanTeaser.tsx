"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Eye } from "lucide-react";
import { ProgressRing } from "./ProgressRing";
import { usePrefersReducedMotion } from "./motion/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

const exampleItems = [
  { label: "Get a Canadian phone number", tag: "Arrival" },
  { label: "Apply for your SIN", tag: "Government" },
  { label: "Open a bank account", tag: "Banking" },
  { label: "Register for provincial health coverage", tag: "Health" },
  { label: "Book longer-term housing viewings", tag: "Housing" },
];

/**
 * Animated EXAMPLE of what My Canada Plan looks like. Clearly labelled; not user data.
 * Ticks items one-by-one while visible; static (3/5) under reduced motion.
 */
export function PlanTeaser() {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [done, setDone] = useState(3);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (reduced || !visible) return;
    setDone((d) => (d >= exampleItems.length ? 0 : d));
    const id = window.setInterval(() => {
      if (document.visibilityState !== "visible") return;
      setDone((d) => (d >= exampleItems.length + 1 ? 0 : d + 1));
    }, 1100);
    return () => window.clearInterval(id);
  }, [reduced, visible]);

  const shown = Math.min(done, exampleItems.length);
  const pct = Math.round((shown / exampleItems.length) * 100);

  return (
    <div ref={ref} className="relative w-full max-w-md mx-auto">
      <div aria-hidden className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(212,165,116,0.25),transparent_60%)]" />
      <div className="relative rounded-3xl bg-cream text-ink shadow-2xl ring-1 ring-white/10 p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber/25 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#6B4520]">
            <Eye className="h-3.5 w-3.5" aria-hidden /> Example preview
          </span>
          <span className="text-[11px] text-muted">Not your data</span>
        </div>
        <div className="mt-4 flex items-center gap-4">
          <ProgressRing value={pct} size={76} stroke={7} trackClassName="stroke-night/10" barClassName="stroke-forest">
            <span className="font-display text-lg font-semibold text-forest tabular-nums">{pct}%</span>
          </ProgressRing>
          <div className="min-w-0">
            <p className="font-display text-lg font-semibold leading-tight">Sample plan · Just arrived</p>
            <p className="text-sm text-muted tabular-nums">
              {shown} of {exampleItems.length} steps done
            </p>
          </div>
        </div>
        <ul className="mt-5 space-y-2" aria-label="Example checklist items">
          {exampleItems.map((item, i) => {
            const checked = i < shown;
            return (
              <li
                key={item.label}
                className={cn(
                  "flex items-center gap-3 rounded-xl border px-3 py-2.5 transition-colors duration-300",
                  checked ? "border-forest/15 bg-sky/35" : "border-night/5 bg-white"
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-all duration-300",
                    checked ? "bg-forest border-forest text-cream scale-100" : "border-muted/40 bg-white"
                  )}
                >
                  <Check className={cn("h-3.5 w-3.5 transition-opacity duration-200", checked ? "opacity-100" : "opacity-0")} />
                </span>
                <span className={cn("flex-1 min-w-0 text-sm truncate", checked && "text-muted line-through decoration-forest/40")}>
                  {item.label}
                </span>
                <span className="hidden sm:inline text-[10px] uppercase tracking-wide text-muted">{item.tag}</span>
                <span className="sr-only">{checked ? "(example: done)" : "(example: to do)"}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
