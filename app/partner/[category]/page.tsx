import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { DemoBanner } from "@/components/DemoBanner";
import { Disclaimer } from "@/components/Disclaimer";
import {
  getPartnerCategoryBySlug,
  partnerCategoryLandings,
} from "@/lib/data/partnerCategories";

export function generateStaticParams() {
  return partnerCategoryLandings.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cat = getPartnerCategoryBySlug(category);
  return {
    title: cat ? `${cat.title} — Partner interest` : "Partner category",
    description: cat?.metaDescription,
  };
}

export default async function PartnerCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = getPartnerCategoryBySlug(category);
  if (!cat) notFound();

  const interestHref = `/partner/?category=${encodeURIComponent(cat.slug)}#interest`;

  return (
    <div className="py-10 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-muted mb-4">
          <Link href="/partner" className="hover:text-forest">
            Partner
          </Link>{" "}
          / {cat.title}
        </p>

        <SectionHeader eyebrow={cat.eyebrow} title={cat.title} description={cat.summary} />

        <DemoBanner emphasis className="mt-8">
          <strong>Marketplace not live · Not verified.</strong> This is an early-stage category landing for
          SEO and provider interest only. Norra does <strong className="text-ink">not</strong> list real
          providers here, does not check licences, and does not accept anyone onto a marketplace yet.
        </DemoBanner>

        <Disclaimer className="mt-4">
          Nothing on this page is an endorsement, credential check, or offer of regulated advice. Verify any
          professional yourself with the relevant regulator before engaging them.
        </Disclaimer>

        <div className="mt-10 rounded-2xl bg-white border border-night/5 p-5 sm:p-6">
          <h2 className="font-display text-lg sm:text-xl font-semibold text-ink">
            What a future marketplace might offer
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
            {cat.futureMightOffer.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-forest shrink-0">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 rounded-2xl bg-sand border border-night/5 p-5 sm:p-6">
          <h2 className="font-display text-lg sm:text-xl font-semibold text-ink">Who this interest list is for</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
            {cat.whoThisIsFor.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-forest shrink-0">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 rounded-2xl border border-dashed border-amber/50 bg-amber/10 p-5 sm:p-6 text-sm text-ink leading-relaxed">
          <p className="font-semibold">No fake providers on this page</p>
          <p className="mt-1.5 text-muted">
            We intentionally do not invent names, ratings, licences, or “joined partners.” If you are a
            legitimate provider in this category, use the interest form — it opens a mailto to the Founder and
            does not auto-submit to a server yet.
          </p>
        </div>

        {cat.relatedGuides.length > 0 && (
          <div className="mt-8">
            <h2 className="font-semibold text-forest text-sm uppercase tracking-wide mb-3">Related on Norra</h2>
            <ul className="flex flex-wrap gap-2">
              {cat.relatedGuides.map((g) => {
                const external = g.href.startsWith("http");
                return (
                  <li key={g.href}>
                    {external ? (
                      <a
                        href={g.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full border border-night/10 bg-white px-3 py-2 text-sm text-forest hover:border-forest/40 min-h-11"
                      >
                        {g.label}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : (
                      <Link
                        href={g.href}
                        className="inline-flex items-center rounded-full border border-night/10 bg-white px-3 py-2 text-sm text-forest hover:border-forest/40 min-h-11"
                      >
                        {g.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-3">
          <Button href={interestHref} size="lg" className="min-h-12 w-full sm:w-auto justify-center">
            Express interest — {cat.formCategory}
          </Button>
          <Button href="/partner/#interest" variant="outline" className="min-h-12 w-full sm:w-auto justify-center">
            All partner categories
          </Button>
          <Button href="/professionals" variant="outline" className="min-h-12 w-full sm:w-auto justify-center">
            Sample marketplace (fictional)
          </Button>
        </div>

        <p className="mt-8 text-xs text-muted leading-relaxed">
          Other early-stage categories:{" "}
          {partnerCategoryLandings
            .filter((c) => c.slug !== cat.slug)
            .map((c, i, arr) => (
              <span key={c.slug}>
                <Link href={`/partner/${c.slug}`} className="text-forest hover:underline">
                  {c.title}
                </Link>
                {i < arr.length - 1 ? " · " : ""}
              </span>
            ))}
        </p>
      </div>
    </div>
  );
}
