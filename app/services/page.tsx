import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { serviceCategories } from "@/lib/data/services";
import { Disclaimer } from "@/components/Disclaimer";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title="Everything you need to navigate Canada"
          description="Browse by need — from immigration overviews to everyday life. Book help when you're ready."
        />
        <Disclaimer className="mt-8 max-w-3xl">
          Norra provides navigation and admin help. For immigration, legal, medical, or financial advice, we
          connect you with authorized professionals. We do not guarantee outcomes.
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
      </div>
    </div>
  );
}
