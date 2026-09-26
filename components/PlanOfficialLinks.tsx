"use client";

import Link from "next/link";
import { Building2, ExternalLink, IdCard } from "lucide-react";
import {
  NORRA_BANKING_GUIDE_HREF,
  NORRA_SIN_GUIDE_HREF,
  OFFICIAL_BANKING,
  OFFICIAL_SIN,
} from "@/lib/data/officialLinks";

/**
 * SIN + banking official deep-links for My Canada Plan dashboard.
 * Verified Canada.ca / FCAC starting points — no invented eligibility.
 */
export function PlanOfficialLinks() {
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-forest/20 bg-white p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest text-cream">
            <IdCard className="h-5 w-5" />
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
                  <ExternalLink className="h-3.5 w-3.5 shrink-0" />
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
            <Building2 className="h-5 w-5" />
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
                  <ExternalLink className="h-3.5 w-3.5 shrink-0" />
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
  );
}
