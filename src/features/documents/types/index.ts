export type DocumentType = "Resume" | "Cover Letter";

export interface DocumentItem {
  id: string;
  name: string;
  type: DocumentType;
  jobTarget?: {
    company: string;
    matchScore?: number;
  };
  createdAt: string;
  modifiedAt: string;
  isPinned?: boolean;
  selected?: boolean;
}