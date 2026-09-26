export type JourneyStage = {
  id: string;
  title: string;
  description: string;
  icon: string;
  chips: { label: string; href: string }[];
};

export const journeyStages: JourneyStage[] = [
  {
    id: "planning",
    title: "Planning",
    description: "Researching Canada and figuring out your next steps.",
    icon: "Compass",
    chips: [
      { label: "My Canada Plan", href: "/plan" },
      { label: "Immigration overview", href: "/immigration" },
      { label: "Cities to explore", href: "/cities" },
      { label: "Before you arrive", href: "/before-you-arrive" },
      { label: "Ask Nora", href: "/assistant" },
    ],
  },
  {
    id: "visa-permit",
    title: "Visa / Permit",
    description: "Working through study, work, or visitor applications.",
    icon: "FileText",
    chips: [
      { label: "Document organizer", href: "/documents" },
      { label: "Immigration guides", href: "/immigration" },
      { label: "Authorized professionals", href: "/professionals" },
      { label: "Checklists", href: "/before-you-arrive" },
    ],
  },
  {
    id: "visiting",
    title: "Visiting",
    description: "Coming for a short stay — tourism, family, or exploration.",
    icon: "Luggage",
    chips: [
      { label: "Arrival services", href: "/arrival" },
      { label: "Temporary housing", href: "/housing" },
      { label: "City guides", href: "/cities" },
      { label: "SIM & transport", href: "/services/sim-internet" },
    ],
  },
  {
    id: "studying",
    title: "Studying",
    description: "International student life — school, housing, and work options.",
    icon: "GraduationCap",
    chips: [
      { label: "Student hub (guides)", href: "/students" },
      { label: "Student first weeks", href: "/resources/first-weeks-international-student" },
      { label: "PGWP orientation", href: "/resources/pgwp-post-graduation-work" },
      { label: "Plan — Study", href: "/plan/?goal=study" },
      { label: "Study permit (IRCC verify)", href: "/immigration" },
      { label: "Housing (sample)", href: "/housing" },
      { label: "Jobs (sample)", href: "/jobs" },
    ],
  },
  {
    id: "working",
    title: "Working",
    description: "On a work permit or looking for your next Canadian role.",
    icon: "Briefcase",
    chips: [
      { label: "Job search", href: "/jobs" },
      { label: "PGWP orientation", href: "/resources/pgwp-post-graduation-work" },
      { label: "Career coaches", href: "/professionals" },
      { label: "Housing", href: "/housing" },
      { label: "Work permit pathways", href: "/immigration" },
      { label: "Taxes orientation", href: "/resources/newcomer-taxes-canada" },
      { label: "SIN checklist", href: "/resources/get-sin-canada" },
    ],
  },
  {
    id: "settling",
    title: "Settling",
    description: "Building routines, community, and long-term stability.",
    icon: "Home",
    chips: [
      { label: "Settlement guide", href: "/settlement" },
      { label: "My Canada Plan", href: "/plan" },
      { label: "Taxes orientation", href: "/resources/newcomer-taxes-canada" },
      { label: "Government & benefits", href: "/government" },
      { label: "Healthcare", href: "/services/healthcare" },
      { label: "Local services", href: "/professionals" },
    ],
  },
  {
    id: "bringing-family",
    title: "Bringing family",
    description: "Planning for partners, children, or parents to join you.",
    icon: "Users",
    chips: [
      { label: "Family services", href: "/services/family-children" },
      { label: "Immigration overview", href: "/immigration" },
      { label: "Family housing", href: "/housing" },
      { label: "Authorized pros", href: "/professionals" },
      { label: "Schools & childcare", href: "/students" },
    ],
  },
  {
    id: "pr-citizen",
    title: "PR / Citizen",
    description: "Permanent resident or citizen — deepening roots in Canada.",
    icon: "Award",
    chips: [
      { label: "Citizenship overview", href: "/immigration" },
      { label: "Taxes orientation", href: "/resources/newcomer-taxes-canada" },
      { label: "Government map", href: "/government" },
      { label: "Career growth", href: "/jobs" },
      { label: "Settlement resources", href: "/settlement" },
      { label: "Community", href: "/cities" },
    ],
  },
];
