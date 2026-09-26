import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { Disclaimer } from "@/components/Disclaimer";
import { Button } from "@/components/Button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Government & Benefits",
  description:
    "High-level map of SIN, CRA taxes orientation, GST/HST credit, Canada Child Benefit, EI, and provincial healthcare starting points — with verified Canada.ca links. No invented amounts.",
  alternates: { canonical: "/government/" },
  openGraph: {
    title: `Government & Benefits · ${siteConfig.name}`,
    description: "Orientation pointers to official programs — verify eligibility on Canada.ca.",
    url: `${siteConfig.url}/government/`,
  },
};

const topics = [
  {
    title: "Social Insurance Number (SIN)",
    body: "Required for work and many benefits. Apply through Service Canada when eligible. Bring identity and status documents.",
    official: "https://www.canada.ca/en/employment-social-development/services/sin.html",
    norra: "/resources/get-sin-canada",
    norraLabel: "SIN checklist",
  },
  {
    title: "CRA & personal taxes",
    body: "Most people who need to file do so annually. Newcomers often have first-year considerations — verify on CRA newcomers pages. Norra does not invent brackets, credits, refunds, or deadlines.",
    official:
      "https://www.canada.ca/en/revenue-agency/services/tax/international-non-residents/individuals-leaving-entering-canada-non-residents/newcomers-canada-immigrants.html",
    norra: "/resources/newcomer-taxes-canada",
    norraLabel: "Taxes orientation guide",
  },
  {
    title: "GST/HST credit",
    body: "A tax-free payment for those who qualify. Usually tied to filing. Amounts and eligibility are decided by CRA — not Norra.",
    official:
      "https://www.canada.ca/en/revenue-agency/services/child-family-benefits/goods-services-tax-harmonized-sales-tax-gst-hst-credit.html",
  },
  {
    title: "Canada Child Benefit (CCB)",
    body: "Monthly support for eligible families with children. Apply via CRA processes. Do not trust third-party \"guaranteed payment\" claims.",
    official: "https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit.html",
  },
  {
    title: "Employment Insurance (EI)",
    body: "Income support in specific job-loss or leave situations if you qualify. Check official eligibility tools.",
    official: "https://www.canada.ca/en/services/benefits/ei.html",
  },
  {
    title: "Provincial healthcare",
    body: "Each province/territory runs its own health plan with waiting periods and documentation rules — verify on that jurisdiction's site.",
    official: "https://www.canada.ca/en/immigration-refugees-citizenship/services/settle-canada/health-care.html",
    norra: "/resources/get-health-card-canada",
    norraLabel: "Health-card guide",
  },
  {
    title: "Driver licensing",
    body: "Provincial responsibility. Exchange or graduated licensing rules vary — check your province.",
    official: "https://www.canada.ca",
  },
  {
    title: "Settlement & employment programs",
    body: "Language training, job bridging, and community programs are often funded federally/provincially via local agencies.",
    official: "https://www.canada.ca/en/immigration-refugees-citizenship/services/settle-canada.html",
  },
];

export default function GovernmentPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Government & benefits"
          title="Understand the Canadian system"
          description="High-level maps of common programs — always confirm details on official government websites. For taxes, start with Norra's CRA orientation guide, then CRA itself."
        />
        <Disclaimer variant="warning" className="mt-8 max-w-3xl">
          Norra is not a government organization. We provide platform guidance only. Applications, eligibility, and
          payments are handled by official agencies. We never invent tax brackets, credit amounts, or “you will get X” promises.
        </Disclaimer>

        <div className="mt-8 rounded-2xl border border-forest/20 bg-sand/60 p-6 sm:p-8 max-w-3xl">
          <h2 className="font-display text-xl font-semibold text-ink">Featured: newcomer taxes orientation</h2>
          <p className="mt-2 text-muted text-sm sm:text-base leading-relaxed">
            Filing and benefits bookmarks for newcomers, students, and workers — linked to verified CRA / Canada.ca
            pages, with scam warnings and Plan cross-links.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <Button href="/resources/newcomer-taxes-canada" className="min-h-11">
              Read taxes guide
            </Button>
            <Button href="/plan/?need=benefits" variant="outline" className="min-h-11">
              Plan — Government benefits
            </Button>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {topics.map((t) => (
            <div key={t.title} className="rounded-2xl bg-white border border-night/5 p-6">
              <h2 className="font-semibold text-lg">{t.title}</h2>
              <p className="mt-2 text-sm text-muted leading-relaxed">{t.body}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={t.official}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-forest hover:underline"
                >
                  Official source ↗
                </a>
                {"norra" in t && t.norra && (
                  <Link href={t.norra} className="text-sm font-medium text-ink hover:underline">
                    {t.norraLabel} →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <Button href="/resources/newcomer-taxes-canada">Taxes orientation guide</Button>
          <Button href="/resources/get-sin-canada" variant="outline">
            SIN checklist
          </Button>
          <Button href="/settlement" variant="outline">
            Settlement resources
          </Button>
          <Button href="/professionals" variant="outline">
            Sample marketplace
          </Button>
        </div>
      </div>
    </div>
  );
}
