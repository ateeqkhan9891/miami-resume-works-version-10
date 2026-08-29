export type JobStatus =
  | "Bookmarked"
  | "Applied"
  | "Interviewing"
  | "Negotiating"
  | "Accepted"
  | "Rejected"
  | "No Answer";

export type WorkplaceType = "Remote" | "Hybrid" | "On-site";

export type ColumnKey =
  | "position"
  | "company"
  | "link"
  | "status"
  | "dateSaved"
  | "dateApplied"
  | "workplaceType"
  | "resume"
  | "coverLetter"
  | "notes";

export interface JobTrackerRow {
  id: string;
  selected?: boolean;
  position: string;
  company: string;
  jobUrl?: string;
  status: JobStatus;
  dateSaved: string;
  dateApplied?: string;
  workplaceType?: WorkplaceType;
  matchScore?: number;
  resumeName?: string;
  coverLetterName?: string;
  notes?: string;
}