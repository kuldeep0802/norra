import { Compass, Flag, Lock, MessageSquareWarning } from "lucide-react";
import Link from "next/link";

const items = [
  {
    icon: Compass,
    title: "Honest labelling",
    text: "Sample content, real tools, and future ideas are marked so you know what is live.",
  },
  {
    icon: MessageSquareWarning,
    title: "Scam alerts",
    text: "Practical tips to spot rental, job, and immigration scams.",
  },
  {
    icon: Flag,
    title: "Report concerns",
    text: "Reach the Founder if something looks wrong — we take safety seriously.",
  },
  {
    icon: Lock,
    title: "Privacy-first",
    text: "This demo does not upload sensitive documents. Keep master copies offline.",
  },
];

export function TrustBanner() {
  return (
    <section className="bg-night text-cream py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-amber text-sm font-semibold uppercase tracking-wide mb-3">Trust & safety</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold">Built for clarity, not shortcuts.</h2>
          <p className="mt-4 text-sky leading-relaxed">
            Norra is an early-stage navigation and organization product — not a law firm, immigration consultancy,
            medical provider, bank, or government organization. We help you orient and organize; we do not sell
            fake social proof or unverified “trusted professional” claims.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <Icon className="h-6 w-6 text-amber mb-4" strokeWidth={1.5} />
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-sky">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/safety" className="text-amber hover:underline text-sm font-medium min-h-11 inline-flex items-center">
            Safety centre →
          </Link>
          <Link href="/privacy" className="text-sky hover:underline text-sm font-medium min-h-11 inline-flex items-center">
            Privacy →
          </Link>
        </div>
      </div>
    </section>
  );
}
