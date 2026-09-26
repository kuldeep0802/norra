"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Search, X } from "lucide-react";
import { filterGuides, guides, type Guide } from "@/lib/data/guides";

function GuideCard({ g }: { g: Guide }) {
  return (
    <Link
      href={`/resources/${g.slug}`}
      className="group flex flex-col rounded-2xl border border-night/5 bg-white p-5 sm:p-6 hover:border-forest/30 hover:shadow-md transition-all touch-manipulation min-h-[11rem]"
    >
      <span className="text-xs font-semibold uppercase tracking-wide text-forest">{g.eyebrow}</span>
      <h3 className="mt-2 font-display text-lg font-semibold text-ink group-hover:text-forest leading-snug">
        {g.title}
      </h3>
      <p className="mt-2 text-sm text-muted leading-relaxed flex-1 line-clamp-3">{g.summary}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {g.topics.slice(0, 4).map((t) => (
          <span key={t} className="text-[10px] uppercase tracking-wide rounded-full bg-sand px-2 py-0.5 text-muted">
            {t}
          </span>
        ))}
      </div>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-forest">
        Read guide <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </Link>
  );
}

export function GuideSearch() {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q");
    if (q) setQuery(q);
  }, []);

  const results = useMemo(() => filterGuides(query), [query]);
  const hasQuery = query.trim().length > 0;

  function updateQuery(next: string) {
    setQuery(next);
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    if (next.trim()) url.searchParams.set("q", next.trim());
    else url.searchParams.delete("q");
    window.history.replaceState({}, "", url.pathname + url.search + url.hash);
  }

  return (
    <div id="search">
      <label htmlFor="guide-search" className="sr-only">
        Search guides
      </label>
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" aria-hidden />
        <input
          id="guide-search"
          type="search"
          value={query}
          onChange={(e) => updateQuery(e.target.value)}
          placeholder="Search guides — housing, SIN, resume, scams…"
          autoComplete="off"
          enterKeyHint="search"
          className="w-full min-h-12 rounded-2xl border border-night/10 bg-white pl-12 pr-12 py-3 text-base text-ink placeholder:text-muted/80 shadow-sm focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest/40"
        />
        {hasQuery && (
          <button
            type="button"
            onClick={() => updateQuery("")}
            className="absolute right-2 top-1/2 -translate-y-1/2 min-h-11 min-w-11 inline-flex items-center justify-center rounded-xl text-muted hover:text-ink hover:bg-sand touch-manipulation"
            aria-label="Clear search"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
      <p className="mt-2 text-xs sm:text-sm text-muted" aria-live="polite">
        {hasQuery
          ? `${results.length} guide${results.length === 1 ? "" : "s"} match “${query.trim()}”`
          : `${guides.length} guides · search runs in your browser (works offline once loaded)`}
      </p>

      <div className="mt-8 sm:mt-10">
        <div className="flex items-center gap-2 mb-6">
          <BookOpen className="h-5 w-5 text-forest" />
          <h2 className="font-display text-2xl font-semibold text-ink">
            {hasQuery ? "Search results" : "Norra guides"}
          </h2>
        </div>

        {results.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-night/15 bg-white/80 p-8 sm:p-10 text-center">
            <p className="font-display text-lg font-semibold text-ink">No guides match that search</p>
            <p className="mt-2 text-sm text-muted max-w-md mx-auto leading-relaxed">
              Try fewer words, or browse topics like housing, jobs, arrival, or scams. You can also open My Canada
              Plan for a stage-aware checklist.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {["housing", "resume", "SIN", "scams", "cities"].map((chip) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() => updateQuery(chip)}
                  className="rounded-full border border-night/10 bg-sand/60 px-3.5 py-2 text-sm text-forest min-h-11 touch-manipulation hover:border-forest"
                >
                  {chip}
                </button>
              ))}
              <button
                type="button"
                onClick={() => updateQuery("")}
                className="rounded-full border border-forest/30 bg-forest/5 px-3.5 py-2 text-sm font-medium text-forest min-h-11 touch-manipulation"
              >
                Show all guides
              </button>
            </div>
            <p className="mt-6">
              <Link href="/plan" className="text-forest font-medium hover:underline inline-flex items-center gap-1">
                Build My Canada Plan <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {results.map((g) => (
              <GuideCard key={g.slug} g={g} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
