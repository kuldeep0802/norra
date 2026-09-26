import { ShieldCheck, Flag, Lock, MessageSquareWarning } from "lucide-react";
import Link from "next/link";

const items = [
  { icon: ShieldCheck, title: "Verified badges", text: "See what's checked — and what's demo." },
  { icon: MessageSquareWarning, title: "Scam alerts", text: "Tips to spot rental and job scams." },
  { icon: Flag, title: "Report concerns", text: "Flag suspicious listings or behaviour." },
  { icon: Lock, title: "Privacy-first", text: "Documents stay in your control." },
];

export function TrustBanner() {
  return (
    <section className="bg-night text-cream py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-amber text-sm font-semibold uppercase tracking-wide mb-3">Trust & safety</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold">Built for confidence, not shortcuts.</h2>
          <p className="mt-4 text-sky leading-relaxed">
            Norra is an assistance and navigation platform — not a law firm, immigration consultancy, medical
            provider, bank, or government organization. We help you find clarity, tools, and trusted help.
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
          <Link href="/safety" className="text-amber hover:underline text-sm font-medium">
            Safety centre →
          </Link>
          <Link href="/privacy" className="text-sky hover:underline text-sm font-medium">
            Privacy →
          </Link>
        </div>
      </div>
    </section>
  );
}
