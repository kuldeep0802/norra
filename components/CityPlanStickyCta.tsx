"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MapPinned, X } from "lucide-react";

const SESSION_DISMISS_PREFIX = "norra-city-sticky-cta-dismissed:";

/**
 * Compact sticky bar on long city pages — appears after scroll.
 * Sits above the mobile bottom nav; dismissible for the session (optional).
 */
export function CityPlanStickyCta({
  cityName,
  citySlug,
}: {
  cityName: string;
  citySlug: string;
}) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(true); // start hidden until we know session state

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_DISMISS_PREFIX + citySlug) === "1") {
        setDismissed(true);
        return;
      }
    } catch {
      /* ignore */
    }
    setDismissed(false);

    function onScroll() {
      // Show after user scrolls past the hero / primary CTA (~380px)
      setVisible(window.scrollY > 380);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [citySlug]);

  function dismiss() {
    try {
      sessionStorage.setItem(SESSION_DISMISS_PREFIX + citySlug, "1");
    } catch {
      /* ignore */
    }
    setDismissed(true);
  }

  if (dismissed || !visible) return null;

  const href = `/plan/?city=${encodeURIComponent(citySlug)}`;

  return (
    <div
      className="print-hide fixed inset-x-0 z-40 px-3 pointer-events-none
        bottom-[calc(4.25rem+env(safe-area-inset-bottom)+0.5rem)] md:bottom-4"
      role="region"
      aria-label={`Build plan for ${cityName}`}
    >
      <div className="pointer-events-auto mx-auto max-w-lg flex items-center gap-2 rounded-2xl border border-forest/30 bg-forest text-cream shadow-lg shadow-night/20 px-3 py-2.5 sm:px-4">
        <MapPinned className="h-4 w-4 shrink-0 text-amber hidden sm:block" aria-hidden />
        <Link
          href={href}
          className="flex-1 min-w-0 text-sm font-medium leading-snug touch-manipulation min-h-11 flex items-center"
        >
          <span className="line-clamp-2">Build My Canada Plan for {cityName}</span>
        </Link>
        <button
          type="button"
          onClick={dismiss}
          className="shrink-0 inline-flex items-center justify-center rounded-full min-h-11 min-w-11 text-sky/90 hover:text-cream hover:bg-white/10 touch-manipulation"
          aria-label="Dismiss for this session"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
