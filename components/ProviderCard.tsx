import Image from "next/image";
import Link from "next/link";
import { MapPin, Star, Languages } from "lucide-react";
import { Provider } from "@/lib/data/providers";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { formatCad } from "@/lib/utils";

export function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <div className="rounded-2xl bg-white border border-night/5 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
      <div className="p-6 flex gap-4">
        <div className="relative h-16 w-16 rounded-2xl overflow-hidden shrink-0">
          <Image src={provider.photo} alt={provider.name} fill className="object-cover" sizes="64px" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap gap-1.5 mb-2">
            <Badge
              variant={provider.verification === "Demo verified" ? "verified" : "demo"}
              icon={provider.verification === "Demo verified" ? "verified" : "demo"}
            >
              {provider.verification}
            </Badge>
          </div>
          <h3 className="font-semibold text-ink truncate">{provider.name}</h3>
          <p className="text-sm text-muted truncate">{provider.title}</p>
        </div>
      </div>
      <div className="px-6 pb-4 flex-1">
        <p className="text-sm text-muted line-clamp-2">{provider.description}</p>
        <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted">
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {provider.city}, {provider.province}
          </span>
          <span className="inline-flex items-center gap-1">
            <Star className="h-3.5 w-3.5 text-amber fill-amber" />
            {provider.rating} ({provider.reviewCount})
          </span>
          <span className="inline-flex items-center gap-1">
            <Languages className="h-3.5 w-3.5" />
            {provider.languages.slice(0, 2).join(", ")}
          </span>
        </div>
        <p className="mt-3 text-sm font-medium text-forest">
          From {formatCad(provider.rateFrom)}/{provider.rateUnit}
        </p>
        <p className="text-xs text-muted mt-1">{provider.availability}</p>
      </div>
      <div className="px-6 pb-6 flex gap-2">
        <Button href={`/professionals/${provider.id}`} variant="outline" size="sm" className="flex-1">
          View
        </Button>
        <Button href={`/book/${provider.id}`} size="sm" className="flex-1">
          Book
        </Button>
      </div>
    </div>
  );
}
