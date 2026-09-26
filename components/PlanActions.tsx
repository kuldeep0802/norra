"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy, Download, Mail, Printer, Share2, Upload } from "lucide-react";
import type { ChecklistItem, PlanProfile } from "@/lib/data/checklists";
import {
  applyPlanExportToStorage,
  buildPlanExportPayload,
  buildPlanMailtoHref,
  buildPlanShareText,
  hasExistingPlanData,
  parsePlanExport,
  PLAN_EXPORT_SCHEMA,
  PLAN_EXPORT_VERSION,
} from "@/lib/planTransfer";

export function PlanActions({
  profile,
  items,
  storageKey = "norra-canada-plan",
}: {
  profile: PlanProfile;
  items: ChecklistItem[];
  storageKey?: string;
}) {
  const [status, setStatus] = useState<"idle" | "copied" | "shared" | "exported" | "imported" | "error">("idle");
  const [statusDetail, setStatusDetail] = useState<string | null>(null);
  const [canWebShare, setCanWebShare] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setCanWebShare(typeof navigator !== "undefined" && typeof navigator.share === "function");
  }, []);

  function flash(
    next: typeof status,
    detail: string | null = null,
    ms = 3500
  ) {
    setStatus(next);
    setStatusDetail(detail);
    window.setTimeout(() => {
      setStatus("idle");
      setStatusDetail(null);
    }, ms);
  }

  function handlePrint() {
    if (typeof window !== "undefined") window.print();
  }

  async function handleShare() {
    const text = buildPlanShareText(profile, items, storageKey);
    const title = "My Canada Plan · Norra";

    try {
      if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
        await navigator.share({ title, text });
        flash("shared", "Shared. Plan data stays on this device — only the text summary left it.");
        return;
      }
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") return;
    }

    try {
      await navigator.clipboard.writeText(text);
      flash("copied", "Checklist summary copied. Plan data stays on this device.");
    } catch {
      flash("error", "Could not copy. Try Print, Email, or copy manually.");
    }
  }

  function handleEmail() {
    const href = buildPlanMailtoHref(profile, items, storageKey);
    // User picks recipient in their own mail client — no server.
    window.location.href = href;
  }

  function handleExport() {
    try {
      const payload = buildPlanExportPayload(profile, storageKey);
      const blob = new Blob([JSON.stringify(payload, null, 2)], {
        type: "application/json",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      const stamp = new Date().toISOString().slice(0, 10);
      a.href = url;
      a.download = `norra-canada-plan-${stamp}.json`;
      a.rel = "noopener";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      flash(
        "exported",
        `Downloaded ${PLAN_EXPORT_SCHEMA} v${PLAN_EXPORT_VERSION}. Data stays on your devices — this file is how you transfer before accounts.`
      );
    } catch {
      flash("error", "Could not build export file. Try again.");
    }
  }

  function handleImportClick() {
    fileInputRef.current?.click();
  }

  async function handleImportFile(file: File | undefined) {
    if (!file) return;
    if (file.size > 500_000) {
      flash("error", "File is too large. Export files are small JSON backups.");
      return;
    }
    let text: string;
    try {
      text = await file.text();
    } catch {
      flash("error", "Could not read that file.");
      return;
    }
    const parsed = parsePlanExport(text);
    if (!parsed.ok) {
      flash("error", parsed.error);
      return;
    }

    if (hasExistingPlanData(storageKey)) {
      const ok = window.confirm(
        "Replace the plan profile and checklist ticks saved on this device with the imported file?\n\nThis cannot be undone unless you exported a backup first. Data stays on this device only."
      );
      if (!ok) return;
    }

    try {
      applyPlanExportToStorage(parsed.data);
      flash("imported", "Imported into localStorage on this device. Reloading…", 2000);
      window.setTimeout(() => {
        window.location.reload();
      }, 600);
    } catch {
      flash("error", "Could not write imported data to this device.");
    }
  }

  const statusMessage =
    statusDetail ||
    (status === "copied"
      ? "Checklist summary copied. Plan data stays on this device."
      : status === "shared"
        ? "Shared. Plan data stays on this device — only the text summary left it."
        : status === "error"
          ? "Something went wrong. Try again."
          : null);

  const shareLabel =
    status === "copied"
      ? "Copied summary"
      : status === "shared"
        ? "Shared"
        : canWebShare
          ? "Share plan summary"
          : "Copy plan summary";

  return (
    <div className="print-hide mt-8 space-y-4">
      <div className="rounded-2xl border border-night/5 bg-white p-4 sm:p-5">
        <p className="text-sm font-semibold text-ink">Print, share, or email</p>
        <p className="mt-1 text-xs text-muted leading-relaxed">
          Print hides site navigation. Share / email send a text snapshot of progress and next items — your
          checklist ticks are not in the URL (local only). Email opens your mail app; you choose the recipient.
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
          <button
            type="button"
            onClick={handleEmail}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-night/10 bg-cream text-ink px-5 py-3 text-sm font-medium min-h-12 touch-manipulation hover:border-forest/40 transition-colors"
          >
            <Mail className="h-4 w-4" aria-hidden />
            Email myself this summary
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-night/5 bg-white p-4 sm:p-5">
        <p className="text-sm font-semibold text-ink">Transfer plan (JSON backup)</p>
        <p className="mt-1 text-xs text-muted leading-relaxed">
          Plan data stays on this device. Export downloads a versioned JSON file ({PLAN_EXPORT_SCHEMA} v
          {PLAN_EXPORT_VERSION}) with your profile and checklist completion — this is how you move to another
          browser or device before Norra accounts exist. Import validates the schema and rejects garbage safely.
        </p>
        <div className="mt-4 flex flex-col sm:flex-row flex-wrap gap-3">
          <button
            type="button"
            onClick={handleExport}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-forest/30 bg-forest/5 text-forest px-5 py-3 text-sm font-medium min-h-12 touch-manipulation hover:bg-forest hover:text-cream transition-colors"
          >
            <Download className="h-4 w-4" aria-hidden />
            Export plan JSON
          </button>
          <button
            type="button"
            onClick={handleImportClick}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-night/10 bg-cream text-ink px-5 py-3 text-sm font-medium min-h-12 touch-manipulation hover:border-forest/40 transition-colors"
          >
            <Upload className="h-4 w-4" aria-hidden />
            Import plan JSON
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="application/json,.json"
            className="sr-only"
            aria-label="Choose Norra plan JSON file to import"
            onChange={(e) => {
              const file = e.target.files?.[0];
              e.target.value = "";
              void handleImportFile(file);
            }}
          />
        </div>
      </div>

      {statusMessage && (
        <p className="text-xs text-forest" role="status" aria-live="polite">
          {statusMessage}
        </p>
      )}
    </div>
  );
}
