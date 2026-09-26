import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Disclaimer } from "@/components/Disclaimer";

export const metadata = { title: "Students" };

export default function StudentsPage() {
  return (
    <div>
      <section className="relative py-24 bg-night text-cream overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=80"
          alt="University campus"
          fill
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-night/50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            light
            eyebrow="Students"
            title="Your Canadian student experience hub"
            description="Housing near campus, part-time work awareness, study permit orientation, banking, and community."
          />
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        <Disclaimer>
          Study permit rules and on-/off-campus work conditions change. Confirm on IRCC / Canada.ca and with your
          school&apos;s international student office. Norra does not provide immigration advice.
        </Disclaimer>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            ["Study permit orientation", "Checklists and document prep — not eligibility decisions.", "/immigration"],
            ["Student housing", "Shared rooms, studios, and family options near transit.", "/housing"],
            ["Campus-friendly jobs", "Demo part-time and internship listings.", "/jobs"],
            ["Arrival for students", "Airport pickup and first-week setup.", "/arrival"],
            ["Banking & SIN", "Open accounts and apply for SIN when eligible.", "/government"],
            ["Tutors & coaches", "Academic and career support via marketplace.", "/professionals"],
          ].map(([t, d, h]) => (
            <a key={t} href={h} className="rounded-2xl bg-white border border-night/5 p-6 hover:shadow-md transition-shadow">
              <h3 className="font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted">{d}</p>
              <p className="mt-3 text-sm text-forest font-medium">Open →</p>
            </a>
          ))}
        </div>
        <Button href="/plan">Build a student Canada Plan</Button>
      </div>
    </div>
  );
}
