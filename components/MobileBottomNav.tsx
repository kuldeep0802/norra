"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LayoutGrid, Map, Calendar, User } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { label: "Home", href: "/", icon: Home },
  { label: "Services", href: "/services", icon: LayoutGrid },
  { label: "Plan", href: "/plan", icon: Map },
  { label: "Bookings", href: "/dashboard", icon: Calendar },
  { label: "Account", href: "/dashboard#account", icon: User },
];

export function MobileBottomNav() {
  const pathname = usePathname();
  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 border-t border-night/10 bg-cream/95 backdrop-blur-xl pb-[env(safe-area-inset-bottom)]">
      <div className="flex justify-around items-center h-16 px-1">
        {items.map(({ label, href, icon: Icon }) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0]);
          return (
            <Link
              key={label}
              href={href}
              className={cn(
                "flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl min-w-[3.5rem]",
                active ? "text-forest" : "text-muted"
              )}
            >
              <Icon className="h-5 w-5" strokeWidth={active ? 2 : 1.5} />
              <span className="text-[10px] font-medium">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
