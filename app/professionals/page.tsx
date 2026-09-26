"use client";

import { useMemo, useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { ProviderCard } from "@/components/ProviderCard";
import { Disclaimer } from "@/components/Disclaimer";
import { DemoBanner } from "@/components/DemoBanner";
import { Button } from "@/components/Button";
import { providers, providerCategories } from "@/lib/data/providers";
import { partnerCategoryLandings } from "@/lib/data/partnerCategories";
import Link from "next/link";

export default function ProfessionalsPage() {
  const [category, setCategory] = useState("All");
  const [city, setCity] = useState("All");

  const cities = ["All", ...Array.from(new Set(providers.map((p) => p.city)))];

  const filtered = useMemo(() => {
    return providers.filter((p) => {
      if (category !== "All" && p.category !== category) return false;
      if (city !== "All" && p.city !== city) return false;
      return true;
    });
  }, [category, city]);

  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Marketplace · Sample"
          title="Sample provider profiles"
          description="Fictional profiles that show how a future marketplace could look. Not real professionals — bookings here do not create real appointments or charges."
        />
        <DemoBanner emphasis className="mt-8">
          <strong>Sample content for layout only.</strong> Names, photos, ratings, reviews, licences, and
          availability are invented. Always verify real credentials yourself (e.g. CICC for RCICs, provincial law
          societies) before engaging anyone outside this demo.
        </DemoBanner>
        <Disclaimer className="mt-4">
          Example rates under $40 on these cards are illustrative demo pricing, not live offers.
        </Disclaimer>

        <div id="verification" className="mt-8 rounded-2xl bg-sand p-6">
          <h3 className="font-semibold text-forest">About “verification” (future)</h3>
          <p className="mt-2 text-sm text-muted leading-relaxed">
            In a future product, Norra may check identity and credentials with relevant regulators where
            applicable. This early-stage site does <strong className="text-ink">not</strong> verify anyone. Sample
            profiles are labelled clearly so they are never mistaken for real providers.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-xl border border-night/10 bg-white px-4 py-2.5 text-sm min-h-11"
            aria-label="Filter by category"
          >
            <option>All</option>
            {providerCategories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="rounded-xl border border-night/10 bg-white px-4 py-2.5 text-sm min-h-11"
            aria-label="Filter by city"
          >
            {cities.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ProviderCard key={p.id} provider={p} />
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-night/5 bg-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm text-muted leading-relaxed max-w-xl">
            Looking for a real next step today? Build My Canada Plan or browse guides — those tools work without the
            sample marketplace.
          </p>
          <Button href="/plan" className="shrink-0 min-h-11">
            Build My Canada Plan
          </Button>
        </div>

        <div className="mt-6 rounded-2xl border border-dashed border-forest/30 bg-sky/15 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-ink">Providers: express interest</p>
            <p className="mt-1 text-sm text-muted leading-relaxed max-w-xl">
              Legitimate providers can join an early-stage interest list for a future marketplace. Not live yet —
              no verification or acceptance claimed.
            </p>
          </div>
          <Button href="/partner#interest" variant="outline" className="shrink-0 min-h-11">
            Providers: express interest
          </Button>
        </div>

        <div className="mt-6 rounded-2xl border border-night/5 bg-white p-5 sm:p-6">
          <p className="font-semibold text-ink text-sm">Browse category interest pages</p>
          <p className="mt-1 text-xs text-muted leading-relaxed">
            Honest early-stage landings — no fake providers. Each links to the partner interest form with a
            prefilled category.
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {partnerCategoryLandings.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/partner/${c.slug}`}
                  className="inline-flex items-center rounded-full border border-night/10 bg-cream px-3 py-2 text-xs font-medium text-forest hover:border-forest/40 min-h-10"
                >
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
