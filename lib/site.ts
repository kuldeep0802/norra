/**
 * Public site URL — update after deploy (or set NEXT_PUBLIC_SITE_URL at build time).
 * Example: https://username.github.io/norra
 */
export const siteConfig = {
  name: "Norra",
  tagline: "Navigate life in Canada",
  description:
    "Norra is an early-stage Canadian navigation and organization tool — checklists, guides, and next steps for visas, housing, work, arrival, and everyday life. Not immigration advice. Not a government service.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://kuldeep0802.github.io/norra",
  locale: "en_CA",
};
