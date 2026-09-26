"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Send, Sparkles } from "lucide-react";
import { Button } from "./Button";

type Msg = { role: "user" | "assistant"; text: string; links?: { label: string; href: string }[] };

const suggestions = [
  "I'm arriving at Pearson next week",
  "Help me find housing in Toronto",
  "What do I need for a study permit?",
  "How do I get a SIN?",
  "Find a career coach",
  "Build my Canada Plan",
];

function respond(input: string): Msg {
  const q = input.toLowerCase();

  if (/visa|permit|immigration|pgwp|express entry|pr\b|citizenship|study permit|work permit/.test(q)) {
    return {
      role: "assistant",
      text: "I can help you explore immigration topics with checklists and overviews. Important: Norra is not a law firm or immigration consultancy. For eligibility, filings, or legal advice, connect with an authorized RCIC or immigration lawyer (independently — sample marketplace profiles are fictional). I won't invent policies or guarantee outcomes.",
      links: [
        { label: "Immigration guides", href: "/immigration" },
        { label: "Authorized professionals", href: "/professionals" },
        { label: "Document organizer", href: "/documents" },
      ],
    };
  }
  if (/housing|rent|apartment|lease|room/.test(q)) {
    return {
      role: "assistant",
      text: "I can show you demo housing listings and anti-scam tips. Always verify landlords carefully — never wire deposits to strangers. Sample housing on Norra is fictional.",
      links: [
        { label: "Browse housing", href: "/housing" },
        { label: "Safety tips", href: "/safety" },
        { label: "Arrival temp stay", href: "/arrival" },
      ],
    };
  }
  if (/job|career|resume|linkedin|interview|work/.test(q)) {
    return {
      role: "assistant",
      text: "Explore demo job listings and book career coaches for resume or interview help. Listings are labelled Demo — fictional employers, not verified companies.",
      links: [
        { label: "Browse jobs", href: "/jobs" },
        { label: "Career coaches", href: "/professionals" },
      ],
    };
  }
  if (/airport|arriv|pickup|pearson|yyz|landing/.test(q)) {
    return {
      role: "assistant",
      text: "Let's get your arrival sorted — pickup, SIM, temp housing, and first-week essentials. You can start a demo booking from the Arrival page.",
      links: [
        { label: "Arrival services", href: "/arrival" },
        { label: "Before you arrive checklist", href: "/before-you-arrive" },
      ],
    };
  }
  if (/sin|tax|cra|ei\b|benefit|ohip|health card|government/.test(q)) {
    return {
      role: "assistant",
      text: "I can point you to high-level guides on SIN, taxes, benefits, and healthcare registration. For official rules and applications, always use Canada.ca or your provincial site. For tax filings, consider a licensed professional.",
      links: [
        { label: "Government guides", href: "/government" },
        { label: "Tax professionals", href: "/professionals" },
      ],
    };
  }
  if (/health|doctor|clinic|medical/.test(q)) {
    return {
      role: "assistant",
      text: "Norra is not a medical provider. I can help you understand provincial health registration steps and when to seek licensed care. For emergencies, call 911.",
      links: [
        { label: "Healthcare navigation", href: "/services/healthcare" },
        { label: "Government / health cards", href: "/government" },
      ],
    };
  }
  if (/bank|finance|money|credit/.test(q)) {
    return {
      role: "assistant",
      text: "I can share general tips on opening a Canadian bank account. This is not financial advice — for personalized guidance, speak with a licensed advisor or your bank.",
      links: [
        { label: "Banking basics", href: "/services/banking-finance" },
        { label: "Find advisors", href: "/professionals" },
      ],
    };
  }
  if (/plan|checklist|started|journey/.test(q)) {
    return {
      role: "assistant",
      text: "My Canada Plan builds a personalized checklist from your status, city, and goals. Takes a few minutes.",
      links: [
        { label: "Build my plan", href: "/plan" },
        { label: "Before you arrive", href: "/before-you-arrive" },
      ],
    };
  }
  if (/professional|lawyer|consultant|book|coach/.test(q)) {
    return {
      role: "assistant",
      text: "Browse our marketplace of demo providers — immigration, career, settlement, tax, airport transfers, and more. Verification badges are demo labels in this prototype.",
      links: [
        { label: "Find professionals", href: "/professionals" },
        { label: "How verification works", href: "/professionals#verification" },
      ],
    };
  }
  if (/city|toronto|vancouver|calgary|montreal|ottawa/.test(q)) {
    return {
      role: "assistant",
      text: "Explore city guides for housing, jobs, transit, and settlement notes. Norra isn't limited to the featured cities — they're starting points.",
      links: [{ label: "City guides", href: "/cities" }],
    };
  }

  return {
    role: "assistant",
    text: "I'm Nora, your in-product guide. I can help you find services, checklists, city guides, and professionals. For immigration, legal, health, or finance topics, I'll tell you when you need a licensed professional — I don't invent eligibility or policies.",
    links: [
      { label: "Explore services", href: "/services" },
      { label: "My Canada Plan", href: "/plan" },
      { label: "Ask about arrival", href: "/arrival" },
    ],
  };
}

export function ChatAssistant() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      text: "Hi, I'm Nora — your guide to navigating life in Canada. Ask me about arrival, housing, jobs, immigration overviews, or building your plan. I'll keep you pointed toward the right tools (and licensed pros when needed).",
    },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((m) => [...m, { role: "user", text: trimmed }, respond(trimmed)]);
    setInput("");
  }

  return (
    <div className="flex flex-col h-[min(70vh,640px)] rounded-2xl border border-night/10 bg-white shadow-lg overflow-hidden">
      <div className="flex items-center gap-3 px-5 py-4 border-b border-night/5 bg-forest text-cream">
        <div className="h-9 w-9 rounded-full bg-amber/20 flex items-center justify-center">
          <Sparkles className="h-5 w-5 text-amber" />
        </div>
        <div>
          <p className="font-semibold">Nora</p>
          <p className="text-xs text-sky">Your Canadian journey guide · Demo AI</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-cream/50">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                m.role === "user" ? "bg-forest text-cream rounded-br-md" : "bg-white border border-night/5 text-ink rounded-bl-md shadow-sm"
              }`}
            >
              <p>{m.text}</p>
              {m.links && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {m.links.map((l) => (
                    <Link
                      key={l.href}
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
