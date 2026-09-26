"use client";

import { useState, FormEvent } from "react";
import { Mail, Phone, Link2, MapPin } from "lucide-react";
import { founder } from "@/lib/data/founder";
import { Button } from "./Button";

/**
 * Frontend-only contact form. Ready to wire to an email API later
 * (e.g. Resend, SendGrid). Does not send mail yet.
 */
export function ContactFounder() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    // Placeholder: integrate email service here (POST /api/contact).
    setStatus("submitted");
  }

  const linkedInReady = Boolean(founder.linkedInUrl);

  return (
    <div id="founder-contact" className="scroll-mt-24 space-y-10">
      <div className="rounded-3xl bg-forest text-cream p-6 sm:p-8 lg:p-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-amber">Contact the Founder</p>
        <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold">
          {founder.name}
        </h2>
        <p className="mt-1 text-sky text-sm">{founder.title} · {founder.location}</p>

        <dl className="mt-8 grid sm:grid-cols-2 gap-4 text-sm">
          <div className="rounded-2xl bg-cream/10 border border-cream/15 p-4">
            <dt className="flex items-center gap-2 text-sky text-xs uppercase tracking-wide">
              <Mail className="h-3.5 w-3.5" /> Email
            </dt>
            <dd className="mt-2 font-medium break-all">{founder.email}</dd>
          </div>
          <div className="rounded-2xl bg-cream/10 border border-cream/15 p-4">
            <dt className="flex items-center gap-2 text-sky text-xs uppercase tracking-wide">
              <Phone className="h-3.5 w-3.5" /> Phone
            </dt>
            <dd className="mt-2 font-medium">{founder.phone}</dd>
          </div>
          <div className="rounded-2xl bg-cream/10 border border-cream/15 p-4 sm:col-span-2">
            <dt className="flex items-center gap-2 text-sky text-xs uppercase tracking-wide">
              <MapPin className="h-3.5 w-3.5" /> Location
            </dt>
            <dd className="mt-2 font-medium">{founder.location}</dd>
          </div>
        </dl>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`mailto:${founder.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-amber text-night px-5 py-2.5 text-sm font-medium hover:bg-amber-dark transition-colors"
          >
            <Mail className="h-4 w-4" />
            Email
          </a>
          <a
            href={`tel:${founder.phoneTel}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-cream text-forest px-5 py-2.5 text-sm font-medium hover:bg-white transition-colors"
          >
            <Phone className="h-4 w-4" />
            Call
          </a>
          {linkedInReady ? (
            <a
              href={founder.linkedInUrl!}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 text-cream px-5 py-2.5 text-sm font-medium hover:bg-cream/10 transition-colors"
            >
              <Link2 className="h-4 w-4" />
              LinkedIn
            </a>
          ) : (
            <button
              type="button"
              disabled
              title="Add your LinkedIn URL in lib/data/founder.ts (linkedInUrl)"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/20 text-cream/50 px-5 py-2.5 text-sm font-medium cursor-not-allowed"
            >
              <Link2 className="h-4 w-4" />
              LinkedIn (coming soon)
            </button>
          )}
        </div>
      </div>

      {status === "submitted" ? (
        <div className="rounded-2xl bg-sand p-8 text-center border border-night/5">
          <p className="font-semibold text-forest">Thanks — your message is ready on this page.</p>
          <p className="mt-2 text-sm text-muted leading-relaxed max-w-md mx-auto">
            This demo does not send email yet. When an email service is connected, messages will go to{" "}
            {founder.email}. For now, please use Email or Call above.
          </p>
          <Button className="mt-6" variant="outline" onClick={() => setStatus("idle")}>
            Write another message
          </Button>
        </div>
      ) : (
        <form
          onSubmit={onSubmit}
          className="rounded-2xl bg-white border border-night/5 p-6 sm:p-8 shadow-sm space-y-4"
          noValidate={false}
        >
          <p className="text-sm text-muted">
            Send a message to the Founder. Form UI only for now — wire to your email API when ready.
          </p>
          <label className="block text-sm">
            <span className="font-medium text-ink">Full Name</span>
            <input
              required
              name="fullName"
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              className="mt-1 w-full rounded-xl border border-night/10 bg-cream px-4 py-2.5"
              autoComplete="name"
            />
          </label>
          <label className="block text-sm">
            <span className="font-medium text-ink">Email</span>
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-1 w-full rounded-xl border border-night/10 bg-cream px-4 py-2.5"
              autoComplete="email"
            />
          </label>
          <label className="block text-sm">
            <span className="font-medium text-ink">Subject</span>
            <input
              required
              name="subject"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="mt-1 w-full rounded-xl border border-night/10 bg-cream px-4 py-2.5"
            />
          </label>
          <label className="block text-sm">
            <span className="font-medium text-ink">Message</span>
            <textarea
              required
              name="message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-1 w-full rounded-xl border border-night/10 bg-cream px-4 py-2.5"
            />
          </label>
          <Button type="submit" className="w-full sm:w-auto" size="lg">
            Send Message
          </Button>
        </form>
      )}
    </div>
  );
}
