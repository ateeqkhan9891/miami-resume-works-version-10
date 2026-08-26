
import { LayoutGrid, Wand2, Globe2, LucideIcon } from "lucide-react";

export interface FeaturePoint {
  icon: LucideIcon;
  text: string;
}

export interface JobSearchTab {
  id: string;
  label: string;
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
  features: FeaturePoint[];
  previewImage?: string;
}

export const JOB_SEARCH_TABS: JobSearchTab[] = [
  {
    id: "resume-builder",
    label: "Resume Builder",
    title: "Start with a resume that lands interviews",
    description: "Your search starts with the resume. Our AI builder drafts and sharpens every section with you, then tailors it to each job in minutes.",
    features: [
      {
        icon: LayoutGrid,
        text: "Over 20 resume sections, designed and reviewed by certified resume writers.",
      },
      {
        icon: Wand2,
        text: "AI rewrites weak bullets into active, results-driven lines.",
      },
      {
        icon: Globe2,
        text: "Tailor the same resume to every job, in 20+ languages.",
      },
    ],
  },
  {
    id: "resume-checker",
    label: "Resume Checker",
    title: "Instant score & actionable fixes before you apply",
    description: "Upload your existing resume to get an instant breakdown on structure, keywords, typography, and ATS readiness.",
    features: [
      {
        icon: LayoutGrid,
        text: "Comprehensive ATS compatibility and keyword density scan.",
      },
      {
        icon: Wand2,
        text: "Fix formatting and readability issues in one click.",
      },
      {
        icon: Globe2,
        text: "Compare your resume against real industry job descriptions.",
      },
    ],
  },
  {
    id: "cover-letter",
    label: "Cover Letter",
    title: "Generate matching cover letters in seconds",
    description: "Write compelling, targeted cover letters that match your resume design and speak directly to hiring managers.",
    features: [
      {
        icon: LayoutGrid,
        text: "Consistent visual styling paired with your resume design.",
      },
      {
        icon: Wand2,
        text: "Custom hooks and intros tailored to company culture.",
      },
      {
        icon: Globe2,
        text: "Export both documents together as a polished application pack.",
      },
    ],
  },
  {
    id: "import-resume",
    label: "Import Resume",
    title: "Turn any PDF or LinkedIn profile into a live draft",
    description: "No need to start from scratch. Upload any old resume format and our parser reconstructs it cleanly inside the editor.",
    features: [
      {
        icon: LayoutGrid,
        text: "Intelligent PDF and DOCX extraction with zero data loss.",
      },
      {
        icon: Wand2,
        text: "Auto-sorts unstructured info into standard ATS buckets.",
      },
      {
        icon: Globe2,
        text: "Seamless 1-click sync directly from your LinkedIn profile.",
      },
    ],
  },
  {
    id: "job-tracker",
    label: "Job Tracker",
    title: "Manage all your applications from one board",
    description: "Keep tabs on where you applied, interview dates, follow-ups, and offers with an intuitive drag-and-drop Kanban workflow.",
    features: [
      {
        icon: LayoutGrid,
        text: "Kanban pipeline organized by Applied, Interviewing, and Offered.",
      },
      {
        icon: Wand2,
        text: "Auto-logs custom tailored resume versions per application.",
      },
      {
        icon: Globe2,
        text: "Integrated deadline reminders and follow-up alerts.",
      },
    ],
  },
  {
    id: "interview-help",
    label: "Interview Help",
    title: "Prepare with AI tailored to your target role",
    description: "Get anticipated interview questions and personalized answer outlines derived from your actual resume and the job listing.",
    features: [
      {
        icon: LayoutGrid,
        text: "Role-specific behavioral and technical question bank.",
      },
      {
        icon: Wand2,
        text: "STAR framework generation based on your bullet points.",
      },
      {
        icon: Globe2,
        text: "Real-time AI voice and text practice feedback.",
      },
    ],
  },
  {
    id: "ai-job-search",
    label: "AI Job Search",
    title: "Find hidden jobs that match your exact profile",
    description: "Our discovery engine analyzes your skill set and matches you with high-signal openings before they hit major job boards.",
    features: [
      {
        icon: LayoutGrid,
        text: "Personalized match percentage calculated per opening.",
      },
      {
        icon: Wand2,
        text: "Salary insights and verified recruiter contact information.",
      },
      {
        icon: Globe2,
        text: "Instant 1-click apply with your tailored resume set.",
      },
    ],
  },
];