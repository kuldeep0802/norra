import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { DemoBanner } from "@/components/DemoBanner";

export const metadata = { title: "Partner" };

export default function PartnerPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Partners"
          title="Explore building with Norra"
          description="We're an early-stage product exploring how settlement agencies, schools, employers, housing operators, and licensed professionals might work with navigation tools like Norra."
        />
        <DemoBanner className="mt-8">
          No active partnership program is live yet. Reach out if you&apos;d like to talk — conversations welcome;
          we do not claim existing corporate partners.
        </DemoBanner>
        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          {[
            ["Licensed professionals", "Future: clearer booking tools and credential checks — not live yet."],
            ["Settlement organizations", "Future: refer clients to navigation tools and arrival checklists."],
            ["Schools & employers", "Future: structured onboarding support for newcomers."],
            ["Housing partners", "Future: inventory with scam-aware workflows."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl bg-white border border-night/5 p-6">
              <h3 className="font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted">{d}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-muted text-sm leading-relaxed">
          Example pricing on sample booking cards (under $40) is illustrative only. We do not sell user data.
        </p>
        <Button href="/contact" className="mt-6 min-h-11">
          Contact the Founder
        </Button>
      </div>
    </div>
  );
}
