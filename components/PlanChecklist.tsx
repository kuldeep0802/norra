"use client";

import { useEffect, useState } from "react";
import { Check, ExternalLink } from "lucide-react";
import { ChecklistItem } from "@/lib/data/checklists";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function PlanChecklist({
  items,
  storageKey,
}: {
  items: ChecklistItem[];
  storageKey: string;
}) {
  const [done, setDone] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setDone(JSON.parse(raw));
    } catch {
      /* ignore */
    }
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
        <p className="font-display text-lg font-semibold text-ink">No checklist items yet</p>
        <p className="mt-2 text-sm text-muted max-w-md mx-auto leading-relaxed">
          Edit your plan and pick a journey stage plus at least one goal or need so Norra can build a stage-aware
          checklist. Organization only — not legal advice.
        </p>
        <p className="mt-4 text-sm">
          <Link href="/resources" className="text-forest font-medium hover:underline">
            Browse the Knowledge Hub →
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8 rounded-2xl bg-forest text-cream p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="text-sky text-sm">Progress</p>
          <p className="font-display text-2xl sm:text-3xl font-semibold mt-1">
            {completed} / {items.length} complete
          </p>
        </div>
        <div className="w-full sm:w-48">
          <div className="h-2 rounded-full bg-white/20 overflow-hidden">
            <div className="h-full bg-amber transition-all duration-500" style={{ width: `${pct}%` }} />
          </div>
          <p className="text-xs text-sky mt-2 text-right">{pct}%</p>
        </div>
      </div>

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
                                <ExternalLink className="h-3 w-3" />
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
