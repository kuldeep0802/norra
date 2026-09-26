import { Beaker } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Stronger amber styling for forms / bookings that look interactive */
  emphasis?: boolean;
};

/**
 * Persistent chrome for sample / demo / not-yet-live surfaces.
 * Prefer this over language that sounds like real marketplace inventory.
 */
export function DemoBanner({ children, className, emphasis }: Props) {
  return (
    <div
      role="status"
      className={cn(
        "flex gap-3 rounded-2xl border px-4 py-3.5 text-sm leading-relaxed",
        emphasis
          ? "bg-amber/15 border-amber/40 text-ink"
          : "bg-sand border-night/10 text-ink",
        className
      )}
    >
      <Beaker className="h-5 w-5 shrink-0 text-forest mt-0.5" aria-hidden />
      <div className="min-w-0">{children}</div>
    </div>
  );
}
