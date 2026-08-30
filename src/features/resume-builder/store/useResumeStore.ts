"use client";

import { create } from "zustand";
import type {
  ResumePreviewData,
  SectionType,
} from "@/types/resume";
import { SAMPLE_RESUME_DATA } from "@/features/templates/data/sample-resume-data";

export interface ResumeDesignSettings {
  accentColor: string;
  fontFamily: string; // 'inter' | 'roboto' | 'merriweather' | 'garamond' | 'geist-mono'
  fontSize: "small" | "medium" | "large";
  pageMargin: "compact" | "normal" | "spacious";
  lineSpacing: "dense" | "normal" | "relaxed";
  headerAlign: "left" | "center" | "split";
  photoShape: "circle" | "rounded" | "none";
  dividerStyle: "solid" | "dashed" | "minimal" | "none";
  bulletStyle: "dot" | "dash" | "diamond";
}

export interface LayoutSectionItem {
  id: string;
  name: string;
}

export interface ResumeLayoutOrder {
  left: LayoutSectionItem[];
  right: LayoutSectionItem[];
}

const DEFAULT_DESIGN: ResumeDesignSettings = {
  accentColor: "#214e3b",
  fontFamily: "inter",
  fontSize: "medium",
  pageMargin: "normal",
  lineSpacing: "normal",
  headerAlign: "split",
  photoShape: "circle",
  dividerStyle: "solid",
  bulletStyle: "dot",
};

const DEFAULT_LAYOUT_ORDER: ResumeLayoutOrder = {
  left: [
    { id: "summary", name: "Summary" },
    { id: "experience", name: "Experience" },
    { id: "projects", name: "Selected Projects" },
  ],
  right: [
    { id: "skills", name: "Skills" },
    { id: "education", name: "Education" },
    { id: "certifications", name: "Certifications" },
    { id: "languages", name: "Languages" },
    { id: "awards", name: "Awards" },
  ],
};

interface ResumeStoreState {
  resumeData: ResumePreviewData;
  design: ResumeDesignSettings;
  layoutOrder: ResumeLayoutOrder;
  isDirty: boolean;
  history: { data: ResumePreviewData; design: ResumeDesignSettings; layout: ResumeLayoutOrder }[];
  future: { data: ResumePreviewData; design: ResumeDesignSettings; layout: ResumeLayoutOrder }[];

  // Undo / Redo
  undo: () => void;
  redo: () => void;
  canUndo: () => boolean;
  canRedo: () => boolean;

  // Design & Layout Actions
  updateDesign: <K extends keyof ResumeDesignSettings>(key: K, value: ResumeDesignSettings[K]) => void;
  setLayoutOrder: (layout: ResumeLayoutOrder) => void;

  // Content Actions
  setResumeData: (data: ResumePreviewData) => void;
  updateProfile: (field: keyof ResumePreviewData["profile"], value: any) => void;
  updateSectionTitle: (sectionId: string, newTitle: string) => void;
  removeSection: (sectionId: string) => void;
  addSection: (type: SectionType, title?: string, column?: "main" | "sidebar") => void;

  // Entry Actions
  addEntry: (sectionType: SectionType) => void;
  updateExperience: (id: string, field: string, value: any) => void;
  removeExperience: (id: string) => void;
  updateProject: (id: string, field: string, value: any) => void;
  removeProject: (id: string) => void;
  updateEducation: (id: string, field: string, value: any) => void;
  removeEducation: (id: string) => void;
  updateSkills: (skills: string[]) => void;
  updateAwards: (id: string, field: string, value: any) => void;
  removeAward: (id: string) => void;
  updateCertifications: (id: string, field: string, value: any) => void;
  removeCertification: (id: string) => void;
  updateLanguages: (id: string, field: string, value: any) => void;
  removeLanguage: (id: string) => void;
  updateAchievements: (id: string, field: string, value: any) => void;
  removeAchievement: (id: string) => void;
}

const generateId = () => Math.random().toString(36).substring(2, 9);

export const useResumeStore = create<ResumeStoreState>((set, get) => ({
  resumeData: {
    ...SAMPLE_RESUME_DATA,
    profile: {
      ...SAMPLE_RESUME_DATA.profile,
      showPhoto: true,
    },
    sectionTitles: {
      summary: "Summary",
      experience: "Experience",
      projects: "Selected Projects",
      education: "Education",
      skills: "Skills",
      languages: "Languages",
      certifications: "Certifications",
      awards: "Awards",
      achievements: "Key Achievements",
    },
  },
  design: DEFAULT_DESIGN,
  layoutOrder: DEFAULT_LAYOUT_ORDER,
  isDirty: false,
  history: [],
  future: [],

  undo: () => {
    const { history, resumeData, design, layoutOrder, future } = get();
    if (history.length === 0) return;
    const previous = history[history.length - 1];
    set({
      resumeData: previous.data,
      design: previous.design,
      layoutOrder: previous.layout,
      history: history.slice(0, history.length - 1),
      future: [{ data: resumeData, design, layout: layoutOrder }, ...future],
      isDirty: true,
    });
  },

  redo: () => {
    const { history, resumeData, design, layoutOrder, future } = get();
    if (future.length === 0) return;
    const next = future[0];
    set({
      resumeData: next.data,
      design: next.design,
      layoutOrder: next.layout,
      history: [...history, { data: resumeData, design, layout: layoutOrder }],
      future: future.slice(1),
      isDirty: true,
    });
  },

  canUndo: () => get().history.length > 0,
  canRedo: () => get().future.length > 0,

  updateDesign: (key, value) =>
    set((state) => ({
      design: { ...state.design, [key]: value },
      isDirty: true,
    })),

  setLayoutOrder: (layout) =>
    set((state) => ({
      history: [...state.history, { data: state.resumeData, design: state.design, layout: state.layoutOrder }],
      future: [],
      layoutOrder: layout,
      isDirty: true,
    })),

  setResumeData: (data) => set({ resumeData: data, isDirty: false, history: [], future: [] }),

  updateProfile: (field, value) =>
    set((state) => ({
      history: [...state.history, { data: state.resumeData, design: state.design, layout: state.layoutOrder }],
      future: [],
      resumeData: {
        ...state.resumeData,
        profile: { ...state.resumeData.profile, [field]: value },
      },
      isDirty: true,
    })),

  updateSectionTitle: (sectionId, newTitle) =>
    set((state) => ({
      history: [...state.history, { data: state.resumeData, design: state.design, layout: state.layoutOrder }],
      future: [],
      resumeData: {
        ...state.resumeData,
        sectionTitles: {
          ...state.resumeData.sectionTitles,
          [sectionId]: newTitle,
        },
      },
      isDirty: true,
    })),

  removeSection: (sectionId) =>
    set((state) => {
      const data = { ...state.resumeData };
      if (sectionId === "summary") data.profile = { ...data.profile, summary: "" };
      if (sectionId === "experience") data.experience = [];
      if (sectionId === "projects") data.projects = [];
      if (sectionId === "education") data.education = [];
      if (sectionId === "skills") data.skills = [];
      if (sectionId === "languages") data.languages = [];
      if (sectionId === "certifications") data.certifications = [];
      if (sectionId === "awards") data.awards = [];
      if (sectionId === "achievements") data.achievements = [];

      // Also remove from layoutOrder columns
      const filterSection = (list: LayoutSectionItem[]) => list.filter((i) => i.id !== sectionId);

      return {
        history: [...state.history, { data: state.resumeData, design: state.design, layout: state.layoutOrder }],
        future: [],
        resumeData: data,
        layoutOrder: {
          left: filterSection(state.layoutOrder.left),
          right: filterSection(state.layoutOrder.right),
        },
        isDirty: true,
      };
    }),

  addSection: (type, title, column = "main") =>
    set((state) => {
      const data = { ...state.resumeData };
      const defaultTitle = title || type.charAt(0).toUpperCase() + type.slice(1);

      data.sectionTitles = {
        ...data.sectionTitles,
        [type]: defaultTitle,
      };

      if (type === "summary" && !data.profile.summary) {
        data.profile = {
          ...data.profile,
          summary: "Briefly explain why you're a great fit for the role and your core expertise...",
        };
      }
      if (type === "experience" && (!data.experience || data.experience.length === 0)) {
        data.experience = [
          {
            id: generateId(),
            company: "Organization Name",
            role: "Role / Position",
            period: "2023 - Present",
            location: "City, Country",
            highlights: ["Key achievement or responsibility described with measurable metrics."],
          },
        ];
      }
      if (type === "projects" && (!data.projects || data.projects.length === 0)) {
        data.projects = [
          {
            id: generateId(),
            name: "New Project",
            description: "Built full-stack web application delivering measurable performance improvements.",
            technologies: ["React", "TypeScript", "Next.js"],
            url: "demo.com",
            period: "2024",
          },
        ];
      }
      if (type === "achievements" && (!data.achievements || data.achievements.length === 0)) {
        data.achievements = [
          {
            id: generateId(),
            title: "10x Platform Scale",
            description: "Successfully scaled architecture to handle 500k daily active users.",
            date: "2024",
          },
        ];
      }
      if (type === "education" && (!data.education || data.education.length === 0)) {
        data.education = [
          {
            id: generateId(),
            school: "University / Institution",
            degree: "Bachelor of Science in Computer Science",
            period: "2020 - 2024",
            location: "City, State",
            gpa: "3.9",
          },
        ];
      }
      if (type === "skills" && (!data.skills || data.skills.length === 0)) {
        data.skills = ["React", "TypeScript", "Next.js", "Tailwind CSS", "PostgreSQL"];
      }
      if (type === "languages" && (!data.languages || data.languages.length === 0)) {
        data.languages = [{ id: generateId(), name: "English", proficiency: "fluent" }];
      }
      if (type === "certifications" && (!data.certifications || data.certifications.length === 0)) {
        data.certifications = [
          {
            id: generateId(),
            name: "AWS Certified Solutions Architect",
            issuer: "Amazon Web Services",
            date: "2024",
          },
        ];
      }
      if (type === "awards" && (!data.awards || data.awards.length === 0)) {
        data.awards = [
          {
            id: generateId(),
            title: "Outstanding Contributor Award",
            issuer: "Global Summit",
            date: "2024",
            description: "Recognized among top 1% engineers for system innovations.",
          },
        ];
      }
      if (type === "custom" && (!data.achievements || data.achievements.length === 0)) {
        data.achievements = [
          {
            id: generateId(),
            title: "Custom Highlight",
            description: "Details and bullet points regarding your special domain or work.",
            date: "2024",
          },
        ];
      }

      // Add to layoutOrder if not already present
      const inLeft = state.layoutOrder.left.some((i) => i.id === type);
      const inRight = state.layoutOrder.right.some((i) => i.id === type);
      const newLayout = { ...state.layoutOrder };

      if (!inLeft && !inRight) {
        if (["skills", "languages", "certifications", "education", "awards"].includes(type)) {
          newLayout.right = [...newLayout.right, { id: type, name: defaultTitle }];
        } else {
          newLayout.left = [...newLayout.left, { id: type, name: defaultTitle }];
        }
      }

      return {
        history: [...state.history, { data: state.resumeData, design: state.design, layout: state.layoutOrder }],
        future: [],
        resumeData: data,
        layoutOrder: newLayout,
        isDirty: true,
      };
    }),

  addEntry: (sectionType) =>
    set((state) => {
      const data = { ...state.resumeData };

      switch (sectionType) {
        case "experience":
          data.experience = [
            ...data.experience,
            { id: generateId(), company: "New Company", role: "Role Title", period: "2023 - Present", location: "City, Country", highlights: ["Describe your accomplishments..."] },
          ];
          break;
        case "projects":
          data.projects = [
            ...data.projects,
            { id: generateId(), name: "New Project", description: "Description of what you built...", technologies: ["Next.js"], url: "demo.com" },
          ];
          break;
        case "education":
          data.education = [
            ...data.education,
            { id: generateId(), school: "School / Institution", degree: "Field of Study", period: "2020 - 2024", location: "Location" },
          ];
          break;
        case "awards":
          data.awards = [
            ...data.awards,
            { id: generateId(), title: "Award Title", issuer: "Issuer", date: "2024", description: "" },
          ];
          break;
        case "certifications":
          data.certifications = [
            ...data.certifications,
            { id: generateId(), name: "New Certification", issuer: "Authority", date: "2024" },
          ];
          break;
        case "languages":
          data.languages = [
            ...data.languages,
            { id: generateId(), name: "New Language", proficiency: "conversational" },
          ];
          break;
        case "skills":
          data.skills = [...data.skills, "New Skill"];
          break;
      }

      return {
        history: [...state.history, { data: state.resumeData, design: state.design, layout: state.layoutOrder }],
        future: [],
        resumeData: data,
        isDirty: true,
      };
    }),

  updateExperience: (id, field, value) =>
    set((state) => ({
      history: [...state.history, { data: state.resumeData, design: state.design, layout: state.layoutOrder }],
      future: [],
      resumeData: {
        ...state.resumeData,
        experience: state.resumeData.experience.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
      },
      isDirty: true,
    })),

  removeExperience: (id) =>
    set((state) => ({
      history: [...state.history, { data: state.resumeData, design: state.design, layout: state.layoutOrder }],
      future: [],
      resumeData: {
        ...state.resumeData,
        experience: state.resumeData.experience.filter((item) => item.id !== id),
      },
      isDirty: true,
    })),

  updateProject: (id, field, value) =>
    set((state) => ({
      history: [...state.history, { data: state.resumeData, design: state.design, layout: state.layoutOrder }],
      future: [],
      resumeData: {
        ...state.resumeData,
        projects: state.resumeData.projects.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
      },
      isDirty: true,
    })),

  removeProject: (id) =>
    set((state) => ({
      history: [...state.history, { data: state.resumeData, design: state.design, layout: state.layoutOrder }],
      future: [],
      resumeData: {
        ...state.resumeData,
        projects: state.resumeData.projects.filter((item) => item.id !== id),
      },
      isDirty: true,
    })),

  updateEducation: (id, field, value) =>
    set((state) => ({
      history: [...state.history, { data: state.resumeData, design: state.design, layout: state.layoutOrder }],
      future: [],
      resumeData: {
        ...state.resumeData,
        education: state.resumeData.education.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
      },
      isDirty: true,
    })),

  removeEducation: (id) =>
    set((state) => ({
      history: [...state.history, { data: state.resumeData, design: state.design, layout: state.layoutOrder }],
      future: [],
      resumeData: {
        ...state.resumeData,
        education: state.resumeData.education.filter((item) => item.id !== id),
      },
      isDirty: true,
    })),

  updateSkills: (skills) =>
    set((state) => ({
      history: [...state.history, { data: state.resumeData, design: state.design, layout: state.layoutOrder }],
      future: [],
      resumeData: { ...state.resumeData, skills },
      isDirty: true,
    })),

  updateAwards: (id, field, value) =>
    set((state) => ({
      history: [...state.history, { data: state.resumeData, design: state.design, layout: state.layoutOrder }],
      future: [],
      resumeData: {
        ...state.resumeData,
        awards: state.resumeData.awards.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
      },
      isDirty: true,
    })),

  removeAward: (id) =>
    set((state) => ({
      history: [...state.history, { data: state.resumeData, design: state.design, layout: state.layoutOrder }],
      future: [],
      resumeData: {
        ...state.resumeData,
        awards: state.resumeData.awards.filter((item) => item.id !== id),
      },
      isDirty: true,
    })),

  updateCertifications: (id, field, value) =>
    set((state) => ({
      history: [...state.history, { data: state.resumeData, design: state.design, layout: state.layoutOrder }],
      future: [],
      resumeData: {
        ...state.resumeData,
        certifications: state.resumeData.certifications.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
      },
      isDirty: true,
    })),

  removeCertification: (id) =>
    set((state) => ({
      history: [...state.history, { data: state.resumeData, design: state.design, layout: state.layoutOrder }],
      future: [],
      resumeData: {
        ...state.resumeData,
        certifications: state.resumeData.certifications.filter((item) => item.id !== id),
      },
      isDirty: true,
    })),

  updateLanguages: (id, field, value) =>
    set((state) => ({
      history: [...state.history, { data: state.resumeData, design: state.design, layout: state.layoutOrder }],
      future: [],
      resumeData: {
        ...state.resumeData,
        languages: state.resumeData.languages.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
      },
      isDirty: true,
    })),

  removeLanguage: (id) =>
    set((state) => ({
      history: [...state.history, { data: state.resumeData, design: state.design, layout: state.layoutOrder }],
      future: [],
      resumeData: {
        ...state.resumeData,
        languages: state.resumeData.languages.filter((item) => item.id !== id),
      },
      isDirty: true,
    })),

  updateAchievements: (id, field, value) =>
    set((state) => ({
      history: [...state.history, { data: state.resumeData, design: state.design, layout: state.layoutOrder }],
      future: [],
      resumeData: {
        ...state.resumeData,
        achievements: (state.resumeData.achievements || []).map((item) => (item.id === id ? { ...item, [field]: value } : item)),
      },
      isDirty: true,
    })),

  removeAchievement: (id) =>
    set((state) => ({
      history: [...state.history, { data: state.resumeData, design: state.design, layout: state.layoutOrder }],
      future: [],
      resumeData: {
        ...state.resumeData,
        achievements: (state.resumeData.achievements || []).filter((item) => item.id !== id),
      },
      isDirty: true,
    })),
}));