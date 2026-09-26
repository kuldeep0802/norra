import Link from "next/link";
import { ArrowRight, Search, Sparkles, Map, Shield, BookOpen } from "lucide-react";
import { Hero } from "@/components/Hero";
import { NeedsGrid } from "@/components/NeedsGrid";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { PropertyCard } from "@/components/PropertyCard";
import { JobCard } from "@/components/JobCard";
import { CityCard } from "@/components/CityCard";
import { TrustBanner } from "@/components/TrustBanner";
import { FounderSection } from "@/components/FounderSection";
import { DemoBanner } from "@/components/DemoBanner";
import { properties } from "@/lib/data/properties";
import { jobs } from "@/lib/data/jobs";
import { cities } from "@/lib/data/cities";
import { providers } from "@/lib/data/providers";
import { ProviderCard } from "@/components/ProviderCard";
import { getFeaturedGuides, guides } from "@/lib/data/guides";
import { countAllPlanChecklistItems, stageOptions } from "@/lib/data/checklists";
import { StagePicker } from "@/components/StagePicker";
import { PlanTeaser } from "@/components/PlanTeaser";
import { SiteCounters } from "@/components/SiteCounters";
import { GuideCard } from "@/components/GuideCard";
import { Reveal } from "@/components/motion/Reveal";

export default function HomePage() {
  const featured = getFeaturedGuides();
  // Honest, site-derived counts only (content on this site — never users or customers)
  const siteCounts = [
    { value: guides.length, label: "practical guides", icon: "guides" as const },
    { value: cities.length, label: "city guides", icon: "cities" as const },
    { value: countAllPlanChecklistItems(), label: "plan checklist items", icon: "checklist" as const },
    { value: stageOptions.length, label: "journey stages in the planner", icon: "stages" as const },
  ];

  return (
    <>
      <Hero />

      {/* What's inside — honest counts derived from site content */}
      <section aria-labelledby="inside-heading" className="py-10 sm:py-12 bg-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 id="inside-heading" className="text-sm font-semibold tracking-wide uppercase text-forest mb-4">
              What&apos;s inside Norra today
            </h2>
            <SiteCounters counts={siteCounts} />
          </Reveal>
        </div>
      </section>

      <NeedsGrid />
      <StagePicker />

      {/* Plan — central product */}
      <section className="py-16 sm:py-20 bg-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="rounded-3xl bg-night text-cream overflow-hidden grid lg:grid-cols-2">
            <div className="p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-amber text-sm font-semibold mb-4">
                <Map className="h-4 w-4" aria-hidden /> Central product · My Canada Plan
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight">
                One living checklist for arriving and settling.
              </h2>
              <p className="mt-4 text-sky leading-relaxed">
                Tell us your status, city, and goals — get a personal plan you can track across documents, housing,
                work, school, and everyday setup. Runs in your browser; no account required in this early version.
              </p>
              <Button href="/plan" variant="amber" size="lg" className="mt-8 w-fit min-h-12">
                Build My Canada Plan
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="relative px-6 pb-10 pt-2 sm:px-10 lg:py-12 flex items-center bg-[radial-gradient(circle_at_70%_30%,rgba(14,100,96,0.55),transparent_65%)]">
              <PlanTeaser />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Knowledge Hub */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-forest text-sm font-semibold mb-3">
                <BookOpen className="h-4 w-4" aria-hidden /> Knowledge Hub
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink leading-tight">
                Guides for real newcomer moments.
              </h2>
              <p className="mt-3 text-muted leading-relaxed">
                SIN, banking, health cards, scam awareness, international-student first weeks, and more — written to
                be useful, with pointers to official sources.
              </p>
            </div>
            <Button href="/resources" variant="outline" className="shrink-0 min-h-11">
              Open Knowledge Hub
            </Button>
          </div>

          <div className="mb-8 max-w-2xl rounded-2xl border border-night/5 bg-cream p-4 sm:p-5">
            <div className="flex items-start gap-3">
              <Search className="h-5 w-5 text-forest shrink-0 mt-0.5" aria-hidden />
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-ink text-sm sm:text-base">Search the Knowledge Hub</p>
                <p className="mt-1 text-sm text-muted leading-relaxed">
                  Filter by topic or keyword on the Hub — SIN, banking, health cards, students, scams, and more.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    { label: "SIN", href: "/resources/?q=SIN" },
                    { label: "Banking", href: "/resources/?topic=Banking" },
                    { label: "Health card", href: "/resources/?q=health+card" },
                    { label: "Students", href: "/resources/?topic=Student" },
                    { label: "Scams", href: "/resources/?q=scams" },
                    { label: "All guides", href: "/resources/#search" },
                  ].map((chip) => (
                    <Link
                      key={chip.href + chip.label}
                      href={chip.href}
                      className="rounded-full border border-night/10 bg-white px-3.5 py-2 text-sm text-forest min-h-11 inline-flex items-center touch-manipulation hover:border-forest"
                    >
                      {chip.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featured.map((g, i) => (
              <Reveal key={g.slug} delay={(i % 3) * 70} className="h-full">
                <GuideCard guide={g} />
              </Reveal>
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button href="/plan" className="min-h-12 w-full sm:w-auto justify-center">
              Build My Canada Plan
            </Button>
            <Button
              href="/resources/first-weeks-international-student"
              variant="outline"
              className="min-h-12 w-full sm:w-auto justify-center"
            >
              International student guide
            </Button>
          </div>
        </div>
      </section>

      {/* Cities — light orientation strip */}
      <section className="py-14 sm:py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <SectionHeader
              eyebrow="Cities"
              title="Start with a place that fits"
              description="Short orientation guides — pair with My Canada Plan to autofill city and province."
            />
            <Button href="/cities" variant="outline" className="min-h-11">
              All cities
            </Button>
          </div>
          <div className="flex gap-4 overflow-x-auto pt-2 pb-6 no-scrollbar -mx-4 px-4 snap-x snap-mandatory sm:snap-none">
            {cities.slice(0, 6).map((c, i) => (
              <Reveal key={c.slug} delay={i * 60} className="w-[250px] sm:w-[270px] shrink-0 snap-start">
                <CityCard city={c} sizes="270px" />
              </Reveal>
            ))}
          </div>
          <p className="text-[11px] text-muted">
            City photos via Wikimedia Commons —{" "}
            <Link href="/cities/" className="underline hover:text-forest">
              credits on the Cities page
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Tertiary — labelled sample marketplace / housing / jobs */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Sample layouts · Demo honesty"
            title="Marketplace, housing, and jobs (labelled samples)"
            description="Fictional profiles and listings that show how future marketplace layouts could work. Not real professionals, rentals, or job openings — bookings do not create real appointments."
          />
          <DemoBanner className="mt-6 mb-10">
            <strong className="text-forest">Sample content:</strong> Names, addresses, employers, prices, and
            availability below are invented for UI layout only.
          </DemoBanner>

          <div className="space-y-14">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5">
                <h3 className="font-display text-xl font-semibold text-ink">Marketplace · Sample</h3>
                <Button href="/professionals" variant="outline" className="shrink-0 min-h-11">
                  View sample marketplace
                </Button>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {providers.slice(0, 3).map((p) => (
                  <ProviderCard key={p.id} provider={p} />
                ))}
              </div>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5">
                <h3 className="font-display text-xl font-semibold text-ink">Housing · Sample</h3>
                <Button href="/housing" variant="outline" className="shrink-0 min-h-11">
                  Browse sample housing
                </Button>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {properties.slice(0, 3).map((p) => (
                  <PropertyCard key={p.id} property={p} />
                ))}
              </div>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5">
                <h3 className="font-display text-xl font-semibold text-ink">Jobs · Sample</h3>
                <Button href="/jobs" variant="outline" className="shrink-0 min-h-11">
                  Browse sample jobs
                </Button>
              </div>
              <div className="grid lg:grid-cols-3 gap-6">
                {jobs.slice(0, 3).map((j) => (
                  <JobCard key={j.id} job={j} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FounderSection variant="teaser" />
      <TrustBanner />

      {/* Final CTA */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="rounded-3xl border border-night/5 bg-white p-8 sm:p-12 lg:p-14 text-center max-w-3xl mx-auto shadow-sm">
            <Sparkles className="h-8 w-8 text-amber mx-auto mb-4" aria-hidden />
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink">
              Ready to get oriented?
            </h2>
            <p className="mt-4 text-muted text-lg">
              Pick what you need help with, build My Canada Plan, or open the Knowledge Hub — your pace.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3">
              <Button href="/plan" size="lg" className="min-h-12">
                Build My Canada Plan
              </Button>
              <Button href="#needs" variant="outline" size="lg" className="min-h-12">
                What do you need help with?
              </Button>
              <Button href="/resources" variant="outline" size="lg" className="min-h-12">
                Knowledge Hub
              </Button>
            </div>
            <p className="mt-6 text-xs text-muted flex items-center justify-center gap-1.5 flex-wrap">
              <Shield className="h-3.5 w-3.5" aria-hidden /> Early-stage product · Not government · Not a consultancy ·
              No guaranteed outcomes
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
