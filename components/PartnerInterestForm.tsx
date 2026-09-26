"use client";

import { FormEvent, useEffect, useState } from "react";
import { Mail, Save, Trash2 } from "lucide-react";
import { founder } from "@/lib/data/founder";
import { cities } from "@/lib/data/cities";
import { Button } from "./Button";

export const partnerInterestCategories = [
  "Immigration / RCIC or lawyer",
  "Career / employment",
  "Housing-adjacent",
  "Tutoring / education",
  "Settlement / community",
  "Healthcare navigation",
  "Financial / banking orientation",
  "Other",
] as const;

export type PartnerInterestDraft = {
  name: string;
  email: string;
  category: string;
  cityProvince: string;
  website: string;
  note: string;
  savedAt?: string;
};

const STORAGE_KEY = "norra-partner-interest-drafts";

const emptyDraft: PartnerInterestDraft = {
  name: "",
  email: "",
  category: "",
  cityProvince: "",
  website: "",
  note: "",
};

function loadDrafts(): PartnerInterestDraft[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveDrafts(drafts: PartnerInterestDraft[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(drafts));
  } catch {
    /* ignore */
  }
}

function buildMailto(draft: PartnerInterestDraft): string {
  const subject = `[Norra provider interest] ${draft.category || "General"} — ${draft.name}`;
  const body = [
    "Hello Kuldeep,",
    "",
    "I am expressing interest in joining a future Norra marketplace.",
    "I understand this is an early-stage interest list only — the marketplace is not live, and this does not mean verification, licensing check, or acceptance.",
    "",
    `Name: ${draft.name}`,
    `Email: ${draft.email}`,
    `Category: ${draft.category}`,
    `City / province: ${draft.cityProvince}`,
    `Website: ${draft.website || "(not provided)"}`,
    "",
    "Note:",
    draft.note || "(none)",
    "",
    "— Sent via Norra /partner interest form (mailto; not auto-submitted to a server)",
  ].join("\n");
  return `mailto:${founder.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Honest early-stage provider interest form.
 * Primary path: mailto to founder with structured subject/body.
 * Optional: save draft to localStorage (does not auto-submit to a server).
 */
export function PartnerInterestForm() {
  const [form, setForm] = useState<PartnerInterestDraft>(emptyDraft);
  const [draftCount, setDraftCount] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);

  useEffect(() => {
    setDraftCount(loadDrafts().length);
  }, []);

  function update<K extends keyof PartnerInterestDraft>(key: K, value: PartnerInterestDraft[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setFeedback(null);
  }

  function onSaveDraft() {
    if (!form.name.trim() || !form.email.trim()) {
      setFeedback("Add at least a name and email before saving a local draft.");
      return;
    }
    const drafts = loadDrafts();
    drafts.unshift({ ...form, savedAt: new Date().toISOString() });
    saveDrafts(drafts.slice(0, 20));
    setDraftCount(drafts.slice(0, 20).length);
    setFeedback("Draft saved in this browser’s localStorage only — not sent to Norra servers.");
  }

  function onClearDrafts() {
    saveDrafts([]);
    setDraftCount(0);
    setFeedback("Local drafts cleared on this device.");
  }

  function onEmailFounder(e: FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.category || !form.cityProvince.trim()) {
      setFeedback("Please fill name, email, category, and city/province before opening email.");
      return;
    }
    // Also keep a local copy so founder outreach isn’t lost if mailto fails
    const drafts = loadDrafts();
    drafts.unshift({ ...form, savedAt: new Date().toISOString() });
    saveDrafts(drafts.slice(0, 20));
    setDraftCount(Math.min(drafts.length, 20));

    const href = buildMailto(form);
    window.location.href = href;
    setFeedback(
      "Opening your email app with a prefilled message to the Founder. This does not auto-submit to a server yet — send the email to complete your interest."
    );
  }

  return (
    <div className="rounded-2xl bg-white border border-night/5 p-5 sm:p-8 shadow-sm space-y-5">
      <div>
        <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink">
          Express interest as a provider
        </h2>
        <p className="mt-2 text-sm text-muted leading-relaxed">
          Norra&apos;s marketplace is <strong className="text-ink">not live</strong>. This is an interest list
          only — it does <strong className="text-ink">not</strong> mean verification, a licensing check, or
          acceptance onto a marketplace. No partner logos or &ldquo;joined providers&rdquo; are shown because
          none are claimed.
        </p>
        <p className="mt-2 text-sm rounded-xl bg-amber/15 border border-amber/30 px-3 py-2.5 text-ink leading-relaxed">
          <strong>Does not auto-submit to a server yet.</strong> Use{" "}
          <strong>Email interest to Founder</strong> to open a mailto to {founder.email} with a structured
          subject and body (primary path so the Founder actually receives leads). Optionally save a draft in
          this browser&apos;s localStorage.
        </p>
      </div>

      <form onSubmit={onEmailFounder} className="space-y-4">
        <label className="block text-sm">
          <span className="font-medium text-ink">Name *</span>
          <input
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-night/10 bg-cream px-4 py-3 min-h-12 text-base"
            autoComplete="name"
          />
        </label>

        <label className="block text-sm">
          <span className="font-medium text-ink">Email *</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-night/10 bg-cream px-4 py-3 min-h-12 text-base"
            autoComplete="email"
          />
        </label>

        <label className="block text-sm">
          <span className="font-medium text-ink">Category *</span>
          <select
            required
            value={form.category}
            onChange={(e) => update("category", e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-night/10 bg-cream px-4 py-3 min-h-12 text-base"
          >
            <option value="">Select category…</option>
            {partnerInterestCategories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>

        <label className="block text-sm">
          <span className="font-medium text-ink">City / province *</span>
          <input
            required
            list="norra-partner-cities"
            value={form.cityProvince}
            onChange={(e) => update("cityProvince", e.target.value)}
            placeholder="e.g. Toronto, Ontario"
            className="mt-1.5 w-full rounded-xl border border-night/10 bg-cream px-4 py-3 min-h-12 text-base"
          />
          <datalist id="norra-partner-cities">
            {cities.map((c) => (
              <option key={c.slug} value={`${c.name}, ${c.province}`} />
            ))}
          </datalist>
        </label>

        <label className="block text-sm">
          <span className="font-medium text-ink">Website (optional)</span>
          <input
            type="url"
            value={form.website}
            onChange={(e) => update("website", e.target.value)}
            placeholder="https://"
            className="mt-1.5 w-full rounded-xl border border-night/10 bg-cream px-4 py-3 min-h-12 text-base"
          />
        </label>

        <label className="block text-sm">
          <span className="font-medium text-ink">Short note (optional)</span>
          <textarea
            value={form.note}
            onChange={(e) => update("note", e.target.value)}
            rows={4}
            maxLength={800}
            placeholder="What you offer newcomers, languages, credentials you hold (you must verify those yourself with regulators)…"
            className="mt-1.5 w-full rounded-xl border border-night/10 bg-cream px-4 py-3 text-base"
          />
        </label>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-1">
          <Button type="submit" size="lg" className="min-h-12 w-full sm:w-auto justify-center">
            <Mail className="h-4 w-4" />
            Email interest to Founder
          </Button>
          <button
            type="button"
            onClick={onSaveDraft}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-night/15 bg-cream px-5 py-3 text-sm font-medium text-ink min-h-12 touch-manipulation hover:border-forest/40"
          >
            <Save className="h-4 w-4" />
            Save draft locally
          </button>
        </div>
      </form>

      {feedback && (
        <p className="text-sm text-muted leading-relaxed rounded-xl border border-night/10 bg-sand px-3 py-2.5">
          {feedback}
        </p>
      )}

      {draftCount > 0 && (
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted pt-1 border-t border-night/5">
          <span>
            {draftCount} local draft{draftCount === 1 ? "" : "s"} on this device (localStorage only)
          </span>
          <button
            type="button"
            onClick={onClearDrafts}
            className="inline-flex items-center gap-1 text-muted hover:text-forest min-h-9 touch-manipulation"
          >
            <Trash2 className="h-3.5 w-3.5" />
            Clear local drafts
          </button>
        </div>
      )}
    </div>
  );
}
