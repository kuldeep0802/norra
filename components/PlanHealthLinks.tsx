"use client";

import Link from "next/link";
import { ExternalLink, HeartPulse } from "lucide-react";
import { resolveHealthLinksForPlan } from "@/lib/data/healthLinks";

/**
 * City-aware health deep-links for My Canada Plan dashboard.
 * Official enrolment URL when city→province is known; else national guide + federal overview.
 * Never invents eligibility or wait times.
 */
export function PlanHealthLinks({ city, province = "" }: { city: string; province?: string }) {
  const health = resolveHealthLinksForPlan(city, province);
  const placeLabel = health.provincial
    ? health.cityName
      ? `${health.cityName}, ${health.province}`
      : health.province!
    : city && city !== "Other / Not sure yet"
      ? city
      : province
        ? province
        : "Canada";

  return (
    <div className="mt-10 rounded-2xl border border-forest/20 bg-sky/20 p-5 sm:p-6">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest text-cream">
          <HeartPulse className="h-5 w-5" />
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="font-display text-lg sm:text-xl font-semibold text-ink">
            Health coverage for {placeLabel}
          </h2>
          <p className="mt-1.5 text-sm text-muted leading-relaxed">{health.verifyNote}</p>

          <ul className="mt-4 space-y-2">
            {health.provincial ? (
              <li>
                <a
                  href={health.provincial.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-forest hover:underline min-h-11"
                >
                  {health.provincial.label}
                  <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                </a>
                <p className="text-xs text-muted mt-0.5">
                  Official {health.provincial.planName} starting point — verify on official site
                </p>
              </li>
            ) : (
              <li>
                <a
                  href={health.federal.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-forest hover:underline min-h-11"
                >
                  {health.federal.label}
                  <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                </a>
                <p className="text-xs text-muted mt-0.5">
                  Province not selected yet — start with the federal overview, or edit your plan to pick a
                  province/territory. Verify on official site.
                </p>
              </li>
            )}
            <li>
              <Link
                href={health.guideHref}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-forest hover:underline min-h-11"
              >
                Norra guide: How to get a provincial health card →
              </Link>
              <p className="text-xs text-muted mt-0.5">
                Orientation map to all provinces/territories — no invented eligibility or wait times
              </p>
            </li>
            {health.provincial && (
              <li>
                <a
                  href={health.federal.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-muted font-medium hover:text-forest hover:underline min-h-9"
                >
                  Also: {health.federal.label}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
