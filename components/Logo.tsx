import Link from "next/link";

export function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  const text = light ? "text-cream" : "text-forest";
  const mark = light ? "#F7F3EC" : "#0B4F4A";
  const accent = light ? "#D4A574" : "#D4A574";
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 group ${className}`} aria-label="Norra home">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden className="shrink-0 transition-transform group-hover:rotate-12">
        <circle cx="16" cy="16" r="15" stroke={mark} strokeWidth="1.5" opacity="0.35" />
        <path d="M16 4 L18.2 13.8 L28 16 L18.2 18.2 L16 28 L13.8 18.2 L4 16 L13.8 13.8 Z" fill={mark} />
        <circle cx="16" cy="16" r="2.2" fill={accent} />
      </svg>
      <span className={`font-display text-xl tracking-tight font-semibold ${text}`}>Norra</span>
    </Link>
  );
}
