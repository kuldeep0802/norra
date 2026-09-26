import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";

export const metadata = { title: "Partner" };

export default function PartnerPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Partners"
          title="Build with Norra"
          description="We work with settlement agencies, schools, employers, housing operators, and licensed professionals."
        />
        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          {[
            ["Licensed professionals", "Join the marketplace with clear verification and booking tools."],
            ["Settlement organizations", "Refer clients to navigation tools and arrival packages."],
            ["Schools & employers", "Offer structured onboarding support for newcomers."],
            ["Housing partners", "List inventory with scam-aware workflows."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl bg-white border border-night/5 p-6">
              <h3 className="font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted">{d}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-muted text-sm leading-relaxed">
          Revenue model: nominal booking fees (under $40), provider subscriptions, and packages — not selling user data.
        </p>
        <Button href="/contact" className="mt-6">
          Contact partnerships
        </Button>
      </div>
    </div>
  );
}
