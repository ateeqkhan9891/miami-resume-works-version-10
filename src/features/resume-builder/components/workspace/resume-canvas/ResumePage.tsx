"use client";

import TemplateRenderer from "@/features/templates/components/TemplateRenderer";
import { useResumeStore } from "@/features/resume-builder/store/useResumeStore";
import type { Template } from "@/types/template";

interface ResumePageProps {
  currentTemplate: Template;
}

export default function ResumePage({ currentTemplate }: ResumePageProps) {
  const resumeData = useResumeStore((state) => state.resumeData);

  return (
    <div className="h-full w-full bg-white">
      <TemplateRenderer
        template={currentTemplate}
        data={resumeData}
      />
    </div>
  );
}