import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/GuideArticle";
import { getAllGuideSlugs, getGuide } from "@/lib/data/guides";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return { title: "Guide" };
  const url = `${siteConfig.url}/resources/${guide.slug}/`;
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: { canonical: `/resources/${guide.slug}/` },
    openGraph: {
      title: `${guide.metaTitle} · ${siteConfig.name}`,
      description: guide.metaDescription,
      url,
      type: "article",
    },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  return <GuideArticle guide={guide} />;
}
