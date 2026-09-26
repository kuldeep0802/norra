import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap, Map } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Disclaimer } from "@/components/Disclaimer";
import { siteConfig } from "@/lib/site";
import { getGuide } from "@/lib/data/guides";

export const metadata: Metadata = {
  title: "International Students — Guides & Study Plan",
  description:
    "Guide-first orientation for international students in Canada: first weeks, finishing-your-program checklist, PGWP / post-grad work research map, Knowledge Hub student guides, SIN, banking, health cards, housing scam awareness, and My Canada Plan with Study or Work goals. Early-stage Norra — not immigration advice.",
  alternates: { canonical: "/students/" },
  openGraph: {
    title: `International Students · ${siteConfig.name}`,
    description:
      "Lead with student guides and a Study plan — then labelled sample marketplace chrome if you want to see future UI.",
    url: `${siteConfig.url}/students/`,
  },
};

const studentGuides = [
  {
    slug: "first-weeks-international-student",
    blurb: "School check-in, IRCC verify reminders, banking/SIN/health links, housing scam awareness.",
  },
  {
    slug: "finishing-your-program",
    blurb: "Near program end: confirm dates/docs with school, verify IRCC get-documents, review PGWP, plan Study/Work.",
  },
  {
    slug: "pgwp-post-graduation-work",
    blurb: "IRCC-linked orientation for researching post-graduation work / PGWP — no invented eligibility or timelines.",
  },
  {
    slug: "first-week-in-canada",
    blurb: "General arrival habits that still apply when you are a student — SIM, money, essentials.",
  },
  {
    slug: "get-sin-canada",
    blurb: "Service Canada navigation when you are eligible to work — verify eligibility there.",
  },
  {
    slug: "open-bank-account-newcomer",
    blurb: "FCAC-linked orientation for opening a personal account — no bank rankings.",
  },
  {
    slug: "get-health-card-canada",
    blurb: "Map to official provincial enrolment pages — waiting periods vary; never invent them.",
  },
  {
    slug: "avoid-newcomer-scams",
    blurb: "Housing, job, and immigration red flags students hit in week one.",
  },
  {
    slug: "temporary-accommodation",
    blurb: "Short-stay buffer and scam-aware habits before you sign a long lease.",
  },
] as const;

const sampleChrome = [
  {
    title: "Housing (sample layout)",
    description: "Fictional listing cards for UI only — not real inventory or campus housing.",
    href: "/housing",
  },
  {
    title: "Jobs (sample layout)",
    description: "Fictional employers for layout — not a real job board. Confirm work rules on IRCC.",
    href: "/jobs",
  },
  {
    title: "Marketplace (sample)",
    description: "Fictional provider profiles showing a future booking layout — not real bookings.",
    href: "/professionals",
  },
] as const;

export default function StudentsPage() {
  const featured = getGuide("first-weeks-international-student");
  const featuredPgwp = getGuide("pgwp-post-graduation-work");
  const featuredFinish = getGuide("finishing-your-program");

  return (
    <div>
      <section className="relative py-20 sm:py-24 bg-night text-cream overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=80"
          alt=""
          fill
          className="object-cover opacity-40"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-night/55" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-sky">
            <GraduationCap className="h-4 w-4" />
            Students · Knowledge Hub first
          </p>
          <SectionHeader
            light
            className="mt-4"
            eyebrow="International students"
            title="Start with guides — then build a Study plan"
            description="Norra’s Students area leads with Knowledge Hub orientation (first weeks, SIN, banking, health, housing scams) and My Canada Plan with goal Study. Sample marketplace chrome is labelled and demoted — this product is early-stage."
          />
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
            <Button href="/resources/first-weeks-international-student" variant="amber" className="min-h-12">
              <BookOpen className="h-4 w-4" />
              Read student first-weeks guide
            </Button>
            <Button href="/plan/?goal=study" variant="cream" className="min-h-12">
              <Map className="h-4 w-4" />
              Build My Canada Plan (Study)
            </Button>
            <Button
              href="/resources/?topic=Student"
              variant="outline"
              className="min-h-12 border-cream/40 text-cream hover:bg-cream/10"
            >
              Browse Student guides on the Hub
            </Button>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        <Disclaimer>
          Study-permit conditions, on-/off-campus work rules, and enrolment requirements change. Confirm on{" "}
          <a
            href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-forest underline underline-offset-2"
          >
            Study in Canada — IRCC
          </a>{" "}
          and with your school&apos;s international student office. Norra does not provide immigration advice and is
          not a government service.
        </Disclaimer>

        {featured && (
          <div className="rounded-2xl border border-forest/25 bg-sand/70 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-forest">Featured Knowledge Hub guide</p>
            <h2 className="mt-2 font-display text-xl sm:text-2xl font-semibold text-ink">{featured.title}</h2>
            <p className="mt-2 text-muted leading-relaxed">{featured.summary}</p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <Button href={`/resources/${featured.slug}`} className="min-h-12">
                Read the guide
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/plan/?goal=study" variant="outline" className="min-h-12">
                Open Plan with Study goal
              </Button>
            </div>
          </div>
        )}

        {featuredPgwp && (
          <div className="rounded-2xl border border-forest/15 bg-white p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-forest">Also featured · Work after study</p>
            <h2 className="mt-2 font-display text-xl sm:text-2xl font-semibold text-ink">{featuredPgwp.title}</h2>
            <p className="mt-2 text-muted leading-relaxed">{featuredPgwp.summary}</p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <Button href={`/resources/${featuredPgwp.slug}`} className="min-h-12">
                Read PGWP orientation
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/plan/?goal=work" variant="outline" className="min-h-12">
                Open Plan with Work goal
              </Button>
            </div>
          </div>
        )}

        {featuredFinish && (
          <div className="rounded-2xl border border-forest/15 bg-sand/40 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-forest">Also featured · Near program end</p>
            <h2 className="mt-2 font-display text-xl sm:text-2xl font-semibold text-ink">{featuredFinish.title}</h2>
            <p className="mt-2 text-muted leading-relaxed">{featuredFinish.summary}</p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <Button href={`/resources/${featuredFinish.slug}`} className="min-h-12">
                Read finishing checklist
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/plan/?goal=study" variant="outline" className="min-h-12">
                Open Plan with Study goal
              </Button>
              <Button href="/plan/?goal=work" variant="outline" className="min-h-12">
                Open Plan with Work goal
              </Button>
            </div>
          </div>
        )}

        <section>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink">Student-relevant guides</h2>
              <p className="mt-1 text-sm text-muted max-w-2xl">
                Cross-links from the Knowledge Hub — orientation only. Prefer Canada.ca / provincial sites when a step
                depends on eligibility.
              </p>
            </div>
            <Link
              href="/resources/?topic=Student"
              className="text-sm font-medium text-forest hover:underline inline-flex items-center gap-1 shrink-0"
            >
              All Student-topic guides <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {studentGuides.map(({ slug, blurb }) => {
              const g = getGuide(slug);
              if (!g) return null;
              return (
                <Link
                  key={slug}
                  href={`/resources/${slug}`}
                  className="rounded-2xl bg-white border border-night/5 p-5 sm:p-6 hover:shadow-md hover:border-forest/25 transition-all touch-manipulation"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-forest">{g.eyebrow}</p>
                  <h3 className="mt-1.5 font-semibold text-ink leading-snug">{g.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{blurb}</p>
                  <p className="mt-3 text-sm font-medium text-forest inline-flex items-center gap-1">
                    Open guide <ArrowRight className="h-3.5 w-3.5" />
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="rounded-2xl border border-night/10 bg-white p-6 sm:p-8">
          <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink">Turn reading into a checklist</h2>
          <p className="mt-2 text-muted leading-relaxed max-w-2xl">
            My Canada Plan with goal <strong className="text-ink">Study</strong> adds school orientation items beside
            banking, SIN, and housing habits. Progress stays in this browser until accounts exist — early-stage honesty.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <Button href="/plan/?goal=study" className="min-h-12">
              Build My Canada Plan (Study)
            </Button>
            <Button href="/resources" variant="outline" className="min-h-12">
              Knowledge Hub
            </Button>
            <Button href="/immigration" variant="outline" className="min-h-12">
              Immigration overview
            </Button>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-2">
            <span className="rounded-full bg-amber/20 text-ink text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1">
              Sample / demo only
            </span>
          </div>
          <h2 className="font-display text-xl font-semibold text-ink">Optional sample marketplace chrome</h2>
          <p className="mt-2 text-sm text-muted max-w-2xl leading-relaxed">
            These pages show how future booking or listing UIs might look. They are <strong>not</strong> real providers,
            rentals, or jobs — demoted below guides on purpose. Prefer school housing boards and official IRCC pages for
            real decisions.
          </p>
          <div className="mt-5 grid sm:grid-cols-3 gap-4">
            {sampleChrome.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="rounded-2xl border border-dashed border-night/15 bg-sand/40 p-5 hover:border-night/30 transition-colors touch-manipulation"
              >
                <p className="text-[10px] font-semibold uppercase tracking-wide text-muted">Sample</p>
                <h3 className="mt-1 font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <p className="text-sm text-muted">
          Also useful:{" "}
          <Link href="/arrival" className="text-forest hover:underline">
            Arrival
          </Link>
          {" · "}
          <Link href="/government" className="text-forest hover:underline">
            Government &amp; benefits
          </Link>
          {" · "}
          <Link href="/resources/newcomer-taxes-canada" className="text-forest hover:underline">
            Newcomer taxes orientation
          </Link>
          {" · "}
          <Link href="/resources/finishing-your-program" className="text-forest hover:underline">
            Finishing your program
          </Link>
          {" · "}
          <Link href="/resources/pgwp-post-graduation-work" className="text-forest hover:underline">
            PGWP / post-grad work
          </Link>
          {" · "}
          <Link href="/safety" className="text-forest hover:underline">
            Safety
          </Link>
        </p>
      </div>
    </div>
  );
}
