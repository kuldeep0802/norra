import Image from "next/image";
import Link from "next/link";
import { City } from "@/lib/data/cities";

export function CityCard({ city }: { city: City }) {
  return (
    <Link
      href={`/cities/${city.slug}`}
      className="group relative block rounded-2xl overflow-hidden aspect-[5/4] min-w-[220px]"
    >
      <Image
        src={city.image}
        alt={city.name}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
        sizes="220px"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-amber text-xs font-semibold uppercase tracking-wide">{city.province}</p>
        <h3 className="font-display text-xl font-semibold text-cream mt-0.5">{city.name}</h3>
        <p className="text-sky text-sm mt-1 line-clamp-2">{city.tagline}</p>
      </div>
    </Link>
  );
}
