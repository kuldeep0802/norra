import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { serviceCategories } from "@/lib/data/services";
import { Disclaimer } from "@/components/Disclaimer";
import { Button } from "@/components/Button";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title="Everything you need to navigate Canada"
          description="Browse by need — from immigration overviews to everyday life. Take a next step when you're ready."
        />
        <Disclaimer className="mt-8 max-w-3xl">
          Norra provides navigation and admin help. For immigration, legal, medical, or financial advice, consult
          an authorized or licensed professional you choose independently — Norra does not vet or refer professionals. We
          do not guarantee outcomes.
        </Disclaimer>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {serviceCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={cat.href.startsWith("/services/") ? cat.href : `/services/${cat.slug}`}
              className="rounded-2xl border border-night/5 bg-white p-6 hover:shadow-lg hover:border-forest/20 transition-all group"
            >
              <h2 className="font-display text-xl font-semibold group-hover:text-forest">{cat.title}</h2>
              <p className="mt-2 text-sm text-muted leading-relaxed">{cat.description}</p>
              <p className="mt-4 text-sm font-medium text-forest">Explore →</p>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-dashed border-forest/30 bg-sky/15 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-ink">Providers: express interest</p>
            <p className="mt-1 text-sm text-muted leading-relaxed max-w-xl">
              Offer immigration, career, housing-adjacent, tutoring, or related help? Join the early interest list
              for a future Norra marketplace — not live, not verified, not an acceptance.
            </p>
          </div>
          <Button href="/partner#interest" variant="outline" className="shrink-0 min-h-11">
            Providers: express interest
          </Button>
        </div>
      </div>
    </div>
  );
}
