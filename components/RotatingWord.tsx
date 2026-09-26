"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "./motion/usePrefersReducedMotion";

/**
 * Cycles through words in place. All words are stacked in one grid cell so the
 * widest word reserves space → no layout shift. Screen readers get a static phrase.
 */
export function RotatingWord({
  words,
  srText,
  interval = 2400,
  className,
}: {
  words: string[];
  srText: string;
  interval?: number;
  className?: string;
}) {
  const reduced = usePrefersReducedMotion();
  const [i, setI] = useState(0);
  const prev = (i - 1 + words.length) % words.length;

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => {
      if (document.visibilityState === "visible") setI((n) => (n + 1) % words.length);
    }, interval);
    return () => window.clearInterval(id);
  }, [reduced, interval, words.length]);

  return (
    <>
      <span className="sr-only">{srText}</span>
      <span aria-hidden className={`inline-grid align-bottom ${className ?? ""}`}>
        {words.map((w, idx) => {
          const active = idx === i;
          return (
            <span
              key={w}
              style={{ gridArea: "1 / 1" }}
              className={`norra-rotating-word whitespace-nowrap ${
                active
                  ? "opacity-100 translate-y-0"
                  : idx === prev
                    ? "opacity-0 -translate-y-3 pointer-events-none"
                    : "opacity-0 translate-y-3 pointer-events-none"
              }`}
            >
              {w}
            </span>
          );
        })}
      </span>
    </>
  );
}
