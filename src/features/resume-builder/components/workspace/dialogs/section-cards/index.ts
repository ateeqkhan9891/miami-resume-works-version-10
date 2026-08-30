import type { SectionCatalogItem } from "./types";
import CustomSectionCard from "./CustomSectionCard";
import ProjectsSectionCard from "./ProjectsSectionCard";
import AchievementsSectionCard from "./AchievementsSectionCard";
import StrengthsSectionCard from "./StrengthsSectionCard";
import VolunteeringSectionCard from "./VolunteeringSectionCard";
import IndustryExpertiseSectionCard from "./IndustryExpertiseSectionCard";
import MyTimeSectionCard from "./MyTimeSectionCard";
import OnlinePresenceSectionCard from "./OnlinePresenceSectionCard";
import CertificationsSectionCard from "./CertificationsSectionCard";

export const SECTION_CARDS_CATALOG: SectionCatalogItem[] = [
  {
    id: "custom",
    type: "custom",
    title: "Custom Section",
    label: "Custom",
    component: CustomSectionCard,
  },
  {
    id: "projects",
    type: "projects",
    title: "Projects",
    label: "Projects",
    component: ProjectsSectionCard,
  },
  {
    id: "achievements",
    type: "achievements",
    title: "Key Achievements",
    label: "Key Achievements",
    component: AchievementsSectionCard,
  },
  {
    id: "skills",
    type: "skills",
    title: "Strengths & Skills",
    label: "Strengths",
    component: StrengthsSectionCard,
  },
  {
    id: "experience",
    type: "experience",
    title: "Volunteering",
    label: "Volunteering",
    component: VolunteeringSectionCard,
  },
  {
    id: "certifications",
    type: "certifications",
    title: "Certifications",
    label: "Certifications",
    component: CertificationsSectionCard,
  },
  {
    id: "languages",
    type: "languages",
    title: "Languages & Online",
    label: "Languages",
    component: OnlinePresenceSectionCard,
  },
  {
    id: "awards",
    type: "awards",
    title: "Awards & Honors",
    label: "Awards",
    component: IndustryExpertiseSectionCard,
  },
  {
    id: "education",
    type: "education",
    title: "Education",
    label: "Education",
    component: MyTimeSectionCard,
  },
];