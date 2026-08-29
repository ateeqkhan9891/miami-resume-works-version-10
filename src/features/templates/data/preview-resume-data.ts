import type { ResumePreviewData } from "@/types/resume";

export const MOCK_PREVIEW_RESUME: ResumePreviewData = {
  profile: {
    fullName: "Alex Morgan",
    headline: "Senior Full-Stack Engineer & Technical Lead",
    email: "alex.morgan@example.com",
    phone: "+1 (555) 019-2834",
    location: "San Francisco, CA (Open to Remote)",
    summary:
      "Full-stack software engineer with 6+ years of experience scaling modern web applications. Proven track record architecting high-throughput distributed systems and leading UI component libraries.",
    website: "https://alexmorgan.dev",
    linkedin: "https://linkedin.com/in/alexmorgan",
    github: "https://github.com/alexmorgan",
  },
  experience: [
    {
      id: "exp-1",
      role: "Lead Frontend Engineer",
      company: "Linear Systems Inc.",
      period: "2023 - Present",
      location: "San Francisco, CA",
      highlights: [
        "Architected and deployed next-generation desktop web application reducing bundle footprint by 42%.",
        "Mentored a distributed engineering pod of 8 across React, TypeScript, and state architectures.",
        "Engineered real-time collaboration engine handling 100k+ concurrent active sessions.",
      ],
    },
    {
      id: "exp-2",
      role: "Senior Software Engineer",
      company: "Vercel Partner Labs",
      period: "2020 - 2023",
      location: "Remote",
      highlights: [
        "Authored core headless component library adopted across 14 cross-functional product teams.",
        "Increased lighthouse performance scores from 64 to 98 across all core marketing funnels.",
      ],
    },
  ],
  education: [
    {
      id: "edu-1",
      degree: "B.S. in Computer Science",
      school: "University of California, Berkeley",
      period: "2016 - 2020",
      gpa: "3.85 / 4.0",
      location: "Berkeley, CA",
    },
  ],
  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
    "Supabase",
    "GraphQL",
    "System Architecture",
    "CI/CD Pipelines",
  ],
  projects: [
    {
      id: "proj-1",
      name: "MiamiResume Studio",
      description: "Full-stack resume builder with dynamic ATS scoring and instant PDF export engine.",
      url: "https://miamiresume.com",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    },
  ],
  certifications: [
    {
      id: "cert-1",
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
    },
  ],
  languages: [
    {
      id: "lang-1",
      name: "English",
      proficiency: "native",
    },
  ],
  awards: [
    {
      id: "award-1",
      title: "Engineering Excellence Award",
      issuer: "Linear Systems",
      date: "2024",
    },
  ],
  achievements: [
    {
      id: "ach-1",
      title: "Open Source Contributor of the Year",
      issuer: "Tech Community Foundation",
      date: "2023",
    },
  ],
};