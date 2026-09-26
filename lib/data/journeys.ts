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
      { label: "Student hub", href: "/students" },
      { label: "Housing near campus", href: "/housing" },
      { label: "Part-time jobs", href: "/jobs" },
      { label: "Study permit info", href: "/immigration" },
      { label: "Banking setup", href: "/services/banking-finance" },
    ],
  },
  {
    id: "working",
    title: "Working",
    description: "On a work permit or looking for your next Canadian role.",
    icon: "Briefcase",
    chips: [
      { label: "Job search", href: "/jobs" },
      { label: "Career coaches", href: "/professionals" },
      { label: "Housing", href: "/housing" },
      { label: "Work permit pathways", href: "/immigration" },
      { label: "Taxes & SIN", href: "/government" },
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
      { label: "Benefits & taxes", href: "/government" },
      { label: "Career growth", href: "/jobs" },
      { label: "Settlement resources", href: "/settlement" },
      { label: "Community", href: "/cities" },
    ],
  },
];
