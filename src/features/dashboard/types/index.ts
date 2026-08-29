
export interface SavedJob {
  id: string;
  title: string;
  company: string;
  matchScore: number;
  status: "bookmarked" | "applied" | "interviewing";
}

export interface RecentDocument {
  id: string;
  title: string;
  jobTarget: string;
  type: "Resume" | "Cover Letter";
  lastEdited: string;
  href: string;
}

export interface ChecklistItem {
  id: string;
  label: string;
  completed: boolean;
}