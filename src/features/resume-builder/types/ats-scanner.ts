export interface AtsIssue {
  id: string;
  category: "formatting" | "sections" | "keywords" | "content";
  severity: "error" | "warning" | "success";
  title: string;
  description: string;
  targetSectionId?: string; // e.g., 'experience', 'summary', 'skills'
}

export interface AtsScanResult {
  overallScore: number;
  formattingScore: number;
  sectionsScore: number;
  keywordsScore: number;
  contentScore: number;
  issues: AtsIssue[];
  matchedKeywords?: string[];
  missingKeywords?: string[];
  scannedAt: string;
}