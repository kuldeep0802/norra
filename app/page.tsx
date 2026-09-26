import Image from "next/image";
import Link from "next/link";
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
import { properties } from "@/lib/data/properties";
import { jobs } from "@/lib/data/jobs";
import { cities } from "@/lib/data/cities";
import { providers } from "@/lib/data/providers";
import { ProviderCard } from "@/components/ProviderCard";

export default function HomePage() {
  return (
    <>
      <Hero />
      <JourneyPicker />
      <NeedsGrid />

      {/* Services teaser */}
      <section className="py-20 bg-forest text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              light
              eyebrow="Services"
              title="One platform for the whole journey."
              description="Immigration overviews, housing, jobs, arrival, government guides, and everyday life — connected so you never start from zero."
            />
            <Button href="/services" variant="amber" size="lg" className="mt-8">
              Explore all services
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1000&q=80"
              alt="Diverse professionals collaborating"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Professionals */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <SectionHeader
              eyebrow="Marketplace"
              title="Find trusted professionals"
              description="Book demo providers for immigration guidance, career coaching, settlement, airport transfers, and more."
            />
            <Button href="/professionals" variant="outline">
              View marketplace
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {providers.slice(0, 3).map((p) => (
              <ProviderCard key={p.id} provider={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Plan teaser */}
      <section className="py-20 bg-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-night text-cream overflow-hidden grid lg:grid-cols-2">
            <div className="p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-amber text-sm font-semibold mb-4">
                <Map className="h-4 w-4" /> My Canada Plan
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight">
                Your personalized checklist for arriving and settling.
              </h2>
              <p className="mt-4 text-sky leading-relaxed">
                Tell us your status, city, and goals — get a living plan with progress tracking across documents,
                housing, work, and everyday setup.
              </p>
              <Button href="/plan" variant="amber" size="lg" className="mt-8 w-fit">
                Build my plan
              </Button>
            </div>
            <div className="relative min-h-[280px]">
              <Image
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1000&q=80"
                alt="Airplane wing above clouds"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Housing */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <SectionHeader
              eyebrow="Housing"
              title="Places to land — carefully curated demos"
              description="Browse sample listings with verified badges. Always stay scam-aware."
            />
            <Button href="/housing" variant="outline">
              Browse housing
            </Button>
          </div>
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
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <SectionHeader
              eyebrow="Jobs"
              title="Work opportunities to explore"
              description="Demo listings from fictional employers — clearly labelled. Never claimed as verified companies."
            />
            <Button href="/jobs" variant="outline">
              Browse jobs
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
              sizes="50vw"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeader
              eyebrow="Immigration & status"
              title="Clarity on pathways — without fake guarantees."
              description="Study, work, visitor, PR, and citizenship overviews with checklists and document tools. When you need regulated advice, we connect you to authorized professionals."
            />
            <Disclaimer variant="warning" className="mt-6">
              Norra does not provide legal or immigration advice, file applications, or guarantee visa, PR, or
              citizenship outcomes. Always verify information on official Government of Canada sources and consult
              authorized representatives when needed.
            </Disclaimer>
            <Button href="/immigration" className="mt-6">
              Explore immigration guides
            </Button>
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
              From the jet bridge to your first night — sorted.
            </h2>
            <p className="mt-4 text-sky leading-relaxed">
              Airport pickup, temporary housing, SIM, banking orientation, and SIN guidance. Book a demo arrival
              package in minutes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/arrival" variant="amber">
                Plan arrival
              </Button>
              <Button href="/before-you-arrive" variant="cream">
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
              sizes="50vw"
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
              description="SIN, taxes, EI, GST/HST credits, healthcare registration, and provincial programs — with clear pointers toward official sources."
            />
          </div>
          <Button href="/government">Open government guides</Button>
        </div>
      </section>

      {/* Cities */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <SectionHeader
              eyebrow="Cities"
              title="Start with a place that fits"
              description="Guides for major cities — Norra works wherever you are in Canada."
            />
            <Button href="/cities" variant="outline">
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

      {/* Nora + final CTA */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-night/5 bg-white p-8 sm:p-12 lg:p-14 text-center max-w-3xl mx-auto shadow-sm">
            <Sparkles className="h-8 w-8 text-amber mx-auto mb-4" />
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink">
              Ready to navigate with confidence?
            </h2>
            <p className="mt-4 text-muted text-lg">
              Build your Canada Plan, ask Nora, or book a professional — your journey, your pace.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/plan" size="lg">
                Get Started
              </Button>
              <Button href="/assistant" variant="outline" size="lg">
                <Sparkles className="h-4 w-4" /> Ask Nora
              </Button>
            </div>
            <p className="mt-6 text-xs text-muted flex items-center justify-center gap-1.5">
              <Shield className="h-3.5 w-3.5" /> Assistance platform · Not government · No guaranteed outcomes
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
