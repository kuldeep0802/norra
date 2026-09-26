import { SectionHeader } from "@/components/SectionHeader";

export const metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6 text-muted leading-relaxed">
        <SectionHeader eyebrow="Legal" title="Privacy" description="How we think about your data on this early-stage product." />
        <p>
          <strong className="text-ink">Summary:</strong> This Norra website is a demonstration. We do not operate
          production user accounts, payment processing, or sensitive document storage here.
        </p>
        <h2 className="font-display text-xl font-semibold text-ink">What this demo stores</h2>
        <p>
          Checklist progress may be saved in your browser via localStorage. That data stays on your device unless
          you clear it.
        </p>
        <h2 className="font-display text-xl font-semibold text-ink">What we do not do</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>We do not sell personal user data.</li>
          <li>We do not ask you to upload real passports, SIN, or banking documents in this demo.</li>
          <li>We do not provide data to third parties for advertising profiles in this prototype.</li>
        </ul>
        <h2 className="font-display text-xl font-semibold text-ink">Future product principles</h2>
        <p>
          A production Norra would use encrypted storage, clear retention windows, user export/delete controls, and
          minimal data collection needed to deliver bookings and plans.
        </p>
        <p className="text-sm">Questions: kuldeepkushawaha@gmail.com (Founder).</p>
      </div>
    </div>
  );
}
