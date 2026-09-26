export type Provider = {
  id: string;
  name: string;
  title: string;
  category: string;
  city: string;
  province: string;
  photo: string;
  description: string;
  services: string[];
  languages: string[];
  rateFrom: number;
  rateUnit: "hour" | "session" | "package";
  rating: number;
  reviewCount: number;
  verification: "Sample profile";
  availability: string;
  demo: true;
  bio: string;
  reviews: { author: string; rating: number; text: string; date: string }[];
};

export const providerCategories = [
  "Immigration consultants (RCIC)",
  "Immigration lawyers",
  "Career coaches",
  "Settlement workers",
  "Tax & accounting",
  "Real estate agents",
  "Notaries",
  "Tutors & education",
  "Healthcare navigators",
  "Airport & transfer services",
  "Housing move-in help",
  "Language instructors",
] as const;

export const providers: Provider[] = [
  {
    id: "prov-1",
    name: "Amrita Sandhu",
    title: "Regulated Immigration Consultant (Demo)",
    category: "Immigration consultants (RCIC)",
    city: "Toronto",
    province: "ON",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    description: "Study and work permit document prep guidance. Demo provider for UI purposes.",
    services: ["Study permit prep", "PGWP overview sessions", "Document checklist reviews"],
    languages: ["English", "Punjabi", "Hindi"],
    rateFrom: 39,
    rateUnit: "session",
    rating: 4.9,
    reviewCount: 48,
    verification: "Sample profile",
    availability: "Next available: Tue",
    demo: true,
    bio: "Demo profile — Amrita helps newcomers organize application documents and understand process steps. For regulated advice, confirm current RCIC status on the official College of Immigration and Citizenship Consultants registry. Norra does not provide immigration advice.",
    reviews: [
      { author: "Priya M.", rating: 5, text: "Clear checklist session — helped me feel organized. (Demo review)", date: "2026-08-12" },
      { author: "James L.", rating: 5, text: "Professional and realistic about timelines. (Demo review)", date: "2026-07-28" },
    ],
  },
  {
    id: "prov-2",
    name: "Marcus Chen",
    title: "Career Coach",
    category: "Career coaches",
    city: "Vancouver",
    province: "BC",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    description: "Canadian resume, LinkedIn, and interview coaching for internationally trained professionals.",
    services: ["Resume rewrite", "LinkedIn audit", "Mock interviews"],
    languages: ["English", "Mandarin"],
    rateFrom: 35,
    rateUnit: "hour",
    rating: 4.8,
    reviewCount: 72,
    verification: "Sample profile",
    availability: "Next available: Tomorrow",
    demo: true,
    bio: "Demo profile — Marcus specializes in translating international experience into Canadian hiring language. Not a recruiter; coaching only.",
    reviews: [
      { author: "Wei Z.", rating: 5, text: "My resume finally sounded Canadian. (Demo review)", date: "2026-09-01" },
    ],
  },
  {
    id: "prov-3",
    name: "Sofia Moreau",
    title: "Settlement Navigator",
    category: "Settlement workers",
    city: "Montreal",
    province: "QC",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    description: "First-month orientation, banking walkthroughs, and community connections in Greater Montreal.",
    services: ["Arrival orientation", "Banking & SIN walkthrough", "Community mapping"],
    languages: ["French", "English", "Spanish"],
    rateFrom: 32,
    rateUnit: "session",
    rating: 4.7,
    reviewCount: 35,
    verification: "Sample profile",
    availability: "Next available: Thu",
    demo: true,
    bio: "Demo profile — Sofia helps families navigate their first weeks in Quebec. Not a government employee; not immigration advice.",
    reviews: [
      { author: "Ana R.", rating: 5, text: "Made our first week so much calmer. (Demo review)", date: "2026-08-20" },
    ],
  },
  {
    id: "prov-4",
    name: "Daniel Okonkwo",
    title: "CPA, Tax Advisor (Demo)",
    category: "Tax & accounting",
    city: "Calgary",
    province: "AB",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    description: "Newcomer tax filing education and personal tax prep. Sample profile for layout only — not a real CPA listing.",
    services: ["Personal tax return", "Newcomer tax orientation", "GST/HST credit questions"],
    languages: ["English"],
    rateFrom: 39,
    rateUnit: "package",
    rating: 4.9,
    reviewCount: 61,
    verification: "Sample profile",
    availability: "Booking for tax season",
    demo: true,
    bio: "Demo profile — fictional tax-services layout, not a real person. Confirm any real preparer's credentials independently. Norra is not a financial institution.",
    reviews: [
      { author: "Chris P.", rating: 5, text: "Patient explanations for first Canadian return. (Demo review)", date: "2026-04-15" },
    ],
  },
  {
    id: "prov-5",
    name: "Emily Fraser",
    title: "Airport Transfer & Concierge",
    category: "Airport & transfer services",
    city: "Toronto",
    province: "ON",
    photo: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80",
    description: "YYZ/YTZ pickup, SIM handoff, and temporary housing drop-off for arriving families.",
    services: ["Airport pickup", "SIM setup help", "Temp housing transfer"],
    languages: ["English", "French"],
    rateFrom: 38,
    rateUnit: "session",
    rating: 4.8,
    reviewCount: 94,
    verification: "Sample profile",
    availability: "Most flights covered",
    demo: true,
    bio: "Demo profile — Emily's team meets arrivals at Pearson and Billy Bishop. Meet-and-greet style service for stress-free first hours.",
    reviews: [
      { author: "The Kapoor family", rating: 5, text: "Found us at arrivals with a clear sign. (Demo review)", date: "2026-09-10" },
    ],
  },
  {
    id: "prov-6",
    name: "Raj Patel",
    title: "Housing Move-in Helper",
    category: "Housing move-in help",
    city: "Brampton",
    province: "ON",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    description: "Lease walkthrough companionship, utility setup tips, and first grocery run support.",
    services: ["Lease walkthrough", "Utilities setup tips", "Area orientation"],
    languages: ["English", "Gujarati", "Hindi"],
    rateFrom: 29,
    rateUnit: "hour",
    rating: 4.6,
    reviewCount: 28,
    verification: "Sample profile",
    availability: "Weekends open",
    demo: true,
    bio: "Demo profile — Raj helps newcomers feel confident on move-in day. Not a landlord or real estate agent.",
    reviews: [
      { author: "Nisha S.", rating: 5, text: "Helped us avoid a sketchy listing. (Demo review)", date: "2026-07-02" },
    ],
  },
  {
    id: "prov-7",
    name: "Isabelle Tremblay",
    title: "Immigration Lawyer (Demo)",
    category: "Immigration lawyers",
    city: "Ottawa",
    province: "ON",
    photo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80",
    description: "Complex status questions, appeals orientation, and family sponsorship consultations.",
    services: ["Legal consultation", "Sponsorship overview", "Refusal review orientation"],
    languages: ["English", "French"],
    rateFrom: 39,
    rateUnit: "hour",
    rating: 4.9,
    reviewCount: 41,
    verification: "Sample profile",
    availability: "Consultations by appointment",
    demo: true,
    bio: "Demo profile — Isabelle is shown as a demo immigration lawyer. Always verify Law Society membership. Norra is not a law firm.",
    reviews: [
      { author: "Anonymous", rating: 5, text: "Clear about risks and options. (Demo review)", date: "2026-06-18" },
    ],
  },
  {
    id: "prov-8",
    name: "Noah Kim",
    title: "Math & STEM Tutor",
    category: "Tutors & education",
    city: "Edmonton",
    province: "AB",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    description: "High school and first-year university STEM tutoring for newcomer students.",
    services: ["Grade 9–12 math", "Physics boost", "Exam prep"],
    languages: ["English", "Korean"],
    rateFrom: 28,
    rateUnit: "hour",
    rating: 4.8,
    reviewCount: 56,
    verification: "Sample profile",
    availability: "Evenings & weekends",
    demo: true,
    bio: "Demo profile — Noah tutors online and in-person across Edmonton.",
    reviews: [
      { author: "Parent of Grade 11", rating: 5, text: "Patient and structured lessons. (Demo review)", date: "2026-05-22" },
    ],
  },
];

export function getProviderById(id: string) {
  return providers.find((p) => p.id === id);
}
