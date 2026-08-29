export interface TargetJobData {
  jobTitle: string;
  companyName?: string;
  jobDescription: string;
  matchScore?: number;
  matchedKeywords?: string[];
  missingKeywords?: string[];
  suggestions?: string[];
}