import { SectionHeader } from "@/components/SectionHeader";
import { Disclaimer } from "@/components/Disclaimer";

export const metadata = { title: "Resources" };

const links = [
  { title: "Immigration, Refugees and Citizenship Canada", href: "https://www.canada.ca/en/immigration-refugees-citizenship.html", note: "Official immigration programs and forms." },
  { title: "Canada.ca benefits finder", href: "https://www.canada.ca/en/services/benefits.html", note: "Federal benefits overview." },
  { title: "Service Canada", href: "https://www.canada.ca/en/employment-social-development/corporate/portfolio/service-canada.html", note: "SIN and many in-person services." },
  { title: "CRA", href: "https://www.canada.ca/en/revenue-agency.html", note: "Taxes and benefits administration." },
  { title: "Settle in Canada", href: "https://www.canada.ca/en/immigration-refugees-citizenship/services/settle-canada.html", note: "Government settlement orientation." },
  { title: "CICC (immigration consultants)", href: "https://college-ic.ca", note: "Verify RCIC standing." },
];

export default function ResourcesPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Resources"
          title="Trusted starting points"
          description="Curated official and reference links. Always prefer primary government sources for decisions."
        />
        <Disclaimer className="mt-8">
          External links are provided for convenience. Norra does not control third-party content and is not
          affiliated with the Government of Canada.
        </Disclaimer>
        <ul className="mt-10 space-y-4">
          {links.map((l) => (
            <li key={l.href} className="rounded-2xl bg-white border border-night/5 p-5">
              <a href={l.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-forest hover:underline">
                {l.title} ↗
              </a>
              <p className="mt-1 text-sm text-muted">{l.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
