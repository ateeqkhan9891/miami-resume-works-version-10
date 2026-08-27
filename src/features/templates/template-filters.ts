import type { LucideIcon } from "lucide-react";

import {
  Pipette,
  Palette,
  LineStyle,
  BadgeCheck,
  LayoutPanelTop,
  Briefcase,
  GraduationCap,
  Code,
  LayoutDashboard,
  MopSparkles,
  StarMinus,
  Circle,
  File,
  Files,
  Columns2,
  Columns3,
  UserRound,
  UserPlus,
  Award,
  Building2,
  Landmark,
  HeartPulse,
  DollarSign,
  Stethoscope,
  FileText,
  FileType,
  FileDown,
} from "lucide-react";

interface Filter {
  id: string;
  label: string;
  icon: LucideIcon;
  options?: FilterOption[];
}

interface FilterOption {
  id: string;
  label: string;
  icon: LucideIcon;
}

export const Filters: Filter[] = [
  {
    id: "top-picks",
    label: "Top Picks",
    icon: Pipette,
  },

  {
    id: "ats",
    label: "ATS",
    icon: Palette,
  },

  {
    id: "styles",
    label: "Styles",
    icon: LineStyle,
    options: [
      { id: "modern", label: "Modern", icon: BadgeCheck },
      { id: "creative", label: "Creative", icon: MopSparkles },
      { id: "simple", label: "Simple", icon: Circle },
      { id: "traditional", label: "Traditional", icon: FileText },
      { id: "minimalist", label: "Minimalist", icon: StarMinus },
    ],
  },

  {
    id: "layout",
    label: "Layout",
    icon: LayoutDashboard,
    options: [
      { id: "one-page", label: "One Page", icon: File },
      { id: "two-page", label: "Two Page", icon: Files },
      { id: "one-column", label: "One Column", icon: Columns2 },
      { id: "two-column", label: "Two Column", icon: Columns3 },
    ],
  },

  {
    id: "experience",
    label: "Experience",
    icon: Briefcase,
    options: [
      { id: "entry-level", label: "Entry Level", icon: UserRound },
      { id: "intern", label: "Intern", icon: UserPlus },
      { id: "senior", label: "Senior", icon: Award },
      { id: "executive", label: "Executive", icon: Building2 },
    ],
  },

  {
    id: "education",
    label: "Education",
    icon: GraduationCap,
    options: [
      { id: "scholarship", label: "Scholarships", icon: Award },
      { id: "college", label: "College", icon: GraduationCap },
      { id: "mba", label: "MBA", icon: Landmark },
    ],
  },

  {
    id: "job",
    label: "Job",
    icon: Code,
    options: [
      { id: "technology", label: "Technology", icon: Code },
      { id: "finance", label: "Finance", icon: DollarSign },
      { id: "sales", label: "Sales", icon: Briefcase },
      { id: "healthcare", label: "Healthcare", icon: Stethoscope },
      { id: "education", label: "Education", icon: GraduationCap },
    ],
  },

  {
    id: "format",
    label: "Format",
    icon: LayoutPanelTop,
    options: [
      { id: "word", label: "Word", icon: FileText },
      { id: "google-docs", label: "Google Docs", icon: FileType },
      { id: "pdf", label: "PDF", icon: FileDown },
    ],
  },
];