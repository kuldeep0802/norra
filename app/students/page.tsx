import Image from "next/image";
import Link from "next/link";
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
            description="Orientation pointers for international students — school check-in, status reminders to verify on IRCC, housing awareness, banking, and My Canada Plan with a Study goal."
          />
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        <Disclaimer>
          Study permit rules and on-/off-campus work conditions change. Confirm on IRCC / Canada.ca and with your
          school&apos;s international student office. Norra does not provide immigration advice.
        </Disclaimer>

        <div className="rounded-2xl border border-forest/20 bg-sand/60 p-6 sm:p-8">
          <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink">
            Featured guide: first weeks as an international student
          </h2>
          <p className="mt-2 text-muted leading-relaxed">
            A practical map for orientation, IRCC verify reminders, banking/SIN/health cross-links, and housing scam
            awareness — then open Plan with goal Study.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <Button href="/resources/first-weeks-international-student" className="min-h-12">
              Read the guide
            </Button>
            <Button href="/plan/?goal=study" variant="outline" className="min-h-12">
              Build My Canada Plan (Study)
            </Button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            ["Study permit orientation", "Checklists and document prep — not eligibility decisions. Verify on IRCC.", "/immigration"],
            ["Student housing habits", "Short-stay and scam-aware tips — sample listings are labelled demo only.", "/resources/temporary-accommodation"],
            ["Arrival for students", "Airport and first-week setup habits.", "/arrival"],
            ["Banking & SIN guides", "Open accounts and apply for SIN when eligible — verify on official sites.", "/resources/get-sin-canada"],
            ["Health card map", "Provincial enrolment starting points — no invented wait times.", "/resources/get-health-card-canada"],
            ["Avoid newcomer scams", "Housing, jobs, and immigration red flags.", "/resources/avoid-newcomer-scams"],
          ].map(([t, d, h]) => (
            <Link
              key={t}
              href={h}
              className="rounded-2xl bg-white border border-night/5 p-6 hover:shadow-md transition-shadow touch-manipulation"
            >
              <h3 className="font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted">{d}</p>
              <p className="mt-3 text-sm text-forest font-medium">Open →</p>
            </Link>
          ))}
        </div>
        <Button href="/plan/?goal=study" className="min-h-12">
          Build a student Canada Plan
        </Button>
      </div>
    </div>
  );
}
