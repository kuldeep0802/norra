export type GuideSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  callout?: { kind: "verify" | "tip" | "warning"; text: string };
};

export type Guide = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  summary: string;
  /** Topic chips used by Knowledge Hub search */
  topics: string[];
  readingMinutes: number;
  updatedLabel: string;
  /** ISO date for Article JSON-LD (accurate to publish cycle) */
  datePublished: string;
  dateModified: string;
  relatedHrefs: { label: string; href: string }[];
  sections: GuideSection[];
};

export const guides: Guide[] = [
  {
    slug: "prepare-before-landing",
    title: "How to prepare before landing in Canada",
    metaTitle: "Prepare Before Landing in Canada",
    metaDescription:
      "A practical pre-arrival checklist for newcomers: documents, temporary housing, SIM, banking, and packing — with links to official IRCC sources.",
    eyebrow: "Pre-arrival",
    summary:
      "Use the weeks before your flight to organize documents, book short-stay lodging, and map your first 48 hours — without treating Norra as immigration advice.",
    topics: ["pre-arrival", "documents", "packing", "IRCC", "checklist", "flight"],
    readingMinutes: 9,
    updatedLabel: "Sep 2026",
    datePublished: "2026-09-26",
    dateModified: "2026-09-26",
    relatedHrefs: [
      { label: "My Canada Plan", href: "/plan" },
      { label: "Before you arrive checklist", href: "/before-you-arrive" },
      { label: "First week guide", href: "/resources/first-week-in-canada" },
      { label: "Temporary accommodation", href: "/resources/temporary-accommodation" },
    ],
    sections: [
      {
        heading: "What “prepared” actually means",
        paragraphs: [
          "Being ready to land is less about packing every outfit and more about reducing friction in the first 48 hours: you can prove who you are, you know where you are sleeping, you can get online, and you know how you will get from the airport to that address.",
          "Norra organizes next steps. It does not decide your eligibility, file applications, or replace IRCC instructions for your specific stream.",
        ],
        callout: {
          kind: "verify",
          text: "Always confirm visa, permit, eTA, and entry requirements on Immigration, Refugees and Citizenship Canada (IRCC) for your situation: canada.ca/en/immigration-refugees-citizenship.html",
        },
      },
      {
        heading: "Documents to keep reachable (not buried in checked bags)",
        paragraphs: [
          "Carry originals and clear digital copies of the items that border officers or airline staff may ask about. Exact requirements depend on your status — use IRCC’s checklist for your pathway, then add personal backups.",
        ],
        bullets: [
          "Passport(s) with enough validity and blank pages",
          "Visa / study or work permit approval / eTA confirmation (print + phone)",
          "Letter of acceptance, job offer, or invitation letter if that applies to you",
          "Proof-of-funds documents if your stream expects them — verify what IRCC lists for you",
          "Hotel or short-stay booking confirmation with address and check-in instructions",
          "Emergency contacts, including your country’s embassy or consulate in Canada",
        ],
      },
      {
        heading: "Book temporary lodging before you fly",
        paragraphs: [
          "Aim for a cancellable short stay near transit for your first 7–14 days. That buffer lets you view longer-term places in person instead of wiring deposits from abroad.",
          "Read our temporary accommodation guide for scam-aware habits. Prefer platforms with clear cancellation policies and written confirmations.",
        ],
        callout: {
          kind: "tip",
          text: "Save the lodging address offline. Airport Wi‑Fi can be slow, and some eSIMs activate only after you arrive.",
        },
      },
      {
        heading: "Money, connectivity, and pickup",
        bullets: [
          "Notify your current bank of travel dates; bring a debit/credit card that works internationally",
          "Carry a modest amount of CAD cash for transit or small purchases",
          "Research SIM / eSIM options ahead of time so you are not stuck without maps",
          "Decide airport pickup vs public transit vs rideshare — and share the plan with someone you trust",
          "If someone is picking you up, agree on a meeting point and backup phone number",
        ],
      },
      {
        heading: "Health and everyday logistics",
        paragraphs: [
          "Provincial health coverage often has waiting periods or eligibility rules. Many newcomers buy private travel medical insurance for the gap — compare policies yourself and verify coverage dates.",
          "Pack for the climate of your arrival city (winter gear matters). Put medications in carry-on with prescriptions if you have them.",
        ],
        callout: {
          kind: "verify",
          text: "Government overview of health care for newcomers: canada.ca/en/immigration-refugees-citizenship/services/settle-canada/health-care.html — then check your province’s site.",
        },
      },
      {
        heading: "Turn this into a living plan",
        paragraphs: [
          "Open My Canada Plan, choose “Approved / preparing to travel,” pick your city, and tick items as you finish them. Progress stays in this browser until accounts exist.",
        ],
      },
    ],
  },
  {
    slug: "first-week-in-canada",
    title: "How to prepare for your first week in Canada",
    metaTitle: "First Week in Canada — Newcomer Checklist",
    metaDescription:
      "A calm first-week plan for newcomers: airport, SIM, temporary housing, banking, SIN, and provincial health — with official source links.",
    eyebrow: "Arrival",
    summary:
      "Your first week is about stability: sleep, phone service, a bank account when ready, and starting SIN and health coverage processes that apply to you.",
    topics: ["arrival", "first week", "SIN", "banking", "SIM", "transit", "health"],
    readingMinutes: 10,
    updatedLabel: "Sep 2026",
    datePublished: "2026-09-26",
    dateModified: "2026-09-26",
    relatedHrefs: [
      { label: "My Canada Plan", href: "/plan" },
      { label: "Arrival services", href: "/arrival" },
      { label: "Government guides", href: "/government" },
      { label: "Avoid scams", href: "/resources/avoid-newcomer-scams" },
    ],
    sections: [
      {
        heading: "Day 0–1: land, clear, and get to bed",
        bullets: [
          "Have passport and status documents ready before the immigration hall",
          "Follow your pre-planned pickup or transit route to temporary lodging",
          "Activate SIM / eSIM and test maps + messaging",
          "Buy water, simple food, and toiletries if your place is not stocked",
          "Message someone you trust that you arrived safely",
        ],
        callout: {
          kind: "warning",
          text: "Do not hand your passport to strangers offering “help” in arrivals. Use marked taxi stands, official rideshare pickup zones, or pre-arranged trusted pickup.",
        },
      },
      {
        heading: "Day 2–3: money and local orientation",
        paragraphs: [
          "Opening a bank account usually requires government ID and status documents. Policies vary by bank — ask what they need before you go, and never pay a stranger a “referral fee” to open an account.",
          "Learn one grocery store, one pharmacy, and your main transit line. That alone reduces stress.",
        ],
        callout: {
          kind: "tip",
          text: "Build My Canada Plan with stage “Just landed” so banking, SIN, and health items appear in one checklist.",
        },
      },
      {
        heading: "SIN — when you are eligible",
        paragraphs: [
          "A Social Insurance Number (SIN) is used for employment and accessing certain government programs. Eligibility and how to apply are defined by Service Canada — not by Norra.",
        ],
        callout: {
          kind: "verify",
          text: "Official SIN information: canada.ca/en/employment-social-development/services/sin.html",
        },
      },
      {
        heading: "Provincial health coverage",
        paragraphs: [
          "Each province and territory runs its own public health insurance plan. Waiting periods, required documents, and forms differ. Start the process early and keep proof of application.",
        ],
        callout: {
          kind: "verify",
          text: "Start with the federal overview, then open your province’s site: canada.ca/en/immigration-refugees-citizenship/services/settle-canada/health-care.html",
        },
      },
      {
        heading: "Settlement support",
        paragraphs: [
          "Many cities have settlement agencies that help with language, employment prep, and community orientation. Government pages list how to find services near you.",
        ],
        callout: {
          kind: "verify",
          text: "Settle in Canada (Government of Canada): canada.ca/en/immigration-refugees-citizenship/services/settle-canada.html",
        },
      },
      {
        heading: "What not to rush in week one",
        bullets: [
          "Signing a long lease without viewing (when you can avoid it)",
          "Sending deposits to landlords you have never verified",
          "Paying anyone who claims they can “guarantee” a visa or PR outcome",
          "Sharing your SIN casually before you understand why it is needed",
        ],
      },
    ],
  },
  {
    slug: "temporary-accommodation",
    title: "How to find temporary accommodation (scam-aware)",
    metaTitle: "Temporary Accommodation in Canada — Scam-Aware Guide",
    metaDescription:
      "Find short-stay housing for your first weeks in Canada: hotels, extended stay, and red flags — without fake listings or invented prices.",
    eyebrow: "Housing",
    summary:
      "Short-stay lodging buys you time to view longer-term places in person. Treat every below-market “perfect” listing with skepticism.",
    topics: ["housing", "short stay", "scams", "Airbnb", "hotel", "lease"],
    readingMinutes: 8,
    updatedLabel: "Sep 2026",
    datePublished: "2026-09-26",
    dateModified: "2026-09-26",
    relatedHrefs: [
      { label: "My Canada Plan", href: "/plan" },
      { label: "Housing (sample layout)", href: "/housing" },
      { label: "Avoid newcomer scams", href: "/resources/avoid-newcomer-scams" },
      { label: "Cities", href: "/cities" },
    ],
    sections: [
      {
        heading: "Why temporary first is often safer",
        paragraphs: [
          "Arranging a long lease from overseas is possible, but it increases scam risk: you cannot see the unit, meet the landlord, or compare the neighbourhood. A 1–2 week buffer (hotel, extended-stay, student residence, or a well-reviewed short-term rental) is a common practical approach — not a legal requirement.",
        ],
      },
      {
        heading: "Options people commonly use",
        bullets: [
          "Hotels and extended-stay hotels near transit",
          "University or college temporary residences (if you are a student — ask your school)",
          "Licensed hostels or boutique inns for very short stays",
          "Short-term rental platforms with clear cancellation and identity policies",
          "Friends or family (still write down the address and house rules)",
        ],
        callout: {
          kind: "tip",
          text: "Norra’s housing page shows sample listing cards for layout only. They are not real rentals. Use reputable platforms and local viewings for real searches.",
        },
      },
      {
        heading: "Scam red flags",
        bullets: [
          "Rent far below similar places in the same neighbourhood",
          "Pressure to pay by wire, gift card, crypto, or “friend’s account” before viewing",
          "Landlord who refuses video call or in-person viewing without a clear reason",
          "Documents that look edited, or listings copied from other sites with different contact info",
          "Requests for your passport photo “to hold the unit” before any agreement",
        ],
        callout: {
          kind: "warning",
          text: "If something feels rushed or too good to be true, pause. Losing a deposit hurts more than one more night in a hotel.",
        },
      },
      {
        heading: "Before you pay a deposit",
        paragraphs: [
          "Prefer written agreements. Confirm who you are paying and what the payment covers. On platforms, stay inside the platform’s payment tools when possible. For private landlords, ask how rent receipts and leases work in that province — rules differ.",
        ],
      },
      {
        heading: "Next steps inside Norra",
        paragraphs: [
          "Add housing goals in My Canada Plan, read the cities guides for neighbourhood context, and keep the scam guide open while you search.",
        ],
      },
    ],
  },
  {
    slug: "canadian-resume",
    title: "How to prepare a Canadian resume",
    metaTitle: "Canadian Resume Guide for Newcomers",
    metaDescription:
      "Practical habits for a Canadian-style resume: length, structure, accomplishments, and what to skip — without fake employment stats.",
    eyebrow: "Work",
    summary:
      "A Canadian resume is usually concise, accomplishment-focused, and tailored to the role. This is organization guidance — not career counselling or a hiring guarantee.",
    topics: ["work", "resume", "CV", "jobs", "LinkedIn", "career"],
    readingMinutes: 8,
    updatedLabel: "Sep 2026",
    datePublished: "2026-09-26",
    dateModified: "2026-09-26",
    relatedHrefs: [
      { label: "First Canadian job guide", href: "/resources/first-canadian-job" },
      { label: "Jobs (sample layout)", href: "/jobs" },
      { label: "My Canada Plan", href: "/plan" },
      { label: "Settlement", href: "/settlement" },
    ],
    sections: [
      {
        heading: "What hiring teams often expect to scan quickly",
        paragraphs: [
          "Many Canadian employers skim resumes in seconds. Clear role titles, dates, location, and quantified outcomes help. Exact preferences vary by industry — tech, trades, healthcare, and academia each have norms.",
        ],
        bullets: [
          "Typically 1–2 pages for most early- and mid-career roles (portfolios may differ)",
          "Contact block with Canadian phone and email when you have them",
          "Professional summary (optional) tailored to the job posting",
          "Experience with bullets that start with strong verbs and results where possible",
          "Education, certifications, and relevant skills — not every course you ever took",
        ],
      },
      {
        heading: "What to leave off (usually)",
        bullets: [
          "Photos (unless a specific field expects them)",
          "Date of birth, marital status, or SIN",
          "Long paragraphs of soft skills without evidence",
          "Unrelated early jobs that crowd out recent, relevant work",
        ],
        callout: {
          kind: "tip",
          text: "Mirror language from the job posting only when it truthfully describes your experience. Do not invent Canadian experience — highlight transferable results instead.",
        },
      },
      {
        heading: "Addressing “Canadian experience” anxiety",
        paragraphs: [
          "Some postings ask for Canadian experience. You cannot invent it. You can translate prior work into local terms, volunteer strategically, take short bridging programs if they fit your field, and network for informational chats.",
          "Settlement agencies and campus career centres often run free resume reviews — search locally rather than paying unknown “guaranteed job” services.",
        ],
        callout: {
          kind: "warning",
          text: "Beware services that charge large upfront fees and promise employment. See our scam guide.",
        },
      },
      {
        heading: "Pair the resume with a simple application system",
        bullets: [
          "Keep a spreadsheet of roles applied, dates, and follow-ups",
          "Save each tailored PDF with a clear file name",
          "Prepare a short LinkedIn headline that matches your target roles",
          "Ask two references for permission before listing them",
        ],
      },
    ],
  },
  {
    slug: "first-canadian-job",
    title: "How to find your first Canadian job",
    metaTitle: "Find Your First Job in Canada — Newcomer Guide",
    metaDescription:
      "A practical job-search plan for newcomers: where to look, how to network, work authorization reminders, and scam red flags.",
    eyebrow: "Work",
    summary:
      "Job search in Canada mixes online applications, referrals, and patience. Confirm your work authorization on IRCC — Norra does not assess eligibility.",
    topics: ["work", "jobs", "networking", "interview", "career", "scams"],
    readingMinutes: 9,
    updatedLabel: "Sep 2026",
    datePublished: "2026-09-26",
    dateModified: "2026-09-26",
    relatedHrefs: [
      { label: "Canadian resume guide", href: "/resources/canadian-resume" },
      { label: "Jobs (sample layout)", href: "/jobs" },
      { label: "My Canada Plan", href: "/plan" },
      { label: "Avoid scams", href: "/resources/avoid-newcomer-scams" },
    ],
    sections: [
      {
        heading: "Confirm what you are allowed to do",
        paragraphs: [
          "Work rules depend on your status (study permit conditions, work permit type, open vs employer-specific, PR, and more). Only IRCC and your permit documents define this.",
        ],
        callout: {
          kind: "verify",
          text: "Work in Canada — IRCC: canada.ca/en/immigration-refugees-citizenship/services/work-canada.html",
        },
      },
      {
        heading: "Build a weekly search rhythm",
        bullets: [
          "Pick 2–3 target role families (e.g. customer support, junior analyst, warehouse)",
          "Block time for tailored applications — quality beats spray-and-pray",
          "Message a few people per week for informational chats (alumni, community groups)",
          "Track applications so follow-ups are easy",
          "Update your resume based on what interviewers ask",
        ],
      },
      {
        heading: "Where people look (non-exhaustive)",
        paragraphs: [
          "Government Job Bank, major job boards, company career pages, LinkedIn, campus portals, and settlement employment programs are common starting points. Prefer well-known sites; treat DMs that demand fees as suspicious.",
        ],
        callout: {
          kind: "tip",
          text: "Norra’s Jobs page is labelled sample content — fictional employers for layout. Use it to understand the UI, not as a real board.",
        },
      },
      {
        heading: "Interviews and first offers",
        bullets: [
          "Prepare stories using Situation → Action → Result",
          "Ask about schedule, pay, overtime, and probation in writing",
          "Never pay for a job offer or “placement guarantee”",
          "Employers typically request SIN after hiring for payroll — not in a cold email",
        ],
      },
      {
        heading: "If progress feels slow",
        paragraphs: [
          "Many newcomers face a gap between skills and local networks. Settlement employment counsellors, volunteering in your field, and short credential assessments (when relevant) can help — evaluate costs carefully.",
        ],
      },
    ],
  },
  {
    slug: "compare-canadian-cities",
    title: "How to compare Canadian cities",
    metaTitle: "Compare Canadian Cities for Newcomers",
    metaDescription:
      "A framework to compare Canadian cities on housing, work, climate, transit, and community — without fake rankings or invented statistics.",
    eyebrow: "Cities",
    summary:
      "There is no single “best” city. Use a simple scorecard for cost, work, climate, transit, and community — then visit Norra’s city pages for orientation notes.",
    topics: ["cities", "Toronto", "Vancouver", "Calgary", "Montreal", "Ottawa", "cost of living"],
    readingMinutes: 7,
    updatedLabel: "Sep 2026",
    datePublished: "2026-09-26",
    dateModified: "2026-09-26",
    relatedHrefs: [
      { label: "All cities", href: "/cities" },
      { label: "My Canada Plan", href: "/plan" },
      { label: "Temporary accommodation", href: "/resources/temporary-accommodation" },
      { label: "Housing (sample)", href: "/housing" },
    ],
    sections: [
      {
        heading: "Start with constraints, not vibes",
        paragraphs: [
          "Write down non-negotiables: study campus location, job market for your field, family nearby, language (English/French), and budget. Constraints shrink the map faster than Instagram reels.",
        ],
      },
      {
        heading: "A simple scorecard (use your own weights)",
        bullets: [
          "Housing: what you can afford for a safe, reasonable commute",
          "Work: employers and industries that match your skills",
          "Transit & walkability: car-optional or car-required?",
          "Climate: winters and wet seasons are real lifestyle factors",
          "Community: language groups, faith communities, child care, and settlement services",
          "Healthcare access: clinics and wait realities vary — verify locally",
        ],
        callout: {
          kind: "tip",
          text: "Norra city pages share orientation notes and official municipal links. They are not rankings and do not invent cost-of-living figures.",
        },
      },
      {
        heading: "Big-city vs mid-size tradeoffs",
        paragraphs: [
          "Larger metros often mean more jobs and denser newcomer networks — and higher housing competition. Mid-size cities can mean shorter commutes and different industry mixes. Neither is automatically “easier.”",
        ],
      },
      {
        heading: "How to research without drowning",
        bullets: [
          "Read the city’s official site for newcomer or housing pages",
          "Check transit maps against where you would work or study",
          "Browse rental platforms to learn ranges — do not send deposits yet",
          "Talk to people who live there (alumni, community forums) and ask specifics",
          "If possible, plan a short visit before signing a long lease",
        ],
      },
      {
        heading: "Put the choice into My Canada Plan",
        paragraphs: [
          "Select your preferred city in My Canada Plan so checklists and guide recommendations can lean toward that place. You can edit the plan anytime — data stays in this browser for now.",
        ],
      },
    ],
  },
  {
    slug: "avoid-newcomer-scams",
    title: "How to avoid common newcomer scams",
    metaTitle: "Avoid Newcomer Scams in Canada",
    metaDescription:
      "Housing, job, and immigration scam red flags for newcomers — plus where to report fraud. No fear-mongering, no fake crime stats.",
    eyebrow: "Safety",
    summary:
      "Scammers target urgency and confusion. Slow down, verify identities, and never pay for guaranteed immigration outcomes.",
    topics: ["safety", "scams", "housing", "jobs", "immigration", "fraud"],
    readingMinutes: 8,
    updatedLabel: "Sep 2026",
    datePublished: "2026-09-26",
    dateModified: "2026-09-26",
    relatedHrefs: [
      { label: "My Canada Plan", href: "/plan" },
      { label: "Safety centre", href: "/safety" },
      { label: "Temporary accommodation", href: "/resources/temporary-accommodation" },
      { label: "First job guide", href: "/resources/first-canadian-job" },
      { label: "Contact founder", href: "/contact" },
    ],
    sections: [
      {
        heading: "The pattern behind most scams",
        paragraphs: [
          "Fake urgency + money movement outside normal channels + isolation from advice. If someone pressures you to decide in minutes and pay in an irreversible way, pause.",
        ],
        callout: {
          kind: "warning",
          text: "If you are in immediate danger, call 911. For fraud, consider the Canadian Anti-Fraud Centre and your local police non-emergency line.",
        },
      },
      {
        heading: "Housing scams",
        bullets: [
          "Below-market rent with a story about being “abroad” and needing a deposit today",
          "Refusal to show the unit or do a video walkthrough",
          "Payment by gift cards, crypto, or wire to a personal name that does not match the listing",
          "Fake leases with copied logos",
        ],
      },
      {
        heading: "Job scams",
        bullets: [
          "Offers that require you to pay for equipment, training, or “placement”",
          "Requests for SIN, banking passwords, or passport scans before a formal offer",
          "Interviews only by chat apps with no company domain email",
          "“Package reshipping” or cheque-cashing schemes",
        ],
      },
      {
        heading: "Immigration and document scams",
        paragraphs: [
          "No one can guarantee approval of a visa, permit, or permanent residence. In Canada, paid immigration advice is regulated in many situations — verify representatives independently.",
        ],
        callout: {
          kind: "verify",
          text: "College of Immigration and Citizenship Consultants (CICC): college-ic.ca — and provincial/territorial law societies for lawyers. IRCC: canada.ca/en/immigration-refugees-citizenship.html",
        },
      },
      {
        heading: "Healthy habits",
        bullets: [
          "Use official government domains (canada.ca) for forms and accounts",
          "Enable multi-factor authentication on email and banking",
          "Ask a trusted friend to review “too good” deals",
          "Keep Norra’s demo marketplace labelled in your mind: sample profiles are not real providers",
        ],
      },
      {
        heading: "Report concerns about Norra content",
        paragraphs: [
          "This is an early-stage product without a dedicated trust team. Email the founder with screenshots if something on the site looks misleading.",
        ],
        callout: {
          kind: "tip",
          text: "Founder contact: kuldeepkushawaha@gmail.com · +1 437-733-7407",
        },
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getAllGuideSlugs(): string[] {
  return guides.map((g) => g.slug);
}

/** Flat lowercase corpus for client-side Knowledge Hub search */
export function guideSearchCorpus(guide: Guide): string {
  const chunks: string[] = [
    guide.title,
    guide.metaTitle,
    guide.metaDescription,
    guide.eyebrow,
    guide.summary,
    ...guide.topics,
  ];
  for (const section of guide.sections) {
    chunks.push(section.heading);
    if (section.paragraphs) chunks.push(...section.paragraphs);
    if (section.bullets) chunks.push(...section.bullets);
    if (section.callout?.text) chunks.push(section.callout.text);
  }
  return chunks.join(" ").toLowerCase();
}

export function filterGuides(query: string): Guide[] {
  const q = query.trim().toLowerCase();
  if (!q) return guides;
  const terms = q.split(/\s+/).filter(Boolean);
  return guides.filter((g) => {
    const corpus = guideSearchCorpus(g);
    return terms.every((t) => corpus.includes(t));
  });
}
