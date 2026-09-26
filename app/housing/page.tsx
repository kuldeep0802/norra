"use client";

import { useMemo, useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { PropertyCard } from "@/components/PropertyCard";
import { Disclaimer } from "@/components/Disclaimer";
import { DemoBanner } from "@/components/DemoBanner";
import { properties } from "@/lib/data/properties";
import { Button } from "@/components/Button";

export default function HousingPage() {
  const [city, setCity] = useState("All");
  const [budget, setBudget] = useState(5000);
  const [furnished, setFurnished] = useState(false);
  const [nearTransit, setNearTransit] = useState(false);
  const [type, setType] = useState("All");

  const cities = ["All", ...Array.from(new Set(properties.map((p) => p.city)))];

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (city !== "All" && p.city !== city) return false;
      if (p.price > budget) return false;
      if (furnished && !p.furnished) return false;
      if (nearTransit && !p.nearTransit) return false;
      if (type === "shared" && !p.shared) return false;
      if (type === "family" && !p.familyFriendly) return false;
      if (type === "private" && p.shared) return false;
      return true;
    });
  }, [city, budget, furnished, nearTransit, type]);

  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Housing · Sample"
          title="Sample listings (for layout only)"
          description="Fictional properties to demonstrate filters and cards. Norra does not list real rentals on this early-stage site."
        />
        <DemoBanner emphasis className="mt-8">
          <strong>Sample content:</strong> These are not real listings, landlords, or available units. Use real
          platforms carefully and stay scam-aware.
        </DemoBanner>
        <Disclaimer variant="warning" className="mt-4">
          Anti-scam tip: Never send deposits via wire/crypto to someone you haven&apos;t met. Prefer official
          viewing, written leases, and known platforms. See{" "}
          <a href="/safety" className="underline font-medium">
            Safety
          </a>
          .
        </Disclaimer>

        <div className="mt-10 rounded-2xl bg-white border border-night/5 p-5 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <label className="text-sm">
            <span className="font-medium text-muted">City</span>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="mt-1 w-full rounded-xl border border-night/10 bg-cream px-3 py-2.5 min-h-11"
            >
              {cities.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </label>
          <label className="text-sm">
            <span className="font-medium text-muted">Max budget: ${budget}</span>
            <input
              type="range"
              min={800}
              max={5000}
              step={50}
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="mt-3 w-full accent-forest"
            />
          </label>
          <label className="text-sm">
            <span className="font-medium text-muted">Type</span>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="mt-1 w-full rounded-xl border border-night/10 bg-cream px-3 py-2.5 min-h-11"
            >
              <option>All</option>
              <option value="private">Private</option>
              <option value="shared">Shared</option>
              <option value="family">Family-friendly</option>
            </select>
          </label>
          <label className="flex items-center gap-2 text-sm mt-6 min-h-11">
            <input type="checkbox" checked={furnished} onChange={(e) => setFurnished(e.target.checked)} className="accent-forest h-4 w-4" />
            Furnished
          </label>
          <label className="flex items-center gap-2 text-sm mt-6 min-h-11">
            <input type="checkbox" checked={nearTransit} onChange={(e) => setNearTransit(e.target.checked)} className="accent-forest h-4 w-4" />
            Near transit
          </label>
        </div>

        <p className="mt-6 text-sm text-muted">{filtered.length} sample listings</p>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted">
            <p>No sample listings match — try widening filters.</p>
            <Button className="mt-4 min-h-11" variant="outline" onClick={() => { setCity("All"); setBudget(5000); setFurnished(false); setNearTransit(false); setType("All"); }}>
              Reset filters
            </Button>
          </div>
        )}
        <div className="mt-12 flex flex-wrap gap-3">
          <Button href="/plan" className="min-h-11">Add housing to My Canada Plan</Button>
          <Button href="/safety" variant="outline" className="min-h-11">Safety tips</Button>
        </div>
      </div>
    </div>
  );
}
