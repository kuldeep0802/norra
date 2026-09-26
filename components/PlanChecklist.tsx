"use client";

import { useEffect, useState } from "react";
import { Check, ExternalLink, ListChecks, Sparkles } from "lucide-react";
import { ChecklistItem } from "@/lib/data/checklists";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function PlanChecklist({
  items,
  storageKey,
  onEditPlan,
}: {
  items: ChecklistItem[];
  storageKey: string;
  /** Optional callback when user should return to the plan form */
  onEditPlan?: () => void;
}) {
  const [done, setDone] = useState<Record<string, boolean>>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setDone(JSON.parse(raw));
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, [storageKey]);

  function toggle(id: string) {
    setDone((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem(storageKey, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  }

  const categories = [...new Set(items.map((i) => i.category))];
  const completed = items.filter((i) => done[i.id]).length;
  const pct = items.length ? Math.round((completed / items.length) * 100) : 0;

  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-night/15 bg-white/80 p-8 text-center">
        <ListChecks className="h-8 w-8 text-forest mx-auto opacity-80" />
        <p className="mt-3 font-display text-lg font-semibold text-ink">No checklist items yet</p>
        <p className="mt-2 text-sm text-muted max-w-md mx-auto leading-relaxed">
          Pick a journey stage and at least one goal or need so Norra can build a stage-aware checklist.
          Ticks save only in this browser&apos;s localStorage — not in a Norra account yet.
        </p>
        <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
          {onEditPlan ? (
            <button
              type="button"
              onClick={onEditPlan}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-forest text-cream px-5 py-3 text-sm font-medium min-h-12 touch-manipulation hover:opacity-95"
            >
              <Sparkles className="h-4 w-4" />
              Pick goals & build checklist
            </button>
          ) : null}
          <Link
            href="/resources"
            className="text-forest font-medium hover:underline text-sm min-h-11 inline-flex items-center"
          >
            Browse the Knowledge Hub →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 rounded-2xl bg-forest text-cream p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="text-sky text-sm">Progress</p>
          <p className="font-display text-2xl sm:text-3xl font-semibold mt-1">
            {completed} / {items.length} complete
          </p>
          <p className="mt-1 text-xs text-sky/90">
            Saved in this browser only (localStorage) — not synced to an account yet.
          </p>
        </div>
        <div className="w-full sm:w-48">
          <div className="h-2 rounded-full bg-white/20 overflow-hidden">
            <div className="h-full bg-amber transition-all duration-500" style={{ width: `${pct}%` }} />
          </div>
          <p className="text-xs text-sky mt-2 text-right">{pct}%</p>
        </div>
      </div>

      {hydrated && pct === 0 && (
        <div className="mb-8 rounded-2xl border border-forest/25 bg-sky/30 px-4 py-4 sm:px-5 text-sm text-ink leading-relaxed">
          <p className="font-semibold text-forest flex items-center gap-2">
            <Sparkles className="h-4 w-4 shrink-0" />
            Ready when you are
          </p>
          <p className="mt-1.5 text-muted">
            Your checklist is at 0%. Tick the first item you can finish this week — or{" "}
            {onEditPlan ? (
              <button
                type="button"
                onClick={onEditPlan}
                className="text-forest font-medium underline-offset-2 hover:underline touch-manipulation"
              >
                edit goals / needs
              </button>
            ) : (
              <span className="text-forest font-medium">edit your plan</span>
            )}{" "}
            so the list matches what you care about. Progress stays on this device until accounts exist.
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            {onEditPlan && (
              <button
                type="button"
                onClick={onEditPlan}
                className="inline-flex items-center gap-1.5 rounded-full bg-forest text-cream px-4 py-2.5 text-xs font-medium min-h-11 touch-manipulation"
              >
                Pick goals / refine plan
              </button>
            )}
            <Link
              href="/resources"
              className="inline-flex items-center text-xs font-medium text-forest hover:underline min-h-11"
            >
              Read a guide first →
            </Link>
          </div>
        </div>
      )}

      <div className="space-y-8">
        {categories.map((cat) => (
          <div key={cat}>
            <h3 className="font-semibold text-forest mb-3 text-sm sm:text-base uppercase tracking-wide">
              {cat}
            </h3>
            <ul className="space-y-2">
              {items
                .filter((i) => i.category === cat)
                .map((item) => {
                  const checked = !!done[item.id];
                  return (
                    <li key={item.id}>
                      <div
                        className={cn(
                          "w-full flex items-start gap-3 rounded-xl border p-3.5 sm:p-4 transition-all",
                          checked
                            ? "bg-sky/30 border-forest/20"
                            : "bg-white border-night/5"
                        )}
                      >
                        <button
                          type="button"
                          onClick={() => toggle(item.id)}
                          aria-pressed={checked}
                          aria-label={checked ? `Mark incomplete: ${item.label}` : `Mark complete: ${item.label}`}
                          className="mt-0.5 shrink-0 touch-manipulation min-h-11 min-w-11 -ml-1.5 -mt-1.5 flex items-center justify-center"
                        >
                          <span
                            className={cn(
                              "h-5 w-5 rounded-md border flex items-center justify-center",
                              checked ? "bg-forest border-forest text-cream" : "border-muted/40 bg-white"
                            )}
                          >
                            {checked && <Check className="h-3.5 w-3.5" />}
                          </span>
                        </button>
                        <div className="flex-1 min-w-0 pt-0.5">
                          <button
                            type="button"
                            onClick={() => toggle(item.id)}
                            className="text-left w-full touch-manipulation"
                          >
                            <span className={cn("font-medium text-sm sm:text-base", checked && "line-through text-muted")}>
                              {item.label}
                            </span>
                            {item.description && (
                              <span className="block text-sm text-muted mt-0.5 leading-relaxed">
                                {item.description}
                              </span>
                            )}
                          </button>
                          <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                            {item.href && (
                              <Link
                                href={item.href}
                                className="inline-flex items-center text-xs text-forest font-medium hover:underline min-h-9"
                              >
                                Related on Norra →
                              </Link>
                            )}
                            {item.officialHref && (
                              <a
                                href={item.officialHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs text-muted font-medium hover:text-forest hover:underline min-h-9"
                              >
                                {item.officialLabel || "Official source"}
                                <ExternalLink className="h-3 w-3" aria-hidden />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
