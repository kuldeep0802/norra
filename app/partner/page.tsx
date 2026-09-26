import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { DemoBanner } from "@/components/DemoBanner";
import { PartnerInterestForm } from "@/components/PartnerInterestForm";
import { founder } from "@/lib/data/founder";
import { partnerCategoryLandings } from "@/lib/data/partnerCategories";
import Link from "next/link";

export const metadata = {
  title: "Partner — Provider interest",
  description:
    "Express interest in a future Norra marketplace. Early-stage interest list only — marketplace not live; no verification or acceptance claimed.",
};

export default function PartnerPage() {
  return (
    <div className="py-10 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Partners · Early stage"
          title="Explore building with Norra"
          description="We're an early-stage product exploring how settlement agencies, schools, employers, housing operators, and licensed professionals might work with navigation tools like Norra."
        />

        <DemoBanner className="mt-8">
          <strong className="text-forest">Marketplace not live.</strong> There is no active partnership program,
          no claimed partner logos, and no &ldquo;joined providers&rdquo; list. The form below is an{" "}
          <strong className="text-forest">interest list only</strong> — it does not verify credentials, check
          licences, or accept anyone onto a marketplace.
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

        <div className="mt-10">
          <h2 className="font-display text-xl font-semibold text-ink">Category interest pages</h2>
          <p className="mt-2 text-sm text-muted leading-relaxed">
            Lightweight SEO pages for key provider categories. Each page is honest early-stage copy — marketplace
            not live, not verified, no fake providers. CTAs prefill the interest form category.
          </p>
          <ul className="mt-4 grid sm:grid-cols-2 gap-3">
            {partnerCategoryLandings.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/partner/${c.slug}`}
                  className="block rounded-2xl border border-night/5 bg-white p-4 sm:p-5 hover:border-forest/30 hover:shadow-sm transition-all min-h-[5.5rem]"
                >
                  <span className="font-semibold text-forest text-sm sm:text-base">{c.title}</span>
                  <span className="mt-1 block text-xs text-muted leading-relaxed">
                    Maps to form: {c.formCategory} · Not live
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div id="interest" className="mt-12 scroll-mt-24">
          <PartnerInterestForm />
        </div>

        <p className="mt-8 text-muted text-sm leading-relaxed">
          Example pricing on sample booking cards (under $40) is illustrative only. We do not sell user data.
          Prefer a short note without the form? Email{" "}
          <a href={`mailto:${founder.email}`} className="text-forest font-medium hover:underline">
            {founder.email}
          </a>{" "}
          or call {founder.phone}.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/contact" className="min-h-11">
            Contact the Founder
          </Button>
          <Button href="/professionals" variant="outline" className="min-h-11">
            View sample marketplace
          </Button>
        </div>
      </div>
    </div>
  );
}
