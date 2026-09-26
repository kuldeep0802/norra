import { siteConfig } from "@/lib/site";
import { founder } from "@/lib/data/founder";

export function SiteJsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    founder: {
      "@type": "Person",
      name: founder.name,
      email: founder.email,
      telephone: founder.phone,
      jobTitle: founder.title,
      address: {
        "@type": "PostalAddress",
        addressCountry: "CA",
      },
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: founder.email,
      telephone: founder.phoneTel,
      contactType: "founder",
      areaServed: "CA",
      availableLanguage: ["en", "fr"],
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-CA",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
