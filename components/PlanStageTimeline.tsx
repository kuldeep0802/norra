import { Check } from "lucide-react";
import { stageOptions, type PlanStage } from "@/lib/data/checklists";
import { cn } from "@/lib/utils";

const shortLabels: Record<PlanStage, string> = {
  planning: "Planning",
  "pre-arrival": "Preparing",
  "just-arrived": "Just landed",
  settling: "Settling",
  "already-here": "Living here",
};

/** Visual journey timeline for My Canada Plan — shows where the saved stage sits. */
export function PlanStageTimeline({ stage }: { stage: PlanStage | "" }) {
  const idx = stageOptions.findIndex((s) => s.value === stage);
  const pct = idx <= 0 ? 0 : (idx / (stageOptions.length - 1)) * 100;
  return (
    <div className="rounded-2xl border border-night/5 bg-white px-4 py-5 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted">Your journey stage</p>
      <ol className="relative mt-4 grid grid-cols-5" aria-label="Journey stages">
        <span aria-hidden className="absolute left-[10%] right-[10%] top-[15px] h-0.5 bg-night/10" />
        <span
          aria-hidden
          className="absolute left-[10%] top-[15px] h-0.5 bg-forest norra-grow-x"
          style={{ width: `${pct * 0.8}%` }}
        />
        {stageOptions.map((s, i) => {
          const state = idx === -1 ? "future" : i < idx ? "past" : i === idx ? "current" : "future";
          return (
            <li key={s.value} className="relative flex flex-col items-center text-center" aria-current={state === "current" ? "step" : undefined}>
              <span className="relative flex h-8 w-8 items-center justify-center">
                {state === "current" && (
                  <span aria-hidden className="absolute inset-0 rounded-full bg-amber/50 motion-safe:animate-ping" style={{ animationDuration: "2.2s" }} />
                )}
                <span
                  className={cn(
                    "relative flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs font-semibold",
                    state === "past" && "border-forest bg-forest text-cream",
                    state === "current" && "border-amber bg-amber text-night",
                    state === "future" && "border-night/15 bg-white text-muted"
                  )}
                >
                  {state === "past" ? <Check className="h-4 w-4" aria-hidden /> : i + 1}
                </span>
              </span>
              <span
                className={cn(
                  "mt-2 text-[11px] sm:text-xs leading-tight px-0.5",
                  state === "current" ? "font-semibold text-ink" : "text-muted"
                )}
              >
                {shortLabels[s.value]}
                {state === "current" && <span className="sr-only"> (your current stage)</span>}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
