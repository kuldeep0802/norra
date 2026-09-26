export type Job = {
  id: string;
  title: string;
  company: string;
  city: string;
  province: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  experience: "Entry" | "Mid" | "Senior" | "Any";
  salaryMin?: number;
  salaryMax?: number;
  remote: boolean;
  tags: string[];
  description: string;
  postedDaysAgo: number;
  demo: true;
};

export const jobs: Job[] = [
  {
    id: "job-1",
    title: "Customer Success Associate",
    company: "Northpeak Digital (Demo Co.)",
    city: "Toronto",
    province: "ON",
    type: "Full-time",
    experience: "Entry",
    salaryMin: 52000,
    salaryMax: 62000,
    remote: false,
    tags: ["Customer success", "SaaS", "Newcomer-friendly"],
    description: "Demo listing — support onboarding for Canadian SMB clients. Training provided. English required; additional languages a plus.",
    postedDaysAgo: 2,
    demo: true,
  },
  {
    id: "job-2",
    title: "Junior Data Analyst",
    company: "Maple Metrics Lab (Demo Co.)",
    city: "Ottawa",
    province: "ON",
    type: "Full-time",
    experience: "Entry",
    salaryMin: 58000,
    salaryMax: 70000,
    remote: true,
    tags: ["SQL", "Python", "Hybrid"],
    description: "Demo listing — analyze public-sector adjacent datasets. Mentorship available. Hybrid 2 days downtown.",
    postedDaysAgo: 5,
    demo: true,
  },
  {
    id: "job-3",
    title: "Registered Practical Nurse",
    company: "Cedar Care Clinics (Demo Co.)",
    city: "Mississauga",
    province: "ON",
    type: "Full-time",
    experience: "Mid",
    salaryMin: 65000,
    salaryMax: 78000,
    remote: false,
    tags: ["Healthcare", "Licensed", "Shift work"],
    description: "Demo listing — clinic nursing role. Valid Ontario registration required. Internationally educated nurses: ask about bridging pathways separately.",
    postedDaysAgo: 1,
    demo: true,
  },
  {
    id: "job-4",
    title: "Warehouse Associate",
    company: "PrairieLink Logistics (Demo Co.)",
    city: "Calgary",
    province: "AB",
    type: "Full-time",
    experience: "Any",
    salaryMin: 42000,
    salaryMax: 50000,
    remote: false,
    tags: ["Logistics", "Physical", "Immediate"],
    description: "Demo listing — day and evening shifts at a modern fulfillment centre. Safety training on day one.",
    postedDaysAgo: 3,
    demo: true,
  },
  {
    id: "job-5",
    title: "Frontend Developer (React)",
    company: "Cascade Apps Studio (Demo Co.)",
    city: "Vancouver",
    province: "BC",
    type: "Contract",
    experience: "Mid",
    salaryMin: 85000,
    salaryMax: 110000,
    remote: true,
    tags: ["React", "TypeScript", "Remote"],
    description: "Demo listing — 12-month contract building consumer web apps. Portfolio required.",
    postedDaysAgo: 4,
    demo: true,
  },
  {
    id: "job-6",
    title: "Campus Ambassador (Part-time)",
    company: "StudyNorth Events (Demo Co.)",
    city: "Montreal",
    province: "QC",
    type: "Part-time",
    experience: "Entry",
    salaryMin: 18,
    salaryMax: 22,
    remote: false,
    tags: ["Student", "Events", "Bilingual preferred"],
    description: "Demo listing — represent campus events 10–15 hrs/week. French/English bilingual preferred.",
    postedDaysAgo: 6,
    demo: true,
  },
  {
    id: "job-7",
    title: "Administrative Coordinator",
    company: "Harbour Legal Support (Demo Co.)",
    city: "Halifax",
    province: "NS",
    type: "Full-time",
    experience: "Entry",
    salaryMin: 48000,
    salaryMax: 56000,
    remote: false,
    tags: ["Admin", "Office", "Client-facing"],
    description: "Demo listing — coordinate client intake and calendaring for a small professional services firm.",
    postedDaysAgo: 7,
    demo: true,
  },
  {
    id: "job-8",
    title: "Marketing Intern",
    company: "Aurora Retail Group (Demo Co.)",
    city: "Edmonton",
    province: "AB",
    type: "Internship",
    experience: "Entry",
    remote: false,
    tags: ["Marketing", "Social", "Internship"],
    description: "Demo listing — summer internship supporting social campaigns for prairie retail brands.",
    postedDaysAgo: 2,
    demo: true,
  },
];

export function getJobById(id: string) {
  return jobs.find((j) => j.id === id);
}
