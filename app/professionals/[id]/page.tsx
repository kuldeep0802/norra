import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Star, Languages } from "lucide-react";
import { getProviderById, providers } from "@/lib/data/providers";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Disclaimer } from "@/components/Disclaimer";
import { DemoBanner } from "@/components/DemoBanner";
import { formatCad } from "@/lib/utils";

export function generateStaticParams() {
  return providers.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = getProviderById(id);
  return { title: p?.name ?? "Professional" };
}

export default async function ProviderDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = getProviderById(id);
  if (!p) notFound();

  return (
    <div className="py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-muted mb-6">
          <Link href="/professionals" className="hover:text-forest">
            Sample marketplace
          </Link>{" "}
          / {p.name}
        </p>
        <DemoBanner emphasis className="mb-6">
          This is a fictional sample profile. Ratings and reviews are invented for UI layout.
        </DemoBanner>
        <div className="rounded-3xl bg-white border border-night/5 overflow-hidden shadow-sm">
          <div className="p-8 sm:p-10 flex flex-col sm:flex-row gap-6">
            <div className="relative h-28 w-28 rounded-2xl overflow-hidden shrink-0">
              <Image src={p.photo} alt={p.name} fill className="object-cover" sizes="112px" />
            </div>
            <div className="flex-1">
              <Badge variant="demo" icon="demo">
                Sample (layout only)
              </Badge>
              <h1 className="font-display text-3xl font-semibold mt-3">{p.name}</h1>
              <p className="text-muted mt-1">{p.title}</p>
              <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-4 w-4" /> {p.city}, {p.province}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Star className="h-4 w-4 text-amber fill-amber" /> {p.rating} ({p.reviewCount} sample reviews)
                </span>
                <span className="inline-flex items-center gap-1">
                  <Languages className="h-4 w-4" /> {p.languages.join(", ")}
                </span>
              </div>
              <p className="mt-4 font-display text-2xl text-forest">
                Example from {formatCad(p.rateFrom)}/{p.rateUnit}
              </p>
              <Button href={`/book/${p.id}`} className="mt-6">
                Try demo booking
              </Button>
            </div>
          </div>
          <div className="border-t border-night/5 p-8 sm:p-10 space-y-8">
            <div>
              <h2 className="font-semibold text-lg">About</h2>
              <p className="mt-2 text-muted leading-relaxed">{p.bio}</p>
            </div>
            <div>
              <h2 className="font-semibold text-lg">Services</h2>
              <ul className="mt-2 flex flex-wrap gap-2">
                {p.services.map((s) => (
                  <Badge key={s} variant="muted">
                    {s}
                  </Badge>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-lg">Reviews (demo)</h2>
              <div className="mt-4 space-y-4">
                {p.reviews.map((r, i) => (
                  <div key={i} className="rounded-xl bg-sand p-4">
                    <p className="font-medium text-sm">
                      {r.author} · {r.rating}★
                    </p>
                    <p className="mt-1 text-sm text-muted">{r.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <Disclaimer>
              Sample profile for layout only — not a real professional. Confirm real-world credentials independently before engaging anyone.
            </Disclaimer>
          </div>
        </div>
      </div>
    </div>
  );
}
