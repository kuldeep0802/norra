import {
  Plane,
  Luggage,
  GraduationCap,
  Landmark,
  HeartPulse,
  Wallet,
  Home,
  Briefcase,
  MapPinned,
  ShieldAlert,
  BookOpen,
  type LucideIcon,
} from "lucide-react";

/** Visual accent per guide eyebrow — decorative only. Colours stay within the Norra palette family. */
export const guideTopicStyle: Record<string, { icon: LucideIcon; tint: string; fg: string; bar: string }> = {
  "Pre-arrival": { icon: Plane, tint: "bg-amber/20", fg: "text-[#8A5A2B]", bar: "bg-amber" },
  Arrival: { icon: Luggage, tint: "bg-forest/10", fg: "text-forest", bar: "bg-forest" },
  Student: { icon: GraduationCap, tint: "bg-[#3E5C8A]/12", fg: "text-[#3E5C8A]", bar: "bg-[#3E5C8A]" },
  Government: { icon: Landmark, tint: "bg-night/8", fg: "text-night", bar: "bg-night" },
  Health: { icon: HeartPulse, tint: "bg-[#B5543C]/12", fg: "text-[#9A4330]", bar: "bg-[#B5543C]" },
  Banking: { icon: Wallet, tint: "bg-success/12", fg: "text-[#1F6B55]", bar: "bg-success" },
  Housing: { icon: Home, tint: "bg-forest-light/12", fg: "text-forest-light", bar: "bg-forest-light" },
  Work: { icon: Briefcase, tint: "bg-[#6B4E8A]/12", fg: "text-[#6B4E8A]", bar: "bg-[#6B4E8A]" },
  Cities: { icon: MapPinned, tint: "bg-sky/60", fg: "text-forest", bar: "bg-sky" },
  Safety: { icon: ShieldAlert, tint: "bg-[#B5543C]/12", fg: "text-[#9A4330]", bar: "bg-[#B5543C]" },
};

export function getGuideTopicStyle(eyebrow: string) {
  return guideTopicStyle[eyebrow] ?? { icon: BookOpen, tint: "bg-forest/10", fg: "text-forest", bar: "bg-forest" };
}
