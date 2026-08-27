export type TemplateStyle =
  | "modern"
  | "creative"
  | "simple"
  | "traditional"
  | "minimalist";

export type TemplateLayout =
  | "one-page"
  | "two-page"
  | "one-column"
  | "two-column";

export type TemplateExperienceLevel =
  | "entry-level"
  | "intern"
  | "senior"
  | "executive";

export type TemplateEducationType =
  | "scholarship"
  | "college"
  | "mba";

export type TemplateJobCategory =
  | "technology"
  | "finance"
  | "sales"
  | "healthcare"
  | "education";

export type TemplateFormat =
  | "word"
  | "google-docs"
  | "pdf";

export interface TemplateTags {
  styles: TemplateStyle[];
  layout: TemplateLayout[];
  experience?: TemplateExperienceLevel[];
  education?: TemplateEducationType[];
  job?: TemplateJobCategory[];
  format?: TemplateFormat[];
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