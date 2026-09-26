"use client";

import { useMemo, useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { ProviderCard } from "@/components/ProviderCard";
import { Disclaimer } from "@/components/Disclaimer";
import { providers, providerCategories } from "@/lib/data/providers";

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
          eyebrow="Marketplace"
          title="Find trusted help"
          description="Book demo providers across immigration, career, settlement, tax, airport, tutoring, and more. Session and booking fees stay under $40."
        />
        <Disclaimer className="mt-8">
          All providers on this demo site are fictional and labelled accordingly. Always independently verify
          licences (e.g. CICC for RCICs, provincial law societies) before engaging real professionals.
        </Disclaimer>

        <div id="verification" className="mt-8 rounded-2xl bg-sand p-6">
          <h3 className="font-semibold text-forest">How verification works (demo)</h3>
          <p className="mt-2 text-sm text-muted leading-relaxed">
            In production, Norra would check identity, credentials, and standing with relevant regulators where
            applicable. In this prototype, badges like &quot;Demo verified&quot; illustrate the UI only — they do
            not mean a real credential check occurred.
          </p>
        </div>

        <div className="mt-4 rounded-2xl border border-forest/15 bg-cream px-6 py-4 text-sm text-muted">
          <strong className="text-forest">Pricing:</strong> Norra keeps marketplace fees nominal — every demo
          booking and session stays <strong className="text-ink">under $40</strong>. Housing rents and
          employer salaries shown elsewhere are market figures, not platform fees.
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-xl border border-night/10 bg-white px-4 py-2.5 text-sm"
          >
            <option>All</option>
            {providerCategories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="rounded-xl border border-night/10 bg-white px-4 py-2.5 text-sm"
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
      </div>
    </div>
  );
}
