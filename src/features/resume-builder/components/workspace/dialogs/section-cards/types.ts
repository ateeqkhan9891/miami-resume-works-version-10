import type { SectionType } from "@/types/resume";

export interface SectionCatalogItem {
  id: string;
  type: SectionType;
  title: string;
  label: string;
  component: React.ComponentType<{ accentColor: string }>;
}