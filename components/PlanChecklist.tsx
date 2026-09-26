"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";
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
  const pct = Math.round((completed / items.length) * 100);

  return (
    <div>
      <div className="mb-8 rounded-2xl bg-forest text-cream p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="text-sky text-sm">Progress</p>
          <p className="font-display text-3xl font-semibold mt-1">
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
            <h3 className="font-semibold text-forest mb-3">{cat}</h3>
            <ul className="space-y-2">
              {items
                .filter((i) => i.category === cat)
                .map((item) => {
                  const checked = !!done[item.id];
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => toggle(item.id)}
                        className={cn(
                          "w-full flex items-start gap-3 rounded-xl border p-4 text-left transition-all",
                          checked
                            ? "bg-sky/30 border-forest/20"
                            : "bg-white border-night/5 hover:border-forest/30"
                        )}
                      >
                        <span
                          className={cn(
                            "mt-0.5 h-5 w-5 rounded-md border flex items-center justify-center shrink-0",
                            checked ? "bg-forest border-forest text-cream" : "border-muted/40"
                          )}
                        >
                          {checked && <Check className="h-3.5 w-3.5" />}
                        </span>
                        <span className="flex-1">
                          <span className={cn("font-medium", checked && "line-through text-muted")}>
                            {item.label}
                          </span>
                          {item.description && (
                            <span className="block text-sm text-muted mt-0.5">{item.description}</span>
                          )}
                          {item.href && (
                            <Link
                              href={item.href}
                              onClick={(e) => e.stopPropagation()}
                              className="inline-block mt-1 text-xs text-forest font-medium hover:underline"
                            >
                              Open related guide →
                            </Link>
                          )}
                        </span>
                      </button>
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
