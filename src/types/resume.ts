export type SectionType =
  | "summary"
  | "experience"
  | "projects"
  | "education"
  | "skills"
  | "languages"
  | "certifications"
  | "awards"
  | "achievements"
  | "custom";

export interface SectionMeta {
  id: string;
  type: SectionType;
  title: string;
  visible: boolean;
  column?: "main" | "sidebar";
}

/* -------------------------------------------------------------------------- */
/* Preview / Canvas Types                                                     */
/* -------------------------------------------------------------------------- */

export interface ProfileData {
  fullName: string;
  headline: string;
  email: string;
  phone: string;
  location: string;
  summary?: string;
  website?: string;
  linkedin?: string;
  github?: string;
  profileImageUrl?: string;
  showPhoto?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  highlights: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  school: string;
  period: string;
  location?: string;
  gpa?: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  url?: string;
  period?: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  date?: string;
  credentialId?: string;
  credentialUrl?: string;
}

export interface LanguageItem {
  id: string;
  name: string;
  proficiency: "basic" | "conversational" | "professional" | "fluent" | "native";
}

export interface AwardItem {
  id: string;
  title: string;
  issuer?: string;
  date?: string;
  description?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer?: string;
  date?: string;
  description?: string;
}

export interface ResumePreviewData {
  profile: ProfileData;
  sectionTitles?: Record<string, string>;
  sections?: SectionMeta[];
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: string[];
  projects: ProjectItem[];
  certifications: CertificationItem[];
  languages: LanguageItem[];
  awards: AwardItem[];
  achievements: AchievementItem[];
}

/* -------------------------------------------------------------------------- */
/* Canonical / Backend Schema Types                                          */
/* -------------------------------------------------------------------------- */

export interface ResumePersonalInfo {
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  location: string;
  website?: string;
  linkedin?: string;
  github?: string;
  profileImageUrl?: string;
}

export interface ResumeExperience {
  id: string;
  company: string;
  position: string;
  location?: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description?: string;
  highlights?: string[];
}

export interface ResumeEducation {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
}

export interface ResumeSkill {
  id: string;
  name: string;
  level?: "beginner" | "intermediate" | "advanced" | "expert";
  category?: string;
}

export interface ResumeProject {
  id: string;
  name: string;
  description?: string;
  url?: string;
  technologies?: string[];
}

export interface ResumeCertification {
  id: string;
  name: string;
  issuer: string;
  issueDate?: string;
  expirationDate?: string;
  credentialId?: string;
  credentialUrl?: string;
}

export interface ResumeLanguage {
  id: string;
  name: string;
  proficiency?: "basic" | "conversational" | "professional" | "fluent" | "native";
}

export interface ResumeAward {
  id: string;
  title: string;
  issuer?: string;
  date?: string;
  description?: string;
}

export interface ResumeAchievement {
  id: string;
  title: string;
  issuer?: string;
  date?: string;
  description?: string;
}

export interface ResumeVolunteerExperience {
  id: string;
  organization: string;
  role: string;
  startDate?: string;
  endDate?: string;
  description?: string;
}

export interface ResumeData {
  personal: ResumePersonalInfo;
  summary?: string;
  experience: ResumeExperience[];
  education: ResumeEducation[];
  skills: ResumeSkill[];
  projects: ResumeProject[];
  certifications: ResumeCertification[];
  languages: ResumeLanguage[];
  awards: ResumeAward[];
  achievements?: ResumeAchievement[];
  volunteerExperience: ResumeVolunteerExperience[];
}