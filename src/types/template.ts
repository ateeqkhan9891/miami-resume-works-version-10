
export interface TemplateTags {
  styles: ("modern" | "creative" | "simple" | "traditional" | "minimalist" | string)[];
  layout: ("one-page" | "two-page" | "one-column" | "two-column" | string)[];
  experience?: ("entry-level" | "intern" | "senior" | "executive" | string)[];
  education?: ("scholarship" | "college" | "mba" | string)[];
  job?: ("technology" | "finance" | "sales" | "healthcare" | "education" | string)[];
  format?: ("word" | "google-docs" | "pdf" | string)[];
}

export interface Template {
  id: string;
  name: string;
  slug: string;
  description: string;
  thumbnailUrl: string;
  fullPreviewUrl: string;
  isPopular?: boolean;
  isAtsFriendly?: boolean;
  accentColor?: string;
  tags: TemplateTags;
}