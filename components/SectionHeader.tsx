import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  description,
  light = false,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn(align === "center" && "text-center mx-auto max-w-2xl", className)}>
      {eyebrow && (
        <p
          className={cn(
            "text-sm font-semibold tracking-wide uppercase mb-3",
            light ? "text-amber" : "text-forest"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight font-semibold tracking-tight",
          light ? "text-cream" : "text-ink"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-base sm:text-lg leading-relaxed", light ? "text-sky" : "text-muted")}>
          {description}
        </p>
      )}
    </div>
  );
}
