"use client";

import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { ProgressRing } from "./ProgressRing";
import { PLAN_PROGRESS_EVENT, type PlanProgressDetail } from "./PlanChecklist";

/** Compact progress ring at the top of My Canada Plan; stays in sync with PlanChecklist via a window event. */
export function PlanProgressSummary({ total }: { total: number }) {
  const [completed, setCompleted] = useState<number | null>(null);

  useEffect(() => {
    function onProgress(e: Event) {
      const d = (e as CustomEvent<PlanProgressDetail>).detail;
      setCompleted(d.completed);
    }
    window.addEventListener(PLAN_PROGRESS_EVENT, onProgress);
    return () => window.removeEventListener(PLAN_PROGRESS_EVENT, onProgress);
  }, []);

  if (total === 0) return null;
  const done = completed ?? 0;
  const pct = Math.round((done / total) * 100);

  return (
    <div className="rounded-2xl bg-forest text-cream p-4 sm:p-5 flex items-center gap-4">
      <ProgressRing value={completed === null ? 0 : pct} size={72} stroke={7}>
        <span className="font-display text-base font-semibold tabular-nums">{completed === null ? "—" : `${pct}%`}</span>
      </ProgressRing>
      <div className="flex-1 min-w-0">
        <p className="text-sky text-xs uppercase tracking-wide font-semibold">Plan progress</p>
        <p className="font-display text-xl font-semibold tabular-nums">
          {done} of {total} steps done
        </p>
        <p className="text-xs text-sky/90">Saved in this browser only.</p>
      </div>
      <a
        href="#plan-checklist"
        className="print-hide hidden sm:inline-flex items-center gap-1.5 rounded-full bg-cream/10 hover:bg-cream/20 px-4 min-h-11 text-sm font-medium transition-colors"
      >
        Checklist <ArrowDown className="h-4 w-4" aria-hidden />
      </a>
    </div>
  );
}
