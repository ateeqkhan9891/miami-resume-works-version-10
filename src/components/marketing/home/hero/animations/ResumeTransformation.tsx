export type DemoPhase =
  | "idle"
  | "template_change"
  | "design_edit"
  | "section_reorder"
  | "ats_optimization"
  | "job_match"
  | "application";

export interface PhaseConfig {
  phase: DemoPhase;
  duration: number; // ms
}

export const PHASE_SEQUENCE: PhaseConfig[] = [
  { phase: "idle", duration: 1400 },
  { phase: "template_change", duration: 2600 },
  { phase: "design_edit", duration: 3200 },
  { phase: "section_reorder", duration: 3000 },
  { phase: "ats_optimization", duration: 3600 },
  { phase: "job_match", duration: 3200 },
  { phase: "application", duration: 4200 },
];

export const ATS_PROGRESSION = [72, 78, 86, 94];

export const JOB_KEYWORDS = [
  "React",
  "TypeScript",
  "Next.js",
  "PostgreSQL",
  "REST APIs",
];

export const APPLICATION_STEPS = [
  "Applied",
  "Viewed",
  "Interview",
  "Offer",
] as const;

export const DEFAULT_SECTION_ORDER = [
  "Summary",
  "Experience",
  "Education",
  "Skills",
  "Projects",
];

export const REORDERED_SECTIONS = [
  "Summary",
  "Experience",
  "Projects",
  "Education",
  "Skills",
];