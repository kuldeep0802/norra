import { SectionHeader } from "@/components/SectionHeader";

export const metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6 text-muted leading-relaxed text-sm">
        <SectionHeader eyebrow="Legal" title="Terms of use" description="Terms for this early-stage Norra website." />
        <p>
          By using this site you acknowledge it is a product demonstration. Content is illustrative. Listings,
          providers, bookings, and payments are simulated.
        </p>
        <h2 className="font-display text-lg font-semibold text-ink">Not professional advice</h2>
        <p>
          Norra is an assistance and navigation platform. It is not a law firm, immigration consultancy, medical
          provider, financial institution, or government organization. Nothing on this site is legal, medical, or
          financial advice. No visa, PR, job, housing, or benefits outcomes are guaranteed.
        </p>
        <h2 className="font-display text-lg font-semibold text-ink">Marketplace</h2>
        <p>
          Demo providers are fictional. In a live product, independent professionals would deliver services under
          their own licences and agreements.
        </p>
        <h2 className="font-display text-lg font-semibold text-ink">Limitation</h2>
        <p>
          To the fullest extent permitted by law, Norra is provided &quot;as is&quot; without warranties regarding
          accuracy or fitness for a particular purpose.
        </p>
        <p>Contact: kuldeepkushawaha@gmail.com (Founder).</p>
      </div>
    </div>
  );
}
