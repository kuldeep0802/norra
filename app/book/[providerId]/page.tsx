import Link from "next/link";
import { notFound } from "next/navigation";
import { getProviderById, providers } from "@/lib/data/providers";
import { BookingWizard } from "@/components/BookingWizard";
import { Disclaimer } from "@/components/Disclaimer";

export function generateStaticParams() {
  return providers.map((p) => ({ providerId: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ providerId: string }> }) {
  const { providerId } = await params;
  const p = getProviderById(providerId);
  return { title: p ? `Demo book · ${p.name}` : "Demo book" };
}

export default async function BookPage({ params }: { params: Promise<{ providerId: string }> }) {
  const { providerId } = await params;
  const provider = getProviderById(providerId);
  if (!provider) notFound();

  return (
    <div className="py-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-muted mb-6">
          <Link href={`/professionals/${provider.id}`} className="hover:text-forest">
            {provider.name}
          </Link>{" "}
          / Book
        </p>
        <h1 className="font-display text-3xl font-semibold mb-2">Demo book — {provider.name}</h1>
        <p className="text-muted mb-6">{provider.title} · {provider.city}</p>
        <Disclaimer className="mb-8">
          Demo booking flow only — no real payment or appointment is created.
        </Disclaimer>
        <BookingWizard provider={provider} />
      </div>
    </div>
  );
}
