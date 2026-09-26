"use client";

import { useMemo, useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { PropertyCard } from "@/components/PropertyCard";
import { Disclaimer } from "@/components/Disclaimer";
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
          eyebrow="Housing"
          title="Find a place to land"
          description="Demo properties across Canadian cities. Verified badges are part of the demo UI — always meet landlords safely."
        />
        <Disclaimer variant="warning" className="mt-8">
          Anti-scam tip: Never send deposits via wire/crypto to someone you haven&apos;t met. Prefer official
          viewing, written leases, and known platforms. Report suspicious listings via{" "}
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
              className="mt-1 w-full rounded-xl border border-night/10 bg-cream px-3 py-2"
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
              className="mt-1 w-full rounded-xl border border-night/10 bg-cream px-3 py-2"
            >
              <option>All</option>
              <option value="private">Private</option>
              <option value="shared">Shared</option>
              <option value="family">Family-friendly</option>
            </select>
          </label>
          <label className="flex items-center gap-2 text-sm mt-6">
            <input type="checkbox" checked={furnished} onChange={(e) => setFurnished(e.target.checked)} className="accent-forest" />
            Furnished
          </label>
          <label className="flex items-center gap-2 text-sm mt-6">
            <input type="checkbox" checked={nearTransit} onChange={(e) => setNearTransit(e.target.checked)} className="accent-forest" />
            Near transit
          </label>
        </div>

        <p className="mt-6 text-sm text-muted">{filtered.length} demo listings</p>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted">
            <p>No listings match — try widening filters.</p>
            <Button className="mt-4" variant="outline" onClick={() => { setCity("All"); setBudget(5000); setFurnished(false); setNearTransit(false); setType("All"); }}>
              Reset filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
