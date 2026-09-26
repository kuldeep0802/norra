import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { DemoBanner } from "@/components/DemoBanner";
import { properties } from "@/lib/data/properties";
import { jobs } from "@/lib/data/jobs";
import {
  Calendar,
  FileText,
  Bell,
  User,
  Map,
  Bookmark,
  MessageSquare,
  Settings,
} from "lucide-react";

export const metadata = { title: "Dashboard" };

const bookings = [
  { id: "b1", title: "Airport pickup with Emily Fraser", when: "Oct 12, 2026 · 2:30 PM", status: "Demo confirmed" },
  { id: "b2", title: "Career coaching — Marcus Chen", when: "Oct 18, 2026 · 10:30 AM", status: "Demo upcoming" },
];

const notifications = [
  { text: "Complete your Before You Arrive checklist — 60% done.", time: "2h ago" },
  { text: "New demo housing matches in Mississauga.", time: "1d ago" },
  { text: "Reminder: SIN orientation article in Government guides.", time: "3d ago" },
];

export default function DashboardPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Account · Sample"
          title="Sample dashboard (Alex)"
          description="Demo UI with sample plan progress, bookings, and saved items — not a real user account."
        />
        <DemoBanner emphasis className="mt-8">
          This dashboard is sample content for layout only. Bookings shown are fictional.
        </DemoBanner>

        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl bg-forest text-cream p-6 sm:p-8">
              <div className="flex items-center gap-2 text-amber text-sm font-semibold mb-2">
                <Map className="h-4 w-4" /> My Canada Plan
              </div>
              <h2 className="font-display text-2xl font-semibold">Toronto · Study permit track</h2>
              <p className="mt-2 text-sky text-sm">8 of 13 checklist items complete</p>
              <div className="mt-4 h-2 rounded-full bg-white/20 overflow-hidden">
                <div className="h-full bg-amber w-[62%]" />
              </div>
              <Button href="/plan" variant="amber" size="sm" className="mt-6">
                Continue plan
              </Button>
            </div>

            <div className="rounded-2xl bg-white border border-night/5 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-lg flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-forest" /> Bookings
                </h2>
                <Link href="/professionals" className="text-sm text-forest font-medium">
                  Book more
                </Link>
              </div>
              <ul className="space-y-3">
                {bookings.map((b) => (
                  <li key={b.id} className="flex items-start justify-between gap-4 rounded-xl bg-sand p-4">
                    <div>
                      <p className="font-medium">{b.title}</p>
                      <p className="text-sm text-muted mt-0.5">{b.when}</p>
                    </div>
                    <Badge variant="demo">{b.status}</Badge>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white border border-night/5 p-6">
                <h2 className="font-semibold flex items-center gap-2 mb-4">
                  <Bookmark className="h-5 w-5 text-forest" /> Saved housing
                </h2>
                <ul className="space-y-2 text-sm">
                  {properties.slice(0, 2).map((p) => (
                    <li key={p.id}>
                      <Link href="/housing" className="hover:text-forest">
                        {p.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-white border border-night/5 p-6">
                <h2 className="font-semibold flex items-center gap-2 mb-4">
                  <Bookmark className="h-5 w-5 text-forest" /> Saved jobs
                </h2>
                <ul className="space-y-2 text-sm">
                  {jobs.slice(0, 2).map((j) => (
                    <li key={j.id}>
                      <Link href="/jobs" className="hover:text-forest">
                        {j.title}
                      </Link>
                      <Badge variant="demo" className="ml-2">
                        Demo
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6" id="account">
            <div className="rounded-2xl bg-white border border-night/5 p-6">
              <h2 className="font-semibold flex items-center gap-2 mb-4">
                <Bell className="h-5 w-5 text-forest" /> Notifications
              </h2>
              <ul className="space-y-3">
                {notifications.map((n, i) => (
                  <li key={i} className="text-sm border-b border-night/5 pb-3 last:border-0">
                    <p>{n.text}</p>
                    <p className="text-xs text-muted mt-1">{n.time}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-white border border-night/5 p-6 space-y-3">
              <Link href="/documents" className="flex items-center gap-3 text-sm font-medium hover:text-forest">
                <FileText className="h-5 w-5" /> Documents
              </Link>
              <Link href="/assistant" className="flex items-center gap-3 text-sm font-medium hover:text-forest">
                <MessageSquare className="h-5 w-5" /> Messages / Nora
              </Link>
              <Link href="/dashboard" className="flex items-center gap-3 text-sm font-medium hover:text-forest">
                <User className="h-5 w-5" /> Profile (demo)
              </Link>
              <Link href="/privacy" className="flex items-center gap-3 text-sm font-medium hover:text-forest">
                <Settings className="h-5 w-5" /> Settings & privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
