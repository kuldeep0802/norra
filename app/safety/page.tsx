import { SectionHeader } from "@/components/SectionHeader";
import { Disclaimer } from "@/components/Disclaimer";

export const metadata = { title: "Safety" };

export default function SafetyPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeader
          eyebrow="Safety centre"
          title="Stay scam-aware and in control"
          description="Newcomers are frequent targets for rental, job, and immigration scams. Use these habits."
        />
        <Disclaimer variant="warning">
          If you are in immediate danger, call 911. For fraud, consider the Canadian Anti-Fraud Centre.
        </Disclaimer>
        <div className="space-y-6 text-muted leading-relaxed">
          <div className="rounded-2xl bg-white border border-night/5 p-6">
            <h2 className="font-semibold text-ink text-lg">Housing</h2>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-sm">
              <li>Never wire money or pay crypto deposits before viewing (or using escrow with known platforms).</li>
              <li>Be wary of rents far below market with pressure to act immediately.</li>
              <li>Prefer written leases and confirm landlord identity.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white border border-night/5 p-6">
            <h2 className="font-semibold text-ink text-lg">Jobs</h2>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-sm">
              <li>Legitimate employers rarely ask for upfront fees or SIN before a formal offer.</li>
              <li>Demo listings on Norra are fictional — labelled clearly.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white border border-night/5 p-6">
            <h2 className="font-semibold text-ink text-lg">Immigration</h2>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-sm">
              <li>Only authorized representatives can provide paid immigration advice in many cases — verify on CICC or law society registries.</li>
              <li>No one can guarantee PR or visa approval.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white border border-night/5 p-6">
            <h2 className="font-semibold text-ink text-lg">Report a concern</h2>
            <p className="mt-2 text-sm">
              Email <a href="mailto:safety@norra.demo" className="text-forest underline">safety@norra.demo</a> (demo
              address) with listing IDs or screenshots. In production this would route to a trust & safety team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
