"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Link from "next/link";
import { Send, Sparkles } from "lucide-react";
import { Button } from "./Button";
import {
  loadPlanProfile,
  PlanProfile,
  stageOptions,
  goalOptions,
} from "@/lib/data/checklists";

type Msg = { role: "user" | "assistant"; text: string; links?: { label: string; href: string }[] };

const baseSuggestions = [
  "I'm arriving at Pearson next week",
  "Help me find housing in Toronto",
  "What do I need for a study permit?",
  "How do I get a SIN?",
  "Find a career coach",
  "Build my Canada Plan",
];

function uniqueLinks(links: { label: string; href: string }[]) {
  const seen = new Set<string>();
  return links.filter((l) => {
    if (seen.has(l.href)) return false;
    seen.add(l.href);
    return true;
  });
}

function profileContextLinks(profile: PlanProfile | null): { label: string; href: string }[] {
  if (!profile?.stage) {
    return [
      { label: "Build My Canada Plan", href: "/plan" },
      { label: "Knowledge Hub", href: "/resources" },
    ];
  }
  const links: { label: string; href: string }[] = [
    { label: "Open My Canada Plan", href: "/plan" },
  ];
  if (profile.stage === "planning" || profile.stage === "pre-arrival") {
    links.push({ label: "Prepare before landing", href: "/resources/prepare-before-landing" });
  }
  if (profile.stage === "just-arrived" || profile.stage === "settling") {
    links.push({ label: "First week guide", href: "/resources/first-week-in-canada" });
  }
  if (profile.goals.includes("housing")) {
    links.push({ label: "Temp accommodation guide", href: "/resources/temporary-accommodation" });
  }
  if (profile.goals.includes("work")) {
    links.push({ label: "Canadian resume", href: "/resources/canadian-resume" });
    links.push({ label: "First Canadian job", href: "/resources/first-canadian-job" });
    links.push({ label: "PGWP / post-grad work", href: "/resources/pgwp-post-graduation-work" });
  }
  if (profile.goals.includes("study")) {
    links.push({ label: "Students hub (guides)", href: "/students" });
    links.push({ label: "Finishing your program", href: "/resources/finishing-your-program" });
    links.push({ label: "PGWP orientation", href: "/resources/pgwp-post-graduation-work" });
  }
  if (profile.city && profile.city !== "Other / Not sure yet") {
    links.push({ label: "Compare cities", href: "/resources/compare-canadian-cities" });
  }
  links.push({ label: "Knowledge Hub", href: "/resources" });
  return uniqueLinks(links).slice(0, 5);
}

function greetingFor(profile: PlanProfile | null): Msg {
  if (!profile?.stage) {
    return {
      role: "assistant",
      text: "Hi, I'm Nora — a rule-based demo guide (not immigration or legal advice). I don't see a Canada Plan on this device yet. Build one so I can bias tips toward your stage and goals, or ask me about arrival, housing, jobs, or checklists.",
      links: [
        { label: "Build My Canada Plan", href: "/plan" },
        { label: "Knowledge Hub", href: "/resources" },
        { label: "Arrival services", href: "/arrival" },
      ],
    };
  }

  const stageLabel = stageOptions.find((s) => s.value === profile.stage)?.label || profile.stage;
  const goalLabels = profile.goals
    .map((g) => goalOptions.find((o) => o.value === g)?.label || g)
    .filter(Boolean);
  const goalsBit = goalLabels.length ? ` Goals: ${goalLabels.join(", ")}.` : "";
  const cityBit = profile.city ? ` City: ${profile.city}.` : "";

  return {
    role: "assistant",
    text: `Hi — I'm Nora (demo, rule-based). I see your Canada Plan on this device: ${stageLabel}.${cityBit}${goalsBit} I'll lean toward relevant guides and Plan CTAs. I never give immigration or legal advice — verify status questions on IRCC and with authorized professionals.`,
    links: profileContextLinks(profile),
  };
}

function suggestionsFor(profile: PlanProfile | null): string[] {
  if (!profile?.stage) return baseSuggestions;
  const out: string[] = [];
  if (profile.stage === "planning" || profile.stage === "pre-arrival") {
    out.push("What should I prepare before landing?");
  }
  if (profile.stage === "just-arrived" || profile.stage === "settling") {
    out.push("What should I do in my first week?");
    out.push("How do I get a SIN?");
  }
  if (profile.goals.includes("housing")) out.push("Help me find temporary housing");
  if (profile.goals.includes("work")) out.push("How do I write a Canadian resume?");
  if (profile.goals.includes("study")) {
    out.push("Where do I start as a student?");
    out.push("I'm finishing my program");
    out.push("What is a PGWP?");
  }
  out.push("Show my Canada Plan");
  out.push("Avoid newcomer scams");
  return [...new Set(out)].slice(0, 6);
}

function respond(input: string, profile: PlanProfile | null): Msg {
  const q = input.toLowerCase();
  const bias = profileContextLinks(profile);

  const withBias = (msg: Msg): Msg => ({
    ...msg,
    links: uniqueLinks([...(msg.links || []), ...bias]).slice(0, 5),
  });

  if (/finish(?:ing)?(?:\s+(?:your|my|the))?\s+program|program\s*end|nearing\s+(?:the\s+)?end|graduat(?:e|ing|ion)\b|end of (?:my |the )?program/.test(q)) {
    return withBias({
      role: "assistant",
      text: "I can point you to Norra's finishing-your-program checklist (school confirmation → IRCC get-documents → PGWP research → Plan Study/Work). Nora does not assess eligibility, invent school document names, or quote processing times — verify on IRCC and with your school.",
      links: [
        { label: "Finishing your program checklist", href: "/resources/finishing-your-program" },
        { label: "PGWP orientation", href: "/resources/pgwp-post-graduation-work" },
        { label: "Students hub", href: "/students" },
        { label: "My Canada Plan (Study)", href: "/plan/?goal=study" },
        { label: "My Canada Plan (Work)", href: "/plan/?goal=work" },
      ],
    });
  }
  if (/\bpgwp\b|post[- ]?grad(?:uation)?(?:\s+work)?|work after graduat|after[- ]graduation/.test(q)) {
    return withBias({
      role: "assistant",
      text: "I can point you to Norra's PGWP / post-graduation work orientation and IRCC pages to verify yourself. Nora does not assess eligibility, invent validity lengths, hour limits, or processing times, and is not immigration advice.",
      links: [
        { label: "PGWP orientation guide", href: "/resources/pgwp-post-graduation-work" },
        { label: "Finishing your program", href: "/resources/finishing-your-program" },
        { label: "Students hub", href: "/students" },
        { label: "Immigration overview", href: "/immigration" },
        { label: "My Canada Plan (Work)", href: "/plan/?goal=work" },
      ],
    });
  }
  if (/visa|permit|immigration|express entry|pr\b|citizenship|study permit|work permit/.test(q)) {
    return withBias({
      role: "assistant",
      text: "I can point you to immigration overviews and checklists. Important: Nora is not a lawyer or RCIC and does not give immigration advice. For eligibility, filings, or legal questions, use IRCC and independently verify authorized professionals. Sample marketplace profiles on Norra are fictional.",
      links: [
        { label: "Immigration guides", href: "/immigration" },
        { label: "PGWP orientation", href: "/resources/pgwp-post-graduation-work" },
        { label: "Prepare before landing", href: "/resources/prepare-before-landing" },
        { label: "Document organizer", href: "/documents" },
      ],
    });
  }
  if (/housing|rent|apartment|lease|room|accommodation|airbnb/.test(q)) {
    return withBias({
      role: "assistant",
      text: "Start with scam-aware temporary lodging habits, then longer-term housing. Sample listings on Norra are fictional — never wire deposits to strangers. Add housing to My Canada Plan so it stays on your checklist.",
      links: [
        { label: "Temp accommodation guide", href: "/resources/temporary-accommodation" },
        { label: "Browse housing (sample)", href: "/housing" },
        { label: "Avoid scams", href: "/resources/avoid-newcomer-scams" },
        { label: "My Canada Plan", href: "/plan" },
      ],
    });
  }
  if (/job|career|resume|linkedin|interview|work/.test(q)) {
    return withBias({
      role: "assistant",
      text: "Use the resume and first-job guides for orientation. Job cards on Norra are labelled Demo — fictional employers. For coaching, sample marketplace profiles are not real bookings.",
      links: [
        { label: "Canadian resume guide", href: "/resources/canadian-resume" },
        { label: "First Canadian job", href: "/resources/first-canadian-job" },
        { label: "Browse jobs (sample)", href: "/jobs" },
        { label: "My Canada Plan", href: "/plan" },
      ],
    });
  }
  if (/airport|arriv|pickup|pearson|yyz|landing|first week/.test(q)) {
    return withBias({
      role: "assistant",
      text: "Arrival week is about reducing friction: pickup, SIM, temp stay, banking, and essentials. Tick those in My Canada Plan — organization only, not advice on your legal status.",
      links: [
        { label: "First week guide", href: "/resources/first-week-in-canada" },
        { label: "Prepare before landing", href: "/resources/prepare-before-landing" },
        { label: "Arrival services", href: "/arrival" },
        { label: "My Canada Plan", href: "/plan" },
      ],
    });
  }
  if (/sin|tax|cra|ei\b|benefit|ohip|health card|government/.test(q)) {
    return withBias({
      role: "assistant",
      text: "I can point to high-level government navigation, our SIN checklist, and CRA taxes orientation. For official rules, amounts, and applications, use Canada.ca / CRA — Nora does not invent brackets or refunds.",
      links: [
        { label: "Get a SIN checklist", href: "/resources/get-sin-canada" },
        { label: "Provincial health-card guide", href: "/resources/get-health-card-canada" },
        { label: "First week guide", href: "/resources/first-week-in-canada" },
        { label: "Taxes orientation (CRA)", href: "/resources/newcomer-taxes-canada" },
        { label: "Government guides", href: "/government" },
        { label: "My Canada Plan", href: "/plan" },
      ],
    });
  }
  if (/health|doctor|clinic|medical/.test(q)) {
    return withBias({
      role: "assistant",
      text: "Norra is not a medical provider. I can share orientation links about provincial health registration — verify eligibility on official provincial sites. For emergencies, call 911.",
      links: [
        { label: "Provincial health-card guide", href: "/resources/get-health-card-canada" },
        { label: "Healthcare navigation", href: "/services/healthcare" },
        { label: "First week guide", href: "/resources/first-week-in-canada" },
        { label: "My Canada Plan", href: "/plan" },
      ],
    });
  }
  if (/bank|finance|money|credit/.test(q)) {
    return withBias({
      role: "assistant",
      text: "General banking orientation only — not financial advice. Compare banks yourself and speak with a licensed advisor when you need personalized help.",
      links: [
        { label: "Open a bank account guide", href: "/resources/open-bank-account-newcomer" },
        { label: "Banking basics", href: "/services/banking-finance" },
        { label: "Get a SIN checklist", href: "/resources/get-sin-canada" },
        { label: "My Canada Plan", href: "/plan" },
      ],
    });
  }
  if (/scam|fraud|safe|safety/.test(q)) {
    return withBias({
      role: "assistant",
      text: "Scam awareness matters for housing, jobs, and immigration offers. Read the guide, and remember Norra’s marketplace cards are sample/demo — not verified real providers.",
      links: [
        { label: "Avoid newcomer scams", href: "/resources/avoid-newcomer-scams" },
        { label: "Safety centre", href: "/safety" },
        { label: "My Canada Plan", href: "/plan" },
      ],
    });
  }
  if (/plan|checklist|started|journey|my canada/.test(q)) {
    return {
      role: "assistant",
      text: profile?.stage
        ? "Your Canada Plan is saved in this browser. Open it to tick stage-aware items or edit your profile. Still not immigration advice — just organization."
        : "My Canada Plan builds a personalized checklist from your status, city, and goals. Progress stays on this device until accounts exist.",
      links: [
        { label: profile?.stage ? "Open My Canada Plan" : "Build My Canada Plan", href: "/plan" },
        { label: "Knowledge Hub", href: "/resources" },
        { label: "Before you arrive", href: "/before-you-arrive" },
      ],
    };
  }
  if (/professional|lawyer|consultant|book|coach/.test(q)) {
    return withBias({
      role: "assistant",
      text: "Browse the sample marketplace layout — immigration, career, settlement, tax, transfers, and more. Verification badges are demo labels. Hire authorized pros independently; Nora does not vouch for them.",
      links: [
        { label: "Find professionals (sample)", href: "/professionals" },
        { label: "How verification works", href: "/professionals#verification" },
      ],
    });
  }
  if (/city|toronto|vancouver|calgary|montreal|ottawa/.test(q)) {
    return withBias({
      role: "assistant",
      text: "City pages and the compare guide help you weigh cost, climate, jobs, and fit. Set a city in My Canada Plan so recommendations can lean that way.",
      links: [
        { label: "Compare cities guide", href: "/resources/compare-canadian-cities" },
        { label: "City guides", href: "/cities" },
        { label: "My Canada Plan", href: "/plan" },
      ],
    });
  }

  return withBias({
    role: "assistant",
    text: profile?.stage
      ? "I'm Nora — rule-based demo only. Ask about arrival, housing, jobs, government steps, or scams, and I'll route you to guides plus your Plan. I don't invent eligibility or policies."
      : "I'm Nora — rule-based demo only. Build My Canada Plan so I can personalize routing, or ask about arrival, housing, jobs, or checklists. I don't invent eligibility or policies.",
    links: profile?.stage
      ? [
          { label: "Open My Canada Plan", href: "/plan" },
          { label: "Knowledge Hub", href: "/resources" },
          { label: "Ask about arrival", href: "/arrival" },
        ]
      : [
          { label: "Build My Canada Plan", href: "/plan" },
          { label: "Knowledge Hub", href: "/resources" },
          { label: "Ask about arrival", href: "/arrival" },
        ],
  });
}

export function ChatAssistant() {
  const [profile, setProfile] = useState<PlanProfile | null>(null);
  const [ready, setReady] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const p = loadPlanProfile();
    const has = Boolean(p?.stage);
    setProfile(has ? p : null);
    setMessages([greetingFor(has ? p : null)]);
    setReady(true);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const suggestions = useMemo(() => suggestionsFor(profile), [profile]);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((m) => [...m, { role: "user", text: trimmed }, respond(trimmed, profile)]);
    setInput("");
  }

  if (!ready) {
    return (
      <div className="flex flex-col h-[min(70vh,640px)] rounded-2xl border border-night/10 bg-white shadow-lg overflow-hidden items-center justify-center text-sm text-muted">
        Loading Nora…
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[min(70vh,640px)] rounded-2xl border border-night/10 bg-white shadow-lg overflow-hidden">
      <div className="flex items-center gap-3 px-5 py-4 border-b border-night/5 bg-forest text-cream">
        <div className="h-9 w-9 rounded-full bg-amber/20 flex items-center justify-center">
          <Sparkles className="h-5 w-5 text-amber" />
        </div>
        <div>
          <p className="font-semibold">Nora</p>
          <p className="text-xs text-sky">
            {profile?.stage
              ? `Demo · using your Canada Plan${profile.city ? ` · ${profile.city}` : ""}`
              : "Your Canadian journey guide · Demo (rule-based)"}
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-cream/50">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                m.role === "user"
                  ? "bg-forest text-cream rounded-br-md"
                  : "bg-white border border-night/5 text-ink rounded-bl-md shadow-sm"
              }`}
            >
              <p>{m.text}</p>
              {m.links && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {m.links.map((l) => (
                    <Link
                      key={l.href + l.label}
                      href={l.href}
                      className="inline-flex rounded-full bg-sand px-3 py-1 text-xs font-medium text-forest hover:bg-forest hover:text-cream transition-colors"
                    >
                      {l.label} →
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="px-4 pt-2 pb-1 flex flex-wrap gap-1.5 border-t border-night/5 bg-white">
        {suggestions.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => send(s)}
            className="text-xs rounded-full border border-night/10 px-2.5 py-1 text-muted hover:border-forest hover:text-forest transition-colors"
          >
            {s}
          </button>
        ))}
      </div>

      <form
        className="p-4 flex gap-2 bg-white"
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Nora anything about your journey…"
          className="flex-1 rounded-full border border-night/10 bg-cream px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-forest/30"
        />
        <Button type="submit" size="md" className="!px-4">
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}
