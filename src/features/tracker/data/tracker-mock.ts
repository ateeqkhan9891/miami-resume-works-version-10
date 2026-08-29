import type { JobTrackerRow, JobStatus } from "../types/table";

export function formatCurrentDate(date: Date = new Date()): string {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export const STATUS_CONFIG: Record<
  JobStatus,
  { label: string; bg: string; text: string; dotColor: string }
> = {
  Bookmarked: {
    label: "Bookmarked",
    bg: "bg-purple-500/10 border-purple-500/20",
    text: "text-purple-700 dark:text-purple-300",
    dotColor: "bg-purple-500",
  },
  Applied: {
    label: "Applied",
    bg: "bg-sky-500/10 border-sky-500/20",
    text: "text-sky-700 dark:text-sky-300",
    dotColor: "bg-sky-500",
  },
  Interviewing: {
    label: "Interviewing",
    bg: "bg-amber-500/10 border-amber-500/20",
    text: "text-amber-700 dark:text-amber-300",
    dotColor: "bg-amber-500",
  },
  Negotiating: {
    label: "Negotiating",
    bg: "bg-teal-500/10 border-teal-500/20",
    text: "text-teal-700 dark:text-teal-300",
    dotColor: "bg-teal-500",
  },
  Accepted: {
    label: "Accepted",
    bg: "bg-emerald-500/15 border-emerald-500/30",
    text: "text-emerald-800 dark:text-emerald-200",
    dotColor: "bg-emerald-500",
  },
  Rejected: {
    label: "Rejected",
    bg: "bg-rose-500/10 border-rose-500/20",
    text: "text-rose-700 dark:text-rose-300",
    dotColor: "bg-rose-500",
  },
  "No Answer": {
    label: "No Answer",
    bg: "bg-stone-500/10 border-border",
    text: "text-stone-600 dark:text-stone-400",
    dotColor: "bg-stone-400",
  },
};

export const ALL_STATUSES: JobStatus[] = [
  "Bookmarked",
  "Applied",
  "Interviewing",
  "Negotiating",
  "Accepted",
  "Rejected",
  "No Answer",
];

export const INITIAL_TRACKER_ROWS: JobTrackerRow[] = [
  {
    id: "1",
    position: "AI & Backend Engineer",
    company: "Volga Partners",
    jobUrl: "https://volgapartners.com/careers/ai-backend",
    status: "Bookmarked",
    dateSaved: formatCurrentDate(),
    dateApplied: "",
    workplaceType: "Hybrid",
    matchScore: 62,
    resumeName: "Senior Backend Resume",
    coverLetterName: "Volga Cover Letter",
    notes: "Applied through referral. Need to follow up next Tuesday.",
  },
  {
    id: "2",
    position: "Staff Frontend Architect",
    company: "Linear",
    jobUrl: "https://linear.app/careers",
    status: "Applied",
    dateSaved: formatCurrentDate(),
    dateApplied: "2026-08-28",
    workplaceType: "Remote",
    matchScore: 89,
    resumeName: "Staff UI Resume",
    coverLetterName: "Linear Cover Letter",
    notes: "Direct reach out to Engineering Director.",
  },
  {
    id: "3",
    position: "",
    company: "",
    status: "Bookmarked",
    dateSaved: formatCurrentDate(),
    dateApplied: "",
    notes: "",
  },
  {
    id: "4",
    position: "",
    company: "",
    status: "Bookmarked",
    dateSaved: formatCurrentDate(),
    dateApplied: "",
    notes: "",
  },
];