import Image from "next/image";
import { ArrowRight, Sparkles, Map, Shield, Plane, Landmark } from "lucide-react";
import { Hero } from "@/components/Hero";
import { JourneyPicker } from "@/components/JourneyPicker";
import { NeedsGrid } from "@/components/NeedsGrid";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { PropertyCard } from "@/components/PropertyCard";
import { JobCard } from "@/components/JobCard";
import { CityCard } from "@/components/CityCard";
import { TrustBanner } from "@/components/TrustBanner";
import { FounderSection } from "@/components/FounderSection";
import { Disclaimer } from "@/components/Disclaimer";
import { DemoBanner } from "@/components/DemoBanner";
import { properties } from "@/lib/data/properties";
import { jobs } from "@/lib/data/jobs";
import { cities } from "@/lib/data/cities";
import { providers } from "@/lib/data/providers";
import { ProviderCard } from "@/components/ProviderCard";

export default function HomePage() {
  return (
    <>
      <Hero />
      <NeedsGrid />

      {/* Plan — central product */}
      <section className="py-16 sm:py-20 bg-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-night text-cream overflow-hidden grid lg:grid-cols-2">
            <div className="p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-amber text-sm font-semibold mb-4">
                <Map className="h-4 w-4" /> Central product · My Canada Plan
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight">
                One living checklist for arriving and settling.
              </h2>
              <p className="mt-4 text-sky leading-relaxed">
                Tell us your status, city, and goals — get a personal plan you can track across documents, housing,
                work, and everyday setup. Runs in your browser; no account required in this early version.
              </p>
              <Button href="/plan" variant="amber" size="lg" className="mt-8 w-fit min-h-12">
                Build My Canada Plan
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="relative min-h-[220px] sm:min-h-[280px]">
              <Image
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1000&q=80"
                alt="Airplane wing above clouds"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <JourneyPicker />

      {/* Services teaser */}
      <section className="py-20 bg-forest text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              light
              eyebrow="Guides & tools"
              title="One place to orient — then take the next step."
              description="Immigration overviews, housing tips, jobs, arrival, government guides, and everyday life — connected so you never start from zero."
            />
            <Button href="/services" variant="amber" size="lg" className="mt-8 min-h-12">
              Explore all services
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1000&q=80"
              alt="People collaborating"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Sample marketplace */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <SectionHeader
              eyebrow="Marketplace · Sample"
              title="Sample provider profiles (layout only)"
              description="Fictional profiles that show how a future marketplace could work. Not real professionals. Bookings do not create real appointments."
            />
            <Button href="/professionals" variant="outline" className="shrink-0 min-h-11">
              View sample marketplace
            </Button>
          </div>
          <DemoBanner className="mb-8">
            <strong className="text-forest">Sample content:</strong> Names, ratings, reviews, and availability below
            are invented for UI layout. They are not real providers, employers, or businesses.
          </DemoBanner>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {providers.slice(0, 3).map((p) => (
              <ProviderCard key={p.id} provider={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Housing */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <SectionHeader
              eyebrow="Housing · Sample"
              title="Sample listings (for layout only)"
              description="Fictional properties to demonstrate filters and cards. Not real rentals — always stay scam-aware on real platforms."
            />
            <Button href="/housing" variant="outline" className="shrink-0 min-h-11">
              Browse sample housing
            </Button>
          </div>
          <DemoBanner className="mb-8">
            These addresses and photos are illustrative. Norra does not list real inventory on this early-stage site.
          </DemoBanner>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.slice(0, 3).map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <SectionHeader
              eyebrow="Jobs · Sample"
              title="Sample job cards (fictional employers)"
              description="Demo listings from made-up companies — clearly labelled. Never claimed as real openings."
            />
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
      </section>

      {/* Immigration teaser */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden order-2 lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1000&q=80"
              alt="Documents and planning"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeader
              eyebrow="Immigration & status"
              title="Pathway overviews — without fake guarantees."
              description="Study, work, visitor, PR, and citizenship checklists and document tools. For regulated advice, consult an authorized representative independently — Norra does not provide immigration advice."
            />
            <Disclaimer variant="warning" className="mt-6">
              Norra does not provide legal or immigration advice, file applications, or guarantee visa, PR, or
              citizenship outcomes. Always verify information on official Government of Canada sources.
            </Disclaimer>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/immigration" className="min-h-11">
                Explore immigration guides
              </Button>
              <Button href="/plan" variant="outline" className="min-h-11">
                Add to My Canada Plan
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Arrival */}
      <section className="py-20 bg-forest text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-amber text-sm font-semibold mb-4">
              <Plane className="h-4 w-4" /> Arriving in Canada
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold">
              From the jet bridge to your first night — organized.
            </h2>
            <p className="mt-4 text-sky leading-relaxed">
              Checklists for airport pickup ideas, temporary housing, SIM, banking orientation, and SIN guidance.
              Sample arrival bookings illustrate a future flow — they do not book a real driver.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/arrival" variant="amber" className="min-h-11">
                Plan arrival
              </Button>
              <Button href="/before-you-arrive" variant="cream" className="min-h-11">
                Before you arrive checklist
              </Button>
            </div>
          </div>
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1000&q=80"
              alt="Air travel"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Government */}
      <section className="py-20 bg-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-8">
            <Landmark className="h-8 w-8 text-forest shrink-0" strokeWidth={1.5} />
            <SectionHeader
              eyebrow="Government & benefits"
              title="Understand the Canadian system"
              description="SIN, taxes, EI, GST/HST credits, healthcare registration, and provincial programs — with clear pointers toward official sources. Norra is not a government service."
            />
          </div>
          <Button href="/government" className="min-h-11">
            Open government guides
          </Button>
        </div>
      </section>

      {/* Cities */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <SectionHeader
              eyebrow="Cities"
              title="Start with a place that fits"
              description="Orientation guides for major cities — Norra is useful wherever you are in Canada."
            />
            <Button href="/cities" variant="outline" className="min-h-11">
              All cities
            </Button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4">
            {cities.slice(0, 6).map((c) => (
              <div key={c.slug} className="w-[240px] shrink-0">
                <CityCard city={c} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FounderSection variant="teaser" />

      <TrustBanner />

      {/* Final CTA */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-night/5 bg-white p-8 sm:p-12 lg:p-14 text-center max-w-3xl mx-auto shadow-sm">
            <Sparkles className="h-8 w-8 text-amber mx-auto mb-4" />
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink">
              Ready to get oriented?
            </h2>
            <p className="mt-4 text-muted text-lg">
              Build My Canada Plan, pick what you need help with, or ask Nora — your pace, your journey.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3">
              <Button href="/plan" size="lg" className="min-h-12">
                Build My Canada Plan
              </Button>
              <Button href="#needs" variant="outline" size="lg" className="min-h-12">
                What do you need help with?
              </Button>
            </div>
            <p className="mt-6 text-xs text-muted flex items-center justify-center gap-1.5 flex-wrap">
              <Shield className="h-3.5 w-3.5" /> Early-stage product · Not government · No guaranteed outcomes
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
