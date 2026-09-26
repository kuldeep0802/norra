import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { founder } from "@/lib/data/founder";
import { Button } from "./Button";

type Props = {
  /** Compact strip for homepage; full card for About */
  variant?: "full" | "teaser";
};

export function FounderSection({ variant = "full" }: Props) {
  if (variant === "teaser") {
    return (
      <section className="py-16 bg-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white border border-night/5 shadow-sm p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center">
            <div
              className="shrink-0 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-forest text-cream font-display text-xl sm:text-2xl font-semibold"
              aria-hidden
            >
              {founder.initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wider text-forest">Founded in Canada</p>
              <p className="mt-1 text-ink leading-relaxed">
                Norra is built by{" "}
                <strong className="font-semibold">{founder.name}</strong>, Founder — focused on making
                every stage of life in Canada clearer to navigate.
              </p>
            </div>
            <Button href="/about#founder" variant="outline" className="shrink-0">
              Meet the Founder
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="founder" className="scroll-mt-24 mt-16 pt-12 border-t border-night/10">
      <p className="text-xs font-semibold uppercase tracking-wider text-forest mb-3">Meet the Founder</p>
      <div className="rounded-3xl bg-sand/60 border border-night/5 overflow-hidden">
        <div className="grid md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] gap-0">
          <div className="bg-forest flex flex-col items-center justify-center p-8 md:p-10 text-cream">
            <div
              className="flex h-28 w-28 lg:h-32 lg:w-32 items-center justify-center rounded-full bg-cream/15 border border-cream/25 font-display text-3xl lg:text-4xl font-semibold"
              aria-label={`Photo placeholder for ${founder.name}`}
            >
              {founder.initials}
            </div>
            <p className="mt-5 font-display text-xl font-semibold text-center">{founder.name}</p>
            <p className="mt-1 text-sm text-sky">{founder.title}</p>
            <p className="mt-3 flex items-center gap-1.5 text-xs text-sky/80">
              <MapPin className="h-3.5 w-3.5" />
              {founder.location}
            </p>
          </div>
          <div className="p-8 sm:p-10 lg:p-12 bg-white md:bg-transparent">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink">
              Why Norra exists
            </h2>
            <p className="mt-4 text-muted leading-relaxed">{founder.mission}</p>
            <h3 className="mt-8 font-display text-xl font-semibold text-ink">The vision</h3>
            <p className="mt-3 text-muted leading-relaxed">{founder.vision}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact#founder-contact" size="lg">
                <Mail className="h-4 w-4" />
                Contact the Founder
              </Button>
              <Button href={`mailto:${founder.email}`} variant="outline">
                {founder.email}
              </Button>
            </div>
            <p className="mt-6 text-xs text-muted">
              Prefer a direct note? Email{" "}
              <Link href={`mailto:${founder.email}`} className="text-forest underline-offset-2 hover:underline">
                {founder.email}
              </Link>{" "}
              or call{" "}
              <Link href={`tel:${founder.phoneTel}`} className="text-forest underline-offset-2 hover:underline">
                {founder.phone}
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
