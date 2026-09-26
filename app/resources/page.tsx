import { ArrowRight, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { Disclaimer } from "@/components/Disclaimer";
import { Button } from "@/components/Button";
import { GuideSearch } from "@/components/GuideSearch";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Knowledge Hub",
  description:
    "Long-form Norra guides for newcomers to Canada — before landing, first week, SIN, banking, housing, resumes, jobs, cities, and scam awareness — plus official government starting points.",
  alternates: { canonical: "/resources/" },
  openGraph: {
    title: `Knowledge Hub · ${siteConfig.name}`,
    description:
      "Practical long-form guides for navigating life in Canada — organization and orientation, not legal advice.",
    url: `${siteConfig.url}/resources/`,
  },
};

const officialLinks = [
  {
    title: "Immigration, Refugees and Citizenship Canada",
    href: "https://www.canada.ca/en/immigration-refugees-citizenship.html",
    note: "Official immigration programs, accounts, and forms.",
  },
  {
    title: "Settle in Canada",
    href: "https://www.canada.ca/en/immigration-refugees-citizenship/services/settle-canada.html",
    note: "Government settlement orientation and service finder.",
  },
  {
    title: "Service Canada — SIN",
    href: "https://www.canada.ca/en/employment-social-development/services/sin.html",
    note: "Social Insurance Number eligibility and application.",
  },
  {
    title: "Health care for newcomers",
    href: "https://www.canada.ca/en/immigration-refugees-citizenship/services/settle-canada/health-care.html",
    note: "Federal overview — then check your province.",
  },
  {
    title: "Canada.ca benefits",
    href: "https://www.canada.ca/en/services/benefits.html",
    note: "Federal benefits overview.",
  },
  {
    title: "CRA",
    href: "https://www.canada.ca/en/revenue-agency.html",
    note: "Taxes and benefits administration.",
  },
  {
    title: "CICC (immigration consultants)",
    href: "https://college-ic.ca",
    note: "Verify RCIC standing independently.",
  },
];

export default function ResourcesPage() {
  return (
    <div className="py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionHeader
            eyebrow="Knowledge Hub"
            title="Guides that make Canada easier to navigate"
            description="Long-form, human-first articles for real newcomer moments — before landing, first week, SIN, banking, housing, work, cities, and staying scam-aware. Search and topic chips filter in your browser — no account required."
          />
          <Disclaimer className="mt-8">
            Guides are for organization and orientation. They are not immigration or legal advice. Prefer primary
            government sources for decisions about your status, benefits, or health coverage.
          </Disclaimer>
          <div className="mt-6">
            <Button href="/plan" className="min-h-12">
              Build My Canada Plan
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-10 sm:mt-12">
          <GuideSearch />
        </div>

        <div className="mt-16 max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-ink">Official starting points</h2>
          <p className="mt-2 text-muted text-sm sm:text-base">
            External links for convenience. Norra is not affiliated with the Government of Canada.
          </p>
          <ul className="mt-6 space-y-3">
            {officialLinks.map((l) => (
              <li key={l.href} className="rounded-2xl bg-white border border-night/5 p-4 sm:p-5">
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-forest hover:underline"
                >
                  {l.title}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <p className="mt-1 text-sm text-muted">{l.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
