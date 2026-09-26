import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "amber" | "cream";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-forest text-cream hover:bg-forest-light shadow-sm",
  secondary: "bg-night text-cream hover:bg-forest-dark",
  ghost: "bg-transparent text-ink hover:bg-sand",
  outline: "border border-forest/30 text-forest hover:bg-forest hover:text-cream",
  amber: "bg-amber text-night hover:bg-amber-dark",
  cream: "bg-cream text-forest hover:bg-white",
};

const sizes: Record<Size, string> = {
  sm: "px-3.5 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  disabled,
}: Props) {
  const cls = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 motion-safe:hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-10px_rgba(10,31,28,0.45)] active:translate-y-0 active:scale-[0.98] touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:opacity-50",
    variants[variant],
    sizes[size],
    className
  );
  if (href) {
    return (
      <Link href={href} className={cls} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}
