"use client";

import { useSearchParams } from "next/navigation";

import TemplateRenderer from "@/features/templates/components/TemplateRenderer";

import { SAMPLE_RESUME_DATA } from "@/features/templates/data/sample-resume-data";
import { SAMPLE_PROFESSIONAL_RESUME_DATA } from "@/features/templates/data/sample-professional-mahira-resume";

import { TEMPLATES_DATA } from "@/features/templates/data/templates";

const A4_WIDTH = 794;
const A4_HEIGHT = 1123;

export default function ResumePage() {
  const searchParams = useSearchParams();

  const templateSlug =
    searchParams.get("template") ?? "miami-modern";

  const template =
    TEMPLATES_DATA.find(
      (item) => item.slug === templateSlug
    ) ?? TEMPLATES_DATA[0];

  const resumeData =
    template.slug === "professional"
      ? SAMPLE_PROFESSIONAL_RESUME_DATA
      : SAMPLE_RESUME_DATA;

  return (
    <div
      className="
        relative
        overflow-hidden
        bg-white
        shadow-[0_16px_50px_rgba(0,0,0,0.14)]
      "
      style={{
        width: A4_WIDTH,
        height: A4_HEIGHT,
      }}
    >
      <TemplateRenderer
        template={template}
        data={resumeData}
      />
    </div>
  );
}