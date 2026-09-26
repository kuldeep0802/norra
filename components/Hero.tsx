"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Compass, Map } from "lucide-react";
import { Button } from "./Button";
import { RotatingWord } from "./RotatingWord";
import { JourneyRouteHorizontal, JourneyRouteVertical } from "./JourneyRoute";

const needWords = ["housing", "your first job", "a SIN", "a health card", "a bank account", "your first week"];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[min(88vh,760px)] sm:min-h-[88vh] flex items-end overflow-hidden bg-night">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Sunset_Toronto_Skyline_Panorama_Crop_from_Snake_Island.jpg/1920px-Sunset_Toronto_Skyline_Panorama_Crop_from_Snake_Island.jpg"
        alt=""
        fill
        priority
        className="object-cover opacity-45"
        sizes="100vw"
      />
      {/* Gradient mesh — decorative, slow drift (static under reduced motion) */}
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="norra-blob-a absolute -top-1/4 -right-1/4 h-[70vmax] w-[70vmax] rounded-full bg-[radial-gradient(circle_at_center,rgba(14,100,96,0.55),transparent_60%)]" />
        <div className="norra-blob-b absolute -bottom-1/3 -left-1/4 h-[60vmax] w-[60vmax] rounded-full bg-[radial-gradient(circle_at_center,rgba(212,165,116,0.22),transparent_62%)]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-night via-night/70 to-forest/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-night/85 via-night/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 sm:pb-20 pt-24 sm:pt-32 w-full grid lg:grid-cols-[minmax(0,1fr)_380px] xl:grid-cols-[minmax(0,1fr)_420px] gap-10 items-end">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl min-w-0"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 backdrop-blur px-3.5 py-1.5 text-sm text-cream mb-5 sm:mb-6">
            <Compass className="h-4 w-4 text-amber" aria-hidden />
            Early-stage · Built in Canada
          </div>
          <h1 className="font-display text-[2rem] leading-[1.15] sm:text-5xl lg:text-6xl xl:text-[4rem] font-semibold text-cream tracking-tight">
            Your guide to navigating life in Canada.
          </h1>
          <p className="mt-4 sm:mt-5 font-display text-xl sm:text-3xl text-cream/90 leading-snug">
            Get organized for{" "}
            <RotatingWord
              words={needWords}
              srText="housing, your first job, a SIN, a health card, and more."
              className="text-amber italic"
            />
          </p>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-sky leading-relaxed max-w-2xl">
            Norra is an early-stage navigation and organization tool — checklists, guides, and next steps for visas,
            housing, work, arrival, and everyday life. Not immigration advice. Not a government service.
          </p>
          <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row flex-wrap gap-3">
            <Button href="#needs" size="lg" variant="cream" className="min-h-12 w-full sm:w-auto justify-center">
              What do you need help with?
            </Button>
            <Button href="/plan" size="lg" variant="amber" className="min-h-12 w-full sm:w-auto justify-center group">
              <Map className="h-4 w-4" aria-hidden />
              Build My Canada Plan
              <ArrowRight className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-1" aria-hidden />
            </Button>
          </div>

          <JourneyRouteHorizontal className="mt-8 max-w-md lg:hidden" />

          <p className="mt-6 sm:mt-8 text-xs text-sky/70 max-w-lg leading-relaxed">
            Norra is not incorporated as a licensed immigration consultancy, law firm, medical provider, financial
            institution, or government organization. Sample marketplace and listing content is labelled clearly.
          </p>
        </motion.div>

        <div className="hidden lg:block relative">
          <div className="rounded-3xl border border-white/10 bg-night/45 backdrop-blur-md p-6 xl:p-7 shadow-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-amber">Your Canada journey</p>
            <p className="mt-1 text-sm text-sky">Norra organizes each stage into next steps.</p>
            <JourneyRouteVertical className="mt-4" />
          </div>
        </div>
      </div>
      <a
        href="https://commons.wikimedia.org/wiki/File:Sunset_Toronto_Skyline_Panorama_Crop_from_Snake_Island.jpg"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-1.5 right-3 text-[10px] text-sky/50 hover:text-cream"
      >
        Toronto skyline · Jchmrt, CC BY-SA 4.0
      </a>
    </section>
  );
}
