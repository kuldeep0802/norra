"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, MapPin, RefreshCw, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { PlanChecklist } from "@/components/PlanChecklist";
import { PlanHealthLinks } from "@/components/PlanHealthLinks";
import { PlanOfficialLinks } from "@/components/PlanOfficialLinks";
import { DemoBanner } from "@/components/DemoBanner";
import { Disclaimer } from "@/components/Disclaimer";
import {
  buildPlanChecklist,
  emptyPlanProfile,
  getPlanRecommendations,
  goalOptions,
  loadPlanProfile,
  PlanGoal,
  PlanProfile,
  PlanStage,
  planNeedOptions,
  savePlanProfile,
  stageOptions,
} from "@/lib/data/checklists";
import { cities } from "@/lib/data/cities";
import { PROVINCE_TERRITORY_OPTIONS } from "@/lib/data/healthLinks";

export default function PlanPage() {
  const [step, setStep] = useState<"form" | "dashboard">("form");
  const [profile, setProfile] = useState<PlanProfile>(emptyPlanProfile);

  useEffect(() => {
    const saved = loadPlanProfile();
    if (saved?.stage) {
      // Backfill province from city map when a known city was saved without province
      const known = cities.find((c) => c.name === saved.city);
      const next = known && !saved.province ? { ...saved, province: known.province } : saved;
      setProfile(next);
      if (known && !saved.province) savePlanProfile(next);
      setStep("dashboard");
    }
  }, []);

  const items = useMemo(() => buildPlanChecklist(profile), [profile]);
  const recommendations = useMemo(() => getPlanRecommendations(profile), [profile]);
  const stageLabel = stageOptions.find((s) => s.value === profile.stage)?.label;

  function toggleGoal(g: PlanGoal) {
    setProfile((prev) => ({
      ...prev,
      goals: prev.goals.includes(g) ? prev.goals.filter((x) => x !== g) : [...prev.goals, g],
    }));
  }

  function toggleNeed(n: string) {
    setProfile((prev) => ({
      ...prev,
      needs: prev.needs.includes(n) ? prev.needs.filter((x) => x !== n) : [...prev.needs, n],
    }));
  }

  function submitPlan(e: React.FormEvent) {
    e.preventDefault();
    savePlanProfile(profile);
    setStep("dashboard");
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function resetPlan() {
    setProfile(emptyPlanProfile);
    savePlanProfile(emptyPlanProfile);
    try {
      localStorage.removeItem("norra-canada-plan");
    } catch {
      /* ignore */
    }
    setStep("form");
  }

  if (step === "dashboard") {
    return (
      <div className="py-10 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="My Canada Plan"
            title={
              profile.city && profile.city !== "Other / Not sure yet"
                ? `Your plan for ${profile.city}`
                : profile.province
                  ? `Your plan for ${profile.province}`
                  : "Your Canada plan"
            }
            description={`${stageLabel || "Stage not set"}${
              profile.city && profile.city !== "Other / Not sure yet"
                ? ` · ${profile.city}`
                : profile.province
                  ? ` · ${profile.province}`
                  : ""
            }${profile.arrival ? ` · Arrival ${profile.arrival}` : ""} · ${profile.family}`}
          />

          <DemoBanner className="mt-6">
            <strong className="text-forest">Real in this browser:</strong> your profile and checklist ticks save to
            localStorage on this device.{" "}
            <strong className="text-forest">Not built yet:</strong> Norra accounts, cross-device sync, or shared
            family plans.
          </DemoBanner>

          <Disclaimer className="mt-4">
            This plan is for organization and navigation only. It is not immigration, legal, medical, or financial
            advice. Verify requirements on official sources (IRCC, Service Canada, your province).
          </Disclaimer>

          {profile.notes && (
            <p className="mt-4 text-muted italic rounded-xl bg-white border border-night/5 p-4">&ldquo;{profile.notes}&rdquo;</p>
          )}

          {(profile.goals.length > 0 || profile.needs.length > 0) && (
            <div className="mt-4 flex flex-wrap gap-2">
              {profile.goals.map((g) => (
                <span
                  key={g}
                  className="rounded-full bg-forest/10 text-forest text-xs font-medium px-3 py-1.5 capitalize"
                >
                  {g}
                </span>
              ))}
              {profile.needs.map((n) => (
                <span key={n} className="rounded-full bg-sand text-muted text-xs font-medium px-3 py-1.5">
                  {n}
                </span>
              ))}
            </div>
          )}

          {profile.goals.length === 0 && profile.needs.length === 0 && (
            <div className="mt-6 rounded-2xl border border-amber/40 bg-amber/10 px-4 py-4 sm:px-5 text-sm text-ink leading-relaxed">
              <p className="font-semibold text-ink">No goals selected yet</p>
              <p className="mt-1.5 text-muted">
                Your stage still builds a starter checklist, but picking goals (Study, Work, Housing, Settle) or needs
                (Banking & SIN, Healthcare registration, …) sharpens recommendations. Ticks stay in this
                browser&apos;s localStorage only.
              </p>
              <button
                type="button"
                onClick={() => {
                  setStep("form");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="mt-3 inline-flex items-center justify-center rounded-full bg-forest text-cream px-4 py-2.5 text-xs font-medium min-h-11 touch-manipulation"
              >
                Pick goals & needs
              </button>
            </div>
          )}

          <PlanHealthLinks city={profile.city} province={profile.province} />

          <PlanOfficialLinks needs={profile.needs} />

          <div className="mt-10">
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink mb-4">
              Stage-aware checklist
            </h2>
            <PlanChecklist
              items={items}
              storageKey="norra-canada-plan"
              onEditPlan={() => {
                setStep("form");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          </div>

          {recommendations.length > 0 && (
            <div className="mt-12">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-5 w-5 text-forest" />
                <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink">
                  Recommended next reads & paths
                </h2>
              </div>
              <p className="text-sm text-muted mb-4">
                Based on your stage and goals. Sample marketplace links are labelled — they are not real bookings.
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {recommendations.map((r) => (
                  <li key={r.href}>
                    <Link
                      href={r.href}
                      className="flex flex-col h-full rounded-2xl border border-night/5 bg-white p-4 sm:p-5 hover:border-forest/30 hover:shadow-sm transition-all touch-manipulation min-h-[7rem]"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        {r.badge && (
                          <span className="text-[10px] uppercase tracking-wide font-semibold bg-amber/20 text-ink px-2 py-0.5 rounded-full">
                            {r.badge}
                          </span>
                        )}
                        <span className="text-[10px] uppercase tracking-wide text-muted">{r.kind}</span>
                      </div>
                      <span className="font-semibold text-forest">{r.title}</span>
                      <span className="mt-1 text-sm text-muted leading-relaxed flex-1">{r.description}</span>
                      <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-forest">
                        Open <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-3">
            <Button
              variant="outline"
              className="min-h-12 w-full sm:w-auto justify-center"
              onClick={() => {
                setStep("form");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Edit plan details
            </Button>
            <Button href="/resources" variant="outline" className="min-h-12 w-full sm:w-auto justify-center">
              Knowledge Hub
            </Button>
            <Button href="/#needs" variant="outline" className="min-h-12 w-full sm:w-auto justify-center">
              What do you need help with?
            </Button>
            <button
              type="button"
              onClick={resetPlan}
              className="inline-flex items-center justify-center gap-2 text-sm text-muted hover:text-forest min-h-12 px-3 touch-manipulation"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              Reset plan on this device
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 sm:py-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Central product · My Canada Plan"
          title="Build My Canada Plan"
          description="Tell us your stage, city, and goals — get a living checklist with concrete next steps and guides. Organization only; not immigration advice."
        />
        <DemoBanner className="mt-8">
          <strong className="text-forest">Real functionality:</strong> this planner works in your browser and saves
          locally. <strong className="text-forest">Coming later:</strong> accounts and sync across devices.
        </DemoBanner>

        <form
          className="mt-8 sm:mt-10 space-y-6 rounded-2xl bg-white border border-night/5 p-5 sm:p-8 shadow-sm"
          onSubmit={submitPlan}
        >
          <fieldset>
            <legend className="text-sm font-medium">Where are you in your journey?</legend>
            <div className="mt-3 grid gap-2">
              {stageOptions.map((s) => (
                <label
                  key={s.value}
                  className={`flex gap-3 rounded-xl border p-3.5 cursor-pointer transition-colors touch-manipulation min-h-[3.25rem] ${
                    profile.stage === s.value
                      ? "border-forest bg-forest/5"
                      : "border-night/10 hover:border-forest/40"
                  }`}
                >
                  <input
                    type="radio"
                    name="stage"
                    required
                    className="mt-1 accent-[var(--color-forest)]"
                    checked={profile.stage === s.value}
                    onChange={() => setProfile((p) => ({ ...p, stage: s.value as PlanStage }))}
                  />
                  <span>
                    <span className="block font-medium text-sm sm:text-base">{s.label}</span>
                    <span className="block text-xs text-muted mt-0.5">{s.hint}</span>
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <label className="block">
            <span className="text-sm font-medium flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" aria-hidden /> City (or preference)
            </span>
            <select
              required
              value={profile.city}
              onChange={(e) => {
                const city = e.target.value;
                const known = cities.find((c) => c.name === city);
                setProfile((p) => ({
                  ...p,
                  city,
                  // Known city → auto-fill province from city map; Other keeps/enables manual province
                  province: known ? known.province : city === "Other / Not sure yet" ? p.province : "",
                }));
              }}
              className="mt-1.5 w-full rounded-xl border border-night/10 bg-cream px-4 py-3 min-h-12 text-base"
            >
              <option value="">Select city…</option>
              {cities.map((c) => (
                <option key={c.slug} value={c.name}>
                  {c.name}, {c.province}
                </option>
              ))}
              <option value="Other / Not sure yet">Other / Not sure yet</option>
            </select>
          </label>

          {profile.city && profile.city !== "Other / Not sure yet" && profile.province ? (
            <div className="rounded-xl border border-forest/20 bg-forest/5 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">Province / Territory</p>
              <p className="mt-1.5">
                <span className="inline-flex items-center rounded-full bg-forest text-cream text-sm font-medium px-3 py-1.5">
                  {profile.province}
                </span>
              </p>
              <p className="mt-2 text-xs text-muted leading-relaxed">
                Auto-filled from your city. Choose &ldquo;Other / Not sure yet&rdquo; above to set province manually.
              </p>
            </div>
          ) : null}

          {(!profile.city || profile.city === "Other / Not sure yet") && (
            <label className="block">
              <span className="text-sm font-medium">Province / Territory</span>
              <span className="block text-xs text-muted mt-0.5 mb-1.5">
                Optional but recommended — unlocks the matching official provincial health-card link. Always
                verify on the official site; Norra does not invent eligibility.
              </span>
              <select
                value={profile.province}
                onChange={(e) => setProfile((p) => ({ ...p, province: e.target.value }))}
                className="mt-0.5 w-full rounded-xl border border-night/10 bg-cream px-4 py-3 min-h-12 text-base"
              >
                <option value="">Select province/territory (optional)…</option>
                {PROVINCE_TERRITORY_OPTIONS.map((prov) => (
                  <option key={prov} value={prov}>
                    {prov}
                  </option>
                ))}
              </select>
            </label>
          )}

          <label className="block">
            <span className="text-sm font-medium">Arrival date (optional)</span>
            <input
              type="date"
              value={profile.arrival}
              onChange={(e) => setProfile((p) => ({ ...p, arrival: e.target.value }))}
              className="mt-1.5 w-full rounded-xl border border-night/10 bg-cream px-4 py-3 min-h-12 text-base"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium">Who&apos;s coming?</span>
            <select
              value={profile.family}
              onChange={(e) => setProfile((p) => ({ ...p, family: e.target.value }))}
              className="mt-1.5 w-full rounded-xl border border-night/10 bg-cream px-4 py-3 min-h-12 text-base"
            >
              <option>Just me</option>
              <option>Me + partner</option>
              <option>Family with children</option>
              <option>Joining family already here</option>
            </select>
          </label>

          <div>
            <span className="text-sm font-medium">Primary goals</span>
            <p className="text-xs text-muted mt-0.5 mb-2">Pick one or more — shapes your checklist and guides.</p>
            <div className="flex flex-wrap gap-2">
              {goalOptions.map((g) => (
                <button
                  key={g.value}
                  type="button"
                  onClick={() => toggleGoal(g.value)}
                  aria-pressed={profile.goals.includes(g.value)}
                  className={`rounded-full px-4 py-2.5 text-sm border transition-colors min-h-11 touch-manipulation ${
                    profile.goals.includes(g.value)
                      ? "bg-forest text-cream border-forest"
                      : "border-night/10 hover:border-forest bg-cream"
                  }`}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <span className="text-sm font-medium">What do you need help with?</span>
            <div className="mt-2 flex flex-wrap gap-2">
              {planNeedOptions.map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => toggleNeed(n)}
                  aria-pressed={profile.needs.includes(n)}
                  className={`rounded-full px-3 py-2 text-sm border transition-colors min-h-11 touch-manipulation ${
                    profile.needs.includes(n)
                      ? "bg-night text-cream border-night"
                      : "border-night/10 hover:border-forest bg-cream"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>

          <label className="block">
            <span className="text-sm font-medium">Notes (optional)</span>
            <textarea
              value={profile.notes}
              onChange={(e) => setProfile((p) => ({ ...p, notes: e.target.value }))}
              rows={3}
              placeholder="e.g. Find housing near campus, open a bank account in week one…"
              className="mt-1.5 w-full rounded-xl border border-night/10 bg-cream px-4 py-3 text-base"
            />
          </label>

          <Button type="submit" size="lg" className="w-full min-h-12">
            <Sparkles className="h-4 w-4" />
            Build My Canada Plan
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted">
          Prefer reading first?{" "}
          <Link href="/resources" className="text-forest font-medium underline-offset-2 hover:underline">
            Open the Knowledge Hub
          </Link>
        </p>
      </div>
    </div>
  );
}
