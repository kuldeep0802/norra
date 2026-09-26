"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileCheck,
  Briefcase,
  Home,
  GraduationCap,
  Plane,
  Landmark,
  Wallet,
  HeartPulse,
  TrainFront,
  Smartphone,
  Scale,
  MapPinned,
  Users,
  Coffee,
} from "lucide-react";
import { serviceCategories } from "@/lib/data/services";
import { SectionHeader } from "./SectionHeader";

const icons: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  FileCheck,
  Briefcase,
  Home,
  GraduationCap,
  Plane,
  Landmark,
  Wallet,
  HeartPulse,
  TrainFront,
  Smartphone,
  Scale,
  MapPinned,
  Users,
  Coffee,
};

export function NeedsGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Needs"
          title="What do you need help with?"
          description="Fourteen areas of Canadian life — from immigration to everyday essentials."
        />
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {serviceCategories.map((cat, i) => {
            const Icon = icons[cat.icon] || Home;
            return (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.03, duration: 0.4 }}
              >
                <Link
                  href={cat.href}
                  className="flex flex-col h-full rounded-2xl border border-night/5 bg-cream p-5 hover:bg-forest hover:text-cream hover:border-forest hover:shadow-lg transition-all duration-300 group"
                >
                  <Icon
                    className="h-7 w-7 text-forest group-hover:text-amber mb-3"
                    strokeWidth={1.5}
                  />
                  <h3 className="font-semibold text-sm sm:text-base leading-snug">{cat.shortTitle}</h3>
                  <p className="mt-1.5 text-xs text-muted group-hover:text-sky line-clamp-2 hidden sm:block">
                    {cat.description}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
