"use client";

import Link from "next/link";
import { Building2, ExternalLink, IdCard, Landmark } from "lucide-react";
import {
  NORRA_BANKING_GUIDE_HREF,
  NORRA_GOVERNMENT_GUIDE_HREF,
  NORRA_SIN_GUIDE_HREF,
  OFFICIAL_BANKING,
  OFFICIAL_BENEFITS,
  OFFICIAL_CRA,
  OFFICIAL_CRA_BENEFITS,
  OFFICIAL_CRA_NEWCOMERS,
  OFFICIAL_SIN,
  OFFICIAL_TAX_GET_READY,
} from "@/lib/data/officialLinks";

/**
 * SIN + banking official deep-links for My Canada Plan dashboard.
 * When needs include Government benefits (or similar), also show CRA / tax-start + benefits links.
 * Verified Canada.ca starting points — no invented eligibility or benefit amounts.
 */
export function PlanOfficialLinks({ needs = [] }: { needs?: string[] }) {
  const showTaxBenefits =
    needs.includes("Government benefits") ||
    needs.some((n) => /tax|benefit|cra|government/i.test(n));

  return (
    <div className="mt-6 space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-forest/20 bg-white p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest text-cream">
              <IdCard className="h-5 w-5" aria-hidden />
            </span>
            <div className="min-w-0 flex-1">
              <h2 className="font-display text-lg font-semibold text-ink">Social Insurance Number (SIN)</h2>
              <p className="mt-1.5 text-sm text-muted leading-relaxed">
                Eligibility and documents are defined only by Service Canada. Always verify on the official site —
                Norra does not invent those details.
              </p>
              <ul className="mt-3 space-y-1.5">
                <li>
                  <a
                    href={OFFICIAL_SIN.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-forest hover:underline min-h-11"
                  >
                    {OFFICIAL_SIN.label}
                    <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden />
                  </a>
                </li>
                <li>
                  <Link
                    href={NORRA_SIN_GUIDE_HREF}
                    className="inline-flex items-center text-sm font-medium text-forest hover:underline min-h-11"
                  >
                    Norra guide: Get a SIN →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-forest/20 bg-white p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest text-cream">
              <Building2 className="h-5 w-5" aria-hidden />
            </span>
            <div className="min-w-0 flex-1">
              <h2 className="font-display text-lg font-semibold text-ink">Banking orientation</h2>
              <p className="mt-1.5 text-sm text-muted leading-relaxed">
                FCAC consumer pages explain opening a personal account and baseline rights. Not financial advice —
                no bank rankings.
              </p>
              <ul className="mt-3 space-y-1.5">
                <li>
                  <a
                    href={OFFICIAL_BANKING.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-forest hover:underline min-h-11"
                  >
                    {OFFICIAL_BANKING.label}
                    <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden />
                  </a>
                </li>
                <li>
                  <Link
                    href={NORRA_BANKING_GUIDE_HREF}
                    className="inline-flex items-center text-sm font-medium text-forest hover:underline min-h-11"
                  >
                    Norra guide: Open a bank account →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {showTaxBenefits && (
        <div className="rounded-2xl border border-forest/20 bg-white p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest text-cream">
              <Landmark className="h-5 w-5" aria-hidden />
            </span>
            <div className="min-w-0 flex-1">
              <h2 className="font-display text-lg font-semibold text-ink">Taxes & government benefits</h2>
              <p className="mt-1.5 text-sm text-muted leading-relaxed">
                Official CRA / Canada.ca getting-started pages only. Norra does{" "}
                <strong className="text-ink font-medium">not</strong> invent eligibility, amounts, or filing
                deadlines — always verify on the official site.
              </p>
              <ul className="mt-3 space-y-1.5">
                <li>
                  <a
                    href={OFFICIAL_CRA_NEWCOMERS.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-forest hover:underline min-h-11"
                  >
                    {OFFICIAL_CRA_NEWCOMERS.label}
                    <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden />
                  </a>
                </li>
                <li>
                  <a
                    href={OFFICIAL_TAX_GET_READY.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-forest hover:underline min-h-11"
                  >
                    {OFFICIAL_TAX_GET_READY.label}
                    <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden />
                  </a>
                </li>
                <li>
                  <a
                    href={OFFICIAL_BENEFITS.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-forest hover:underline min-h-11"
                  >
                    {OFFICIAL_BENEFITS.label}
                    <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden />
                  </a>
                </li>
                <li>
                  <a
                    href={OFFICIAL_CRA_BENEFITS.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-forest hover:underline min-h-11"
                  >
                    {OFFICIAL_CRA_BENEFITS.label}
                    <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden />
                  </a>
                </li>
                <li>
                  <a
                    href={OFFICIAL_CRA.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-forest hover:underline min-h-11"
                  >
                    {OFFICIAL_CRA.label}
                    <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden />
                  </a>
                </li>
                <li>
                  <Link
                    href={NORRA_GOVERNMENT_GUIDE_HREF}
                    className="inline-flex items-center text-sm font-medium text-forest hover:underline min-h-11"
                  >
                    Norra map: Government & benefits →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
