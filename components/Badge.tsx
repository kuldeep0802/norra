import { cn } from "@/lib/utils";
import { BadgeCheck, Beaker } from "lucide-react";

type Variant = "verified" | "demo" | "amber" | "muted" | "success";

const styles: Record<Variant, string> = {
  verified: "bg-white text-success border border-success/20",
  demo: "bg-sand text-muted border border-night/10",
  amber: "bg-amber/15 text-amber-dark border border-amber/30",
  muted: "bg-sky/40 text-ink border border-sky",
  success: "bg-success/10 text-success border border-success/20",
};

export function Badge({
  children,
  variant = "muted",
  className,
  icon,
}: {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  icon?: "verified" | "demo" | false;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium",
        styles[variant],
        className
      )}
    >
      {icon === "verified" && <BadgeCheck className="h-3.5 w-3.5" />}
      {icon === "demo" && <Beaker className="h-3.5 w-3.5" />}
      {children}
    </span>
  );
}
