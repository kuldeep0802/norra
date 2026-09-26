/**
 * SEO / funnel landing pages for future provider categories.
 * Slugs map to PartnerInterestForm category labels — no fake providers.
 */
export type PartnerCategoryLanding = {
  slug: string;
  /** Exact value used in PartnerInterestForm select */
  formCategory: string;
  title: string;
  metaDescription: string;
  eyebrow: string;
  summary: string;
  futureMightOffer: string[];
  whoThisIsFor: string[];
  relatedGuides: { label: string; href: string }[];
};

export const partnerCategoryLandings: PartnerCategoryLanding[] = [
  {
    slug: "immigration-navigation",
    formCategory: "Immigration / RCIC or lawyer",
    title: "Immigration navigation providers",
    metaDescription:
      "Early-stage interest page for immigration navigators, RCICs, and immigration lawyers exploring a future Norra marketplace. Not live — not verified.",
    eyebrow: "Future category · Immigration",
    summary:
      "Newcomers often need help finding licensed immigration advice and understanding where official IRCC processes live. Norra is exploring how verified professionals might appear in a future marketplace — that marketplace is not live yet.",
    futureMightOffer: [
      "Clearer discovery of licensed RCICs and immigration lawyers (with regulator links you can check yourself)",
      "Structured intake so newcomers bring the right documents to a first consultation",
      "Hand-off from My Canada Plan checklists into booking flows — still conceptual",
    ],
    whoThisIsFor: [
      "Regulated Canadian immigration consultants (CICC / RCIC) and immigration lawyers",
      "Practices that already serve newcomers and want an early signal of interest",
      "Not for claiming “Norra verified” status — verification does not exist yet",
    ],
    relatedGuides: [
      { label: "Immigration overview", href: "/immigration" },
      { label: "Prepare before landing", href: "/resources/prepare-before-landing" },
      { label: "My Canada Plan", href: "/plan" },
    ],
  },
  {
    slug: "career-coaching",
    formCategory: "Career / employment",
    title: "Career coaching & employment support",
    metaDescription:
      "Early-stage interest page for career coaches and employment supports exploring a future Norra marketplace. Not live — not verified.",
    eyebrow: "Future category · Career",
    summary:
      "Finding a first Canadian job is a major stress point. A future Norra marketplace might help newcomers discover career coaches and employment supports — honestly labelled, with no fake “placed X clients” claims. Nothing here is live yet.",
    futureMightOffer: [
      "Profiles for career coaches and employment navigators (credentials self-declared until real checks exist)",
      "Links from resume and job-search guides into optional booking",
      "Filters by city, language, and industry focus — design only for now",
    ],
    whoThisIsFor: [
      "Career coaches, employment counsellors, and job-search facilitators serving newcomers",
      "Settlement employment programs that may want referrals later",
      "Not a job board and not a guarantee of hiring outcomes",
    ],
    relatedGuides: [
      { label: "Canadian resume guide", href: "/resources/canadian-resume" },
      { label: "Finding your first Canadian job", href: "/resources/first-canadian-job" },
      { label: "Sample jobs layout", href: "/jobs" },
    ],
  },
  {
    slug: "tutoring-language",
    formCategory: "Tutoring / education",
    title: "Tutoring & language education",
    metaDescription:
      "Early-stage interest page for tutors and language educators exploring a future Norra marketplace. Not live — not verified.",
    eyebrow: "Future category · Education",
    summary:
      "Language practice and tutoring help many newcomers settle into school and work. Norra may one day list tutors and language educators in a marketplace. Today this page is an interest funnel only — no live bookings, no verified tutors.",
    futureMightOffer: [
      "Discovery of tutors and language coaches by subject, age group, and city",
      "Session packaging for IELTS/CELPIP prep, school support, or workplace English — conceptual",
      "Clear labelling so demo content is never mistaken for real educators",
    ],
    whoThisIsFor: [
      "Independent tutors, language schools, and education coaches",
      "Providers who already work with newcomer families or students",
      "Not an endorsement of any curriculum or test outcome",
    ],
    relatedGuides: [
      { label: "Students overview", href: "/students" },
      { label: "Compare Canadian cities", href: "/resources/compare-canadian-cities" },
      { label: "My Canada Plan", href: "/plan" },
    ],
  },
  {
    slug: "settlement-orientation",
    formCategory: "Settlement / community",
    title: "Settlement & orientation support",
    metaDescription:
      "Early-stage interest page for settlement and orientation providers exploring a future Norra marketplace. Not live — not verified.",
    eyebrow: "Future category · Settlement",
    summary:
      "Settlement agencies and community navigators already help newcomers with orientation, language, and referrals. Norra wants to complement — not replace — those services. A future marketplace might surface orientation supports; it is not live and nobody is verified here.",
    futureMightOffer: [
      "Directory-style discovery of settlement and orientation supports by city",
      "Warm hand-offs from My Canada Plan arrival checklists",
      "Clear separation between free community services and paid navigators",
    ],
    whoThisIsFor: [
      "Settlement agencies, community organizations, and orientation facilitators",
      "Independent settlement navigators who already serve newcomers",
      "Not a substitute for IRCC or provincial settlement directories on Canada.ca",
    ],
    relatedGuides: [
      { label: "Settlement overview", href: "/settlement" },
      { label: "Your first week in Canada", href: "/resources/first-week-in-canada" },
      { label: "Settle in Canada (official)", href: "https://www.canada.ca/en/immigration-refugees-citizenship/services/settle-canada.html" },
    ],
  },
  {
    slug: "accounting-tax",
    formCategory: "Financial / banking orientation",
    title: "Accounting, tax & financial orientation",
    metaDescription:
      "Early-stage interest page for accountants and financial orientation providers exploring a future Norra marketplace. Not live — not verified.",
    eyebrow: "Future category · Financial",
    summary:
      "Newcomers often need orientation on banking, SIN, and later tax filing — not product pitches. A future Norra marketplace might list accountants and financial orientation providers. Today: interest list only. No fake firms, no “best bank” rankings, no verified badges.",
    futureMightOffer: [
      "Discovery of accountants and tax preparers who work with newcomers",
      "Links from banking and SIN guides into optional consultations",
      "Strong disclaimers: Norra is not financial advice; CRA and FCAC remain the official sources",
    ],
    whoThisIsFor: [
      "Accountants, tax preparers, and financial orientation educators",
      "Professionals comfortable pointing clients to CRA / FCAC first",
      "Not for selling investments or claiming guaranteed refunds",
    ],
    relatedGuides: [
      { label: "Open a bank account (newcomer)", href: "/resources/open-bank-account-newcomer" },
      { label: "Get a SIN", href: "/resources/get-sin-canada" },
      { label: "Government navigation", href: "/government" },
    ],
  },
];

export function getPartnerCategoryBySlug(slug: string): PartnerCategoryLanding | undefined {
  return partnerCategoryLandings.find((c) => c.slug === slug);
}

/** Map query param (slug or form label) → form category value */
export function resolvePartnerFormCategory(param: string | null | undefined): string {
  if (!param) return "";
  const decoded = decodeURIComponent(param).trim();
  const bySlug = partnerCategoryLandings.find((c) => c.slug === decoded);
  if (bySlug) return bySlug.formCategory;
  const byLabel = partnerCategoryLandings.find(
    (c) => c.formCategory.toLowerCase() === decoded.toLowerCase()
  );
  if (byLabel) return byLabel.formCategory;
  // Allow exact match to any form category string (including Housing-adjacent, etc.)
  return decoded;
}
