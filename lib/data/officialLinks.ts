/**
 * Verified official Government of Canada starting points for Plan checklist items.
 * Always remind users to verify on the official site — Norra does not invent eligibility.
 */
export const OFFICIAL_SIN = {
  label: "Service Canada — Social Insurance Number (SIN)",
  href: "https://www.canada.ca/en/employment-social-development/services/sin.html",
  applyHref: "https://www.canada.ca/en/employment-social-development/services/sin/apply.html",
} as const;

export const OFFICIAL_BANKING = {
  label: "FCAC — Opening a bank account",
  href: "https://www.canada.ca/en/financial-consumer-agency/services/banking/opening-bank-account.html",
  rightsHref:
    "https://www.canada.ca/en/financial-consumer-agency/services/rights-responsibilities/rights-banking/accounts-rights-responsibilities.html",
} as const;

/** CRA / taxes / benefits — URLs verified live (curl) Sep 2026. No invented amounts. */
export const OFFICIAL_CRA = {
  label: "Canada Revenue Agency (CRA)",
  href: "https://www.canada.ca/en/revenue-agency.html",
} as const;

export const OFFICIAL_CRA_NEWCOMERS = {
  label: "CRA — Newcomers to Canada (immigrants)",
  href: "https://www.canada.ca/en/revenue-agency/services/tax/international-non-residents/individuals-leaving-entering-canada-non-residents/newcomers-canada-immigrants.html",
} as const;

export const OFFICIAL_TAX_GET_READY = {
  label: "Canada.ca — Get ready to file a tax return",
  href: "https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax/get-ready-taxes.html",
} as const;

export const OFFICIAL_BENEFITS = {
  label: "Canada.ca — Benefits",
  href: "https://www.canada.ca/en/services/benefits.html",
} as const;

export const OFFICIAL_CRA_BENEFITS = {
  label: "CRA — Child and family benefits overview",
  href: "https://www.canada.ca/en/revenue-agency/services/child-family-benefits.html",
} as const;

export const NORRA_SIN_GUIDE_HREF = "/resources/get-sin-canada";
export const NORRA_BANKING_GUIDE_HREF = "/resources/open-bank-account-newcomer";
export const NORRA_GOVERNMENT_GUIDE_HREF = "/government";

/** Checklist base ids that should get SIN officialHref */
export const SIN_CHECKLIST_BASE_IDS = ["arr-7", "set-1"] as const;

/** Checklist base ids that should get banking / FCAC officialHref */
export const BANKING_CHECKLIST_BASE_IDS = ["arr-6", "set-4", "bya-9"] as const;

/** Checklist base ids that should get CRA / tax-start officialHref */
export const CRA_CHECKLIST_BASE_IDS = ["here-5"] as const;
