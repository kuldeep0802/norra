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

export const NORRA_SIN_GUIDE_HREF = "/resources/get-sin-canada";
export const NORRA_BANKING_GUIDE_HREF = "/resources/open-bank-account-newcomer";

/** Checklist base ids that should get SIN officialHref */
export const SIN_CHECKLIST_BASE_IDS = ["arr-7", "set-1"] as const;

/** Checklist base ids that should get banking / FCAC officialHref */
export const BANKING_CHECKLIST_BASE_IDS = ["arr-6", "set-4", "bya-9"] as const;
