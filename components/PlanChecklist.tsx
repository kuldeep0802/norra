"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ExternalLink, ListChecks, PartyPopper, Sparkles } from "lucide-react";
import { ProgressRing } from "./ProgressRing";
import { ChecklistItem } from "@/lib/data/checklists";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const PLAN_PROGRESS_EVENT = "norra-plan-progress";
export type PlanProgressDetail = { completed: number; total: number };

const confettiColors = ["#D4A574", "#F7F3EC", "#C8D9D6", "#2D8A6E", "#E8C49A"];

/** Lightweight CSS confetti burst (no library). Hidden entirely under prefers-reduced-motion. */
function ConfettiBurst({ big }: { big: boolean }) {
  const n = big ? 28 : 12;
  const bits = Array.from({ length: n }, (_, i) => {
    const angle = (i / n) * Math.PI * 2 + (i % 2 ? 0.2 : -0.1);
    const dist = (big ? 90 : 52) + ((i * 37) % (big ? 70 : 30));
    return {
      dx: `${Math.cos(angle) * dist}px`,
      dy: `${Math.sin(angle) * dist - (big ? 20 : 8)}px`,
      rot: `${(i * 67) % 360}deg`,
      color: confettiColors[i % confettiColors.length],
      round: i % 3 === 0,
    };
  });
  return (
    <span aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 z-10">
      {bits.map((b, i) => (
        <span
          key={i}
          className="norra-confetti-bit absolute block"
          style={
            {
              width: b.round ? 7 : 5,
              height: b.round ? 7 : 10,
              borderRadius: b.round ? 9999 : 2,
              background: b.color,
              marginLeft: -3,
              marginTop: -4,
              "--dx": b.dx,
              "--dy": b.dy,
              "--rot": b.rot,
            } as React.CSSProperties
          }
        />
      ))}
    </span>
  );
}

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

  const [burst, setBurst] = useState<{ id: number; big: boolean } | null>(null);
  const [toast, setToast] = useState<{ id: number; text: string } | null>(null);
  const [popId, setPopId] = useState<string | null>(null);
  const burstTimer = useRef<number | undefined>(undefined);
  const toastTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!hydrated) return;
    const completedNow = items.filter((i) => done[i.id]).length;
    window.dispatchEvent(
      new CustomEvent<PlanProgressDetail>(PLAN_PROGRESS_EVENT, {
        detail: { completed: completedNow, total: items.length },
      })
    );
  }, [done, items, hydrated]);

  useEffect(
    () => () => {
      window.clearTimeout(burstTimer.current);
      window.clearTimeout(toastTimer.current);
    },
    []
  );

  function celebrate(completedAfter: number) {
    const total = items.length;
    const all = completedAfter === total;
    const half = completedAfter === Math.ceil(total / 2);
    const text = all
      ? "Every step ticked — plan complete! 🎉"
      : completedAfter === 1
        ? "First step done — nice start."
        : half
          ? `Halfway there — ${completedAfter} of ${total}.`
          : `${completedAfter} of ${total} done.`;
    const id = Date.now();
    setBurst({ id, big: all || half });
    setToast({ id, text });
    window.clearTimeout(burstTimer.current);
    window.clearTimeout(toastTimer.current);
    burstTimer.current = window.setTimeout(() => setBurst(null), 1000);
    toastTimer.current = window.setTimeout(() => setToast(null), 2600);
  }

  function toggle(id: string) {
    const wasDone = !!done[id];
    if (!wasDone) {
      const after = items.filter((i) => (i.id === id ? true : done[i.id])).length;
      celebrate(after);
      setPopId(id);
    }
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
      <div
        id="plan-checklist"
        className="scroll-mt-24 mb-6 rounded-2xl bg-forest text-cream p-5 sm:p-6 flex items-center gap-5"
      >
        <div className="relative">
          <ProgressRing value={pct} size={88} stroke={8}>
            <span className="font-display text-lg font-semibold tabular-nums">{pct}%</span>
          </ProgressRing>
          {burst && <ConfettiBurst key={burst.id} big={burst.big} />}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sky text-sm">Progress</p>
          <p className="font-display text-2xl sm:text-3xl font-semibold mt-0.5 tabular-nums">
            {completed} / {items.length} complete
          </p>
          <p className="mt-1 text-xs text-sky/90">
            Saved in this browser only (localStorage) — not synced to an account yet.
          </p>
          <p className="h-5 mt-1.5 text-sm font-medium text-amber truncate" role="status" aria-live="polite">
            {toast ? (
              <span key={toast.id} className="norra-toast inline-flex items-center gap-1.5">
                <PartyPopper className="h-4 w-4" aria-hidden />
                {toast.text}
              </span>
            ) : null}
          </p>
        </div>
      </div>

      {hydrated && items.length > 0 && completed === items.length && (
        <div className="mb-8 rounded-2xl border border-amber/50 bg-amber/15 px-4 py-4 sm:px-5 text-sm leading-relaxed">
          <p className="font-semibold text-ink flex items-center gap-2">
            <PartyPopper className="h-4 w-4 text-[#8A5A2B]" aria-hidden /> Every step on this checklist is ticked.
          </p>
          <p className="mt-1 text-muted">
            Great work. Requirements change — re-check official sources before key deadlines, or edit your plan to add
            new goals.
          </p>
        </div>
      )}

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
                            key={checked && popId === item.id ? "pop" : "idle"}
                            className={cn(
                              "h-5 w-5 rounded-md border flex items-center justify-center transition-colors",
                              checked ? "bg-forest border-forest text-cream" : "border-muted/40 bg-white",
                              checked && popId === item.id && "norra-check-pop"
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
