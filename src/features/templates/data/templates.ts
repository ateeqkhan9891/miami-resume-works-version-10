import type { Template } from "@/types/template";

export const TEMPLATES_DATA: Template[] = [
  {
    id: "miami-modern",
    name: "Miami Modern",
    slug: "miami-modern",
    description:
      "Sleek asymmetric header with structured skills grid for tech & engineering.",
    thumbnailUrl: "/images/templates/modern/urooj-modern-resume.png",
    
    isPopular: true,
    isAtsFriendly: true,
    accentColor: "#4f46e5",
    tags: {
      styles: ["modern", "minimalist"],
      layout: ["one-page", "two-column"],
      experience: ["entry-level", "senior"],
      education: ["college"],
      job: ["technology"],
      format: ["pdf", "word"],
    },
  },

 {
  id: "creative-folio",
  name: "Creative Folio",
  slug: "creative-folio",
  description:
    "Visual portfolio layout with expressive accent panels for modern designers and engineers.",
  thumbnailUrl: "/images/templates/creative/Mahira-khan-creative.png",

  isPopular: true,
  isAtsFriendly: false,
  accentColor: "#f59e0b", 
  tags: {
    styles: ["creative", "modern"],
    layout: ["one-page", "two-column"],
    experience: ["entry-level", "mid-level", "senior"],
    education: ["college", "scholarship"],
    job: ["technology", "design", "engineering"],
    format: ["pdf"],
  },
},

  {
  id: "professional",
  name: "Professional",
  slug: "professional",
  description:
    "Clean, structured professional resume designed for experienced professionals and technical roles.",
  thumbnailUrl: "/images/templates/professional/mahira-khan-professional.png",

  isPopular: true,
  isAtsFriendly: true,
  accentColor: "#334155",
  tags: {
    styles: ["simple"],
    layout: ["one-page", "two-column"],
    experience: ["senior", "executive"],
    education: ["college", "mba"],
    job: ["technology", "finance"],
    format: ["pdf", "word", "google-docs"],
  },
},

  // {
  //   id: "minimalist-clean",
  //   name: "Minimalist Clean",
  //   slug: "minimalist-clean",
  //   description:
  //     "High-density clean whitespace designed for maximum automated ATS pass rates.",
  //   thumbnailUrl: "/images/resumes/home/examples/techer.jpg",
  
  //   isPopular: true,
  //   isAtsFriendly: true,
  //   accentColor: "#059669",
  //   tags: {
  //     styles: ["minimalist", "simple"],
  //     layout: ["one-page", "one-column"],
  //     experience: ["entry-level", "intern"],
  //     education: ["college"],
  //     job: ["healthcare", "education"],
  //     format: ["pdf", "word", "google-docs"],
  //   },
  // },

  // {
  //   id: "executive-leader",
  //   name: "Executive Leader",
  //   slug: "executive-leader",
  //   description:
  //     "Comprehensive framework showcasing leadership impact and metrics.",
  //   thumbnailUrl: "/images/resumes/home/examples/product-manager.jpg",
  //   isPopular: false,
  //   isAtsFriendly: true,
  //   accentColor: "#0369a1",
  //   tags: {
  //     styles: ["traditional", "modern"],
  //     layout: ["two-page", "two-column"],
  //     experience: ["executive", "senior"],
  //     education: ["mba"],
  //     job: ["finance", "sales"],
  //     format: ["pdf", "word"],
  //   },
  // },

  // {
  //   id: "tech-craft",
  //   name: "Tech Craft",
  //   slug: "tech-craft",
  //   description:
  //     "Engineered for software developers with project links and technical stacks.",
  //   thumbnailUrl: "/images/resumes/home/examples/data-scientist.jpg",
  //   isPopular: true,
  //   isAtsFriendly: true,
  //   accentColor: "#7c3aed",
  //   tags: {
  //     styles: ["modern"],
  //     layout: ["one-page", "two-column"],
  //     experience: ["senior", "entry-level"],
  //     education: ["college"],
  //     job: ["technology"],
  //     format: ["pdf"],
  //   },
  // },

  // {
  //   id: "growth-marketing",
  //   name: "Growth Engine",
  //   slug: "growth-engine",
  //   description:
  //     "Metrics-driven layout tailored for campaign managers and growth leads.",
  //   thumbnailUrl: "/images/resumes/home/examples/marketing.jpg",
  //   isPopular: true,
  //   isAtsFriendly: true,
  //   accentColor: "#ea580c",
  //   tags: {
  //     styles: ["modern", "creative"],
  //     layout: ["one-page", "two-column"],
  //     experience: ["entry-level", "senior"],
  //     education: ["college"],
  //     job: ["sales"],
  //     format: ["pdf", "word"],
  //   },
  // },

  // {
  //   id: "revenue-closer",
  //   name: "Revenue Closer",
  //   slug: "revenue-closer",
  //   description:
  //     "Quota and achievement-focused structure for sales development and account executives.",
  //   thumbnailUrl: "/images/resumes/home/examples/sales.jpg",
  //   isPopular: false,
  //   isAtsFriendly: true,
  //   accentColor: "#16a34a",
  //   tags: {
  //     styles: ["simple", "traditional"],
  //     layout: ["one-page", "one-column"],
  //     experience: ["senior", "executive"],
  //     education: ["college"],
  //     job: ["sales", "finance"],
  //     format: ["pdf", "google-docs"],
  //   },
  // },

  // {
  //   id: "engineering-core",
  //   name: "Engineering Core",
  //   slug: "engineering-core",
  //   description:
  //     "Detailed chronological template highlighting certifications, tools, and project scopes.",
  //   thumbnailUrl: "/images/resumes/home/examples/engineer.jpg",
  //   isPopular: false,
  //   isAtsFriendly: true,
  //   accentColor: "#0284c7",
  //   tags: {
  //     styles: ["modern", "simple"],
  //     layout: ["two-page", "two-column"],
  //     experience: ["senior", "entry-level"],
  //     education: ["college", "mba"],
  //     job: ["technology"],
  //     format: ["pdf", "word"],
  //   },
  // },
];