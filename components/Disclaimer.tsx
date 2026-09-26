import { AlertTriangle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export function Disclaimer({
  children,
  variant = "info",
  className,
}: {
  children: React.ReactNode;
  variant?: "info" | "warning";
  className?: string;
}) {
  const isWarn = variant === "warning";
  return (
    <div
      className={cn(
        "flex gap-3 rounded-2xl border p-4 text-sm leading-relaxed",
        isWarn ? "bg-amber/10 border-amber/30 text-ink" : "bg-sky/30 border-sky text-ink",
        className
      )}
    >
      {isWarn ? (
        <AlertTriangle className="h-5 w-5 shrink-0 text-amber-dark mt-0.5" />
      ) : (
        <Info className="h-5 w-5 shrink-0 text-forest mt-0.5" />
      )}
      <div>{children}</div>
    </div>
  );
}
