"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Map } from "lucide-react";
import { Button } from "./Button";

export function Hero() {
  return (
    <section className="relative min-h-[min(88vh,720px)] sm:min-h-[88vh] flex items-end overflow-hidden bg-night">
      <Image
        src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1800&q=80"
        alt="Toronto skyline at dusk"
        fill
        priority
        className="object-cover opacity-60"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-night via-night/70 to-forest/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-night/80 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 pt-28 sm:pt-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 backdrop-blur px-3.5 py-1.5 text-sm text-cream mb-5 sm:mb-6">
            <Compass className="h-4 w-4 text-amber" />
            Early-stage · Built in Canada
          </div>
          <h1 className="font-display text-[2rem] leading-[1.15] sm:text-5xl lg:text-6xl xl:text-[4rem] font-semibold text-cream tracking-tight">
            Your guide to navigating life in Canada.
          </h1>
          <p className="mt-5 sm:mt-6 text-base sm:text-xl text-sky leading-relaxed max-w-2xl">
            Norra is an early-stage navigation and organization tool — checklists, guides, and next steps for visas,
            housing, work, arrival, and everyday life. Not immigration advice. Not a government service.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3">
            <Button href="#needs" size="lg" variant="cream" className="min-h-12 w-full sm:w-auto justify-center">
              What do you need help with?
            </Button>
            <Button href="/plan" size="lg" variant="amber" className="min-h-12 w-full sm:w-auto justify-center">
              <Map className="h-4 w-4" />
              Build My Canada Plan
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <p className="mt-6 sm:mt-8 text-xs text-sky/70 max-w-lg leading-relaxed">
            Norra is not incorporated as a licensed immigration consultancy, law firm, medical provider, financial
            institution, or government organization. Sample marketplace and listing content is labelled clearly.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
