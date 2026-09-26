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
  /** Optional Plan deep-link for article CTA (e.g. /plan/?goal=study) */
  planCtaHref?: string;
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
    planCtaHref: "/plan/?stage=pre-arrival",
    relatedHrefs: [
      { label: "My Canada Plan (pre-arrival)", href: "/plan/?stage=pre-arrival" },
      { label: "Before you arrive checklist", href: "/before-you-arrive" },
      { label: "First week guide", href: "/resources/first-week-in-canada" },
      { label: "Open a bank account", href: "/resources/open-bank-account-newcomer" },
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
          text: "Always confirm visa, permit, eTA, and entry requirements on Immigration, Refugees and Citizenship Canada (IRCC) for your situation: [IRCC on Canada.ca](https://www.canada.ca/en/immigration-refugees-citizenship.html)",
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
          "Skim the newcomer banking orientation guide so week-one account opening feels familiar",
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
          text: "Government overview of health care for newcomers: [Health care in Canada](https://www.canada.ca/en/immigration-refugees-citizenship/services/settle-canada/health-care.html) — then check your province’s site or Norra’s provincial health-card guide.",
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
      { label: "Get a SIN", href: "/resources/get-sin-canada" },
      { label: "Get a health card", href: "/resources/get-health-card-canada" },
      { label: "Open a bank account", href: "/resources/open-bank-account-newcomer" },
      { label: "Arrival services", href: "/arrival" },
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
          "Opening a bank account usually requires government ID and status documents. Policies vary by bank — ask what they need before you go, and never pay a stranger a “referral fee” to open an account. See our newcomer banking orientation guide for a checklist (no bank rankings).",
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
          "A Social Insurance Number (SIN) is used for employment and accessing certain government programs. Eligibility and how to apply are defined by Service Canada — not by Norra. Use our dedicated SIN checklist for a step-by-step navigation overview.",
        ],
        callout: {
          kind: "verify",
          text: "Official SIN information: [Service Canada — SIN](https://www.canada.ca/en/employment-social-development/services/sin.html) — then open Norra’s dedicated SIN checklist from Related links below.",
        },
      },
      {
        heading: "Provincial health coverage",
        paragraphs: [
          "Each province and territory runs its own public health insurance plan. Waiting periods, required documents, and forms differ. Start the process early and keep proof of application.",
        ],
        callout: {
          kind: "verify",
          text: "Start with the federal overview, then use Norra’s provincial link map or open your province’s site: [Health care in Canada](https://www.canada.ca/en/immigration-refugees-citizenship/services/settle-canada/health-care.html) · [Provincial health-card guide](/resources/get-health-card-canada)",
        },
      },
      {
        heading: "Settlement support",
        paragraphs: [
          "Many cities have settlement agencies that help with language, employment prep, and community orientation. Government pages list how to find services near you.",
        ],
        callout: {
          kind: "verify",
          text: "Settle in Canada (Government of Canada): https://www.canada.ca/en/immigration-refugees-citizenship/services/settle-canada.html",
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
      { label: "PGWP / post-grad work orientation", href: "/resources/pgwp-post-graduation-work" },
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
          text: "Work in Canada — IRCC: https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada.html",
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
      { label: "Get a SIN", href: "/resources/get-sin-canada" },
      { label: "Open a bank account", href: "/resources/open-bank-account-newcomer" },
      { label: "Safety centre", href: "/safety" },
      { label: "Temporary accommodation", href: "/resources/temporary-accommodation" },
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
          text: "College of Immigration and Citizenship Consultants (CICC): https://college-ic.ca — and provincial/territorial law societies for lawyers. IRCC: https://www.canada.ca/en/immigration-refugees-citizenship.html",
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

  {
    slug: "get-sin-canada",
    title: "How to get a Social Insurance Number (SIN) in Canada",
    metaTitle: "Get a SIN in Canada — Newcomer Checklist",
    metaDescription:
      "A navigation checklist for applying for a Social Insurance Number in Canada: when you need one, official Service Canada paths, document habits, and SIN phishing warnings.",
    eyebrow: "Government",
    summary:
      "A SIN is Canada’s nine-digit identifier for work and many government programs. Use this as a navigation checklist — eligibility and exact documents are defined only by Service Canada.",
    topics: ["SIN", "Service Canada", "government", "work", "documents", "temporary resident", "scams", "banking"],
    readingMinutes: 10,
    updatedLabel: "Sep 2026",
    datePublished: "2026-09-26",
    dateModified: "2026-09-26",
    relatedHrefs: [
      { label: "Open a bank account", href: "/resources/open-bank-account-newcomer" },
      { label: "Get a health card", href: "/resources/get-health-card-canada" },
      { label: "Newcomer taxes (CRA)", href: "/resources/newcomer-taxes-canada" },
      { label: "First week in Canada", href: "/resources/first-week-in-canada" },
      { label: "Avoid newcomer scams", href: "/resources/avoid-newcomer-scams" },
      { label: "My Canada Plan", href: "/plan" },
      { label: "Government guides", href: "/government" },
    ],
    sections: [
      {
        heading: "What this guide is (and is not)",
        paragraphs: [
          "This page helps you navigate the official Social Insurance Number (SIN) process: what a SIN is for, how people commonly apply, and how to protect the number once you have it.",
          "Norra does not decide if you are eligible, does not file applications, and does not replace Service Canada instructions for your situation.",
        ],
        callout: {
          kind: "verify",
          text: "Start on the official SIN hub and follow the apply tool for your status: [SIN — Service Canada](https://www.canada.ca/en/employment-social-development/services/sin.html) · [Apply for a SIN](https://www.canada.ca/en/employment-social-development/services/sin/apply.html)",
        },
      },
      {
        heading: "Quick navigation checklist",
        bullets: [
          "Confirm you need a SIN for work or a program that asks for one — not every newcomer needs one on day one",
          "Open Service Canada’s SIN pages and choose the path that matches your status (temporary resident vs citizen / permanent resident)",
          "Gather the primary and secondary identity documents the official page lists for your situation",
          "Choose how to apply: online, by mail, or in person at a Service Canada office — verify current options on Canada.ca",
          "Apply only through official Government of Canada channels (no fee for a SIN application)",
          "Store your SIN confirmation securely; treat the number like a secret",
          "Update your SIN record when your permit expiry or legal name changes — temporary SINs often track immigration document dates",
        ],
      },
      {
        heading: "Who typically needs a SIN",
        paragraphs: [
          "In general, people use a SIN to work in Canada and to access certain government programs and benefits. Whether you personally must apply depends on your authorization to work and what you are applying for.",
          "Temporary residents who are authorized to work commonly apply when they will be employed. Study-permit holders should check whether their permit authorizes work before assuming they can get a SIN for employment.",
        ],
        callout: {
          kind: "verify",
          text: "Temporary residents overview: https://www.canada.ca/en/employment-social-development/services/sin/temporary-residents.html — Required documents overview: https://www.canada.ca/en/employment-social-development/services/sin/required-documents.html",
        },
      },
      {
        heading: "Documents — verify the official list for you",
        paragraphs: [
          "Service Canada generally expects a primary document that proves your legal status in Canada and a secondary document that confirms your identity. Exact acceptable documents differ for citizens, permanent residents, and temporary residents.",
          "Common patterns newcomers encounter (always confirm on Canada.ca before you go): a valid work or study permit (or visitor record) that authorizes work, plus a secondary ID such as a passport. Email messages from IRCC are not a substitute for the immigration document itself — Service Canada states this clearly for temporary residents.",
        ],
        bullets: [
          "Use original documents or the digital-copy rules stated on the official apply page for your channel (online vs mail vs in person)",
          "Names should match across documents; if your legal name changed, check supporting-document rules on Canada.ca",
          "If a document is not in English or French, follow Service Canada’s translation requirements",
        ],
        callout: {
          kind: "tip",
          text: "Call or check the Service Canada office page before an in-person visit so you bring what that channel currently accepts. Office finder: servicecanada.gc.ca (linked from the SIN pages).",
        },
      },
      {
        heading: "How people commonly apply",
        paragraphs: [
          "Service Canada documents three common channels: online (often the fastest), by mail to the Social Insurance Registration Office, and in person. Processing time estimates are published on Canada.ca and can change — read the current numbers there, not from memory or third-party blogs.",
          "There is no fee to apply for a SIN through Service Canada. Anyone asking you to “pay to get a SIN faster” through an unofficial site is a red flag.",
        ],
        callout: {
          kind: "verify",
          text: "Official online application entry (Government of Canada): sin-nas.https://www.canada.ca/en/Sin/ — only use it after reading the Canada.ca Apply page for your situation.",
        },
      },
      {
        heading: "After you receive your SIN",
        bullets: [
          "Memorize or store the number securely; do not laminate habits that conflict with official guidance — follow Protect your SIN on Canada.ca",
          "Temporary-resident SINs typically start with 9 and are tied to immigration document expiry — update when you get a new permit",
          "Employers usually need your SIN for payroll after hiring — that is different from strangers asking for it in a cold email",
          "Share it only when you understand why it is required (payroll, tax filing, certain benefits)",
        ],
        callout: {
          kind: "verify",
          text: "Protect your SIN and related privacy guidance are linked from the main SIN hub on Canada.ca. Prefer canada.ca domains over lookalike URLs.",
        },
      },
      {
        heading: "SIN phishing and scam warnings",
        paragraphs: [
          "Scammers impersonate Service Canada, CRA, or employers to harvest SINs. A SIN plus other personal data can enable identity fraud.",
        ],
        bullets: [
          "Service Canada will not demand your SIN by unsolicited text, or ask you to pay fees with gift cards or crypto to “activate” a SIN",
          "Do not enter your SIN on websites that are not clearly Government of Canada (look for canada.ca or known official portals linked from Canada.ca)",
          "Beware emails with urgent threats (“your SIN will be cancelled today”) and links to login pages — open canada.ca yourself instead of clicking",
          "Job “offers” that ask for your SIN, banking passwords, or passport scans before a real written offer are classic fraud patterns",
          "If you think your SIN was compromised, follow official guidance on Canada.ca and consider reporting to the Canadian Anti-Fraud Centre",
        ],
        callout: {
          kind: "warning",
          text: "Never pay a stranger a “SIN application fee.” The government application is free. Cross-check with our scam guide and official Protect your SIN pages.",
        },
      },
      {
        heading: "Put it on My Canada Plan",
        paragraphs: [
          "In My Canada Plan, choose stage “Just landed” or “Settling in,” or add the need “Banking & SIN,” so SIN and banking checklist items appear together. Tick them as you finish — progress stays in this browser for now.",
        ],
      },
    ],
  },

  {
    slug: "open-bank-account-newcomer",
    title: "How to open a bank account as a newcomer",
    metaTitle: "Open a Bank Account in Canada — Newcomer Orientation",
    metaDescription:
      "Orientation for newcomers opening a Canadian bank account: what to ask, ID habits, FCAC consumer rights starting points, and scam red flags — no bank rankings.",
    eyebrow: "Banking",
    summary:
      "A Canadian bank account makes rent, payroll, and everyday payments easier. This is orientation only — not financial advice, and not an endorsement of any bank as “best.”",
    topics: ["banking", "bank account", "FCAC", "newcomer", "ID", "debit", "scams", "SIN", "money"],
    readingMinutes: 9,
    updatedLabel: "Sep 2026",
    datePublished: "2026-09-26",
    dateModified: "2026-09-26",
    relatedHrefs: [
      { label: "Get a SIN", href: "/resources/get-sin-canada" },
      { label: "Get a health card", href: "/resources/get-health-card-canada" },
      { label: "Newcomer taxes (CRA)", href: "/resources/newcomer-taxes-canada" },
      { label: "First week in Canada", href: "/resources/first-week-in-canada" },
      { label: "Avoid newcomer scams", href: "/resources/avoid-newcomer-scams" },
      { label: "My Canada Plan", href: "/plan" },
      { label: "Banking navigation page", href: "/services/banking-finance" },
    ],
    sections: [
      {
        heading: "Orientation, not a product pitch",
        paragraphs: [
          "Norra does not rank banks, take referral kickbacks on this guide, or promise account approval. Policies, fees, and accepted ID differ by institution and can change.",
          "Your job is to compare a few options yourself, ask clear questions, and verify consumer-rights information on official sources when something feels unfair.",
        ],
        callout: {
          kind: "verify",
          text: "Financial Consumer Agency of Canada (FCAC) — [Opening a bank account](https://www.canada.ca/en/financial-consumer-agency/services/banking/opening-bank-account.html)",
        },
      },
      {
        heading: "Why newcomers usually open an account early",
        bullets: [
          "Receive wages by direct deposit",
          "Pay rent and utilities without carrying large amounts of cash",
          "Build a local payment trail for everyday life",
          "Reduce reliance on foreign cards that may charge high fees",
        ],
        callout: {
          kind: "tip",
          text: "You do not need to pick a bank before you land. A short temporary period on cash + travel cards is common while you compare branches near where you will live.",
        },
      },
      {
        heading: "Before you visit or apply — a practical checklist",
        bullets: [
          "Shortlist 2–3 federally regulated banks, credit unions, or other institutions near you — compare fee schedules on their sites",
          "Call or message ahead: “I am a newcomer; which original ID documents do you accept to open a personal deposit account?”",
          "Ask about monthly fees, no-fee conditions, interac e-Transfer, and whether a newcomer package exists (packages change — get details in writing)",
          "Bring original ID (not photocopies) and status documents the institution says it needs",
          "Decide whether you need a branch appointment or can start online — some online-only setups have different rules",
        ],
        callout: {
          kind: "verify",
          text: "FCAC explains identification approaches and that you may be able to open an account even if you are not a Canadian citizen — confirm current details: [FCAC — Opening a bank account](https://www.canada.ca/en/financial-consumer-agency/services/banking/opening-bank-account.html)",
        },
      },
      {
        heading: "ID and access — high-level only",
        paragraphs: [
          "Federally regulated banks generally must be able to confirm your identity with acceptable identification. FCAC describes more than one way consumers can meet ID requirements, including combinations of documents from reliable sources.",
          "Norra will not invent a universal ID list. Ask the institution what it accepts for your status, and read FCAC’s consumer pages if you want to understand baseline rights around opening a personal deposit account.",
        ],
        callout: {
          kind: "verify",
          text: "Know your rights when opening a personal account: [FCAC — Account rights](https://www.canada.ca/en/financial-consumer-agency/services/rights-responsibilities/rights-banking/accounts-rights-responsibilities.html)",
        },
      },
      {
        heading: "Questions worth asking in the branch or chat",
        bullets: [
          "What is the monthly fee, and how do I avoid it?",
          "Are there newcomer offers, and what are the expiry conditions?",
          "How long until I receive a debit card and can set up online banking?",
          "Can I deposit a foreign draft or receive an international transfer — and what are the fees?",
          "What happens if I need to close the account after I move cities?",
        ],
      },
      {
        heading: "SIN, credit history, and common misconceptions",
        paragraphs: [
          "Some banks may ask for a SIN for tax-reporting products (for example, accounts that earn interest). Needing a SIN for a specific product is not the same as “you cannot bank without one in every case.” Ask the institution what is required for the exact account type you want.",
          "Lack of Canadian credit history is common for newcomers. That may affect credit cards or loans more than a basic deposit account — again, policies vary. This is not credit advice.",
        ],
        callout: {
          kind: "tip",
          text: "Pair this guide with the SIN checklist (Related links below) if an employer or product needs your Social Insurance Number.",
        },
      },
      {
        heading: "Scam-aware habits",
        bullets: [
          "Never pay a stranger a “referral fee” or gift cards to open an account for you",
          "Do not share online-banking passwords, one-time passcodes, or debit PINs with anyone who calls or messages you",
          "Prefer walking into a real branch or using the institution’s official website/app — not links from cold DMs",
          "Job or housing scams sometimes ask for banking details early — pause and verify independently",
          "If a bank refuses to open an account, FCAC notes you should receive written information and complaint pathways — read the official refusal guidance on Canada.ca",
        ],
        callout: {
          kind: "warning",
          text: "Norra’s marketplace and sample cards are demo layout only. They are not partner banks and cannot open accounts for you.",
        },
      },
      {
        heading: "Next steps inside Norra",
        paragraphs: [
          "Add “Banking & SIN” in My Canada Plan, tick the banking checklist item when done, and keep the first-week and scam guides handy while you settle money systems.",
        ],
      },
    ],
  },

  {
    slug: "get-health-card-canada",
    title: "How to get a provincial health card in Canada",
    metaTitle: "Get a Provincial Health Card in Canada — Newcomer Guide",
    metaDescription:
      "Orientation guide to provincial and territorial health coverage in Canada: why you need a health card, official OHIP/MSP/AHCIP/RAMQ and other government links, waiting-period cautions, and scam warnings — no invented eligibility.",
    eyebrow: "Health",
    summary:
      "Public health insurance in Canada is run by provinces and territories — not a single federal health card. Use this as a navigation map to official sites. Norra does not decide eligibility or give medical advice.",
    topics: [
      "health",
      "health card",
      "OHIP",
      "MSP",
      "AHCIP",
      "RAMQ",
      "provincial",
      "government",
      "coverage",
      "newcomer",
      "scams",
    ],
    readingMinutes: 11,
    updatedLabel: "Sep 2026",
    datePublished: "2026-09-26",
    dateModified: "2026-09-26",
    relatedHrefs: [
      { label: "My Canada Plan", href: "/plan" },
      { label: "Get a SIN", href: "/resources/get-sin-canada" },
      { label: "First week in Canada", href: "/resources/first-week-in-canada" },
      { label: "Settlement", href: "/settlement" },
      { label: "Avoid newcomer scams", href: "/resources/avoid-newcomer-scams" },
      { label: "Government guides", href: "/government" },
    ],
    sections: [
      {
        heading: "What this guide is (and is not)",
        paragraphs: [
          "This page orients newcomers to Canada’s public health insurance systems: why coverage matters, that plans are provincial or territorial (not one federal health card), and where to open the official application pages for major jurisdictions.",
          "Norra does not assess your eligibility, does not invent waiting periods or document lists, and does not provide medical advice. Rules change — always confirm on the official site for the province or territory where you live.",
        ],
        callout: {
          kind: "verify",
          text: "Federal newcomer overview (then open your province or territory): [Health care in Canada — IRCC](https://www.canada.ca/en/immigration-refugees-citizenship/services/settle-canada/health-care.html)",
        },
      },
      {
        heading: "Why provincial or territorial coverage matters",
        paragraphs: [
          "Most medically necessary physician and hospital services for eligible residents are insured through the plan of the province or territory where you live. Without coverage (or private insurance that fills a gap), you may be billed as an uninsured patient.",
          "A health card is usually how you show enrolment when you see a doctor, visit a clinic, or go to a hospital. Exact benefits, identity rules, and how cards are issued differ by jurisdiction.",
        ],
        bullets: [
          "Coverage is not one Canada-wide health card — each province and territory runs its own plan",
          "Eligibility often depends on legal status, residency tests, and documents listed on that jurisdiction’s site",
          "Waiting periods may apply in some places for some situations — do not assume timelines from blogs or this page; read the official page for where you live",
          "Many newcomers arrange private travel or gap medical insurance until public coverage starts — compare policies yourself",
        ],
        callout: {
          kind: "tip",
          text: "Add “Healthcare registration” in My Canada Plan (stage Just landed or Settling in) so health checklist items appear beside SIN and banking.",
        },
      },
      {
        heading: "Quick navigation checklist",
        bullets: [
          "Confirm which province or territory will be your primary residence",
          "Open that jurisdiction’s official health-card / enrolment page from the list below (or from the federal overview)",
          "Read eligibility, documents, and any waiting-period language on that official page only",
          "Apply only through channels that page describes (in person, online, mail, registry agent, etc.)",
          "Keep proof of application and any temporary coverage letters",
          "Until you are covered, clarify how you will pay for urgent care and whether private insurance applies",
        ],
        callout: {
          kind: "warning",
          text: "This is not medical advice. For emergencies in Canada, call 911. For eligibility questions, contact the provincial or territorial plan named on the official site — not Norra.",
        },
      },
      {
        heading: "Official provincial and territorial starting points",
        paragraphs: [
          "Each link below was checked against government domains before publishing. Open the page for your jurisdiction and follow its instructions. If a smaller territory’s process is unclear to you, use the federal overview and that territory’s government site — do not trust random “apply for health card” ads.",
        ],
        bullets: [
          "Ontario (OHIP) — Apply for OHIP and get a health card: https://www.ontario.ca/page/apply-ohip-and-get-health-card",
          "British Columbia (MSP) — Apply for MSP: https://www2.gov.bc.ca/gov/content/health/health-drug-coverage/msp/bc-residents/eligibility-and-enrolment/apply-for-msp",
          "Alberta (AHCIP) — How to apply for AHCIP: https://www.alberta.ca/ahcip-how-to-apply",
          "Québec (RAMQ) — Register for health insurance: https://www.ramq.gouv.qc.ca/en/citizens/health-insurance/register",
          "Québec newcomers (RAMQ online path): https://www.ramq.gouv.qc.ca/en/newcomers-register-health-insurance-online",
          "Manitoba — Manitoba Health Card and Coverage: https://manitoba.ca/health/mhsip/",
          "Saskatchewan — Apply for a health card (eHealth Saskatchewan): https://www.ehealthsask.ca/residents/health-cards/apply-for-a-health-card",
          "Nova Scotia (MSI) — Apply for a Health Card: https://www.novascotia.ca/apply-health-card",
          "New Brunswick (Medicare) — Applying for Medicare Coverage: https://www2.gnb.ca/content/gnb/en/departments/health/DrugPlans/content/medicare/ApplyingforaCard.html",
          "Newfoundland and Labrador (MCP): https://www.gov.nl.ca/hcs/mcp/",
          "Prince Edward Island — Apply for PEI Health Card: https://www.princeedwardisland.ca/en/service/apply-for-pei-health-card",
          "Yukon — Apply for a Yukon health care card: https://yukon.ca/en/health-care-card",
          "Northwest Territories — Applying for Health Care: https://www.hss.gov.nt.ca/en/services/applying-health-care",
          "Nunavut — Nunavut Health Care Plan (Government of Nunavut): https://www.gov.nu.ca/en/health/nunavut-health-care-plan",
        ],
        callout: {
          kind: "verify",
          text: "Always re-check the URL bar for official domains (.gov, .gc.ca, .ca government sites such as ontario.ca, alberta.ca, ramq.gouv.qc.ca). Start from [Health care in Canada](https://www.canada.ca/en/immigration-refugees-citizenship/services/settle-canada/health-care.html) if you are unsure which plan applies.",
        },
      },
      {
        heading: "Waiting periods and eligibility — verify, don’t invent",
        paragraphs: [
          "Some jurisdictions describe waiting periods before coverage begins; others state that eligible residents have coverage without a wait. The details depend on your status and where you live.",
          "Norra will not quote waiting times, eligibility lists, or “guaranteed” start dates here. Read the official page for your province or territory, including any temporary-resident or student rules.",
        ],
        callout: {
          kind: "verify",
          text: "If you cannot find a clear official page for your situation, use the federal overview and contact information published by that province or territory’s health ministry — never rely on paid “fast-track health card” middlemen.",
        },
      },
      {
        heading: "Scam warnings — fake health-card sites",
        paragraphs: [
          "Fraudsters clone government branding and sell “priority” health-card applications or ask for fees, gift cards, or crypto. Public enrolment channels described on official sites do not work that way.",
        ],
        bullets: [
          "Do not pay a stranger to “register you for OHIP/MSP/RAMQ” outside official channels",
          "Ignore cold texts or DMs that demand your immigration documents to “activate” a health card today",
          "Type official URLs yourself or use links from canada.ca / provincial government sites — avoid ads that look almost identical",
          "Norra’s marketplace cards are demo layout only and cannot enrol you in any health plan",
        ],
        callout: {
          kind: "warning",
          text: "Cross-check with Norra’s Avoid newcomer scams guide (Related links below). Prefer official domains; report fraud concerns through channels listed by the Canadian Anti-Fraud Centre on Government of Canada pages when appropriate.",
        },
      },
      {
        heading: "Put it on My Canada Plan",
        paragraphs: [
          "Choose stage “Just landed” or “Settling in,” or add the need “Healthcare registration,” so provincial health checklist items appear with SIN and banking. Tick items as you finish — progress stays in this browser’s localStorage until accounts exist.",
        ],
      },
    ],
  },

  {
    slug: "first-weeks-international-student",
    title: "First weeks as an international student in Canada",
    metaTitle: "First Weeks as an International Student in Canada",
    metaDescription:
      "Orientation for international students' first weeks in Canada: school check-in, study-permit reminders to verify on IRCC, banking, SIN, health coverage, housing scam awareness — organization only, not immigration advice.",
    eyebrow: "Student",
    summary:
      "A calm first-weeks map for international students: orientation, school portals, status reminders to verify on IRCC, banking/SIN/health cross-links, and housing scam awareness — then turn it into My Canada Plan with a Study goal.",
    topics: [
      "student",
      "international student",
      "study permit",
      "orientation",
      "campus",
      "housing",
      "scams",
      "SIN",
      "banking",
      "health",
      "IRCC",
      "first weeks",
    ],
    readingMinutes: 12,
    updatedLabel: "Sep 2026",
    datePublished: "2026-09-26",
    dateModified: "2026-09-26",
    planCtaHref: "/plan/?goal=study",
    relatedHrefs: [
      { label: "Finishing your program checklist", href: "/resources/finishing-your-program" },
      { label: "My Canada Plan (Study)", href: "/plan/?goal=study" },
      { label: "Students hub", href: "/students" },
      { label: "Get a SIN", href: "/resources/get-sin-canada" },
      { label: "Open a bank account", href: "/resources/open-bank-account-newcomer" },
      { label: "Get a health card", href: "/resources/get-health-card-canada" },
      { label: "Avoid newcomer scams", href: "/resources/avoid-newcomer-scams" },
      { label: "Temporary accommodation", href: "/resources/temporary-accommodation" },
      { label: "Newcomer taxes (CRA)", href: "/resources/newcomer-taxes-canada" },
      { label: "PGWP / post-grad work orientation", href: "/resources/pgwp-post-graduation-work" },
      { label: "First week in Canada", href: "/resources/first-week-in-canada" },
    ],
    sections: [
      {
        heading: "What this guide is (and is not)",
        paragraphs: [
          "Your first weeks as an international student are about getting stable: a place to sleep, a working phone number, school orientation completed, and a clear list of status and settlement tasks to verify on official sources.",
          "Norra organizes next steps. It does not assess your study-permit eligibility, interpret permit conditions for your case, or replace IRCC or your school's international student office.",
        ],
        callout: {
          kind: "verify",
          text: "Study permits, work conditions, and entry rules change. Confirm everything that affects your status on [Study in Canada — IRCC](https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html) and with your designated learning institution (DLI).",
        },
      },
      {
        heading: "Before or right after you land",
        bullets: [
          "Keep passport, letter of acceptance, and study-permit / visa / eTA documents reachable (print + phone)",
          "Confirm temporary lodging address and check-in instructions offline",
          "Know how you will get from the airport to that address — and a backup plan",
          "Activate SIM / eSIM so maps, school email, and two-factor codes work",
          "Save your school's international student office contacts and after-hours emergency numbers",
        ],
        callout: {
          kind: "tip",
          text: "Cross-read Norra's [first week in Canada](/resources/first-week-in-canada) guide for general arrival habits (SIM, transit, essentials) that apply whether or not you are a student.",
        },
      },
      {
        heading: "School orientation and portals",
        paragraphs: [
          "Most schools run international-student orientation, immigration advising hours, and housing or health-insurance briefings. Treat those sessions as primary — they know your campus rules.",
        ],
        bullets: [
          "Complete online pre-arrival or orientation modules your school requires",
          "Activate student email, learning portal, and tuition / fee payment access",
          "Confirm campus map, transit pass options, and student ID pickup",
          "Ask where health insurance for international students is explained (school plan vs provincial coverage)",
          "Note any mandatory address updates or IRCC reporting tools your school mentions — then verify steps on IRCC, not on random blogs",
        ],
      },
      {
        heading: "Study-permit reminders — verify on IRCC (no advice)",
        paragraphs: [
          "Permit conditions (including whether and how you may work on or off campus) are set by IRCC for your situation. Norra will not tell you that you \"can\" or \"cannot\" work a certain number of hours.",
          "Use this as a reminder list of topics to look up — not as a decision for your case.",
        ],
        bullets: [
          "Read the conditions printed on your permit and any accompanying IRCC letters",
          "Open IRCC's Study in Canada pages for current rules on studying, working, and changing schools",
          "Ask your school's international student advisors how they recommend documenting enrolment and address changes",
          "Do not rely on social-media summaries of \"hours you can work\" — rules change and exceptions exist",
        ],
        callout: {
          kind: "verify",
          text: "Start here and follow links that match your situation: [Study in Canada (IRCC)](https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html). For regulated advice about your file, consult an authorized representative independently — Norra is not one.",
        },
      },
      {
        heading: "Banking, SIN, and health — use the deep guides",
        paragraphs: [
          "Students often open a bank account in week one, apply for a Social Insurance Number when eligible (especially if working), and sort health coverage (school plan and/or provincial card). Those topics are large enough that Norra keeps dedicated guides — open them instead of reinventing the steps here.",
        ],
        bullets: [
          "[Open a bank account as a newcomer](/resources/open-bank-account-newcomer) — ID habits, questions to ask, scam-aware tips (FCAC-linked orientation)",
          "[Get a SIN in Canada](/resources/get-sin-canada) — Service Canada navigation and phishing warnings; verify eligibility there",
          "[Get a provincial health card](/resources/get-health-card-canada) — map to official provincial enrolment pages; waiting periods vary — never invent them",
        ],
        callout: {
          kind: "tip",
          text: "In My Canada Plan, add goal Study (and needs like Banking & SIN or Healthcare registration) so checklist items for school, money, and health appear together.",
        },
      },
      {
        heading: "Housing for students — scam awareness first",
        paragraphs: [
          "Campus residence, homestay, shared rentals, and off-campus leases each have trade-offs. Whatever you choose, treat deposits and \"pay before you see the unit\" pressure as high-risk — especially from abroad or in your first days.",
        ],
        bullets: [
          "Prefer school residence waitlists or housing offices when available",
          "View units in person or via a trusted proxy before wiring large deposits",
          "Never pay with gift cards, crypto, or irreversible transfers to someone you have not verified",
          "Read [temporary accommodation](/resources/temporary-accommodation) and [avoid newcomer scams](/resources/avoid-newcomer-scams) before sending money",
          "Norra's housing cards are sample layout only — not real inventory",
        ],
        callout: {
          kind: "warning",
          text: "A \"perfect\" cheap room near campus that demands a deposit today without a viewing is a classic scam pattern. Slow down; verify the landlord or listing through your school housing board when possible.",
        },
      },
      {
        heading: "A simple first-weeks rhythm",
        bullets: [
          "Days 1–3: sleep, phone service, groceries, school check-in / orientation start",
          "Days 3–10: banking when ready, SIN appointment or application if eligible, confirm health coverage path",
          "Week 2+: longer housing search if needed, transit routine, meet international-student peers, keep IRCC bookmarks handy",
          "Ongoing: tick items in My Canada Plan so nothing important lives only in your head",
        ],
      },
      {
        heading: "Put this into My Canada Plan",
        paragraphs: [
          "Open My Canada Plan with goal Study preselected, choose your stage (for example Just landed or Settling in), add your city, and tick orientation, banking, SIN, and housing items as you finish them. Progress stays in this browser until accounts exist.",
        ],
      },
    ],
  },


  {
    slug: "pgwp-post-graduation-work",
    title: "Post-graduation work (PGWP) orientation for international students",
    metaTitle: "PGWP / Post-Graduation Work Orientation — IRCC-Linked Guide",
    metaDescription:
      "Orientation for international students researching post-graduation work options in Canada: verified IRCC starting points, research habits, settlement cross-links — no invented eligibility, validity lengths, or processing times.",
    eyebrow: "Work",
    summary:
      "A calm map for students researching work after a Canadian program: official IRCC Post-Graduation Work Permit pages to verify yourself, what Norra will never invent, and links to SIN, banking, taxes, jobs (sample), and My Canada Plan with Study or Work goals.",
    topics: [
      "student",
      "work",
      "PGWP",
      "post-graduation",
      "work permit",
      "international student",
      "IRCC",
      "graduation",
      "career",
      "SIN",
      "taxes",
    ],
    readingMinutes: 11,
    updatedLabel: "Sep 2026",
    datePublished: "2026-09-26",
    dateModified: "2026-09-26",
    planCtaHref: "/plan/?goal=work",
    relatedHrefs: [
      { label: "Finishing your program checklist", href: "/resources/finishing-your-program" },
      { label: "My Canada Plan (Work)", href: "/plan/?goal=work" },
      { label: "My Canada Plan (Study)", href: "/plan/?goal=study" },
      { label: "Students hub", href: "/students" },
      { label: "International student first weeks", href: "/resources/first-weeks-international-student" },
      { label: "First week in Canada", href: "/resources/first-week-in-canada" },
      { label: "Get a SIN", href: "/resources/get-sin-canada" },
      { label: "Open a bank account", href: "/resources/open-bank-account-newcomer" },
      { label: "Newcomer taxes (CRA)", href: "/resources/newcomer-taxes-canada" },
      { label: "First Canadian job", href: "/resources/first-canadian-job" },
      { label: "Jobs (sample layout)", href: "/jobs" },
    ],
    sections: [
      {
        heading: "What this guide is (and is not)",
        paragraphs: [
          "Many international students eventually ask whether they can work in Canada after finishing a program — often under the label Post-Graduation Work Permit (PGWP). That question is normal. Answering it for your case is not Norra's job.",
          "This page is orientation only: where to read on Immigration, Refugees and Citizenship Canada (IRCC), how to research without copying social-media claims, and which Norra settlement guides pair with a post-study work transition. It is not immigration advice, not a prediction that you will qualify, and not a substitute for IRCC or an authorized representative.",
        ],
        callout: {
          kind: "verify",
          text: "Start on IRCC and follow the pages that match your situation: [Work after graduation (IRCC)](https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation.html) · [About the PGWP](https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation/about.html) · [Eligibility](https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation/eligibility.html) · [How to apply](https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation/apply.html).",
        },
      },
      {
        heading: "What people usually mean by \"PGWP\"",
        paragraphs: [
          "In everyday conversation, \"PGWP\" usually refers to a post-graduation work authorization pathway described on IRCC's Study in Canada pages. Exact names, forms, and rules live on Canada.ca — not in blog roundups or WhatsApp forwards.",
          "Norra will not invent whether your school, program length, study-permit history, or graduation timing makes you eligible. Those facts are defined by IRCC for your situation and can change.",
        ],
        bullets: [
          "Treat \"everyone gets X years\" claims as unverified until you read IRCC yourself",
          "School international-student advisors can help you navigate documents — they still do not replace IRCC's published rules",
          "Work while you are still a student (on/off campus, co-op) is a different IRCC topic from work after graduation — do not mix the two from memory",
        ],
        callout: {
          kind: "tip",
          text: "While studying, bookmark IRCC's work-while-studying hub separately: [Work while studying](https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work.html). After graduation topics sit under [Work after graduation](https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation.html).",
        },
      },
      {
        heading: "Official IRCC starting points (verified links)",
        paragraphs: [
          "Open these on canada.ca yourself. Prefer typing the path or using links from pages you already trust. Lookalike domains are a common fraud pattern.",
        ],
        bullets: [
          "[Work after graduation (hub)](https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation.html)",
          "[About the post-graduation work permit](https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation/about.html)",
          "[Who can apply / eligibility](https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation/eligibility.html)",
          "[How to apply](https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation/apply.html)",
          "[Get the documents you need](https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation/get-documents.html)",
          "[After you apply](https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation/after-you-apply.html)",
          "[Study in Canada (overview)](https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html)",
          "[Work in Canada (overview)](https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada.html)",
          "[Designated learning institutions (DLI) list](https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/prepare/designated-learning-institutions-list.html)",
          "[IRCC secure account](https://www.canada.ca/en/immigration-refugees-citizenship/services/application/account.html) · [Check application status](https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-status.html)",
        ],
        callout: {
          kind: "verify",
          text: "Processing times, fees, biometrics, and required forms are published by IRCC and change. Never trust a screenshot of an old timeline — open the live Canada.ca page for the step you are on.",
        },
      },
      {
        heading: "A calm research workflow (no invented rules)",
        paragraphs: [
          "Use this as a personal organization habit — not as a guarantee of outcome.",
        ],
        bullets: [
          "Read IRCC About + Eligibility pages before you spend money on \"PGWP packages\" from strangers",
          "Write down questions for your school's international student office (document wording, letter of completion timing) — then verify any status claim on IRCC",
          "Keep copies of study-permit documents, transcripts, and completion letters organized; IRCC's get-documents page explains what they ask for in general terms",
          "If you use an IRCC account, open it only from official links — never from a cold email or text",
          "For case-specific advice, independently hire an authorized immigration representative — sample marketplace cards on Norra are fictional UI, not referrals",
        ],
        callout: {
          kind: "warning",
          text: "Anyone guaranteeing approval, selling \"priority processing\" outside IRCC, or asking you to pay with gift cards or crypto is a red flag. See Norra's [avoid newcomer scams](/resources/avoid-newcomer-scams) guide and IRCC contact pages you open yourself from canada.ca.",
        },
      },
      {
        heading: "While you are still studying — do not confuse pathways",
        paragraphs: [
          "On-campus work, off-campus work, and co-op / internship permits are separate IRCC topics from post-graduation work. Conditions on your study permit matter — Norra will not tell you that you \"can work N hours.\"",
        ],
        bullets: [
          "[Work on campus](https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/work-on-campus.html)",
          "[Work off campus](https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/work-off-campus.html)",
          "[Work as a co-op student or intern](https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/intern.html)",
          "Cross-read Norra's [first weeks as an international student](/resources/first-weeks-international-student) for arrival and orientation habits",
        ],
        callout: {
          kind: "verify",
          text: "Hour limits, employer rules, and full-time study requirements — if any apply to you — are stated by IRCC for your situation. Check IRCC; do not rely on Norra or social media for a number.",
        },
      },
      {
        heading: "Settlement stack after (or while) you research work options",
        paragraphs: [
          "If you become eligible to work and choose to work, everyday Canada setup still matters: SIN when Service Canada says you qualify, a bank account, tax bookmarks, and scam-aware job search. Those are separate checklists.",
        ],
        bullets: [
          "[Get a SIN in Canada](/resources/get-sin-canada) — Service Canada navigation; verify eligibility there",
          "[Open a bank account as a newcomer](/resources/open-bank-account-newcomer) — FCAC-linked orientation",
          "[Filing taxes as a newcomer (CRA)](/resources/newcomer-taxes-canada) — no invented refunds or GST amounts",
          "[Finding your first Canadian job](/resources/first-canadian-job) — search habits; confirm authorization on IRCC",
          "[Canadian resume guide](/resources/canadian-resume) — format orientation, not a guarantee",
          "[Jobs (sample layout)](/jobs) — fictional employers for UI only, labelled as sample",
        ],
        callout: {
          kind: "tip",
          text: "In My Canada Plan, add goal Study while you are enrolled, and/or goal Work when you are focusing on employment. Needs like Banking & SIN and Government benefits pull the matching checklist items.",
        },
      },
      {
        heading: "What Norra will never tell you",
        bullets: [
          "That you \"will get\" a PGWP, or for how many months or years",
          "Invented eligibility shortcuts (\"any diploma counts\", \"just wait N days\")",
          "Hour limits, salary rules, or employer restrictions copied from memory",
          "Processing times, fees, or \"apply by this date\" claims not taken from the live IRCC page you open",
          "Which consultant to hire, or that a sample marketplace profile is a real booking",
        ],
        callout: {
          kind: "warning",
          text: "Norra is early-stage navigation software. It is not IRCC, not a law firm, and not an RCIC. For decisions about your status, use Canada.ca and independently verified authorized help.",
        },
      },
      {
        heading: "Put this into My Canada Plan",
        paragraphs: [
          "Open My Canada Plan with goal Work (or Study if you are still enrolled), choose your stage, add your city, and tick IRCC-research and settlement items as you finish them. Progress stays in this browser until accounts exist.",
        ],
      },
    ],
  },


  {
    slug: "finishing-your-program",
    title: "Finishing your program — orientation checklist for international students",
    metaTitle: "Finishing Your Program Checklist — International Students",
    metaDescription:
      "Practical orientation checklist for international students nearing program end: confirm dates with your school, gather documents to verify on IRCC, review PGWP orientation, plan work/study goals, and SIN/banking/taxes if needed — not immigration advice.",
    eyebrow: "Student",
    summary:
      "A calm end-of-program map: confirm dates and documents with your school, verify IRCC get-documents / study-permit / PGWP-apply pages yourself, then plan work or study goals and settlement basics — organization only, not immigration advice.",
    topics: [
      "student",
      "international student",
      "finish program",
      "finishing",
      "graduating",
      "graduation",
      "program end",
      "program-end",
      "completion",
      "transcript",
      "PGWP",
      "IRCC",
      "study permit",
      "checklist",
    ],
    readingMinutes: 10,
    updatedLabel: "Sep 2026",
    datePublished: "2026-09-26",
    dateModified: "2026-09-26",
    planCtaHref: "/plan/?goal=study",
    relatedHrefs: [
      { label: "My Canada Plan (Study)", href: "/plan/?goal=study" },
      { label: "My Canada Plan (Work)", href: "/plan/?goal=work" },
      { label: "PGWP / post-grad work orientation", href: "/resources/pgwp-post-graduation-work" },
      { label: "International student first weeks", href: "/resources/first-weeks-international-student" },
      { label: "Students hub", href: "/students" },
      { label: "Get a SIN", href: "/resources/get-sin-canada" },
      { label: "Open a bank account", href: "/resources/open-bank-account-newcomer" },
      { label: "Newcomer taxes (CRA)", href: "/resources/newcomer-taxes-canada" },
      { label: "First Canadian job", href: "/resources/first-canadian-job" },
      { label: "Jobs (sample layout)", href: "/jobs" },
    ],
    sections: [
      {
        heading: "What this checklist is (and is not)",
        paragraphs: [
          "Nearing the end of a Canadian program is a planning moment: confirm what your school will issue, organize documents, and research post-study options on official sources — without rushing into paid \"guarantees.\"",
          "Norra organizes next steps. It does not assess whether you qualify for any permit, invent document names your school must issue, quote processing times, or replace IRCC or your international student office.",
        ],
        callout: {
          kind: "verify",
          text: "Status and post-graduation work rules live on IRCC. Start with [Study in Canada](https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html) · [Study permits](https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit.html) · [Work after graduation](https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation.html) — then verify every claim that affects your file.",
        },
      },
      {
        heading: "Suggested sequence (organization habit, not advice)",
        paragraphs: [
          "Use this order as a personal workflow. Skip or reorder based on what your school and IRCC pages say for you — never based on social-media timelines.",
        ],
        bullets: [
          "School confirmation — program end date and what completion letters / transcripts they issue",
          "Gather documents — match IRCC's get-documents page to what you actually have (verify on Canada.ca)",
          "Review PGWP orientation — Norra's IRCC-linked map, then live IRCC apply / eligibility pages yourself",
          "Plan work or study goals — open My Canada Plan with Study and/or Work",
          "SIN, banking, and taxes if needed — only when those steps apply to your situation; verify on Service Canada / FCAC / CRA",
        ],
        callout: {
          kind: "tip",
          text: "Tick items in [My Canada Plan](/plan/?goal=study) (add Work when employment is the focus) so this list does not live only in your head. Progress stays in this browser until accounts exist.",
        },
      },
      {
        heading: "1. Organize with your school first",
        paragraphs: [
          "Your designated learning institution (DLI) controls enrolment records and typically issues completion-related paperwork on its own schedule. Confirm facts with the international student office or registrar — do not invent form names from blogs.",
        ],
        bullets: [
          "Confirm your program end / completion date in writing with the school (portal, advisor email, or official letter — whatever they use)",
          "Ask what completion letters, transcripts, or other documents they issue for graduates or program completers — and typical timelines for each",
          "Ask how to request those documents and where they appear (student portal, sealed transcript, advisor letter, etc.)",
          "Keep passport, study-permit documents, and school letters organized (print + secure digital copies)",
          "Note any address-update or enrolment-reporting steps your school mentions — then verify related IRCC instructions yourself",
        ],
        callout: {
          kind: "warning",
          text: "Norra will not invent official document titles beyond common \"confirm with your school\" framing. If someone sells a \"required letter template\" that your school never mentioned, pause and ask the school.",
        },
      },
      {
        heading: "2. Gather documents — verify on IRCC",
        paragraphs: [
          "When you research post-graduation work options, IRCC publishes a get-documents page that explains what they ask for in general terms. Your exact package depends on your situation — read the live page; do not copy a screenshot from a friend.",
        ],
        bullets: [
          "[Get the documents you need (IRCC — after graduation)](https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation/get-documents.html)",
          "[Study permits (IRCC)](https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit.html)",
          "[Study in Canada overview](https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html)",
          "Cross-check names and dates across passport, permit, and school records before you upload anything anywhere",
        ],
        callout: {
          kind: "verify",
          text: "Open IRCC only from canada.ca. Prefer typing the path or using bookmarks you created yourself — lookalike domains are a common fraud pattern.",
        },
      },
      {
        heading: "3. Review the PGWP / post-graduation work guide",
        paragraphs: [
          "After school paperwork is clearer, read Norra's PGWP orientation for a calm research map — then open IRCC's About, Eligibility, How to apply, and After you apply pages yourself. Norra does not decide if you qualify or for how long.",
        ],
        bullets: [
          "[PGWP / post-graduation work orientation (Norra)](/resources/pgwp-post-graduation-work)",
          "[Work after graduation (IRCC hub)](https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation.html)",
          "[About the PGWP](https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation/about.html)",
          "[Eligibility](https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation/eligibility.html)",
          "[How to apply](https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation/apply.html)",
        ],
        callout: {
          kind: "verify",
          text: "Processing times, fees, biometrics, and forms change. Never trust a third-party \"apply by this date\" claim — open the live IRCC page for the step you are on.",
        },
      },
      {
        heading: "4. Plan work and study goals in Norra",
        paragraphs: [
          "Whether you stay enrolled in further study, look for work, or both, put the intention into My Canada Plan so checklists and guide recommendations can lean that way.",
        ],
        bullets: [
          "[My Canada Plan — Study](/plan/?goal=study) while school tasks still matter",
          "[My Canada Plan — Work](/plan/?goal=work) when employment is the focus",
          "[Finding your first Canadian job](/resources/first-canadian-job) — search habits; confirm authorization on IRCC",
          "[Jobs (sample layout)](/jobs) — fictional employers for UI only, labelled as sample",
          "[International student first weeks](/resources/first-weeks-international-student) if you are restarting campus routines after a break or new program",
        ],
        callout: {
          kind: "tip",
          text: "You can hold both Study and Work goals on one plan. Needs like Banking & SIN and Government benefits pull the matching settlement items.",
        },
      },
      {
        heading: "5. SIN, banking, and taxes — if needed",
        paragraphs: [
          "If you will work or file Canadian taxes, everyday settlement systems matter. Eligibility and exact steps are defined by Service Canada, your bank, and CRA — not by Norra.",
        ],
        bullets: [
          "[Get a SIN in Canada](/resources/get-sin-canada) — Service Canada navigation; verify eligibility there",
          "[Open a bank account as a newcomer](/resources/open-bank-account-newcomer) — FCAC-linked orientation",
          "[Filing taxes as a newcomer (CRA)](/resources/newcomer-taxes-canada) — no invented brackets or refund amounts",
        ],
        callout: {
          kind: "tip",
          text: "Skip what does not apply yet. Bookmark the guides so you are not inventing steps under deadline pressure later.",
        },
      },
      {
        heading: "What Norra will never tell you",
        bullets: [
          "That you \"will get\" a PGWP or any other permit, or for how many months",
          "Invented school document names beyond asking your school what they issue",
          "Processing times, fees, or eligibility shortcuts copied from memory or social media",
          "Which paid consultant to hire, or that a sample marketplace profile is a real booking",
        ],
        callout: {
          kind: "warning",
          text: "Anyone guaranteeing approval, selling \"priority processing\" outside IRCC, or asking for gift cards / crypto is a red flag. See [avoid newcomer scams](/resources/avoid-newcomer-scams) and open IRCC contact pages yourself from canada.ca.",
        },
      },
      {
        heading: "Put this into My Canada Plan",
        paragraphs: [
          "Open My Canada Plan with goal Study and/or Work, choose a stage that matches where you are (for example Settling in or Already living in Canada), add your city, and tick school-confirmation, IRCC-research, and settlement items as you finish them.",
        ],
      },
    ],
  },

  {
    slug: "newcomer-taxes-canada",
    title: "Filing taxes in Canada as a newcomer (orientation)",
    metaTitle: "Newcomer Taxes in Canada — CRA Orientation Guide",
    metaDescription:
      "Orientation for newcomers, students, and workers filing taxes in Canada: CRA starting points, get-ready steps, benefits bookmarks, My Account, and scam warnings — no invented brackets, credits, or refund amounts.",
    eyebrow: "Government",
    summary:
      "A calm map of how newcomers usually approach Canadian personal taxes and CRA benefits pages — organization only. Eligibility, amounts, and deadlines come from CRA / Canada.ca, never from Norra.",
    topics: [
      "taxes",
      "CRA",
      "newcomer",
      "students",
      "workers",
      "GST",
      "benefits",
      "My Account",
      "SIN",
      "filing",
      "government",
    ],
    readingMinutes: 11,
    updatedLabel: "Sep 2026",
    datePublished: "2026-09-26",
    dateModified: "2026-09-26",
    planCtaHref: "/plan/?need=benefits",
    relatedHrefs: [
      { label: "My Canada Plan (Government benefits)", href: "/plan/?need=benefits" },
      { label: "Government & benefits map", href: "/government" },
      { label: "Get a SIN", href: "/resources/get-sin-canada" },
      { label: "Open a bank account", href: "/resources/open-bank-account-newcomer" },
      { label: "First week in Canada", href: "/resources/first-week-in-canada" },
      { label: "International student first weeks", href: "/resources/first-weeks-international-student" },
      { label: "PGWP / post-grad work orientation", href: "/resources/pgwp-post-graduation-work" },
      { label: "Avoid newcomer scams", href: "/resources/avoid-newcomer-scams" },
    ],
    sections: [
      {
        heading: "What this guide is (and is not)",
        paragraphs: [
          "Canadian personal taxes and many federal benefits are administered by the Canada Revenue Agency (CRA). Newcomers, international students who work, and temporary workers often need a simple map of where to start — not a calculator of what they will get back.",
          "Norra does not invent tax brackets, credit amounts, refund estimates, filing deadlines, or eligibility. Those change and depend on your residency status, income, and province or territory. Always verify on CRA / Canada.ca pages for the tax year that applies to you.",
        ],
        callout: {
          kind: "verify",
          text: "Official starting points: [Canada Revenue Agency](https://www.canada.ca/en/revenue-agency.html) · [CRA — Newcomers to Canada](https://www.canada.ca/en/revenue-agency/services/tax/international-non-residents/individuals-leaving-entering-canada-non-residents/newcomers-canada-immigrants.html) · [Get ready to file a tax return](https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax/get-ready-taxes.html)",
        },
      },
      {
        heading: "Why taxes show up on a newcomer checklist",
        paragraphs: [
          "Filing a return is how many people report income and how CRA learns enough to assess certain benefits and credits. Whether you must file, and for which years, depends on your situation — CRA explains this for newcomers and for people who leave or enter Canada.",
          "Students and workers who earn Canadian employment income commonly encounter T4 slips, SIN usage for payroll, and questions about benefits. Treat social-media \"you will get X\" claims as unverified.",
        ],
        bullets: [
          "Use CRA newcomers pages before assuming first-year rules from blogs",
          "Keep pay stubs, T-slips, tuition receipts, and donation receipts organized (Document habits — not tax advice)",
          "A Social Insurance Number is often part of payroll and tax filing workflows — see Norra's SIN guide and Service Canada",
          "A Canadian bank account helps with direct deposit of refunds or benefits when CRA offers that — see banking orientation and CRA direct-deposit pages",
        ],
        callout: {
          kind: "tip",
          text: "In My Canada Plan, add the need \"Government benefits\" so the CRA / taxes checklist item appears. Cross-link Banking & SIN if you are still setting those up.",
        },
      },
      {
        heading: "Quick orientation checklist (verify every step on CRA)",
        bullets: [
          "Open the CRA newcomers page and read the sections that match your residency and arrival timing",
          "Skim Canada.ca \"Get ready to file\" so you know what documents people commonly gather",
          "Confirm you have (or are eligible to apply for) a SIN when work or filing requires one — Service Canada defines SIN rules",
          "Bookmark CRA My Account information if you will manage filings or benefits online — create accounts only through official links",
          "Review Canada.ca Benefits and CRA child-and-family benefit overviews if you may qualify — eligibility is decided by CRA, not Norra",
          "Watch for CRA scam patterns: gift-card payments, crypto demands, and threats delivered only by text",
        ],
        callout: {
          kind: "verify",
          text: "Benefits overview: [Canada.ca — Benefits](https://www.canada.ca/en/services/benefits.html) · [CRA — Child and family benefits](https://www.canada.ca/en/revenue-agency/services/child-family-benefits.html) · [GST/HST credit](https://www.canada.ca/en/revenue-agency/services/child-family-benefits/goods-services-tax-harmonized-sales-tax-gst-hst-credit.html)",
        },
      },
      {
        heading: "Students and workers — same honesty rules",
        paragraphs: [
          "International students and temporary workers are not a single tax category. Residency for tax purposes, scholarship treatment, and work income rules are defined by CRA — and they interact with your immigration status in ways Norra will not summarize as advice.",
          "If you work on or off campus, keep employer slips and confirm on IRCC what your permit allows. Tax filing does not replace immigration compliance.",
        ],
        callout: {
          kind: "verify",
          text: "International / non-resident tax topics hub: [CRA — International and non-residents](https://www.canada.ca/en/revenue-agency/services/tax/international-non-residents.html). Study-permit work conditions: [Study in Canada — IRCC](https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html).",
        },
      },
      {
        heading: "My Account, filing channels, and direct deposit",
        paragraphs: [
          "CRA publishes how individuals can register for My Account, file electronically (for example NETFILE where eligible), or send a paper return. Which channel fits you depends on CRA rules for that year — read the official pages rather than third-party ads.",
          "Direct deposit is often how refunds and some benefits are paid when you set it up with CRA. That still requires accurate banking details you control — never share online-banking passwords with someone who claims to \"file for you faster.\"",
        ],
        bullets: [
          "My Account (individuals): https://www.canada.ca/en/revenue-agency/services/e-services/digital-services-individuals/account-individuals.html",
          "NETFILE overview: https://www.canada.ca/en/revenue-agency/services/e-services/digital-services-individuals/netfile-overview.html",
          "Sending a tax return: https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/sending-a-tax-return.html",
          "Direct deposit: https://www.canada.ca/en/revenue-agency/services/about-canada-revenue-agency-cra/direct-deposit.html",
          "Deductions, credits, and expenses topics: https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses.html",
        ],
        callout: {
          kind: "tip",
          text: "Prefer typing canada.ca URLs yourself or using links from pages you already trust. Lookalike domains are a common fraud pattern.",
        },
      },
      {
        heading: "What Norra will not tell you",
        bullets: [
          "Your tax bracket, marginal rate, or \"average refund\"",
          "That you \"will get\" a specific GST/HST credit, CCB payment, or rebate amount",
          "Invented deadlines or \"file by this date or else\" claims copied from memory",
          "Which commercial tax software is \"best\" or which accountant to hire",
        ],
        callout: {
          kind: "warning",
          text: "Anyone guaranteeing a refund size, demanding payment in gift cards, or asking you to install remote-access software to \"talk to CRA\" is a red flag. See CRA scams guidance and Norra's Avoid newcomer scams guide.",
        },
      },
      {
        heading: "Scam-aware habits around CRA",
        paragraphs: [
          "CRA publishes scam and fraud warnings. Impersonators often create urgency: arrest threats, suspended SIN stories, or pressure to pay immediately outside normal channels.",
        ],
        bullets: [
          "CRA will not ask you to pay taxes with gift cards, crypto, or prepaid credit cards",
          "Do not share My Account passwords or one-time codes from cold calls or texts",
          "If unsure, hang up and open contact information from canada.ca yourself",
          "Norra's sample marketplace tax-pro cards are demo layout only — not endorsed preparers",
        ],
        callout: {
          kind: "verify",
          text: "[CRA — Scams and fraud](https://www.canada.ca/en/revenue-agency/corporate/scams-fraud.html) · [CRA contact information](https://www.canada.ca/en/revenue-agency/corporate/contact-information.html)",
        },
      },
      {
        heading: "Put it on My Canada Plan",
        paragraphs: [
          "Add need \"Government benefits\" (and Banking & SIN if needed). The plan checklist includes a CRA / taxes bookmark item that links back here and to official newcomers pages. Tick items as you finish — progress stays in this browser until accounts exist.",
        ],
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

/** Curated hub chips — maps to guide.eyebrow values */
export const hubTopicChips: { id: string; label: string }[] = [
  { id: "all", label: "All" },
  { id: "Pre-arrival", label: "Pre-arrival" },
  { id: "Arrival", label: "Arrival" },
  { id: "Student", label: "Student" },
  { id: "Government", label: "Government" },
  { id: "Health", label: "Health" },
  { id: "Banking", label: "Banking" },
  { id: "Housing", label: "Housing" },
  { id: "Work", label: "Work" },
  { id: "Cities", label: "Cities" },
  { id: "Safety", label: "Safety" },
];


/** Curated homepage / hub featured slugs (order matters) */
export const featuredGuideSlugs = [
  "get-sin-canada",
  "open-bank-account-newcomer",
  "get-health-card-canada",
  "newcomer-taxes-canada",
  "finishing-your-program",
  "pgwp-post-graduation-work",
  "avoid-newcomer-scams",
  "first-weeks-international-student",
  "first-week-in-canada",
] as const;

export function getFeaturedGuides(): Guide[] {
  const bySlug = new Map(guides.map((g) => [g.slug, g]));
  return featuredGuideSlugs.map((s) => bySlug.get(s)).filter(Boolean) as Guide[];
}

export function filterGuides(query: string, topic: string = "all"): Guide[] {
  const q = query.trim().toLowerCase();
  const topicNorm = topic.trim();
  const byTopic =
    !topicNorm || topicNorm.toLowerCase() === "all"
      ? guides
      : guides.filter((g) => {
          const want = topicNorm.toLowerCase();
          if (g.eyebrow.toLowerCase() === want) return true;
          return g.topics.some((t) => t.toLowerCase() === want);
        });
  if (!q) return byTopic;
  const terms = q.split(/\s+/).filter(Boolean);
  return byTopic.filter((g) => {
    const corpus = guideSearchCorpus(g);
    return terms.every((t) => corpus.includes(t));
  });
}

/** Words in a guide (title, summary, section headings, paragraphs, bullets, callouts). */
export function guideWordCount(guide: Guide): number {
  const chunks: string[] = [guide.title, guide.summary];
  for (const s of guide.sections) {
    chunks.push(s.heading);
    if (s.paragraphs) chunks.push(...s.paragraphs);
    if (s.bullets) chunks.push(...s.bullets);
    if (s.callout?.text) chunks.push(s.callout.text.replace(/\]\([^)]*\)/g, "]"));
  }
  return chunks.join(" ").split(/\s+/).filter(Boolean).length;
}

/** Reading time computed from actual word count (~220 wpm), minimum 1 minute. */
export function guideReadingMinutes(guide: Guide): number {
  return Math.max(1, Math.round(guideWordCount(guide) / 220));
}
