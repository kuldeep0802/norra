/**
 * Public site URL — update after deploy (or set NEXT_PUBLIC_SITE_URL at build time).
 * Example: https://username.github.io/norra
 */
export const siteConfig = {
  name: "Norra",
  tagline: "Navigate life in Canada",
  description:
    "From visas and work to housing, settlement, and everyday life — guidance and help wherever you are in your Canadian journey. A Canadian assistance and navigation platform.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://norra.example",
  locale: "en_CA",
};
