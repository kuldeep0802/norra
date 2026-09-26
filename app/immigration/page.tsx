import { SectionHeader } from "@/components/SectionHeader";
import { Disclaimer } from "@/components/Disclaimer";
import { Button } from "@/components/Button";
import Link from "next/link";

export const metadata = { title: "Immigration & Status" };

const pathways = [
  { title: "Study permit", desc: "Document checklists and prep tips for studying at a Canadian DLI.", href: "/students" },
  { title: "Work permit & PGWP", desc: "Orientation to IRCC post-graduation work pages — verify eligibility yourself.", href: "/resources/pgwp-post-graduation-work" },
  { title: "Visitor / TRV / eTA", desc: "Travel document orientation for short stays." },
  { title: "Extensions & restoration", desc: "Timeline awareness and document organization." },
  { title: "Express Entry overview", desc: "Federal skilled pathways at a glance — not a CRS calculator promise." },
  { title: "Provincial Nominee (PNP)", desc: "How PNP generally relates to federal PR — verify on official sites." },
  { title: "Family sponsorship", desc: "Orientation to common family class concepts." },
  { title: "Citizenship", desc: "General residency and language themes — confirm on Canada.ca." },
];

export default function ImmigrationPage() {
  return (
    <div>
      <section className="bg-night text-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            light
            eyebrow="Immigration & status"
            title="Navigate status questions with clarity"
            description="Checklists, document tools, and connections to authorized professionals. Norra does not file applications or give legal advice."
          />
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <Disclaimer variant="warning">
          <strong>Important:</strong> Norra is not a law firm, RCIC practice, or government body. We do not
          guarantee visa, permit, PR, or citizenship outcomes. For eligibility assessments and filings, use
          authorized representatives and official IRCC / Canada.ca sources.
        </Disclaimer>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pathways.map((p) => {
            const body = (
              <>
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted">{p.desc}</p>
              </>
            );
            const cls = "rounded-2xl bg-white border border-night/5 p-5 block hover:border-forest/30 hover:shadow-sm transition-all";
            if ("href" in p && p.href) {
              return (
                <Link key={p.title} href={p.href} className={cls}>
                  {body}
                </Link>
              );
            }
            return (
              <div key={p.title} className={cls}>
                {body}
              </div>
            );
          })}
        </div>

        <div className="rounded-2xl border border-forest/20 bg-sand/60 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-forest">Knowledge Hub</p>
            <h3 className="mt-1 font-display text-xl font-semibold text-ink">PGWP / post-graduation work orientation</h3>
            <p className="mt-1 text-sm text-muted max-w-xl">
              Verified IRCC starting points for researching work after a Canadian program — no invented eligibility, validity lengths, or processing times.
            </p>
          </div>
          <Button href="/resources/pgwp-post-graduation-work" className="min-h-11 shrink-0">
            Read the guide
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-sand p-6">
            <h3 className="font-display text-xl font-semibold">Document organizer</h3>
            <p className="mt-2 text-sm text-muted">UI-only checklist space — nothing sensitive is uploaded to our servers in this demo.</p>
            <Button href="/documents" size="sm" className="mt-4">
              Open organizer
            </Button>
          </div>
          <div className="rounded-2xl bg-sand p-6">
            <h3 className="font-display text-xl font-semibold">Authorized professionals</h3>
            <p className="mt-2 text-sm text-muted">Find demo RCICs and immigration lawyers. Always verify credentials on official registries.</p>
            <Button href="/professionals" size="sm" className="mt-4">
              Find help
            </Button>
          </div>
          <div className="rounded-2xl bg-sand p-6">
            <h3 className="font-display text-xl font-semibold">Official sources</h3>
            <p className="mt-2 text-sm text-muted">
              <Link href="https://www.canada.ca/en/immigration-refugees-citizenship.html" className="text-forest underline" target="_blank">
                IRCC on Canada.ca
              </Link>{" "}
              is the authoritative source for programs and forms.
            </p>
            <Button href="/resources" size="sm" variant="outline" className="mt-4">
              Resource hub
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
