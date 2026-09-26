/**
 * Single source of truth for founder / contact details.
 * Edit this file to update name, email, phone, LinkedIn, etc. site-wide.
 */
export const founder = {
  name: "Kuldeep Kushawaha",
  title: "Founder",
  email: "kuldeepkushawaha@gmail.com",
  phone: "+1 437-733-7407",
  /** Digits-only for tel: links */
  phoneTel: "+14377337407",
  location: "Canada",
  /**
   * Replace with your real LinkedIn URL when ready.
   * Leave as null to show a disabled placeholder button.
   */
  linkedInUrl: null as string | null,
  /** Initials used for the photo placeholder */
  initials: "KK",
  mission:
    "Norra exists because navigating life in Canada should not feel like a maze of scattered tabs, unclear advice, and high-stakes guesswork. I built this platform to give people a clear, trustworthy place to orient — whatever stage they are at.",
  vision:
    "The vision is simple: make life in Canada easier to navigate — from the first visa question to settling into a neighbourhood, finding work, and handling the everyday systems that make Canada feel like home.",
} as const;

export type Founder = typeof founder;
