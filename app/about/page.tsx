import { SectionHeader } from "@/components/SectionHeader";
import { Disclaimer } from "@/components/Disclaimer";
import { FounderSection } from "@/components/FounderSection";
import { DemoBanner } from "@/components/DemoBanner";
import { Button } from "@/components/Button";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="About Norra"
          title="Navigate life in Canada"
          description="Pronounced NOR-uh — inspired by the idea of a northern guide: a clear point of orientation when everything is new."
        />
        <DemoBanner className="mt-8">
          Norra is an <strong>early-stage product</strong>. Some pages are fully usable tools (checklists, guides);
          marketplace, housing, jobs, bookings, and the contact form include sample or demo UI that does not yet
          connect to live services.
        </DemoBanner>
        <div className="mt-10 prose-like space-y-6 text-muted leading-relaxed">
          <p>
            Moving to Canada — or helping someone who is — means juggling visas, housing, jobs, banking, healthcare,
            schools, and a hundred small decisions. Information is scattered. Advice quality varies. Scams prey on
            urgency.
          </p>
          <p>
            <strong className="text-ink">Norra</strong> is a navigation and organization tool. We help newcomers,
            students, workers, and families find clarity and next steps — without pretending to be the government, a
            law firm, an immigration consultancy, or a guarantee of outcomes.
          </p>
          <h2 className="font-display text-2xl font-semibold text-ink pt-4">Mission</h2>
          <p>
            Make every stage of the Canadian journey feel navigable: before you arrive, the day you land, and the
            years you build a life here.
          </p>
          <h2 className="font-display text-2xl font-semibold text-ink pt-4">How we think about pricing</h2>
          <p>
            Sample booking cards show <strong className="text-ink">example rates under $40</strong> to illustrate a
            low-friction future marketplace. Those figures are demo-only until real payments and providers exist. We
            do not sell personal user data.
          </p>
          <h2 className="font-display text-2xl font-semibold text-ink pt-4">Honesty over hype</h2>
          <p>
            Clear labelling (sample vs usable tools vs future ideas), scam education, privacy-first document UI, and
            honest boundaries about what we can and cannot do.
          </p>
        </div>

        <FounderSection />

        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/plan" size="lg" className="min-h-12">
            Build My Canada Plan
          </Button>
          <Button href="/contact" variant="outline" className="min-h-12">
            Contact the Founder
          </Button>
        </div>

        <Disclaimer className="mt-10">
          This website includes product demos. Listings and provider profiles are sample content for layout only.
        </Disclaimer>
      </div>
    </div>
  );
}
