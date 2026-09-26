"use client";

import Link from "next/link";
import { Reveal } from "./motion/Reveal";
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
import { Button } from "./Button";

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
    <section id="needs" className="scroll-mt-24 py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Start here"
          title="What do you need help with?"
          description="Pick an area of Canadian life — from immigration to everyday essentials — then take a useful next step or build it into My Canada Plan."
        />
        <div className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {serviceCategories.map((cat, i) => {
            const Icon = icons[cat.icon] || Home;
            return (
              <Reveal key={cat.slug} delay={(i % 4) * 50} className="h-full">
                <Link
                  href={cat.href}
                  className="flex flex-col h-full min-h-[7.5rem] sm:min-h-0 rounded-2xl border border-night/5 bg-cream p-4 sm:p-5 hover:bg-forest hover:text-cream hover:border-forest hover:shadow-lg motion-safe:hover:-translate-y-1 transition-all duration-300 group touch-manipulation"
                >
                  <Icon
                    className="h-7 w-7 text-forest group-hover:text-amber mb-3 transition-transform duration-300 motion-safe:group-hover:scale-110 motion-safe:group-hover:-rotate-6"
                    strokeWidth={1.5}
                  />
                  <h3 className="font-semibold text-sm sm:text-base leading-snug">{cat.shortTitle}</h3>
                  <p className="mt-1.5 text-xs text-muted group-hover:text-sky line-clamp-2 hidden sm:block">
                    {cat.description}
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
          <Button href="/plan" size="lg" className="min-h-12 w-full sm:w-auto justify-center">
            Build My Canada Plan
          </Button>
          <p className="text-sm text-muted text-center sm:text-left">
            Or open the full{" "}
            <Link href="/services" className="text-forest font-medium underline-offset-2 hover:underline">
              services directory
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
