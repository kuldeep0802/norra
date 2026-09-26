import Image from "next/image";
import Link from "next/link";
import { MapPin, TrainFront, BedDouble, Bath } from "lucide-react";
import { Property } from "@/lib/data/properties";
import { Badge } from "./Badge";
import { formatCad } from "@/lib/utils";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <Link
      href="/housing"
      className="group block rounded-2xl overflow-hidden bg-white border border-night/5 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-sand">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width:768px) 100vw, 33vw"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <Badge variant="demo" icon="demo">
            Sample (layout only)
          </Badge>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold text-ink leading-snug group-hover:text-forest transition-colors">
            {property.title}
          </h3>
          <p className="font-display font-semibold text-forest whitespace-nowrap">
            {formatCad(property.price)}
            <span className="text-xs font-sans font-normal text-muted">/mo</span>
          </p>
        </div>
        <p className="mt-2 flex items-center gap-1.5 text-sm text-muted">
          <MapPin className="h-3.5 w-3.5" />
          {property.neighbourhood}, {property.city}
        </p>
        <p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted">
          <TrainFront className="h-3.5 w-3.5" />
          {property.transitNote}
        </p>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted">
          <span className="inline-flex items-center gap-1">
            <BedDouble className="h-4 w-4" /> {property.beds === 0 ? "Studio" : property.beds}
          </span>
          <span className="inline-flex items-center gap-1">
            <Bath className="h-4 w-4" /> {property.baths}
          </span>
          {property.furnished && <Badge variant="muted">Furnished</Badge>}
        </div>
      </div>
    </Link>
  );
}
