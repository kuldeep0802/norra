"use client";

import { useEffect, useRef, useState } from "react";
import { BookOpen, MapPinned, ListChecks, Route } from "lucide-react";
import { usePrefersReducedMotion } from "./motion/usePrefersReducedMotion";

export type SiteCount = { value: number; label: string; icon: "guides" | "cities" | "checklist" | "stages" };

const icons = { guides: BookOpen, cities: MapPinned, checklist: ListChecks, stages: Route };

/** Counts content that exists on this site (never users/customers). SSR renders final values. */
export function SiteCounters({ counts }: { counts: SiteCount[] }) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(1); // 1 = final values (SSR / no-JS / reduced motion)
  const armed = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (reduced || !el || typeof IntersectionObserver === "undefined") return;
    let raf = 0;
    let first = true;
    const io = new IntersectionObserver(
      ([e]) => {
        if (first) {
          first = false;
          // Already on screen at load → keep final numbers (no flash to zero)
          if (e.isIntersecting) {
            io.disconnect();
            return;
          }
          armed.current = true;
          setProgress(0);
          return;
        }
        if (e.isIntersecting && armed.current) {
          io.disconnect();
          const start = performance.now();
          const dur = 1100;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            setProgress(1 - Math.pow(1 - p, 3));
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <div ref={ref}>
      <dl className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {counts.map((c) => {
          const Icon = icons[c.icon];
          return (
            <div
              key={c.label}
              className="group rounded-2xl border border-night/5 bg-white/80 p-4 sm:p-5 transition-all duration-300 hover:border-forest/20 hover:shadow-md motion-safe:hover:-translate-y-0.5"
            >
              <dt className="flex items-center gap-2 text-xs sm:text-sm text-muted">
                <Icon className="h-4 w-4 text-forest shrink-0" aria-hidden />
                <span>{c.label}</span>
              </dt>
              <dd className="mt-1.5 font-display text-3xl sm:text-4xl font-semibold text-forest tabular-nums">
                {Math.round(c.value * progress)}
              </dd>
            </div>
          );
        })}
      </dl>
      <p className="mt-3 text-xs text-muted">
        Counted from content on this site today — not users, customers, or outcomes.
      </p>
    </div>
  );
}
