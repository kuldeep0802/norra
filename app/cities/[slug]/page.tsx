import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cities, getCityBySlug } from "@/lib/data/cities";
import { properties } from "@/lib/data/properties";
import { jobs } from "@/lib/data/jobs";
import { providers } from "@/lib/data/providers";
import { PropertyCard } from "@/components/PropertyCard";
import { JobCard } from "@/components/JobCard";
import { ProviderCard } from "@/components/ProviderCard";
import { Button } from "@/components/Button";
import { Disclaimer } from "@/components/Disclaimer";

export function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  return { title: city ? `${city.name}, ${city.province}` : "City" };
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const cityProps = properties.filter((p) => p.city === city.name).slice(0, 3);
  const cityJobs = jobs.filter((j) => j.city === city.name).slice(0, 2);
  const cityPros = providers.filter((p) => p.city === city.name).slice(0, 2);

  return (
    <div>
      <section className="relative h-[42vh] min-h-[280px] bg-night">
        <Image src={city.image} alt={city.name} fill className="object-cover opacity-70" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 mx-auto max-w-7xl">
          <p className="text-amber text-sm font-semibold uppercase tracking-wide">{city.province}</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-cream mt-1">{city.name}</h1>
          <p className="mt-3 text-sky max-w-2xl">{city.tagline}</p>
          <p className="mt-2 text-sm text-sky/70">Population {city.population}</p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 space-y-14">
        <Disclaimer>
          Platform guidance for orientation. Official municipal/provincial/federal sites remain authoritative.
          Norra serves people across Canada — not only featured cities.
        </Disclaimer>

        <div className="flex flex-wrap gap-2">
          {city.highlights.map((h) => (
            <span key={h} className="rounded-full bg-sand px-3 py-1 text-sm font-medium text-forest">
              {h}
            </span>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            ["Housing", city.housingNote, "/housing"],
            ["Jobs", city.jobsNote, "/jobs"],
            ["Transit", city.transitNote, "/services/transportation"],
            ["Healthcare", city.healthcareNote, "/services/healthcare"],
            ["Education", city.educationNote, "/students"],
            ["Settlement", city.settlementNote, "/settlement"],
          ].map(([title, note, href]) => (
            <div key={title as string} className="rounded-2xl bg-white border border-night/5 p-6">
              <h2 className="font-semibold text-lg text-forest">{title as string}</h2>
              <p className="mt-2 text-sm text-muted leading-relaxed">{note as string}</p>
              <Link href={href as string} className="inline-block mt-3 text-sm font-medium text-forest hover:underline">
                Related tools →
              </Link>
            </div>
          ))}
        </div>

        <div>
          <h2 className="font-display text-2xl font-semibold mb-4">Things to know</h2>
          <ul className="space-y-2">
            {city.thingsToKnow.map((t) => (
              <li key={t} className="flex gap-2 text-muted">
                <span className="text-amber">●</span> {t}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-2xl font-semibold mb-4">Official links</h2>
          <div className="flex flex-wrap gap-3">
            {city.govLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-forest/20 px-4 py-2 text-sm font-medium text-forest hover:bg-forest hover:text-cream transition-colors"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        </div>

        {cityProps.length > 0 && (
          <div>
            <div className="flex justify-between items-end mb-6">
              <h2 className="font-display text-2xl font-semibold">Housing in {city.name}</h2>
              <Button href="/housing" variant="outline" size="sm">
                All housing
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cityProps.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        )}

        {cityJobs.length > 0 && (
          <div>
            <h2 className="font-display text-2xl font-semibold mb-6">Demo jobs nearby</h2>
            <div className="grid lg:grid-cols-2 gap-4">
              {cityJobs.map((j) => (
                <JobCard key={j.id} job={j} />
              ))}
            </div>
          </div>
        )}

        {cityPros.length > 0 && (
          <div>
            <h2 className="font-display text-2xl font-semibold mb-6">Local demo providers</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {cityPros.map((p) => (
                <ProviderCard key={p.id} provider={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
