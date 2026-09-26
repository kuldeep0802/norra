"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Map as MapIcon } from "lucide-react";
import { stagePreviews } from "@/lib/data/stagePreviews";
import { guides } from "@/lib/data/guides";
import { Button } from "./Button";
import { GuideCard } from "./GuideCard";
import { cn } from "@/lib/utils";

const bySlug = new Map(guides.map((g) => [g.slug, g]));

/** Interactive journey picker: tap a stage → 3 first steps + 2 guides + plan CTA. */
export function StagePicker() {
  const [activeId, setActiveId] = useState(stagePreviews[1].id);
  const reduce = useReducedMotion();
  const stage = stagePreviews.find((s) => s.id === activeId) ?? stagePreviews[0];
  const stageGuides = stage.guideSlugs.map((s) => bySlug.get(s)).filter(Boolean) as typeof guides;

  return (
    <section id="journey" className="scroll-mt-24 py-16 sm:py-20 bg-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide uppercase mb-3 text-forest">Try it · 5 seconds</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight font-semibold tracking-tight text-ink">
            Where are you right now?
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted">
            Tap your stage to preview first steps and guides. Then build a full plan for it — free, in your browser.
          </p>
        </div>

        <div
          role="group"
          aria-label="Choose your stage"
          className="mt-8 -mx-4 px-4 flex gap-2 overflow-x-auto no-scrollbar pb-2 sm:mx-0 sm:px-0 sm:flex-wrap"
        >
          {stagePreviews.map((s) => {
            const Icon = s.icon;
            const active = s.id === activeId;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveId(s.id)}
                aria-pressed={active}
                aria-controls="stage-preview-panel"
                className={cn(
                  "relative shrink-0 inline-flex items-center gap-2 rounded-full border px-4 py-2.5 min-h-11 text-sm font-medium touch-manipulation transition-colors duration-200",
                  active
                    ? "border-forest text-cream"
                    : "border-night/10 bg-white text-ink hover:border-forest/40 hover:text-forest"
                )}
              >
                {active && (
                  <motion.span
                    layoutId={reduce ? undefined : "stage-pill"}
                    className="absolute inset-0 rounded-full bg-forest"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    aria-hidden
                  />
                )}
                <Icon className={cn("relative h-4 w-4", active ? "text-amber" : "text-forest")} aria-hidden />
                <span className="relative">{s.label}</span>
              </button>
            );
          })}
        </div>

        <div
          id="stage-preview-panel"
          aria-live="polite"
          className="mt-6 rounded-3xl border border-night/5 bg-white shadow-sm p-5 sm:p-8 lg:min-h-[22rem]"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={stage.id}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -6 }}
              transition={{ duration: reduce ? 0.12 : 0.25 }}
              className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] gap-8"
            >
              <div>
                <h3 className="font-display text-2xl font-semibold text-ink">{stage.label}</h3>
                <p className="mt-1 text-sm text-muted">{stage.blurb}</p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-forest">3 first steps</p>
                <ol className="mt-3 space-y-3">
                  {stage.steps.map((step, i) => (
                    <motion.li
                      key={step.title}
                      initial={reduce ? false : { opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: reduce ? 0 : 0.06 + i * 0.07, duration: 0.3 }}
                      className="flex gap-3"
                    >
                      <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest text-sm font-semibold">
                        {i + 1}
                      </span>
                      <span>
                        <span className="block font-medium text-ink">{step.title}</span>
                        <span className="block text-sm text-muted leading-relaxed">{step.detail}</span>
                      </span>
                    </motion.li>
                  ))}
                </ol>
                <Button href={stage.planHref} size="lg" className="mt-7 min-h-12 w-full sm:w-auto justify-center group">
                  <MapIcon className="h-4 w-4" aria-hidden />
                  Build my plan for this stage
                  <ArrowRight className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-1" aria-hidden />
                </Button>
                <p className="mt-3 text-xs text-muted">Organization only — verify requirements on official sources.</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-forest">Read first</p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {stageGuides.map((g) => (
                    <GuideCard key={g.slug} guide={g} compact className="bg-cream/60" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
