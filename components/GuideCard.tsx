import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { guideReadingMinutes, type Guide } from "@/lib/data/guides";
import { getGuideTopicStyle } from "@/lib/guideTopics";
import { cn } from "@/lib/utils";

/** Visual guide card: topic icon + colour accent, reading time computed from word count, hover lift. */
export function GuideCard({
  guide: g,
  showTopics = false,
  compact = false,
  className,
}: {
  guide: Guide;
  showTopics?: boolean;
  compact?: boolean;
  className?: string;
}) {
  const t = getGuideTopicStyle(g.eyebrow);
  const Icon = t.icon;
  const minutes = guideReadingMinutes(g);
  return (
    <Link
      href={`/resources/${g.slug}`}
      className={cn(
        "group relative flex flex-col h-full overflow-hidden rounded-2xl border border-night/5 bg-white p-5 sm:p-6 touch-manipulation",
        "transition-all duration-300 hover:border-forest/25 hover:shadow-[0_12px_30px_-12px_rgba(10,31,28,0.25)] motion-safe:hover:-translate-y-1",
        compact ? "min-h-[9rem]" : "min-h-[11rem]",
        className
      )}
    >
      <span aria-hidden className={cn("absolute inset-x-0 top-0 h-1 origin-left scale-x-[0.18] transition-transform duration-500 group-hover:scale-x-100", t.bar)} />
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 min-w-0">
          <span className={cn("inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 motion-safe:group-hover:scale-110", t.tint)}>
            <Icon className={cn("h-[18px] w-[18px]", t.fg)} strokeWidth={1.75} aria-hidden />
          </span>
          <span className={cn("text-xs font-semibold uppercase tracking-wide truncate", t.fg)}>{g.eyebrow}</span>
        </span>
        <span className="inline-flex items-center gap-1 text-xs text-muted shrink-0" title="Estimated from the guide's word count">
          <Clock className="h-3.5 w-3.5" aria-hidden />
          {minutes} min read
        </span>
      </div>
      <h3 className={cn("mt-3 font-display font-semibold text-ink group-hover:text-forest leading-snug", compact ? "text-base" : "text-lg")}>
        {g.title}
      </h3>
      <p className={cn("mt-2 text-sm text-muted leading-relaxed flex-1", compact ? "line-clamp-2" : "line-clamp-3")}>
        {g.summary}
      </p>
      {showTopics && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {g.topics.slice(0, 4).map((topic) => (
            <span key={topic} className="text-[10px] uppercase tracking-wide rounded-full bg-sand px-2 py-0.5 text-muted">
              {topic}
            </span>
          ))}
        </div>
      )}
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-forest">
        Read guide <ArrowRight className="h-3.5 w-3.5 transition-transform motion-safe:group-hover:translate-x-1" aria-hidden />
      </span>
    </Link>
  );
}
