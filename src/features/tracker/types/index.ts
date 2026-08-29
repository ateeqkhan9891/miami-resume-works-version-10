export type ApplicationStage =
  | "saved"
  | "applied"
  | "interviewing"
  | "offered"
  | "rejected";

export interface TrackedJob {
  id: string;
  title: string;
  company: string;
  location?: string;
  salary?: string;
  stage: ApplicationStage;
  matchScore: number;
  appliedDate?: string;
  notes?: string;
  url?: string;
}

export interface StageColumnConfig {
  id: ApplicationStage;
  title: string;
  badgeColor: string;
}