"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { PlanChecklist } from "@/components/PlanChecklist";
import { DemoBanner } from "@/components/DemoBanner";
import { beforeYouArriveItems, arrivalItems, planNeedOptions, statusOptions } from "@/lib/data/checklists";
import { cities } from "@/lib/data/cities";

export default function PlanPage() {
  const [step, setStep] = useState<"form" | "dashboard">("form");
  const [status, setStatus] = useState("");
  const [city, setCity] = useState("");
  const [arrival, setArrival] = useState("");
  const [family, setFamily] = useState("Just me");
  const [needs, setNeeds] = useState<string[]>([]);
  const [goals, setGoals] = useState("");

  function toggleNeed(n: string) {
    setNeeds((prev) => (prev.includes(n) ? prev.filter((x) => x !== n) : [...prev, n]));
  }

  const items = [
    ...beforeYouArriveItems.slice(0, 8),
    ...arrivalItems.slice(0, 5),
  ].map((item, i) => ({
    ...item,
    id: `plan-${i}-${item.id}`,
  }));

  if (step === "dashboard") {
    return (
      <div className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="My Canada Plan"
            title={`Your plan for ${city || "Canada"}`}
            description={`Status: ${status || "Not specified"} · Arrival: ${arrival || "TBD"} · ${family}`}
          />
          <DemoBanner className="mt-6">
            Progress saves in this browser (localStorage). No Norra account is required in this early version.
          </DemoBanner>
          {goals && <p className="mt-4 text-muted italic">&ldquo;{goals}&rdquo;</p>}
          {needs.length > 0 && (
            <p className="mt-2 text-sm text-muted">Focus: {needs.join(" · ")}</p>
          )}
          <div className="mt-10">
            <PlanChecklist items={items} storageKey="norra-canada-plan" />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="outline" className="min-h-11" onClick={() => setStep("form")}>
              Edit plan details
            </Button>
            <Button href="/#needs" variant="outline" className="min-h-11">
              What do you need help with?
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Central product · My Canada Plan"
          title="Build My Canada Plan"
          description="A few details unlock a living checklist you can track as you go — documents, housing, work, and everyday setup."
        />
        <DemoBanner className="mt-8">
          <strong>Real functionality:</strong> this planner works in your browser. It is not immigration advice and
          does not file applications.
        </DemoBanner>
        <form
          className="mt-10 space-y-6 rounded-2xl bg-white border border-night/5 p-6 sm:p-8 shadow-sm"
          onSubmit={(e) => {
            e.preventDefault();
            setStep("dashboard");
          }}
        >
          <label className="block">
            <span className="text-sm font-medium">Where are you in your journey?</span>
            <select
              required
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="mt-1 w-full rounded-xl border border-night/10 bg-cream px-4 py-3 min-h-11"
            >
              <option value="">Select status…</option>
              {statusOptions.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-medium">City (or nearest)</span>
            <select
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="mt-1 w-full rounded-xl border border-night/10 bg-cream px-4 py-3 min-h-11"
            >
              <option value="">Select city…</option>
              {cities.map((c) => (
                <option key={c.slug}>{c.name}</option>
              ))}
              <option>Other / Not sure yet</option>
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-medium">Arrival date (optional)</span>
            <input
              type="date"
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
              className="mt-1 w-full rounded-xl border border-night/10 bg-cream px-4 py-3 min-h-11"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium">Who&apos;s coming?</span>
            <select
              value={family}
              onChange={(e) => setFamily(e.target.value)}
              className="mt-1 w-full rounded-xl border border-night/10 bg-cream px-4 py-3 min-h-11"
            >
              <option>Just me</option>
              <option>Me + partner</option>
              <option>Family with children</option>
              <option>Joining family already here</option>
            </select>
          </label>
          <div>
            <span className="text-sm font-medium">What do you need help with?</span>
            <div className="mt-2 flex flex-wrap gap-2">
              {planNeedOptions.map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => toggleNeed(n)}
                  className={`rounded-full px-3 py-2 text-sm border transition-colors min-h-11 touch-manipulation ${
                    needs.includes(n)
                      ? "bg-forest text-cream border-forest"
                      : "border-night/10 hover:border-forest"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
          <label className="block">
            <span className="text-sm font-medium">Goals (optional)</span>
            <textarea
              value={goals}
              onChange={(e) => setGoals(e.target.value)}
              rows={3}
              placeholder="e.g. Find housing near campus, open a bank account in week one…"
              className="mt-1 w-full rounded-xl border border-night/10 bg-cream px-4 py-2.5"
            />
          </label>
          <Button type="submit" size="lg" className="w-full min-h-12">
            Build My Canada Plan
          </Button>
        </form>
      </div>
    </div>
  );
}
