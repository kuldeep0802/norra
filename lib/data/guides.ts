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
      { label: "Get a SIN", href: "/resources/get-sin-canada" },
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
          text: "Official SIN information: canada.ca/en/employment-social-development/services/sin.html — then open Norra’s dedicated SIN checklist from Related links below.",
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
          text: "Start on the official SIN hub and follow the apply tool for your status: canada.ca/en/employment-social-development/services/sin.html — Apply path: canada.ca/en/employment-social-development/services/sin/apply.html",
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
          text: "Temporary residents overview: canada.ca/en/employment-social-development/services/sin/temporary-residents.html — Required documents overview: canada.ca/en/employment-social-development/services/sin/required-documents.html",
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
          text: "Official online application entry (Government of Canada): sin-nas.canada.ca/en/Sin/ — only use it after reading the Canada.ca Apply page for your situation.",
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
          text: "Financial Consumer Agency of Canada (FCAC) — opening a bank account: canada.ca/en/financial-consumer-agency/services/banking/opening-bank-account.html",
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
          text: "FCAC explains identification approaches and that you may be able to open an account even if you are not a Canadian citizen — confirm current details: canada.ca/en/financial-consumer-agency/services/banking/opening-bank-account.html",
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
          text: "Know your rights when opening a personal account: canada.ca/en/financial-consumer-agency/services/rights-responsibilities/rights-banking/accounts-rights-responsibilities.html",
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
  { id: "Government", label: "Government" },
  { id: "Banking", label: "Banking" },
  { id: "Housing", label: "Housing" },
  { id: "Work", label: "Work" },
  { id: "Cities", label: "Cities" },
  { id: "Safety", label: "Safety" },
];

export function filterGuides(query: string, topic: string = "all"): Guide[] {
  const q = query.trim().toLowerCase();
  const topicNorm = topic.trim();
  const byTopic =
    !topicNorm || topicNorm.toLowerCase() === "all"
      ? guides
      : guides.filter((g) => g.eyebrow.toLowerCase() === topicNorm.toLowerCase());
  if (!q) return byTopic;
  const terms = q.split(/\s+/).filter(Boolean);
  return byTopic.filter((g) => {
    const corpus = guideSearchCorpus(g);
    return terms.every((t) => corpus.includes(t));
  });
}
