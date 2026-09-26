"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Compass,
  FileText,
  Luggage,
  GraduationCap,
  Briefcase,
  Home,
  Users,
  Award,
} from "lucide-react";
import { journeyStages } from "@/lib/data/journeys";
import { SectionHeader } from "./SectionHeader";
import { cn } from "@/lib/utils";

const icons: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  Compass,
  FileText,
  Luggage,
  GraduationCap,
  Briefcase,
  Home,
  Users,
  Award,
};

export function JourneyPicker() {
  const [selected, setSelected] = useState<string | null>("planning");
  const stage = journeyStages.find((j) => j.id === selected);

  return (
    <section className="py-20 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Your journey"
          title="Where are you in your Canadian journey?"
          description="Select a stage to see relevant services and next steps — tailored to where you are right now."
        />

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {journeyStages.map((j) => {
            const Icon = icons[j.icon] || Compass;
            const active = selected === j.id;
            return (
              <button
                key={j.id}
                type="button"
                onClick={() => setSelected(j.id)}
                className={cn(
                  "rounded-2xl border p-4 text-left transition-all duration-200",
                  active
                    ? "bg-forest text-cream border-forest shadow-lg scale-[1.02]"
                    : "bg-white border-night/5 hover:border-forest/30 hover:shadow-md text-ink"
                )}
              >
                <Icon className={cn("h-6 w-6 mb-3", active ? "text-amber" : "text-forest")} strokeWidth={1.5} />
                <p className="font-semibold text-sm sm:text-base">{j.title}</p>
                <p className={cn("mt-1 text-xs leading-snug hidden sm:block", active ? "text-sky" : "text-muted")}>
                  {j.description}
                </p>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {stage && (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="mt-8 rounded-2xl bg-sand/80 border border-night/5 p-6 sm:p-8"
            >
              <p className="text-sm font-medium text-muted mb-4">
                Suggested for <span className="text-forest font-semibold">{stage.title}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {stage.chips.map((chip) => (
                  <Link
                    key={chip.href + chip.label}
                    href={chip.href}
                    className="inline-flex items-center rounded-full bg-white border border-forest/15 px-4 py-2 text-sm font-medium text-forest hover:bg-forest hover:text-cream transition-colors shadow-sm"
                  >
                    {chip.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
