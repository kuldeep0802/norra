"use client";

import { useMemo, useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { JobCard } from "@/components/JobCard";
import { Disclaimer } from "@/components/Disclaimer";
import { DemoBanner } from "@/components/DemoBanner";
import { Button } from "@/components/Button";
import { jobs } from "@/lib/data/jobs";

export default function JobsPage() {
  const [q, setQ] = useState("");
  const [city, setCity] = useState("All");
  const [type, setType] = useState("All");
  const [exp, setExp] = useState("All");

  const cities = ["All", ...Array.from(new Set(jobs.map((j) => j.city)))];

  const filtered = useMemo(() => {
    return jobs.filter((j) => {
      if (city !== "All" && j.city !== city) return false;
      if (type !== "All" && j.type !== type) return false;
      if (exp !== "All" && j.experience !== exp) return false;
      if (q) {
        const hay = `${j.title} ${j.company} ${j.tags.join(" ")}`.toLowerCase();
        if (!hay.includes(q.toLowerCase())) return false;
      }
      return true;
    });
  }, [q, city, type, exp]);

  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Jobs · Sample"
          title="Sample job cards (fictional employers)"
          description="Demo listings from made-up companies — clearly labelled. We never claim these employers or openings are real."
        />
        <DemoBanner emphasis className="mt-8">
          <strong>Sample content for layout only.</strong> Company names ending in “(Demo Co.)” are fictional.
        </DemoBanner>
        <Disclaimer className="mt-4">
          Career guides on Norra are educational. For regulated professions, confirm licensing with the appropriate
          provincial body.
        </Disclaimer>

        <div className="mt-10 rounded-2xl bg-white border border-night/5 p-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search roles or skills…"
            className="rounded-xl border border-night/10 bg-cream px-4 py-2.5 text-sm min-h-11 lg:col-span-1"
          />
          <select value={city} onChange={(e) => setCity(e.target.value)} className="rounded-xl border border-night/10 bg-cream px-3 py-2.5 text-sm min-h-11">
            {cities.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <select value={type} onChange={(e) => setType(e.target.value)} className="rounded-xl border border-night/10 bg-cream px-3 py-2.5 text-sm min-h-11">
            <option>All</option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Contract</option>
            <option>Internship</option>
          </select>
          <select value={exp} onChange={(e) => setExp(e.target.value)} className="rounded-xl border border-night/10 bg-cream px-3 py-2.5 text-sm min-h-11">
            <option>All</option>
            <option>Entry</option>
            <option>Mid</option>
            <option>Senior</option>
            <option>Any</option>
          </select>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/plan" variant="outline" size="sm" className="min-h-11">
            Add career goals to My Canada Plan
          </Button>
          <Button href="/professionals" variant="outline" size="sm" className="min-h-11">
            Sample career coaches
          </Button>
        </div>

        <p className="mt-8 text-sm text-muted">{filtered.length} sample jobs</p>
        <div className="mt-4 grid lg:grid-cols-2 gap-4">
          {filtered.map((j) => (
            <JobCard key={j.id} job={j} />
          ))}
        </div>
      </div>
    </div>
  );
}
