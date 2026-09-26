"use client";

import { useState } from "react";
import { Check, ChevronRight } from "lucide-react";
import { Provider } from "@/lib/data/providers";
import { Button } from "./Button";
import { formatCad } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { DemoBanner } from "./DemoBanner";

const times = ["9:00 AM", "10:30 AM", "1:00 PM", "3:30 PM", "5:00 PM"];

export function BookingWizard({ provider }: { provider: Provider }) {
  const [step, setStep] = useState(0);
  const [service, setService] = useState(provider.services[0]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const price = provider.rateFrom;
  const steps = ["Service", "Schedule", "Details", "Payment", "Done"];

  if (confirmed) {
    return (
      <div className="rounded-2xl bg-white border border-night/5 p-8 text-center shadow-sm">
        <div className="mx-auto h-14 w-14 rounded-full bg-success/15 flex items-center justify-center mb-4">
          <Check className="h-7 w-7 text-success" />
        </div>
        <h2 className="font-display text-2xl font-semibold">Booking confirmed (demo)</h2>
        <p className="mt-3 text-muted max-w-md mx-auto">
          This is a demo confirmation — no payment was processed and no real appointment was created.
          Reference: NORRA-{provider.id.toUpperCase()}-DEMO
        </p>
        <div className="mt-6 rounded-xl bg-sand p-4 text-left text-sm space-y-1 max-w-sm mx-auto">
          <p>
            <strong>Provider:</strong> {provider.name}
          </p>
          <p>
            <strong>Service:</strong> {service}
          </p>
          <p>
            <strong>When:</strong> {date} · {time}
          </p>
          <p>
            <strong>Amount:</strong> {formatCad(price)} (demo)
          </p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/dashboard">View dashboard</Button>
          <Button href="/professionals" variant="outline">
            Browse more
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white border border-night/5 shadow-sm overflow-hidden">
      <div className="px-4 pt-4 sm:px-6 sm:pt-6">
        <DemoBanner emphasis>
          <strong>Demo booking only.</strong> No payment is processed and no real appointment is created. Example
          rates under $40 are illustrative.
        </DemoBanner>
      </div>
      <div className="flex border-b border-night/5 overflow-x-auto no-scrollbar mt-4">
        {steps.map((s, i) => (
          <div
            key={s}
            className={cn(
              "flex-1 min-w-[4.5rem] px-3 py-3 text-center text-xs font-medium",
              i === step ? "text-forest border-b-2 border-forest" : i < step ? "text-success" : "text-muted"
            )}
          >
            {s}
          </div>
        ))}
      </div>

      <div className="p-6 sm:p-8">
        {step === 0 && (
          <div className="space-y-3">
            <h2 className="font-display text-xl font-semibold mb-4">Choose a service</h2>
            {provider.services.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setService(s)}
                className={cn(
                  "w-full text-left rounded-xl border p-4 transition-all",
                  service === s ? "border-forest bg-sky/30" : "border-night/10 hover:border-forest/30"
                )}
              >
                <p className="font-medium">{s}</p>
                <p className="text-sm text-muted mt-1">
                  Example from {formatCad(price)}/{provider.rateUnit}
                </p>
              </button>
            ))}
          </div>
        )}

        {step === 1 && (
          <div className="space-y-4">
            <h2 className="font-display text-xl font-semibold">Pick date & time</h2>
            <p className="text-sm text-muted">Location: {provider.city}, {provider.province} (or virtual)</p>
            <label className="block">
              <span className="text-sm font-medium">Date</span>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-1 w-full rounded-xl border border-night/10 bg-cream px-4 py-2.5"
              />
            </label>
            <div className="flex flex-wrap gap-2">
              {times.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTime(t)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm border",
                    time === t ? "bg-forest text-cream border-forest" : "border-night/10 hover:border-forest"
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h2 className="font-display text-xl font-semibold">Your details</h2>
            <label className="block">
              <span className="text-sm font-medium">Full name</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-xl border border-night/10 bg-cream px-4 py-2.5"
                placeholder="Alex Rivera"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium">Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-xl border border-night/10 bg-cream px-4 py-2.5"
                placeholder="you@email.com"
              />
            </label>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h2 className="font-display text-xl font-semibold">Demo payment</h2>
            <p className="text-sm text-muted">
              No real charge. This is a placeholder to demonstrate the booking flow.
            </p>
            <div className="rounded-xl bg-sand p-4 space-y-2 text-sm">
              <p>
                <strong>{service}</strong> with {provider.name}
              </p>
              <p>
                {date} · {time}
              </p>
              <p className="font-display text-2xl text-forest pt-2">{formatCad(price)}</p>
            </div>
            <label className="block">
              <span className="text-sm font-medium">Card number (demo)</span>
              <input
                className="mt-1 w-full rounded-xl border border-night/10 bg-cream px-4 py-2.5"
                placeholder="4242 ···· ···· ····"
                defaultValue="4242 4242 4242 4242"
              />
            </label>
          </div>
        )}

        <div className="mt-8 flex justify-between gap-3">
          <Button
            variant="ghost"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
          >
            Back
          </Button>
          {step < 3 ? (
            <Button
              onClick={() => setStep((s) => s + 1)}
              disabled={
                (step === 1 && (!date || !time)) || (step === 2 && (!name || !email))
              }
            >
              Continue
              <ChevronRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={() => setConfirmed(true)} variant="amber">
              Confirm demo booking
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
