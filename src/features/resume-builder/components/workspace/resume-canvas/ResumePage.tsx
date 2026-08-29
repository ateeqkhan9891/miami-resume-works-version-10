"use client";

import TemplateRenderer from "@/features/templates/components/TemplateRenderer";
import { SAMPLE_RESUME_DATA } from "@/features/templates/data/sample-resume-data";
import { SAMPLE_PROFESSIONAL_RESUME_DATA } from "@/features/templates/data/sample-professional-mahira-resume";
import type { Template } from "@/types/template";

interface ResumePageProps {
  currentTemplate: Template;
}

export default function ResumePage({ currentTemplate }: ResumePageProps) {
  // Use professional sample data if professional template is selected, otherwise standard sample data
  const resumeData =
    currentTemplate.slug === "professional" || currentTemplate.id === "professional"
      ? SAMPLE_PROFESSIONAL_RESUME_DATA
      : SAMPLE_RESUME_DATA;

  return (
    <div className="h-full w-full bg-white">
      <TemplateRenderer
        template={currentTemplate}
        data={resumeData}
      />
    </div>
  );
}