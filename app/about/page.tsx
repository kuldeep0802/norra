import { SectionHeader } from "@/components/SectionHeader";
import { Disclaimer } from "@/components/Disclaimer";
import { FounderSection } from "@/components/FounderSection";

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
        <div className="mt-10 prose-like space-y-6 text-muted leading-relaxed">
          <p>
            Moving to Canada — or helping someone who is — means juggling visas, housing, jobs, banking, healthcare,
            schools, and a hundred small decisions. Information is scattered. Advice quality varies. Scams prey on
            urgency.
          </p>
          <p>
            <strong className="text-ink">Norra</strong> is a premium assistance and navigation platform. We help
            newcomers, students, workers, and families find clarity, tools, and trusted help — without pretending to
            be the government, a law firm, or a guarantee of outcomes.
          </p>
          <h2 className="font-display text-2xl font-semibold text-ink pt-4">Mission</h2>
          <p>
            Make every stage of the Canadian journey feel navigable: before you arrive, the day you land, and the
            years you build a life here.
          </p>
          <h2 className="font-display text-2xl font-semibold text-ink pt-4">Business model</h2>
          <p>
            We keep platform fees nominal — typically <strong className="text-ink">under $40</strong> for bookings,
            sessions, and curated packages — plus optional provider subscriptions.{" "}
            <strong className="text-ink">We do not sell personal user data.</strong>
          </p>
          <h2 className="font-display text-2xl font-semibold text-ink pt-4">Trust</h2>
          <p>
            Clear labelling (demo vs verified), scam education, privacy-first document tools, and honest boundaries
            about what we can and cannot do.
          </p>
        </div>

        <FounderSection />

        <Disclaimer className="mt-10">
          This website is a product demo. Features illustrate the experience; listings and providers are sample
          content.
        </Disclaimer>
      </div>
    </div>
  );
}
