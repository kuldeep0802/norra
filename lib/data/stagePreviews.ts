import type { LucideIcon } from "lucide-react";
import { Compass, Luggage, GraduationCap, Briefcase, Home, Users, Award } from "lucide-react";

/**
 * Homepage journey picker. Each stage links into My Canada Plan using the existing
 * /plan/?stage=&goal=&need= query contract (see resolveStageFromQuery / resolveGoalFromQuery / resolveNeedFromQuery).
 * Steps are general organization prompts — not immigration, legal, or tax advice.
 */
export type StagePreview = {
  id: string;
  label: string;
  icon: LucideIcon;
  blurb: string;
  steps: { title: string; detail: string }[];
  guideSlugs: [string, string];
  planHref: string;
};

export const stagePreviews: StagePreview[] = [
  {
    id: "planning",
    label: "Planning",
    icon: Compass,
    blurb: "Researching Canada and figuring out what to prepare.",
    steps: [
      { title: "Shortlist cities that fit", detail: "Compare rent, jobs, transit, and climate side by side." },
      { title: "Organize your key documents", detail: "Passport, permits, transcripts — originals plus copies." },
      { title: "Confirm requirements on IRCC", detail: "Your stream decides what applies. Norra is not advice." },
    ],
    guideSlugs: ["compare-canadian-cities", "prepare-before-landing"],
    planHref: "/plan/?stage=planning",
  },
  {
    id: "just-arrived",
    label: "Just arrived",
    icon: Luggage,
    blurb: "First one to two weeks — getting the essentials running.",
    steps: [
      { title: "Get a Canadian phone number", detail: "Many sign-ups and employers expect a local number." },
      { title: "Apply for your SIN", detail: "Through Service Canada — needed to work and file taxes." },
      { title: "Open a bank account", detail: "Compare newcomer packages and monthly fees first." },
    ],
    guideSlugs: ["first-week-in-canada", "get-sin-canada"],
    planHref: "/plan/?stage=just-arrived",
  },
  {
    id: "student",
    label: "Student",
    icon: GraduationCap,
    blurb: "International student settling into campus life.",
    steps: [
      { title: "Check in with your international office", detail: "Orientation, health plan, and enrolment confirmation." },
      { title: "Know your permit's work conditions", detail: "Read your study permit and IRCC guidance before working." },
      { title: "Set up SIN and banking", detail: "So you can get paid for on- or off-campus work." },
    ],
    guideSlugs: ["first-weeks-international-student", "finishing-your-program"],
    planHref: "/plan/?stage=just-arrived&goal=study",
  },
  {
    id: "working",
    label: "Working",
    icon: Briefcase,
    blurb: "Job hunting or starting your first Canadian role.",
    steps: [
      { title: "Tailor a Canadian-style resume", detail: "Concise, achievement-focused, no photo or date of birth." },
      { title: "Understand your first payslip", detail: "CPP, EI, and income tax deductions explained." },
      { title: "Build local references", detail: "Volunteering and networking count for a lot here." },
    ],
    guideSlugs: ["canadian-resume", "first-canadian-job"],
    planHref: "/plan/?stage=settling&goal=work",
  },
  {
    id: "settling",
    label: "Settling",
    icon: Home,
    blurb: "First months — moving from temporary to stable.",
    steps: [
      { title: "Register for provincial health coverage", detail: "Rules and waiting periods differ by province." },
      { title: "Move to longer-term housing", detail: "View in person and never wire a deposit unseen." },
      { title: "Prepare for your first tax return", detail: "Filing can unlock benefits — check CRA for your case." },
    ],
    guideSlugs: ["get-health-card-canada", "temporary-accommodation"],
    planHref: "/plan/?stage=settling&goal=settle",
  },
  {
    id: "family",
    label: "Family",
    icon: Users,
    blurb: "Arriving or settling with a partner or children.",
    steps: [
      { title: "Contact your local school board", detail: "Ask about enrolment, documents, and language support." },
      { title: "Register each family member for health coverage", detail: "Every person usually needs their own card." },
      { title: "Look into family benefits", detail: "e.g. Canada Child Benefit — verify eligibility with CRA." },
    ],
    guideSlugs: ["get-health-card-canada", "newcomer-taxes-canada"],
    planHref: "/plan/?stage=settling&need=school",
  },
  {
    id: "pr-citizen",
    label: "PR / Citizen",
    icon: Award,
    blurb: "Already established — optimizing everyday systems.",
    steps: [
      { title: "Keep status documents organized", detail: "Track renewal dates; confirm details on IRCC." },
      { title: "File taxes on time every year", detail: "Keeps benefits and credits flowing." },
      { title: "Stay alert to scams", detail: "Fake CRA/IRCC calls target people at every stage." },
    ],
    guideSlugs: ["newcomer-taxes-canada", "avoid-newcomer-scams"],
    planHref: "/plan/?stage=already-here&need=benefits",
  },
];
