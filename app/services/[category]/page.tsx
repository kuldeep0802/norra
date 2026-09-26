import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Disclaimer } from "@/components/Disclaimer";
import { getServiceBySlug, serviceCategories } from "@/lib/data/services";

export function generateStaticParams() {
  return serviceCategories.map((s) => ({ category: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cat = getServiceBySlug(category);
  return { title: cat?.title ?? "Service" };
}

export default async function ServiceCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cat = getServiceBySlug(category);
  if (!cat) notFound();

  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-muted mb-4">
          <Link href="/services" className="hover:text-forest">
            Services
          </Link>{" "}
          / {cat.title}
        </p>
        <SectionHeader title={cat.title} description={cat.description} />
        <Disclaimer className="mt-8 max-w-3xl">
          General information and navigation only. Regulated advice requires licensed professionals. Official
          processes live on government websites.
        </Disclaimer>
        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          {cat.services.map((s) => (
            <div key={s.name} className="rounded-2xl border border-night/5 bg-white p-6">
              <h3 className="font-semibold text-lg">{s.name}</h3>
              <p className="mt-2 text-sm text-muted">{s.description}</p>
              {s.href && (
                <Button href={s.href} variant="outline" size="sm" className="mt-4">
                  Open
                </Button>
              )}
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col sm:flex-row flex-wrap gap-3">
          <Button href="/plan" className="min-h-11">
            Build My Canada Plan
          </Button>
          <Button href="/resources" variant="outline" className="min-h-11">
            Knowledge Hub
          </Button>
          <Button href="/professionals" variant="outline" className="min-h-11">
            Sample marketplace
          </Button>
        </div>
      </div>
    </div>
  );
}
