export interface ResumePreviewData {
  profile: {
    fullName: string;
    headline: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
    website?: string;
    linkedin?: string;
    github?: string;
    profileImageUrl?: string;
  };

  experience: Array<{
    id: string;
    role: string;
    company: string;
    period: string;
    location: string;
    highlights: string[];
  }>;

  education: Array<{
    id: string;
    degree: string;
    school: string;
    period: string;
    gpa?: string;
    location?: string;
  }>;

  skills: string[];

  projects: Array<{
    id: string;
    name: string;
    description: string;
    url?: string;
    technologies: string[];
  }>;

  certifications: Array<{
    id: string;
    name: string;
    issuer: string;
    date?: string;
    credentialId?: string;
    credentialUrl?: string;
  }>;

  languages: Array<{
    id: string;
    name: string;
    proficiency:
      | "basic"
      | "conversational"
      | "professional"
      | "fluent"
      | "native";
  }>;

  awards: Array<{
    id: string;
    title: string;
    issuer?: string;
    date?: string;
    description?: string;
  }>;

  achievements: Array<{
  id: string;
  title: string;
  issuer?: string;
  date?: string;
  description?: string;
}>;
}

/* -------------------------------------------------------------------------- */
/* Canonical Resume Data                                                      */
/* -------------------------------------------------------------------------- */

export interface ResumeAchievement {
  id: string;
  title: string;
  issuer?: string;
  date?: string;
  description?: string;
}


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
  proficiency?:
    | "basic"
    | "conversational"
    | "professional"
    | "fluent"
    | "native";
}

export interface ResumeAward {
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

  volunteerExperience: ResumeVolunteerExperience[];
}