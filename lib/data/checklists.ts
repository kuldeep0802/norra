export type ChecklistItem = {
  id: string;
  label: string;
  description?: string;
  category: string;
  href?: string;
};

export const beforeYouArriveItems: ChecklistItem[] = [
  { id: "bya-1", label: "Valid passport with enough blank pages", category: "Documents" },
  { id: "bya-2", label: "Visa / permit / eTA confirmation printed + digital", category: "Documents", href: "/immigration" },
  { id: "bya-3", label: "Letter of acceptance or job offer (if applicable)", category: "Documents" },
  { id: "bya-4", label: "Proof of funds / financial documents", category: "Documents" },
  { id: "bya-5", label: "Travel medical insurance for first weeks", category: "Insurance", href: "/services/healthcare" },
  { id: "bya-6", label: "Temporary accommodation booked (first 1–2 weeks)", category: "Housing", href: "/housing" },
  { id: "bya-7", label: "Airport pickup or transit plan to lodging", category: "Airport", href: "/arrival" },
  { id: "bya-8", label: "Canadian SIM / eSIM research", category: "Connectivity", href: "/services/sim-internet" },
  { id: "bya-9", label: "Notify bank of travel; pack cards + some CAD cash", category: "Banking", href: "/services/banking-finance" },
  { id: "bya-10", label: "School enrollment / orientation dates confirmed", category: "Education", href: "/students" },
  { id: "bya-11", label: "Employment start date and onboarding docs ready", category: "Work", href: "/jobs" },
  { id: "bya-12", label: "Weather-appropriate packing for your arrival city", category: "Everyday", href: "/cities" },
  { id: "bya-13", label: "Emergency contacts + embassy/consulate info saved", category: "Safety", href: "/safety" },
  { id: "bya-14", label: "Digital copies of all key documents in secure cloud", category: "Documents", href: "/documents" },
];

export const arrivalItems: ChecklistItem[] = [
  { id: "arr-1", label: "Clear immigration / CBSA hall with documents ready", category: "Airport" },
  { id: "arr-2", label: "Collect luggage and meet pickup (or find transit)", category: "Airport", href: "/arrival" },
  { id: "arr-3", label: "Get a local SIM / eSIM and test data", category: "Connectivity" },
  { id: "arr-4", label: "Check into temporary housing", category: "Housing" },
  { id: "arr-5", label: "Buy essentials (toiletries, snacks, transit card)", category: "Everyday" },
  { id: "arr-6", label: "Open a bank account (bring ID + status docs)", category: "Banking" },
  { id: "arr-7", label: "Apply for SIN when eligible", category: "Government", href: "/government" },
  { id: "arr-8", label: "Start provincial health coverage process", category: "Healthcare", href: "/government" },
  { id: "arr-9", label: "Attend orientation / settlement intake if booked", category: "Settlement", href: "/settlement" },
];

export const planNeedOptions = [
  "Immigration & status",
  "Find housing",
  "Find a job",
  "Airport & arrival",
  "Banking & SIN",
  "Healthcare registration",
  "School / kids",
  "Connect with professionals",
  "Learn the city",
  "Government benefits",
] as const;

export const statusOptions = [
  "Planning to come",
  "Visitor / TRV",
  "Study permit",
  "Work permit / PGWP",
  "Temporary resident (other)",
  "Permanent resident",
  "Citizen",
  "Prefer not to say",
] as const;
