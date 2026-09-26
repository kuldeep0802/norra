import { SectionHeader } from "@/components/SectionHeader";
import { CityCard } from "@/components/CityCard";
import { cities } from "@/lib/data/cities";
import { Disclaimer } from "@/components/Disclaimer";

export const metadata = { title: "Cities" };

export default function CitiesPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Cities"
          title="Explore where you might land"
          description="Guides for major Canadian cities — housing notes, jobs, transit, healthcare, and settlement."
        />
        <Disclaimer className="mt-8 max-w-3xl">
          Norra is not limited to these cities. They are featured starting points. Local rules and costs change —
          verify with official municipal and provincial sources.
        </Disclaimer>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((c) => (
            <CityCard key={c.slug} city={c} sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" />
          ))}
        </div>
        <p className="mt-8 text-xs text-muted">
          Image credits:{" "}
          {cities
            .filter((c) => c.imageCredit)
            .map((c, i, arr) => (
              <span key={c.slug}>
                {c.name} —{" "}
                <a href={c.imageCredit!.href} target="_blank" rel="noopener noreferrer" className="underline hover:text-forest">
                  {c.imageCredit!.text}
                </a>
                {i < arr.length - 1 ? "; " : ""}
              </span>
            ))}
          .
        </p>
      </div>
    </div>
  );
}
