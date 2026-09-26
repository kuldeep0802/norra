import {
  FEDERAL_HEALTH_OVERVIEW,
  HEALTH_CHECKLIST_BASE_IDS,
  resolveHealthLinksForPlan,
} from "./healthLinks";
import {
  BANKING_CHECKLIST_BASE_IDS,
  CRA_CHECKLIST_BASE_IDS,
  OFFICIAL_BANKING,
  OFFICIAL_CRA_NEWCOMERS,
  OFFICIAL_SIN,
  SIN_CHECKLIST_BASE_IDS,
} from "./officialLinks";

export type ChecklistItem = {
  id: string;
  label: string;
  description?: string;
  category: string;
  href?: string;
  /** Official source URL when pointing to factual gov pages */
  officialHref?: string;
  officialLabel?: string;
};

export type PlanStage =
  | "planning"
  | "pre-arrival"
  | "just-arrived"
  | "settling"
  | "already-here";

export type PlanGoal = "study" | "work" | "housing" | "settle";

export const stageOptions: { value: PlanStage; label: string; hint: string }[] = [
  {
    value: "planning",
    label: "Still planning / researching",
    hint: "Comparing cities, pathways, and what to prepare",
  },
  {
    value: "pre-arrival",
    label: "Approved / preparing to travel",
    hint: "Documents, lodging, and first-week logistics",
  },
  {
    value: "just-arrived",
    label: "Just landed (first 1–2 weeks)",
    hint: "Airport → SIM → temporary housing → essentials",
  },
  {
    value: "settling",
    label: "Settling in (first months)",
    hint: "SIN, health coverage, longer housing, work/school",
  },
  {
    value: "already-here",
    label: "Already living in Canada",
    hint: "Optimize housing, work, and everyday systems",
  },
];

export const goalOptions: { value: PlanGoal; label: string }[] = [
  { value: "study", label: "Study" },
  { value: "work", label: "Work" },
  { value: "housing", label: "Housing" },
  { value: "settle", label: "Settle / everyday life" },
];

export const beforeYouArriveItems: ChecklistItem[] = [
  {
    id: "bya-1",
    label: "Valid passport with enough blank pages",
    category: "Documents",
    description: "Check expiry dates for you and anyone travelling with you.",
  },
  {
    id: "bya-2",
    label: "Visa / permit / eTA confirmation saved (print + digital)",
    category: "Documents",
    href: "/immigration",
    officialHref: "https://www.canada.ca/en/immigration-refugees-citizenship.html",
    officialLabel: "IRCC",
  },
  {
    id: "bya-3",
    label: "Letter of acceptance or job offer packet (if applicable)",
    category: "Documents",
  },
  {
    id: "bya-4",
    label: "Proof-of-funds documents organized for border questions",
    category: "Documents",
    description: "What you need depends on your status — confirm on IRCC for your stream.",
    officialHref: "https://www.canada.ca/en/immigration-refugees-citizenship.html",
    officialLabel: "IRCC",
  },
  {
    id: "bya-5",
    label: "Travel medical insurance covering the first weeks",
    category: "Insurance",
    href: "/services/healthcare",
  },
  {
    id: "bya-6",
    label: "Temporary accommodation booked for first 1–2 weeks",
    category: "Housing",
    href: "/resources/temporary-accommodation",
  },
  {
    id: "bya-7",
    label: "Airport pickup or transit plan to lodging",
    category: "Airport",
    href: "/arrival",
  },
  {
    id: "bya-8",
    label: "Research Canadian SIM / eSIM options",
    category: "Connectivity",
    href: "/services/sim-internet",
  },
  {
    id: "bya-9",
    label: "Notify your bank of travel; pack cards + some CAD cash",
    category: "Banking",
    href: "/resources/open-bank-account-newcomer",
    officialHref: OFFICIAL_BANKING.href,
    officialLabel: OFFICIAL_BANKING.label,
  },
  {
    id: "bya-10",
    label: "School enrollment / orientation dates confirmed",
    category: "Education",
    href: "/students",
  },
  {
    id: "bya-11",
    label: "Employment start date and onboarding docs ready",
    category: "Work",
    href: "/jobs",
  },
  {
    id: "bya-12",
    label: "Weather-appropriate packing for your arrival city",
    category: "Everyday",
    href: "/cities",
  },
  {
    id: "bya-13",
    label: "Emergency contacts + embassy/consulate info saved offline",
    category: "Safety",
    href: "/safety",
  },
  {
    id: "bya-14",
    label: "Digital copies of key documents in secure cloud storage",
    category: "Documents",
    href: "/documents",
  },
];

export const arrivalItems: ChecklistItem[] = [
  {
    id: "arr-1",
    label: "Clear immigration / CBSA with documents ready in hand",
    category: "Airport",
    description: "Have passport, visa/permit/eTA, and supporting letters accessible — not buried in luggage.",
  },
  {
    id: "arr-2",
    label: "Collect luggage and follow your pickup or transit plan",
    category: "Airport",
    href: "/arrival",
  },
  {
    id: "arr-3",
    label: "Get a local SIM / eSIM and confirm data works",
    category: "Connectivity",
    href: "/services/sim-internet",
  },
  {
    id: "arr-4",
    label: "Check into temporary housing and save the address offline",
    category: "Housing",
    href: "/resources/temporary-accommodation",
  },
  {
    id: "arr-5",
    label: "Buy essentials (toiletries, snacks, transit card)",
    category: "Everyday",
  },
  {
    id: "arr-6",
    label: "Open a bank account when ready (bring ID + status docs)",
    category: "Banking",
    href: "/resources/open-bank-account-newcomer",
    officialHref: OFFICIAL_BANKING.href,
    officialLabel: OFFICIAL_BANKING.label,
  },
  {
    id: "arr-7",
    label: "Apply for a SIN when you are eligible",
    category: "Government",
    href: "/resources/get-sin-canada",
    officialHref: OFFICIAL_SIN.href,
    officialLabel: OFFICIAL_SIN.label,
  },
  {
    id: "arr-8",
    label: "Start provincial health coverage process for your province",
    category: "Healthcare",
    href: "/resources/get-health-card-canada",
    officialHref: "https://www.canada.ca/en/immigration-refugees-citizenship/services/settle-canada/health-care.html",
    officialLabel: "Health care in Canada",
  },
  {
    id: "arr-9",
    label: "Attend orientation / settlement intake if you booked one",
    category: "Settlement",
    href: "/settlement",
  },
];

export const settlingItems: ChecklistItem[] = [
  {
    id: "set-1",
    label: "Confirm SIN is issued and stored securely",
    category: "Government",
    href: "/resources/get-sin-canada",
    officialHref: OFFICIAL_SIN.href,
    officialLabel: OFFICIAL_SIN.label,
  },
  {
    id: "set-2",
    label: "Complete provincial health registration steps for your province",
    category: "Healthcare",
    description: "Waiting periods and forms differ by province — verify on your province’s site.",
    href: "/resources/get-health-card-canada",
    officialHref: "https://www.canada.ca/en/immigration-refugees-citizenship/services/settle-canada/health-care.html",
    officialLabel: "Health care overview",
  },
  {
    id: "set-3",
    label: "Search longer-term housing with a scam-aware checklist",
    category: "Housing",
    href: "/resources/temporary-accommodation",
  },
  {
    id: "set-4",
    label: "Set up Canadian banking for rent and payroll",
    category: "Banking",
    href: "/resources/open-bank-account-newcomer",
    officialHref: OFFICIAL_BANKING.href,
    officialLabel: OFFICIAL_BANKING.label,
  },
  {
    id: "set-5",
    label: "Find a family doctor / walk-in clinic near you",
    category: "Healthcare",
    href: "/services/healthcare",
  },
  {
    id: "set-6",
    label: "Learn local transit routes and reload your transit card",
    category: "Everyday",
    href: "/services/transportation",
  },
  {
    id: "set-7",
    label: "Bookmark IRCC account / status tools you actually use",
    category: "Immigration",
    href: "/immigration",
    officialHref: "https://www.canada.ca/en/immigration-refugees-citizenship.html",
    officialLabel: "IRCC",
  },
  {
    id: "set-8",
    label: "Connect with a settlement agency for language or employment help",
    category: "Settlement",
    href: "/settlement",
    officialHref: "https://www.canada.ca/en/immigration-refugees-citizenship/services/settle-canada.html",
    officialLabel: "Settle in Canada",
  },
];

export const studyItems: ChecklistItem[] = [
  {
    id: "stu-1",
    label: "Confirm program start date, orientation, and campus address",
    category: "Study",
    href: "/resources/first-weeks-international-student",
  },
  {
    id: "stu-2",
    label: "Review study-permit conditions on IRCC (not Norra)",
    category: "Study",
    officialHref: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html",
    officialLabel: "Study in Canada — IRCC",
  },
  {
    id: "stu-3",
    label: "Set up student email, portal, and tuition payment method",
    category: "Study",
    href: "/students",
  },
  {
    id: "stu-4",
    label: "Ask school about housing, health insurance, and work-on/off campus rules",
    category: "Study",
    href: "/students",
  },
  {
    id: "stu-5",
    label: "Bookmark IRCC post-graduation work / PGWP pages to verify later (not advice)",
    category: "Study",
    href: "/resources/pgwp-post-graduation-work",
    officialHref:
      "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation.html",
    officialLabel: "Work after graduation — IRCC",
  },
  {
    id: "stu-6",
    label: "Near program end: confirm dates/docs with school + finishing checklist (not advice)",
    category: "Study",
    href: "/resources/finishing-your-program",
    officialHref:
      "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation/get-documents.html",
    officialLabel: "Get documents — IRCC (after graduation)",
  },
];

export const workItems: ChecklistItem[] = [
  {
    id: "wrk-1",
    label: "Prepare a Canadian-style resume draft",
    category: "Work",
    href: "/resources/canadian-resume",
  },
  {
    id: "wrk-2",
    label: "List target roles and gather references / work samples",
    category: "Work",
    href: "/resources/first-canadian-job",
  },
  {
    id: "wrk-3",
    label: "Confirm you understand your work authorization (verify on IRCC)",
    category: "Work",
    officialHref: "https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada.html",
    officialLabel: "Work in Canada — IRCC",
  },
  {
    id: "wrk-4",
    label: "Set up Job Bank / LinkedIn alerts (use official & reputable sites)",
    category: "Work",
    href: "/jobs",
  },
  {
    id: "wrk-5",
    label: "If finishing a Canadian program, research PGWP on IRCC (verify yourself)",
    category: "Work",
    href: "/resources/pgwp-post-graduation-work",
    officialHref:
      "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation.html",
    officialLabel: "Work after graduation — IRCC",
  },
  {
    id: "wrk-6",
    label: "Near program end: finishing-your-program orientation checklist",
    category: "Work",
    href: "/resources/finishing-your-program",
  },
];

export const housingItems: ChecklistItem[] = [
  {
    id: "hou-1",
    label: "Decide temporary vs longer-term housing timeline",
    category: "Housing",
    href: "/resources/temporary-accommodation",
  },
  {
    id: "hou-2",
    label: "Budget for first/last month, deposits, and moving costs",
    category: "Housing",
    href: "/housing",
  },
  {
    id: "hou-3",
    label: "Use a scam-aware viewing checklist before sending money",
    category: "Housing",
    href: "/resources/avoid-newcomer-scams",
  },
  {
    id: "hou-4",
    label: "Compare neighbourhoods against commute and budget",
    category: "Housing",
    href: "/resources/compare-canadian-cities",
  },
];

export const alreadyHereItems: ChecklistItem[] = [
  {
    id: "here-1",
    label: "Review status documents and upcoming expiry dates",
    category: "Immigration",
    href: "/immigration",
    officialHref: "https://www.canada.ca/en/immigration-refugees-citizenship.html",
    officialLabel: "IRCC",
  },
  {
    id: "here-2",
    label: "Audit housing: lease terms, renewals, and scam-safe next moves",
    category: "Housing",
    href: "/housing",
  },
  {
    id: "here-3",
    label: "Update Canadian resume and job search plan",
    category: "Work",
    href: "/resources/canadian-resume",
  },
  {
    id: "here-4",
    label: "Confirm health card / coverage status for your province",
    category: "Healthcare",
    href: "/resources/get-health-card-canada",
    officialHref: "https://www.canada.ca/en/immigration-refugees-citizenship/services/settle-canada/health-care.html",
    officialLabel: "Health care overview",
  },
  {
    id: "here-5",
    label: "Organize taxes / benefits bookmarks for CRA when relevant",
    category: "Government",
    href: "/resources/newcomer-taxes-canada",
    officialHref: "https://www.canada.ca/en/revenue-agency/services/tax/international-non-residents/individuals-leaving-entering-canada-non-residents/newcomers-canada-immigrants.html",
    officialLabel: "CRA — Newcomers",
  },
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

/** @deprecated Prefer stageOptions; kept for older UI copy */
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

export type PlanProfile = {
  stage: PlanStage | "";
  city: string;
  /** Province/territory when city is Other / empty — used for health deep-links */
  province: string;
  arrival: string;
  family: string;
  goals: PlanGoal[];
  needs: string[];
  notes: string;
};

export const emptyPlanProfile: PlanProfile = {
  stage: "",
  city: "",
  province: "",
  arrival: "",
  family: "Just me",
  goals: [],
  needs: [],
  notes: "",
};

const PLAN_PROFILE_KEY = "norra-canada-plan-profile";

export function loadPlanProfile(): PlanProfile | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(PLAN_PROFILE_KEY);
    if (!raw) return null;
    return { ...emptyPlanProfile, ...JSON.parse(raw) } as PlanProfile;
  } catch {
    return null;
  }
}

export function savePlanProfile(profile: PlanProfile) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(PLAN_PROFILE_KEY, JSON.stringify(profile));
  } catch {
    /* ignore */
  }
}

export function clearPlanProfile() {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(PLAN_PROFILE_KEY);
  } catch {
    /* ignore */
  }
}

/** Build a stage- and goal-aware checklist (organization only — not legal advice). */
export function buildPlanChecklist(profile: PlanProfile): ChecklistItem[] {
  const items: ChecklistItem[] = [];
  const seen = new Set<string>();

  function add(list: ChecklistItem[]) {
    for (const item of list) {
      if (seen.has(item.id)) continue;
      seen.add(item.id);
      items.push(item);
    }
  }

  switch (profile.stage) {
    case "planning":
      add(beforeYouArriveItems.slice(0, 8));
      add(housingItems.slice(0, 2));
      break;
    case "pre-arrival":
      add(beforeYouArriveItems);
      add(arrivalItems.slice(0, 4));
      break;
    case "just-arrived":
      add(arrivalItems);
      add(settlingItems.slice(0, 4));
      break;
    case "settling":
      add(settlingItems);
      add(arrivalItems.filter((i) => ["arr-6", "arr-7", "arr-8"].includes(i.id)));
      break;
    case "already-here":
      add(alreadyHereItems);
      add(settlingItems.slice(0, 3));
      break;
    default:
      add(beforeYouArriveItems.slice(0, 6));
      add(arrivalItems.slice(0, 4));
  }

  if (profile.goals.includes("study")) add(studyItems);
  if (profile.goals.includes("work")) add(workItems);
  if (profile.goals.includes("housing")) add(housingItems);
  if (profile.goals.includes("settle")) add(settlingItems.slice(0, 5));

  // Need-based nudges
  if (profile.needs.includes("Find a job") && !profile.goals.includes("work")) add(workItems);
  if (profile.needs.includes("Find housing") && !profile.goals.includes("housing")) add(housingItems);
  if (profile.needs.includes("School / kids")) add(studyItems.slice(0, 2));
  if (profile.needs.includes("Banking & SIN")) {
    add(arrivalItems.filter((i) => ["arr-6", "arr-7"].includes(i.id)));
  }
  if (profile.needs.includes("Healthcare registration")) {
    add(settlingItems.filter((i) => i.id === "set-2" || i.id === "set-5"));
  }
  if (profile.needs.includes("Government benefits")) {
    add(alreadyHereItems.filter((i) => i.id === "here-5"));
  }

  const health = resolveHealthLinksForPlan(profile.city, profile.province);
  const provincialOfficial = health.provincial
    ? { href: health.provincial.href, label: `${health.provincial.planName} — official site` }
    : { href: FEDERAL_HEALTH_OVERVIEW.href, label: FEDERAL_HEALTH_OVERVIEW.label };

  return items.map((item) => {
    const baseId = item.id;
    const isHealthOfficial = (HEALTH_CHECKLIST_BASE_IDS as readonly string[]).includes(baseId);
    const isSinOfficial = (SIN_CHECKLIST_BASE_IDS as readonly string[]).includes(baseId);
    const isBankingOfficial = (BANKING_CHECKLIST_BASE_IDS as readonly string[]).includes(baseId);
    const isCraOfficial = (CRA_CHECKLIST_BASE_IDS as readonly string[]).includes(baseId);
    const next: ChecklistItem = {
      ...item,
      id: `plan-${profile.stage || "general"}-${item.id}`,
    };
    if (isHealthOfficial) {
      next.officialHref = provincialOfficial.href;
      next.officialLabel = provincialOfficial.label;
      if (health.provincial) {
        next.description =
          (item.description ? item.description + " " : "") +
          `Suggested starting point for ${health.province}: ${health.provincial.planName}. Always verify on the official site.`;
      } else {
        next.description =
          (item.description ? item.description + " " : "") +
          "Province unknown — use the national health guide and federal overview, or pick a province in your plan. Always verify on the official site.";
      }
    }
    if (isSinOfficial) {
      next.officialHref = OFFICIAL_SIN.href;
      next.officialLabel = OFFICIAL_SIN.label;
    }
    if (isBankingOfficial) {
      next.officialHref = OFFICIAL_BANKING.href;
      next.officialLabel = OFFICIAL_BANKING.label;
    }
    if (isCraOfficial) {
      next.officialHref = OFFICIAL_CRA_NEWCOMERS.href;
      next.officialLabel = OFFICIAL_CRA_NEWCOMERS.label;
    }
    return next;
  });
}

export type PlanRecommendation = {
  title: string;
  description: string;
  href: string;
  kind: "guide" | "service" | "sample";
  badge?: string;
};

export function getPlanRecommendations(profile: PlanProfile): PlanRecommendation[] {
  const out: PlanRecommendation[] = [];
  const push = (r: PlanRecommendation) => {
    if (out.some((x) => x.href === r.href)) return;
    out.push(r);
  };

  if (profile.stage === "planning" || profile.stage === "pre-arrival") {
    push({
      title: "How to prepare before landing",
      description: "Documents, lodging, and first-week logistics — organization only.",
      href: "/resources/prepare-before-landing",
      kind: "guide",
    });
  }
  if (profile.stage === "pre-arrival") {
    push({
      title: "Open a bank account as a newcomer",
      description: "Skim before you land so week-one account opening feels familiar.",
      href: "/resources/open-bank-account-newcomer",
      kind: "guide",
    });
  }
  if (profile.stage === "just-arrived" || profile.stage === "settling") {
    push({
      title: "Your first week in Canada",
      description: "SIM, banking, transit, and health coverage starting points.",
      href: "/resources/first-week-in-canada",
      kind: "guide",
    });
    push({
      title: "Get a Social Insurance Number (SIN)",
      description: "Navigation checklist with official Service Canada links — verify eligibility there.",
      href: "/resources/get-sin-canada",
      kind: "guide",
    });
    push({
      title: "Open a bank account as a newcomer",
      description: "Orientation only — ID habits, questions to ask, scam-aware tips. No bank rankings.",
      href: "/resources/open-bank-account-newcomer",
      kind: "guide",
    });
  }
  if (
    profile.needs.includes("Banking & SIN") ||
    profile.goals.includes("settle") ||
    profile.stage === "already-here"
  ) {
    push({
      title: "Get a Social Insurance Number (SIN)",
      description: "Service Canada navigation checklist and phishing warnings.",
      href: "/resources/get-sin-canada",
      kind: "guide",
    });
    push({
      title: "Open a bank account as a newcomer",
      description: "FCAC-linked orientation for opening a personal account.",
      href: "/resources/open-bank-account-newcomer",
      kind: "guide",
    });
  }
  if (
    profile.needs.includes("Healthcare registration") ||
    profile.goals.includes("settle") ||
    profile.stage === "already-here" ||
    profile.stage === "just-arrived" ||
    profile.stage === "settling"
  ) {
    const health = resolveHealthLinksForPlan(profile.city, profile.province);
    const place = health.provincial
      ? `${health.provincial.planName} (${health.province})`
      : "your province or territory";
    push({
      title: "Get a provincial health card",
      description: health.provincial
        ? `Norra guide plus official ${place} enrolment link on your plan. Always verify on the official site — no invented wait times.`
        : "Orientation map to official provincial links. Pick a city in your plan for a matching official enrolment page. Always verify on the official site.",
      href: "/resources/get-health-card-canada",
      kind: "guide",
    });
  }
  if (profile.goals.includes("housing") || profile.needs.includes("Find housing")) {
    push({
      title: "Temporary accommodation (scam-aware)",
      description: "Short-stay options and red flags before you send money.",
      href: "/resources/temporary-accommodation",
      kind: "guide",
    });
    push({
      title: "Sample housing layout",
      description: "Fictional listings for UI only — not real inventory.",
      href: "/housing",
      kind: "sample",
      badge: "Sample",
    });
  }
  if (profile.goals.includes("work") || profile.needs.includes("Find a job")) {
    push({
      title: "Canadian resume guide",
      description: "Structure and habits employers often expect — not a guarantee.",
      href: "/resources/canadian-resume",
      kind: "guide",
    });
    push({
      title: "Finding your first Canadian job",
      description: "Search habits, networking, and scam-aware applications.",
      href: "/resources/first-canadian-job",
      kind: "guide",
    });
    push({
      title: "PGWP / post-graduation work orientation",
      description: "IRCC-linked research map if you studied in Canada — verify eligibility on Canada.ca.",
      href: "/resources/pgwp-post-graduation-work",
      kind: "guide",
    });
    push({
      title: "Finishing your program checklist",
      description: "If you are nearing program end: school docs, IRCC get-documents, then PGWP research — not advice.",
      href: "/resources/finishing-your-program",
      kind: "guide",
    });
    push({
      title: "Sample jobs layout",
      description: "Fictional employers for layout only.",
      href: "/jobs",
      kind: "sample",
      badge: "Sample",
    });
  }
  if (profile.goals.includes("study") || profile.needs.includes("School / kids")) {
    push({
      title: "Finishing your program checklist",
      description: "School confirmation → IRCC get-documents → PGWP research → Plan Study/Work → SIN/banking/taxes if needed.",
      href: "/resources/finishing-your-program",
      kind: "guide",
    });
    push({
      title: "First weeks as an international student",
      description: "Orientation, IRCC verify reminders, banking/SIN/health links, housing scam awareness.",
      href: "/resources/first-weeks-international-student",
      kind: "guide",
    });
    push({
      title: "PGWP / post-graduation work orientation",
      description: "IRCC-linked research map for work after a Canadian program — no invented eligibility or timelines.",
      href: "/resources/pgwp-post-graduation-work",
      kind: "guide",
    });
    push({
      title: "Students hub (guides first)",
      description: "Knowledge Hub student guides + Plan Study CTA — sample marketplace chrome demoted.",
      href: "/students",
      kind: "service",
    });
  }

  // Near program-end stages with study/work goals — surface finishing checklist early
  if (
    (profile.stage === "settling" || profile.stage === "already-here") &&
    (profile.goals.includes("study") || profile.goals.includes("work"))
  ) {
    push({
      title: "Finishing your program checklist",
      description: "Program-end orientation: confirm with school, verify IRCC docs pages, review PGWP guide, plan Study/Work goals.",
      href: "/resources/finishing-your-program",
      kind: "guide",
    });
  }

  if (profile.needs.includes("Government benefits") || profile.stage === "already-here") {
    push({
      title: "Filing taxes as a newcomer (CRA orientation)",
      description: "Get-ready map, My Account, benefits bookmarks, scam warnings — no invented brackets or refund amounts.",
      href: "/resources/newcomer-taxes-canada",
      kind: "guide",
    });
    push({
      title: "Government & benefits map",
      description: "High-level CRA / Canada.ca starting points — no invented amounts. Verify eligibility on official sites.",
      href: "/government",
      kind: "service",
    });
  }
  if (profile.needs.includes("Connect with professionals") || profile.needs.includes("Immigration & status")) {
    push({
      title: "Sample marketplace",
      description: "Fictional provider cards showing a future booking layout.",
      href: "/professionals",
      kind: "sample",
      badge: "Sample",
    });
    push({
      title: "Immigration guides",
      description: "Pathway overviews — verify everything on IRCC.",
      href: "/immigration",
      kind: "service",
    });
  }
  if ((profile.city && profile.city !== "Other / Not sure yet") || profile.province) {
    const health = resolveHealthLinksForPlan(profile.city, profile.province);
    push({
      title: "Compare Canadian cities",
      description: "How to weigh cost, climate, jobs, and community fit.",
      href: "/resources/compare-canadian-cities",
      kind: "guide",
    });
    push({
      title: "Get a provincial health card",
      description: health.provincial
        ? `Your plan maps to ${health.provincial.planName} (${health.province}). Open the official enrolment link on your plan dashboard — verify on the official site.`
        : "Open the national health-card guide. Always verify on the official site.",
      href: "/resources/get-health-card-canada",
      kind: "guide",
    });
  }
  if (out.length < 3) {
    push({
      title: "Avoid common newcomer scams",
      description: "Housing, jobs, and immigration red flags.",
      href: "/resources/avoid-newcomer-scams",
      kind: "guide",
    });
  }
  push({
    title: "Knowledge Hub",
    description: "All Norra long-form guides in one place.",
    href: "/resources",
    kind: "guide",
  });

  return out.slice(0, 6);
}

/** Short aliases for ?need= query params → planNeedOptions values */
export const needQueryAliases: Record<string, (typeof planNeedOptions)[number]> = {
  immigration: "Immigration & status",
  status: "Immigration & status",
  housing: "Find housing",
  job: "Find a job",
  jobs: "Find a job",
  work: "Find a job",
  arrival: "Airport & arrival",
  airport: "Airport & arrival",
  banking: "Banking & SIN",
  sin: "Banking & SIN",
  health: "Healthcare registration",
  healthcare: "Healthcare registration",
  school: "School / kids",
  kids: "School / kids",
  professionals: "Connect with professionals",
  city: "Learn the city",
  cities: "Learn the city",
  benefits: "Government benefits",
  government: "Government benefits",
  taxes: "Government benefits",
  tax: "Government benefits",
  cra: "Government benefits",
  safety: "Find housing",
  scams: "Find housing",
  prearrival: "Airport & arrival",
};

/** Map Knowledge Hub topic chip ids → plan query (need and/or goal) */
export const hubTopicToPlanQuery: Record<
  string,
  { need?: string; goal?: PlanGoal; stage?: PlanStage }
> = {
  Housing: { need: "housing", goal: "housing" },
  Health: { need: "health" },
  Banking: { need: "banking" },
  Work: { need: "job", goal: "work" },
  /** Pre-landing docs/lodging → stage + Airport & arrival need */
  "Pre-arrival": { need: "arrival", stage: "pre-arrival" },
  Arrival: { need: "arrival", stage: "just-arrived" },
  Student: { goal: "study", need: "school" },
  /** Government guides: SIN + taxes/benefits orientation */
  Government: { need: "benefits" },
  Cities: { need: "city" },
  /** Scam guide emphasises housing deposits & fake listings first */
  Safety: { need: "housing" },
};

export function resolveNeedFromQuery(raw: string | null): string | null {
  if (!raw) return null;
  const trimmed = raw.trim();
  if (!trimmed) return null;
  const lower = trimmed.toLowerCase();
  if (needQueryAliases[lower]) return needQueryAliases[lower];
  const exact = planNeedOptions.find((n) => n.toLowerCase() === lower);
  if (exact) return exact;
  return null;
}

export function resolveGoalFromQuery(raw: string | null): PlanGoal | null {
  if (!raw) return null;
  const lower = raw.trim().toLowerCase();
  const match = goalOptions.find((g) => g.value === lower || g.label.toLowerCase() === lower);
  return match ? match.value : null;
}

/** Aliases for ?stage= query params → PlanStage */
const stageQueryAliases: Record<string, PlanStage> = {
  planning: "planning",
  research: "planning",
  researching: "planning",
  "pre-arrival": "pre-arrival",
  prearrival: "pre-arrival",
  "pre_arrival": "pre-arrival",
  approved: "pre-arrival",
  travel: "pre-arrival",
  "just-arrived": "just-arrived",
  justarrived: "just-arrived",
  landed: "just-arrived",
  arrival: "just-arrived",
  settling: "settling",
  settle: "settling",
  "already-here": "already-here",
  alreadyhere: "already-here",
  living: "already-here",
};

export function resolveStageFromQuery(raw: string | null): PlanStage | null {
  if (!raw) return null;
  const lower = raw.trim().toLowerCase().replace(/\s+/g, "-");
  if (stageQueryAliases[lower]) return stageQueryAliases[lower];
  const match = stageOptions.find(
    (s) => s.value === lower || s.label.toLowerCase() === raw.trim().toLowerCase()
  );
  return match ? match.value : null;
}

/** Build /plan/?… query from city slug and optional need/goal aliases */
export function buildPlanHref(opts: {
  citySlug?: string;
  need?: string;
  goal?: PlanGoal | string;
  stage?: PlanStage | string;
}): string {
  const params = new URLSearchParams();
  if (opts.citySlug) params.set("city", opts.citySlug);
  if (opts.need) params.set("need", opts.need);
  if (opts.goal) params.set("goal", String(opts.goal));
  if (opts.stage) params.set("stage", String(opts.stage));
  const qs = params.toString();
  return qs ? `/plan/?${qs}` : "/plan/";
}

/**
 * Honest site-derived count: unique checklist items My Canada Plan can generate
 * across every stage, goal, and need combination (no user data involved).
 */
export function countAllPlanChecklistItems(): number {
  const ids = new Set<string>();
  for (const s of stageOptions) {
    const items = buildPlanChecklist({
      ...emptyPlanProfile,
      stage: s.value,
      goals: goalOptions.map((g) => g.value),
      needs: [...planNeedOptions],
    });
    for (const item of items) ids.add(item.id.replace(/^plan-[a-z-]+?-(?=[a-z]+-\d)/, ""));
  }
  return ids.size;
}
