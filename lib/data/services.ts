export type ServiceCategory = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  color: string;
  href: string;
  services: { name: string; description: string; href?: string }[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "immigration-status",
    title: "Immigration & Status",
    shortTitle: "Immigration",
    description: "Navigate study permits, work permits, PR pathways, and status questions with clear guidance — and know when to hire an authorized representative independently.",
    icon: "FileCheck",
    color: "forest",
    href: "/immigration",
    services: [
      { name: "Study permit guidance", description: "Prep checklists and document organization for study permit applications." },
      { name: "Work permit & PGWP", description: "Understand common pathways and what documents you may need." },
      { name: "Visitor & TRV", description: "Travel document checklists and arrival planning." },
      { name: "PR pathways overview", description: "High-level maps of Express Entry, PNP, and family sponsorship — not eligibility advice." },
      { name: "Extensions & restoration", description: "Timelines and document prep; filings are made by you or a representative you choose." },
      { name: "Sample marketplace layout", description: "Fictional profiles only — check any real RCIC or lawyer on CICC / law society registries yourself.", href: "/professionals" },
    ],
  },
  {
    slug: "jobs-career",
    title: "Jobs & Career",
    shortTitle: "Jobs",
    description: "Explore demo job listings, career prep tools, and guidance for working in Canada.",
    icon: "Briefcase",
    color: "amber",
    href: "/jobs",
    services: [
      { name: "Job search", description: "Browse demo listings across Canadian cities.", href: "/jobs" },
      { name: "Resume review", description: "Book career coaches for Canadian-style resume help.", href: "/professionals" },
      { name: "LinkedIn optimization", description: "Profile reviews with career professionals." },
      { name: "Interview prep", description: "Mock interviews and coaching sessions." },
      { name: "Workplace culture tips", description: "Guides to Canadian workplace norms." },
    ],
  },
  {
    slug: "housing",
    title: "Housing",
    shortTitle: "Housing",
    description: "Find temporary and longer-term housing with scam-aware tips and clearly labelled sample listings — Norra does not list or inspect real rentals.",
    icon: "Home",
    color: "forest",
    href: "/housing",
    services: [
      { name: "Browse listings", description: "Furnished, shared, family, and studio options.", href: "/housing" },
      { name: "Temporary stay", description: "Airport-adjacent and short-term options.", href: "/arrival" },
      { name: "Anti-scam tips", description: "How to spot rental scams in Canada.", href: "/safety" },
      { name: "Lease walkthroughs", description: "General education on common lease terms." },
    ],
  },
  {
    slug: "education",
    title: "Education",
    shortTitle: "Education",
    description: "Student life, school transitions, and academic support for newcomers and international students.",
    icon: "GraduationCap",
    color: "sky",
    href: "/students",
    services: [
      { name: "Student hub", description: "Everything for studying in Canada.", href: "/students" },
      { name: "School search tips", description: "How to research DLI and programs." },
      { name: "Tutoring & academic help", description: "Connect with tutors via professionals marketplace.", href: "/professionals" },
    ],
  },
  {
    slug: "travel-airport",
    title: "Travel & Airport",
    shortTitle: "Airport",
    description: "Arrive with a plan — airport pickup, temporary housing, SIM, and first-week essentials.",
    icon: "Plane",
    color: "amber",
    href: "/arrival",
    services: [
      { name: "Airport pickup", description: "Book demo providers for pickup.", href: "/arrival" },
      { name: "Before you arrive checklist", description: "Personalized prep list.", href: "/before-you-arrive" },
      { name: "First week orientation", description: "Getting settled in your first days." },
    ],
  },
  {
    slug: "government-benefits",
    title: "Government & Benefits",
    shortTitle: "Government",
    description: "Understand SIN, taxes, benefits, healthcare registration, and provincial programs — with links toward official sources.",
    icon: "Landmark",
    color: "forest",
    href: "/government",
    services: [
      { name: "SIN guidance", description: "Where and how to apply — official process overview.", href: "/government" },
      { name: "CRA & taxes", description: "Filing basics and when to see a tax pro." },
      { name: "Benefits overview", description: "EI, CCB, GST/HST credit high-level maps." },
      { name: "Healthcare registration", description: "Provincial health card steps." },
    ],
  },
  {
    slug: "banking-finance",
    title: "Banking & Finance",
    shortTitle: "Banking",
    description: "Open accounts, understand credit, and navigate money in Canada. Not financial advice.",
    icon: "Wallet",
    color: "amber",
    href: "/services/banking-finance",
    services: [
      { name: "Opening a bank account", description: "What documents banks typically ask for." },
      { name: "Credit building basics", description: "General education — not personalized advice." },
      { name: "Sample advisor layouts", description: "Fictional profiles — choose any real advisor independently.", href: "/professionals" },
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare Navigation",
    shortTitle: "Healthcare",
    description: "Find clinics, understand provincial coverage, and know when to seek licensed medical care. Norra is not a medical provider.",
    icon: "HeartPulse",
    color: "forest",
    href: "/services/healthcare",
    services: [
      { name: "Health card registration", description: "Provincial steps overview.", href: "/government" },
      { name: "Find clinics & walk-ins", description: "How to locate care in your city." },
      { name: "When to see a professional", description: "Know when to seek licensed care — find practitioners through provincial resources." },
    ],
  },
  {
    slug: "transportation",
    title: "Transportation",
    shortTitle: "Transit",
    description: "Transit passes, driver licensing, rideshares, and getting around Canadian cities.",
    icon: "TrainFront",
    color: "sky",
    href: "/services/transportation",
    services: [
      { name: "Transit systems", description: "City transit overviews on city pages.", href: "/cities" },
      { name: "Driver licensing", description: "Provincial licensing steps.", href: "/government" },
      { name: "Airport transfers", description: "Book pickup services.", href: "/arrival" },
    ],
  },
  {
    slug: "sim-internet",
    title: "SIM & Internet",
    shortTitle: "SIM",
    description: "Get connected on day one — prepaid SIMs, plans, and home internet basics.",
    icon: "Smartphone",
    color: "amber",
    href: "/services/sim-internet",
    services: [
      { name: "Canadian phone / SIM / eSIM guide", description: "Day-one orientation: prepaid vs postpaid, eSIM, what to compare, CRTC rights — no carrier rankings.", href: "/resources/canadian-phone-sim-esim" },
      { name: "First week checklist", description: "Phone service sits beside banking, SIN, and lodging in week one.", href: "/resources/first-week-in-canada" },
      { name: "My Canada Plan", description: "Tick connectivity items for your stage — saves in this browser.", href: "/plan/?stage=just-arrived" },
      { name: "Arrival services", description: "Airport pickup and first-day logistics (sample bookings labelled).", href: "/arrival" },
    ],
  },
  {
    slug: "legal-professional",
    title: "Legal & Professional",
    shortTitle: "Legal",
    description: "Understand when you may need an immigration consultant, lawyer, or notary — and how to check their registration yourself.",
    icon: "Scale",
    color: "forest",
    href: "/professionals",
    services: [
      { name: "Sample marketplace", description: "Fictional demo profiles for layout only — not referrals.", href: "/professionals" },
      { name: "No verification yet", description: "Norra does not vet professionals today — check regulator registries (e.g. CICC, law societies) yourself." },
      { name: "When you need licensed advice", description: "Clear boundaries on what Norra can and cannot do." },
    ],
  },
  {
    slug: "settlement",
    title: "Settlement",
    shortTitle: "Settlement",
    description: "Build your life in Canada — community, language, employment programs, and everyday setup.",
    icon: "MapPinned",
    color: "sky",
    href: "/settlement",
    services: [
      { name: "Settlement checklist", description: "Personalized via My Canada Plan.", href: "/plan" },
      { name: "Community resources", description: "Local programs and supports.", href: "/settlement" },
      { name: "Language & skills", description: "ESL and skills programs overview." },
    ],
  },
  {
    slug: "family-children",
    title: "Family & Children",
    shortTitle: "Family",
    description: "Schooling, childcare, family sponsorship overviews, and settling with kids.",
    icon: "Users",
    color: "amber",
    href: "/services/family-children",
    services: [
      { name: "School enrollment", description: "Public school registration basics." },
      { name: "Childcare overview", description: "Types of care and provincial programs." },
      { name: "Family sponsorship info", description: "High-level pathway maps — not legal advice.", href: "/immigration" },
    ],
  },
  {
    slug: "everyday-life",
    title: "Everyday Life",
    shortTitle: "Everyday",
    description: "Shopping, groceries, weather prep, culture, and the small things that make Canada feel like home.",
    icon: "Coffee",
    color: "sky",
    href: "/services/everyday-life",
    services: [
      { name: "First grocery run", description: "Where to shop and what to expect." },
      { name: "Weather & packing", description: "Seasonal tips by region." },
      { name: "Culture & community", description: "Making friends and finding your people." },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return serviceCategories.find((s) => s.slug === slug);
}
