"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Disclaimer } from "@/components/Disclaimer";
import { providers } from "@/lib/data/providers";
import { ProviderCard } from "@/components/ProviderCard";
import { PlanChecklist } from "@/components/PlanChecklist";
import { arrivalItems } from "@/lib/data/checklists";

const airports = ["YYZ Toronto Pearson", "YVR Vancouver", "YUL Montréal-Trudeau", "YYC Calgary", "YOW Ottawa", "YHZ Halifax", "Other"];

export default function ArrivalPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    airport: "",
    date: "",
    city: "",
    passengers: "1",
    luggage: "2",
    service: "Airport pickup",
  });

  const arrivalProviders = providers.filter((p) =>
    ["Airport & transfer services", "Settlement workers", "Housing move-in help"].includes(p.category)
  );

  return (
    <div>
      <section className="relative py-20 bg-night text-cream overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80"
          alt="Arriving by air"
          fill
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-night via-night/80 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            light
            eyebrow="Arriving in Canada"
            title="Land with a plan, not a scramble"
            description="Airport pickup, temp housing, SIM, shopping, transport, banking orientation, and SIN guidance."
          />
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <Disclaimer className="mb-10">
          Booking below is a demo flow with sample providers. No real transfers are reserved.
        </Disclaimer>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-2xl font-semibold mb-6">Request arrival help</h2>
            {!submitted ? (
              <form
                className="space-y-4 rounded-2xl bg-white border border-night/5 p-6 shadow-sm"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                {(
                  [
                    ["airport", "Airport", "select", airports],
                    ["date", "Arrival date", "date"],
                    ["city", "Destination city", "text"],
                    ["passengers", "Passengers", "number"],
                    ["luggage", "Luggage pieces", "number"],
                    ["service", "Service type", "select", ["Airport pickup", "Pickup + temp housing", "Full first-week package"]],
                  ] as const
                ).map((field) => (
                  <label key={field[0]} className="block text-sm">
                    <span className="font-medium">{field[1]}</span>
                    {field[2] === "select" ? (
                      <select
                        required
                        value={form[field[0] as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field[0]]: e.target.value })}
                        className="mt-1 w-full rounded-xl border border-night/10 bg-cream px-4 py-2.5"
                      >
                        <option value="">Select…</option>
                        {(field[3] as string[]).map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        required={field[0] !== "city"}
                        type={field[2]}
                        value={form[field[0] as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field[0]]: e.target.value })}
                        className="mt-1 w-full rounded-xl border border-night/10 bg-cream px-4 py-2.5"
                      />
                    )}
                  </label>
                ))}
                <Button type="submit" className="w-full" size="lg">
                  Show demo providers
                </Button>
              </form>
            ) : (
              <div className="rounded-2xl bg-sand p-6 space-y-3">
                <h3 className="font-semibold text-forest">Demo request captured</h3>
                <p className="text-sm text-muted">
                  {form.service} · {form.airport} · {form.date} · {form.passengers} passenger(s) · {form.luggage} bags
                  {form.city ? ` · to ${form.city}` : ""}
                </p>
                <p className="text-sm">Matching sample providers below. Book any to try the confirmation flow.</p>
                <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
                  Edit request
                </Button>
              </div>
            )}
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold mb-6">First-week checklist</h2>
            <PlanChecklist items={arrivalItems} storageKey="norra-arrival" />
          </div>
        </div>

        {(submitted || true) && (
          <div className="mt-16">
            <h2 className="font-display text-2xl font-semibold mb-6">Demo arrival providers</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {arrivalProviders.map((p) => (
                <ProviderCard key={p.id} provider={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
