"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, Map, Calendar, User } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { label: "Home", href: "/", icon: Home },
  { label: "Guides", href: "/resources", icon: BookOpen },
  { label: "Plan", href: "/plan", icon: Map },
  { label: "Bookings", href: "/dashboard", icon: Calendar },
  { label: "About", href: "/about", icon: User },
];

export function MobileBottomNav() {
  const pathname = usePathname();
  return (
    <nav
      className="print-hide md:hidden fixed bottom-0 inset-x-0 z-50 border-t border-night/10 bg-cream/95 backdrop-blur-xl pb-[env(safe-area-inset-bottom)]"
      aria-label="Mobile"
    >
      <div className="flex justify-around items-stretch h-[4.25rem] px-1">
        {items.map(({ label, href, icon: Icon }) => {
          const pathOnly = href.split("#")[0] || "/";
          const active =
            href === "/"
              ? pathname === "/"
              : pathOnly !== "/" && pathname.startsWith(pathOnly);
          return (
            <Link
              key={label}
              href={href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex flex-1 flex-col items-center justify-center gap-0.5 px-1 py-2 min-h-11 touch-manipulation",
                active ? "text-forest" : "text-muted"
              )}
            >
              <Icon className="h-5 w-5" strokeWidth={active ? 2 : 1.5} aria-hidden />
              <span className="text-[10px] font-medium leading-tight">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
