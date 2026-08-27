import type { ResumePreviewData } from "@/types/resume";

export const SAMPLE_RESUME_DATA: ResumePreviewData = {
  profile: {
    fullName: "Urooj Khan",
    headline: "Senior Software Engineer |  System Architect |  Backend Engineer",
    email: "urooj.khan@example.com",
    phone: "+923367070686",
    location: "Islamabad,Pakistan",
    summary:
      "Senior software engineer with 7+ years of experience building scalable web applications, SaaS platforms, and data-driven products. Specialized in TypeScript, React, Next.js, Node.js, and PostgreSQL, with a strong focus on product quality, performance, and maintainable architecture.",
    website: "uroojkhan.dev",
    profileImageUrl: "/images/profiles/kyliejenner.png",
  },

  experience: [
    {
      id: "experience-1",
      role: "Senior Software Engineer",
      company: "CloudHarbor Technologies",
      period: "2022 - Present",
      location: "San Francisco, CA",
      highlights: [
        "Led development of customer-facing SaaS applications serving more than 120,000 monthly users.",
        "Improved application performance by 38% through React rendering optimization, API caching, and database query improvements.",
        "Designed reusable TypeScript and React architecture that reduced duplicated frontend code across three product teams.",
        "Partnered with product managers and designers to ship high-impact features from technical planning through production.",
      ],
    },

    {
      id: "experience-2",
      role: "Software Engineer",
      company: "Northstar Labs",
      period: "2019 - 2022",
      location: "Austin, TX",
      highlights: [
        "Built and maintained full-stack product features using React, Next.js, Node.js, and PostgreSQL.",
        "Developed REST and GraphQL APIs supporting customer dashboards, reporting workflows, and internal operations.",
        "Reduced average API response times by 32% by improving PostgreSQL queries and introducing application-level caching.",
        "Worked closely with designers and engineers to establish reusable UI patterns across the company's web platform.",
      ],
    },

    {
      id: "experience-3",
      role: "Software Developer",
      company: "Brightline Digital",
      period: "2017 - 2019",
      location: "Chicago, IL",
      highlights: [
        "Developed responsive web applications for startups and established businesses using React and Node.js.",
        "Implemented reusable frontend components and integrated third-party APIs across multiple client projects.",
        "Collaborated with senior engineers on testing, code reviews, CI/CD workflows, and production deployments.",
      ],
    },
  ],

  education: [
    {
      id: "education-1",
      degree: "B.S. in Computer Science",
      school: "University of Illinois Urbana-Champaign",
      period: "2013 - 2017",
      location: "Champaign, IL",
      gpa: "3.8 / 4.0",
    },
    {
      id: "education",
      degree: "B.S in Data science",
      school: "Institute of Management Sciences, Peshawar",
      period: "2024- 2027",
      location: "Peshawar, Pakistan",
      gpa: "3.3 / 4.0",
    }
  ],

  skills: [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Supabase",
    "REST APIs",
    "GraphQL",
    "Tailwind CSS",
    "Docker",
    "AWS",
    "Git",
    "CI/CD",
    "System Design",
  ],

  projects: [
    {
      id: "project-1",
      name: "Pulse Analytics",
      description:
        "Real-time analytics platform helping SaaS teams monitor product adoption, customer activity, and business metrics.",
      url: "pulseanalytics.dev",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Supabase",
      ],
    },

    {
      id: "project-2",
      name: "TeamFlow",
      description:
        "Collaborative project management application with real-time updates, role-based access, and automated reporting.",
      url: "teamflow.dev",
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Docker",
      ],
    },
  ],

  certifications: [
    {
      id: "certification-1",
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
    },

    {
      id: "certification-2",
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2023",
    },
  ],

  languages: [
    {
      id: "language-1",
      name: "English",
      proficiency: "native",
    },

    {
      id: "language-2",
      name: "Urdu",
      proficiency: "native",
    },

    {
      id: "language-3",
      name: "Spanish",
      proficiency: "conversational",
    },
  ],

  awards: [
    {
      id: "award-1",
      title: "Engineering Excellence Award",
      issuer: "CloudHarbor Technologies",
      date: "2024",
      description:
        "Recognized for leading performance improvements across the company's primary SaaS platform.",
    },

    {
      id: "award-2",
      title: "Outstanding Project Contributor",
      issuer: "Northstar Labs",
      date: "2021",
    },
  ],

  achievements: [
  {
    id: "achievement-1",
    title: "Engineering Excellence Award",
    issuer: "CloudHarbor Technologies",
    date: "2024",
    description:
      "Recognized for leading a platform-wide performance initiative that improved application speed and reliability.",
  },
  {
    id: "achievement-2",
    title: "Outstanding Project Contributor",
    issuer: "Northstar Labs",
    date: "2021",
    description:
      "Recognized for delivering a high-impact customer analytics platform ahead of schedule.",
  },
  {
    id: "achievement-3",
    title: "Hackathon Winner",
    issuer: "University of Illinois",
    date: "2017",
    description:
      "Won first place for developing a real-time collaborative productivity application.",
  },
],
};