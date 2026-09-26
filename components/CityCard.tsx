import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { City } from "@/lib/data/cities";

export function CityCard({ city, sizes = "260px" }: { city: City; sizes?: string }) {
  return (
    <Link
      href={`/cities/${city.slug}`}
      className="group relative block rounded-2xl overflow-hidden aspect-[5/4] min-w-[220px] bg-night shadow-sm transition-all duration-300 hover:shadow-[0_18px_40px_-16px_rgba(10,31,28,0.55)] motion-safe:hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-amber"
    >
      <Image
        src={city.image}
        alt={`${city.name} cityscape`}
        fill
        className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-110"
        sizes={sizes}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-night/95 via-night/35 to-transparent transition-opacity duration-300 group-hover:opacity-95" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-forest/0 to-forest/0 transition-colors duration-500 group-hover:to-forest/35" />
      <span
        aria-hidden
        className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-cream/90 text-forest opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100"
      >
        <ArrowUpRight className="h-4 w-4" />
      </span>
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-amber text-xs font-semibold uppercase tracking-wide">{city.province}</p>
        <h3 className="font-display text-xl font-semibold text-cream mt-0.5">{city.name}</h3>
        <p className="text-sky text-sm mt-1 line-clamp-2">{city.tagline}</p>
        <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <ul className="flex flex-wrap gap-1.5 pt-2.5">
              {city.highlights.slice(0, 2).map((h) => (
                <li key={h} className="rounded-full bg-white/15 backdrop-blur px-2.5 py-1 text-[11px] text-cream">
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
}
