"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";
import { Button } from "./Button";

export function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-end overflow-hidden bg-night">
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

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 pt-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 backdrop-blur px-3.5 py-1.5 text-sm text-cream mb-6">
            <Compass className="h-4 w-4 text-amber" />
            Navigate life in Canada
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-semibold text-cream leading-[1.1] tracking-tight">
            Navigate life in Canada with confidence.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-sky leading-relaxed max-w-2xl">
            From visas and work to housing, settlement, and everyday life — guidance and help wherever you
            are in your Canadian journey.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/plan" size="lg" variant="amber">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/services" size="lg" variant="cream">
              Explore Services
            </Button>
          </div>
          <p className="mt-8 text-xs text-sky/70 max-w-lg">
            Norra is not a government organization, law firm, or immigration consultancy. We help you navigate —
            licensed professionals handle regulated advice.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
