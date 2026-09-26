import { cities } from "./cities";

/**
 * Official provincial / territorial health-card enrolment starting points.
 * Same URLs as the Knowledge Hub guide — verify on the official site; Norra
 * does not invent eligibility or wait times.
 */
export type ProvincialHealthLink = {
  province: string;
  code: string;
  planName: string;
  label: string;
  href: string;
};

export const FEDERAL_HEALTH_OVERVIEW = {
  label: "Health care in Canada (federal overview)",
  href: "https://www.canada.ca/en/immigration-refugees-citizenship/services/settle-canada/health-care.html",
} as const;

export const NORRA_HEALTH_GUIDE_HREF = "/resources/get-health-card-canada";

/** Province full name → official enrolment page */
export const provincialHealthByProvince: Record<string, ProvincialHealthLink> = {
  Ontario: {
    province: "Ontario",
    code: "ON",
    planName: "OHIP",
    label: "Ontario — Apply for OHIP and get a health card",
    href: "https://www.ontario.ca/page/apply-ohip-and-get-health-card",
  },
  "British Columbia": {
    province: "British Columbia",
    code: "BC",
    planName: "MSP",
    label: "British Columbia — Apply for MSP",
    href: "https://www2.gov.bc.ca/gov/content/health/health-drug-coverage/msp/bc-residents/eligibility-and-enrolment/apply-for-msp",
  },
  Alberta: {
    province: "Alberta",
    code: "AB",
    planName: "AHCIP",
    label: "Alberta — How to apply for AHCIP",
    href: "https://www.alberta.ca/ahcip-how-to-apply",
  },
  Quebec: {
    province: "Quebec",
    code: "QC",
    planName: "RAMQ",
    label: "Québec — Register for health insurance (RAMQ)",
    href: "https://www.ramq.gouv.qc.ca/en/citizens/health-insurance/register",
  },
  Manitoba: {
    province: "Manitoba",
    code: "MB",
    planName: "Manitoba Health",
    label: "Manitoba — Health Card and Coverage",
    href: "https://manitoba.ca/health/mhsip/",
  },
  Saskatchewan: {
    province: "Saskatchewan",
    code: "SK",
    planName: "Saskatchewan Health",
    label: "Saskatchewan — Apply for a health card",
    href: "https://www.ehealthsask.ca/residents/health-cards/apply-for-a-health-card",
  },
  "Nova Scotia": {
    province: "Nova Scotia",
    code: "NS",
    planName: "MSI",
    label: "Nova Scotia — Apply for a Health Card (MSI)",
    href: "https://www.novascotia.ca/apply-health-card",
  },
  "New Brunswick": {
    province: "New Brunswick",
    code: "NB",
    planName: "Medicare",
    label: "New Brunswick — Applying for Medicare Coverage",
    href: "https://www2.gnb.ca/content/gnb/en/departments/health/DrugPlans/content/medicare/ApplyingforaCard.html",
  },
  "Newfoundland and Labrador": {
    province: "Newfoundland and Labrador",
    code: "NL",
    planName: "MCP",
    label: "Newfoundland and Labrador — MCP",
    href: "https://www.gov.nl.ca/hcs/mcp/",
  },
  "Prince Edward Island": {
    province: "Prince Edward Island",
    code: "PE",
    planName: "PEI Health",
    label: "Prince Edward Island — Apply for PEI Health Card",
    href: "https://www.princeedwardisland.ca/en/service/apply-for-pei-health-card",
  },
  Yukon: {
    province: "Yukon",
    code: "YT",
    planName: "Yukon Health",
    label: "Yukon — Apply for a Yukon health care card",
    href: "https://yukon.ca/en/health-care-card",
  },
  "Northwest Territories": {
    province: "Northwest Territories",
    code: "NT",
    planName: "NWT Health",
    label: "Northwest Territories — Applying for Health Care",
    href: "https://www.hss.gov.nt.ca/en/services/applying-health-care",
  },
  Nunavut: {
    province: "Nunavut",
    code: "NU",
    planName: "Nunavut Health Care Plan",
    label: "Nunavut — Health Care Plan",
    href: "https://www.gov.nu.ca/en/health/nunavut-health-care-plan",
  },
};

/** Normalize Québec spelling used in cities data */
const PROVINCE_ALIASES: Record<string, string> = {
  Québec: "Quebec",
  Quebec: "Quebec",
};

export type ResolvedHealthLinks = {
  cityName: string | null;
  province: string | null;
  provincial: ProvincialHealthLink | null;
  federal: typeof FEDERAL_HEALTH_OVERVIEW;
  guideHref: typeof NORRA_HEALTH_GUIDE_HREF;
  /** Short copy for UI — always reminds to verify on official site */
  verifyNote: string;
};

/**
 * Map a Plan profile city name (or province name) to official health links.
 * Unknown / "Other" → national guide + federal overview only.
 */
export function resolveHealthLinksForCity(cityOrProvince: string): ResolvedHealthLinks {
  const raw = (cityOrProvince || "").trim();
  const federal = FEDERAL_HEALTH_OVERVIEW;
  const guideHref = NORRA_HEALTH_GUIDE_HREF;
  const verifyNote = "Always verify eligibility, documents, and any waiting period on the official site — Norra does not invent those details.";

  if (!raw || raw === "Other / Not sure yet") {
    return {
      cityName: null,
      province: null,
      provincial: null,
      federal,
      guideHref,
      verifyNote,
    };
  }

  // Exact city match from lib/data/cities
  const city = cities.find((c) => c.name.toLowerCase() === raw.toLowerCase());
  if (city) {
    const key = PROVINCE_ALIASES[city.province] || city.province;
    const provincial = provincialHealthByProvince[key] || null;
    return {
      cityName: city.name,
      province: city.province,
      provincial,
      federal,
      guideHref,
      verifyNote,
    };
  }

  // Province / territory name (or code) typed or selected
  const byProvince = Object.values(provincialHealthByProvince).find(
    (p) =>
      p.province.toLowerCase() === raw.toLowerCase() ||
      p.code.toLowerCase() === raw.toLowerCase() ||
      p.planName.toLowerCase() === raw.toLowerCase()
  );
  if (byProvince) {
    return {
      cityName: null,
      province: byProvince.province,
      provincial: byProvince,
      federal,
      guideHref,
      verifyNote,
    };
  }

  // Fuzzy: city name contained in string like "Toronto, Ontario"
  const fuzzyCity = cities.find(
    (c) =>
      raw.toLowerCase().includes(c.name.toLowerCase()) ||
      c.name.toLowerCase().includes(raw.toLowerCase())
  );
  if (fuzzyCity) {
    const key = PROVINCE_ALIASES[fuzzyCity.province] || fuzzyCity.province;
    return {
      cityName: fuzzyCity.name,
      province: fuzzyCity.province,
      provincial: provincialHealthByProvince[key] || null,
      federal,
      guideHref,
      verifyNote,
    };
  }

  return {
    cityName: raw,
    province: null,
    provincial: null,
    federal,
    guideHref,
    verifyNote,
  };
}

/** Health checklist item ids that should get city-aware officialHref */
export const HEALTH_CHECKLIST_BASE_IDS = ["arr-8", "set-2", "here-4"] as const;

/** Ordered list of province/territory names for Plan profile select */
export const PROVINCE_TERRITORY_OPTIONS = Object.keys(provincialHealthByProvince) as string[];

/**
 * Resolve health links from Plan city + optional province (when city is Other / empty).
 * Prefer known city → province mapping; fall back to explicit province selection.
 */
export function resolveHealthLinksForPlan(city: string, province?: string): ResolvedHealthLinks {
  const cityRaw = (city || "").trim();
  const provinceRaw = (province || "").trim();
  const cityIsOther = !cityRaw || cityRaw === "Other / Not sure yet";

  if (!cityIsOther) {
    const fromCity = resolveHealthLinksForCity(cityRaw);
    if (fromCity.provincial) return fromCity;
  }

  if (provinceRaw) {
    return resolveHealthLinksForCity(provinceRaw);
  }

  return resolveHealthLinksForCity(cityIsOther ? "" : cityRaw);
}
