import { SectionHeader } from "@/components/SectionHeader";
import { Disclaimer } from "@/components/Disclaimer";
import { Button } from "@/components/Button";

export const metadata = { title: "Government & Benefits" };

const topics = [
  { title: "Social Insurance Number (SIN)", body: "Required for work and many benefits. Apply through Service Canada when eligible. Bring identity and status documents.", official: "https://www.canada.ca/en/employment-social-development/services/sin.html" },
  { title: "CRA & personal taxes", body: "Most residents file annually. Newcomers often have special first-year considerations — verify on CRA newcomers pages; a licensed tax pro can help. Norra does not invent amounts or deadlines.", official: "https://www.canada.ca/en/revenue-agency/services/tax/international-non-residents/individuals-leaving-entering-canada-non-residents/newcomers-canada-immigrants.html" },
  { title: "GST/HST credit", body: "A tax-free quarterly payment for those who qualify. Usually requires filing a return.", official: "https://www.canada.ca/en/revenue-agency/services/child-family-benefits/goods-services-harmonized-sales-tax-credit.html" },
  { title: "Canada Child Benefit (CCB)", body: "Monthly support for eligible families with children. Apply via CRA processes.", official: "https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit-overview.html" },
  { title: "Employment Insurance (EI)", body: "Income support in specific job-loss or leave situations if you qualify. Check official eligibility tools.", official: "https://www.canada.ca/en/services/benefits/ei.html" },
  { title: "Provincial healthcare", body: "Each province/territory runs its own health plan with waiting periods and documentation rules.", official: "https://www.canada.ca/en/health-canada/services/health-care-system/reports-publications/health-care-system/canada.html" },
  { title: "Driver licensing", body: "Provincial responsibility. Exchange or graduated licensing rules vary — check your province.", official: "https://www.canada.ca" },
  { title: "Settlement & employment programs", body: "Language training, job bridging, and community programs are often funded federally/provincially via local agencies.", official: "https://www.canada.ca/en/immigration-refugees-citizenship/services/settle-canada.html" },
];

export default function GovernmentPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Government & benefits"
          title="Understand the Canadian system"
          description="High-level maps of common programs — always confirm details on official government websites."
        />
        <Disclaimer variant="warning" className="mt-8 max-w-3xl">
          Norra is not a government organization. We provide platform guidance only. Applications, eligibility,
          and payments are handled by official agencies. Links below are illustrative pointers to Canada.ca-style
          sources.
        </Disclaimer>
        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {topics.map((t) => (
            <div key={t.title} className="rounded-2xl bg-white border border-night/5 p-6">
              <h2 className="font-semibold text-lg">{t.title}</h2>
              <p className="mt-2 text-sm text-muted leading-relaxed">{t.body}</p>
              <a
                href={t.official}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm font-medium text-forest hover:underline"
              >
                Official source ↗
              </a>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <Button href="/professionals">Find a tax professional</Button>
          <Button href="/settlement" variant="outline">
            Settlement resources
          </Button>
        </div>
      </div>
    </div>
  );
}
