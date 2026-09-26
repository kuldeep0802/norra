import Link from "next/link";
import { ArrowRight, Clock, ExternalLink } from "lucide-react";
import { Guide } from "@/lib/data/guides";
import { Disclaimer } from "@/components/Disclaimer";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";

export function GuideArticle({ guide }: { guide: Guide }) {
  return (
    <article className="py-10 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-muted mb-4">
          <Link href="/resources" className="text-forest hover:underline">
            Knowledge Hub
          </Link>
          <span className="mx-2 text-night/30">/</span>
          <span>{guide.eyebrow}</span>
        </p>

        <SectionHeader
          eyebrow={guide.eyebrow}
          title={guide.title}
          description={guide.summary}
        />

        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted">
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> ~{guide.readingMinutes} min read
          </span>
          <span>Updated {guide.updatedLabel}</span>
        </div>

        <Disclaimer className="mt-8">
          Norra guides are for organization and orientation. They are not immigration, legal, medical, or financial
          advice. When a step depends on eligibility or law, verify on official Government of Canada or provincial
          sources.
        </Disclaimer>

        <div className="mt-10 space-y-10">
          {guide.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink tracking-tight">
                {section.heading}
              </h2>
              {section.paragraphs?.map((p) => (
                <p key={p.slice(0, 48)} className="mt-3 text-muted leading-relaxed text-[15px] sm:text-base">
                  {p}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-3 space-y-2 text-muted text-[15px] sm:text-base leading-relaxed">
                  {section.bullets.map((b) => (
                    <li key={b.slice(0, 48)} className="flex gap-2">
                      <span className="text-forest mt-1.5 shrink-0">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.callout && (
                <div
                  className={`mt-4 rounded-2xl border px-4 py-3.5 text-sm leading-relaxed ${
                    section.callout.kind === "warning"
                      ? "bg-amber/10 border-amber/30"
                      : section.callout.kind === "verify"
                        ? "bg-sky/40 border-sky"
                        : "bg-sand border-night/10"
                  }`}
                >
                  <p className="font-semibold text-ink text-xs uppercase tracking-wide mb-1">
                    {section.callout.kind === "verify"
                      ? "Verify on official sources"
                      : section.callout.kind === "warning"
                        ? "Stay careful"
                        : "Practical tip"}
                  </p>
                  <p className="text-ink/90">{section.callout.text}</p>
                </div>
              )}
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-forest text-cream p-6 sm:p-8">
          <h2 className="font-display text-xl sm:text-2xl font-semibold">Put this into My Canada Plan</h2>
          <p className="mt-2 text-sky text-sm sm:text-base leading-relaxed">
            Turn reading into a checklist you can tick on this device — stage-aware and saved locally.
          </p>
          <Button href="/plan" variant="amber" className="mt-5 min-h-12">
            Build My Canada Plan
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {guide.relatedHrefs.length > 0 && (
          <div className="mt-10">
            <h2 className="font-semibold text-ink mb-3">Related on Norra</h2>
            <ul className="flex flex-wrap gap-2">
              {guide.relatedHrefs.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="inline-flex items-center gap-1 rounded-full border border-night/10 bg-white px-3.5 py-2 text-sm text-forest hover:border-forest min-h-11 touch-manipulation"
                  >
                    {r.label}
                    {!r.href.startsWith("http") ? (
                      <ArrowRight className="h-3.5 w-3.5" />
                    ) : (
                      <ExternalLink className="h-3.5 w-3.5" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="mt-10 text-sm text-muted">
          <Link href="/resources" className="text-forest font-medium hover:underline">
            ← Back to Knowledge Hub
          </Link>
        </p>
      </div>
    </article>
  );
}
