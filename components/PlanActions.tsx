"use client";

import { useEffect, useState } from "react";
import { Check, Copy, Printer, Share2 } from "lucide-react";
import type { ChecklistItem, PlanProfile } from "@/lib/data/checklists";
import { goalOptions, stageOptions } from "@/lib/data/checklists";
import { siteConfig } from "@/lib/site";

function loadDone(storageKey: string): Record<string, boolean> {
  try {
    const raw = localStorage.getItem(storageKey);
    if (raw) return JSON.parse(raw) as Record<string, boolean>;
  } catch {
    /* ignore */
  }
  return {};
}

function buildShareText(profile: PlanProfile, items: ChecklistItem[], storageKey: string): string {
  const done = loadDone(storageKey);
  const completed = items.filter((i) => done[i.id]).length;
  const unchecked = items.filter((i) => !done[i.id]).slice(0, 5);
  const stageLabel = stageOptions.find((s) => s.value === profile.stage)?.label || "Not set";
  const goals =
    profile.goals.map((g) => goalOptions.find((o) => o.value === g)?.label || g).join(", ") || "None yet";
  const place =
    profile.city && profile.city !== "Other / Not sure yet"
      ? profile.city
      : profile.province || "Canada";

  const lines = [
    `My Canada Plan (${place}) — via Norra`,
    `Stage: ${stageLabel}`,
    `Goals: ${goals}`,
    `Progress: ${completed} / ${items.length} complete (saved on this device only)`,
    "",
  ];

  if (unchecked.length > 0) {
    lines.push("Next unchecked items:");
    for (const item of unchecked) {
      lines.push(`• ${item.label}`);
    }
    lines.push("");
  } else if (items.length > 0) {
    lines.push("All checklist items are marked complete on this device.");
    lines.push("");
  }

  lines.push(
    "Plan data stays on this device — this summary is a snapshot, not a live shared plan.",
    `Build yours: ${siteConfig.url}/plan/`
  );

  return lines.join("\n");
}

export function PlanActions({
  profile,
  items,
  storageKey = "norra-canada-plan",
}: {
  profile: PlanProfile;
  items: ChecklistItem[];
  storageKey?: string;
}) {
  const [status, setStatus] = useState<"idle" | "copied" | "shared" | "error">("idle");
  const [canWebShare, setCanWebShare] = useState(false);

  useEffect(() => {
    setCanWebShare(typeof navigator !== "undefined" && typeof navigator.share === "function");
  }, []);

  function handlePrint() {
    if (typeof window !== "undefined") window.print();
  }

  async function handleShare() {
    const text = buildShareText(profile, items, storageKey);
    const title = "My Canada Plan · Norra";

    try {
      if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
        await navigator.share({ title, text });
        setStatus("shared");
        window.setTimeout(() => setStatus("idle"), 2500);
        return;
      }
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") return;
    }

    try {
      await navigator.clipboard.writeText(text);
      setStatus("copied");
      window.setTimeout(() => setStatus("idle"), 3500);
    } catch {
      setStatus("error");
      window.setTimeout(() => setStatus("idle"), 3500);
    }
  }

  const statusMessage =
    status === "copied"
      ? "Checklist summary copied. Plan data stays on this device."
      : status === "shared"
        ? "Shared. Plan data stays on this device — only the text summary left it."
        : status === "error"
          ? "Could not copy. Try Print, or copy manually."
          : null;

  const shareLabel =
    status === "copied"
      ? "Copied summary"
      : status === "shared"
        ? "Shared"
        : canWebShare
          ? "Share plan summary"
          : "Copy plan summary";

  return (
    <div className="print-hide mt-8 rounded-2xl border border-night/5 bg-white p-4 sm:p-5">
      <p className="text-sm font-semibold text-ink">Print or share this plan</p>
      <p className="mt-1 text-xs text-muted leading-relaxed">
        Print hides site navigation. Share sends a text snapshot of progress and next items — your checklist
        ticks are not in the URL (local only).
      </p>
      <div className="mt-4 flex flex-col sm:flex-row flex-wrap gap-3">
        <button
          type="button"
          onClick={handlePrint}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-forest/30 bg-forest/5 text-forest px-5 py-3 text-sm font-medium min-h-12 touch-manipulation hover:bg-forest hover:text-cream transition-colors"
        >
          <Printer className="h-4 w-4" aria-hidden />
          Print my plan
        </button>
        <button
          type="button"
          onClick={() => void handleShare()}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-night/10 bg-cream text-ink px-5 py-3 text-sm font-medium min-h-12 touch-manipulation hover:border-forest/40 transition-colors"
        >
          {status === "copied" || status === "shared" ? (
            <Check className="h-4 w-4 text-forest" aria-hidden />
          ) : canWebShare ? (
            <Share2 className="h-4 w-4" aria-hidden />
          ) : (
            <Copy className="h-4 w-4" aria-hidden />
          )}
          {shareLabel}
        </button>
      </div>
      {statusMessage && (
        <p className="mt-3 text-xs text-forest" role="status" aria-live="polite">
          {statusMessage}
        </p>
      )}
    </div>
  );
}
