export interface ResumePreviewData {
  profile: {
    fullName: string;
    headline: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
    website?: string;
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
  }>;
  skills: string[];
  certifications?: string[];
}

export const SAMPLE_RESUME_DATA: ResumePreviewData = {
  profile: {
    fullName: "Alex Morgan",
    headline: "Senior Full Stack Engineer & System Architect",
    email: "alex.morgan@example.com",
    phone: "+1 (555) 349-2910",
    location: "Miami, FL",
    summary:
      "Results-oriented engineer with 6+ years designing high-throughput web applications and scalable cloud backends. Expert in Next.js, TypeScript, PostgreSQL, and modern UI engineering.",
    website: "alexmorgan.dev",
  },
  experience: [
    {
      id: "1",
      role: "Senior Software Engineer",
      company: "Apex Cloud Technologies",
      period: "2023 - Present",
      location: "Miami, FL",
      highlights: [
        "Architected core dashboard services handling 4.2M daily events with 99.98% uptime.",
        "Reduced bundle size by 38% and improved Core Web Vitals across primary landing surfaces.",
        "Mentored 5 junior developers and standardized modern TypeScript and CI/CD best practices.",
      ],
    },
    {
      id: "2",
      role: "Full Stack Developer",
      company: "Vanguard Digital Labs",
      period: "2020 - 2023",
      location: "Remote",
      highlights: [
        "Built responsive SaaS modules using React, Tailwind CSS, and REST/GraphQL APIs.",
        "Refactored relational schema migrations in PostgreSQL, optimizing query throughput by 45%.",
      ],
    },
  ],
  education: [
    {
      id: "edu-1",
      degree: "B.S. in Computer Science & Information Systems",
      school: "University of Miami",
      period: "2016 - 2020",
      gpa: "3.9 / 4.0",
    },
  ],
  skills: [
    "TypeScript",
    "React / Next.js",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
    "Supabase",
    "Docker",
    "GraphQL",
    "System Design",
  ],
  certifications: [
    "AWS Certified Solutions Architect",
    "Certified Scrum Master (CSM)",
  ],
};