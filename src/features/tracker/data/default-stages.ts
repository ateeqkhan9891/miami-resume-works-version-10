import type { StageColumnConfig } from "../types";

export const TRACKER_STAGES: StageColumnConfig[] = [
  { id: "saved", title: "Saved & Target", badgeColor: "bg-stone-500/10 text-stone-700 dark:text-stone-300" },
  { id: "applied", title: "Applied", badgeColor: "bg-sky-500/10 text-sky-700 dark:text-sky-400" },
  { id: "interviewing", title: "Interviewing", badgeColor: "bg-amber-500/10 text-amber-700 dark:text-amber-400" },
  { id: "offered", title: "Offer Received", badgeColor: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400" },
  { id: "rejected", title: "Archived", badgeColor: "bg-destructive/10 text-destructive" },
];