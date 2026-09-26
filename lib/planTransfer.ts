import {
  emptyPlanProfile,
  goalOptions,
  loadPlanProfile,
  PlanProfile,
  savePlanProfile,
  stageOptions,
  type ChecklistItem,
  type PlanGoal,
  type PlanStage,
} from "@/lib/data/checklists";
import { siteConfig } from "@/lib/site";

/** Schema id for My Canada Plan JSON backup files */
export const PLAN_EXPORT_SCHEMA = "norraPlanExport" as const;
export const PLAN_EXPORT_VERSION = 1 as const;

export const PLAN_CHECKLIST_STORAGE_KEY = "norra-canada-plan";
export const PLAN_PROFILE_STORAGE_KEY = "norra-canada-plan-profile";
const CITY_SWITCH_DISMISS_KEY = "norra-city-switch-dismissed";

export type NorraPlanExportV1 = {
  schema: typeof PLAN_EXPORT_SCHEMA;
  version: typeof PLAN_EXPORT_VERSION;
  exportedAt: string;
  profile: PlanProfile;
  checklistDone: Record<string, boolean>;
  /** Storage key the checklist ticks were saved under */
  checklistStorageKey: string;
};

export type PlanExportParseResult =
  | { ok: true; data: NorraPlanExportV1 }
  | { ok: false; error: string };

const VALID_STAGES = new Set<string>([
  "",
  "planning",
  "pre-arrival",
  "just-arrived",
  "settling",
  "already-here",
]);

const VALID_GOALS = new Set<string>(goalOptions.map((g) => g.value));

function isPlainObject(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

function sanitizeChecklistDone(raw: unknown): Record<string, boolean> | null {
  if (!isPlainObject(raw)) return null;
  const out: Record<string, boolean> = {};
  for (const [k, v] of Object.entries(raw)) {
    if (typeof k !== "string" || k.length > 200) return null;
    if (typeof v !== "boolean") return null;
    out[k] = v;
  }
  return out;
}

function sanitizeProfile(raw: unknown): PlanProfile | null {
  if (!isPlainObject(raw)) return null;
  const stage = typeof raw.stage === "string" && VALID_STAGES.has(raw.stage) ? (raw.stage as PlanStage | "") : null;
  if (stage === null) return null;
  if (typeof raw.city !== "string" || raw.city.length > 120) return null;
  if (typeof raw.province !== "string" || raw.province.length > 120) return null;
  if (typeof raw.arrival !== "string" || raw.arrival.length > 40) return null;
  if (typeof raw.family !== "string" || raw.family.length > 80) return null;
  if (typeof raw.notes !== "string" || raw.notes.length > 4000) return null;
  if (!Array.isArray(raw.goals) || raw.goals.length > 20) return null;
  if (!Array.isArray(raw.needs) || raw.needs.length > 30) return null;

  const goals: PlanGoal[] = [];
  for (const g of raw.goals) {
    if (typeof g !== "string" || !VALID_GOALS.has(g)) return null;
    goals.push(g as PlanGoal);
  }
  const needs: string[] = [];
  for (const n of raw.needs) {
    if (typeof n !== "string" || n.length > 80) return null;
    needs.push(n);
  }

  return {
    ...emptyPlanProfile,
    stage,
    city: raw.city,
    province: raw.province,
    arrival: raw.arrival,
    family: raw.family || emptyPlanProfile.family,
    goals,
    needs,
    notes: raw.notes,
  };
}

/** Parse + validate a norraPlanExport v1 payload. Rejects garbage safely. */
export function parsePlanExport(input: unknown): PlanExportParseResult {
  if (typeof input === "string") {
    try {
      input = JSON.parse(input) as unknown;
    } catch {
      return { ok: false, error: "That file is not valid JSON." };
    }
  }
  if (!isPlainObject(input)) {
    return { ok: false, error: "Import must be a JSON object." };
  }
  if (input.schema !== PLAN_EXPORT_SCHEMA) {
    return {
      ok: false,
      error: `Unrecognized schema (expected “${PLAN_EXPORT_SCHEMA}”).`,
    };
  }
  if (input.version !== PLAN_EXPORT_VERSION) {
    return {
      ok: false,
      error: `Unsupported export version (this app reads v${PLAN_EXPORT_VERSION} only).`,
    };
  }
  const profile = sanitizeProfile(input.profile);
  if (!profile) {
    return { ok: false, error: "Profile data in the file is missing or invalid." };
  }
  const checklistDone = sanitizeChecklistDone(input.checklistDone);
  if (!checklistDone) {
    return { ok: false, error: "Checklist completion data in the file is missing or invalid." };
  }
  const checklistStorageKey =
    typeof input.checklistStorageKey === "string" && input.checklistStorageKey.length > 0
      ? input.checklistStorageKey.slice(0, 80)
      : PLAN_CHECKLIST_STORAGE_KEY;

  const exportedAt =
    typeof input.exportedAt === "string" && input.exportedAt.length < 80
      ? input.exportedAt
      : new Date().toISOString();

  return {
    ok: true,
    data: {
      schema: PLAN_EXPORT_SCHEMA,
      version: PLAN_EXPORT_VERSION,
      exportedAt,
      profile,
      checklistDone,
      checklistStorageKey,
    },
  };
}

export function loadChecklistDone(storageKey: string = PLAN_CHECKLIST_STORAGE_KEY): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(storageKey);
    if (raw) {
      const parsed = JSON.parse(raw) as unknown;
      const clean = sanitizeChecklistDone(parsed);
      if (clean) return clean;
    }
  } catch {
    /* ignore */
  }
  return {};
}

export function buildPlanExportPayload(
  profile: PlanProfile,
  storageKey: string = PLAN_CHECKLIST_STORAGE_KEY
): NorraPlanExportV1 {
  return {
    schema: PLAN_EXPORT_SCHEMA,
    version: PLAN_EXPORT_VERSION,
    exportedAt: new Date().toISOString(),
    profile,
    checklistDone: loadChecklistDone(storageKey),
    checklistStorageKey: storageKey,
  };
}

/** Write validated export into localStorage (profile + checklist ticks). */
export function applyPlanExportToStorage(data: NorraPlanExportV1): void {
  if (typeof window === "undefined") return;
  savePlanProfile(data.profile);
  try {
    localStorage.setItem(
      data.checklistStorageKey || PLAN_CHECKLIST_STORAGE_KEY,
      JSON.stringify(data.checklistDone)
    );
  } catch {
    /* ignore quota */
  }
}

export function hasExistingPlanData(storageKey: string = PLAN_CHECKLIST_STORAGE_KEY): boolean {
  if (typeof window === "undefined") return false;
  const profile = loadPlanProfile();
  if (profile?.stage) return true;
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return false;
    const done = JSON.parse(raw) as Record<string, unknown>;
    return Object.values(done).some(Boolean);
  } catch {
    return false;
  }
}

/** Same text snapshot used by Share / Copy / Email. */
export function buildPlanShareText(
  profile: PlanProfile,
  items: ChecklistItem[],
  storageKey: string = PLAN_CHECKLIST_STORAGE_KEY
): string {
  const done = loadChecklistDone(storageKey);
  const completed = items.filter((i) => done[i.id]).length;
  const unchecked = items.filter((i) => !done[i.id]).slice(0, 5);
  const stageLabel = stageOptions.find((s) => s.value === profile.stage)?.label || "Not set";
  const goals =
    profile.goals.map((g) => goalOptions.find((o) => o.value === g)?.label || g).join(", ") || "None yet";
  const place =
    profile.city && profile.city !== "Other / Not sure yet"
      ? profile.city
      : profile.province || "Canada";

  const lines = [
    `My Canada Plan (${place}) — via Norra`,
    `Stage: ${stageLabel}`,
    `Goals: ${goals}`,
    `Progress: ${completed} / ${items.length} complete (saved on this device only)`,
    "",
  ];

  if (unchecked.length > 0) {
    lines.push("Next unchecked items:");
    for (const item of unchecked) {
      lines.push(`• ${item.label}`);
    }
    lines.push("");
  } else if (items.length > 0) {
    lines.push("All checklist items are marked complete on this device.");
    lines.push("");
  }

  lines.push(
    "Plan data stays on this device — this summary is a snapshot, not a live shared plan.",
    `Build yours: ${siteConfig.url}/plan/`
  );

  return lines.join("\n");
}

export function buildPlanMailtoHref(
  profile: PlanProfile,
  items: ChecklistItem[],
  storageKey: string = PLAN_CHECKLIST_STORAGE_KEY
): string {
  const body = buildPlanShareText(profile, items, storageKey);
  const subject = "My Norra Canada Plan";
  return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** Dismissed city-switch pairs: querySlug::profileCityName */
function loadDismissedCitySwitches(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(CITY_SWITCH_DISMISS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((x): x is string => typeof x === "string" && x.includes("::")).slice(0, 100);
  } catch {
    return [];
  }
}

function citySwitchPairKey(querySlug: string, profileCity: string): string {
  return `${querySlug.trim().toLowerCase()}::${profileCity.trim().toLowerCase()}`;
}

export function isCitySwitchDismissed(querySlug: string, profileCity: string): boolean {
  if (!querySlug || !profileCity) return false;
  const key = citySwitchPairKey(querySlug, profileCity);
  return loadDismissedCitySwitches().includes(key);
}

export function dismissCitySwitch(querySlug: string, profileCity: string): void {
  if (typeof window === "undefined" || !querySlug || !profileCity) return;
  const key = citySwitchPairKey(querySlug, profileCity);
  const prev = loadDismissedCitySwitches();
  if (prev.includes(key)) return;
  try {
    localStorage.setItem(CITY_SWITCH_DISMISS_KEY, JSON.stringify([...prev, key].slice(-80)));
  } catch {
    /* ignore */
  }
}

export function clearCitySwitchDismissals(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(CITY_SWITCH_DISMISS_KEY);
  } catch {
    /* ignore */
  }
}
