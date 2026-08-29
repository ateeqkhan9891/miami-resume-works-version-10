"use client";

import { Check } from "lucide-react";
import TemplateRenderer from "@/features/templates/components/TemplateRenderer";
import { TEMPLATES_DATA } from "@/features/templates/data/templates";
import { SAMPLE_RESUME_DATA } from "@/features/templates/data/sample-resume-data";
import { SAMPLE_PROFESSIONAL_RESUME_DATA } from "@/features/templates/data/sample-professional-mahira-resume";
import type { Template } from "@/types/template";

const A4_WIDTH = 794;
const A4_HEIGHT = 1123;
const THUMBNAIL_SCALE = 0.19;
const CARD_HEIGHT = Math.round(A4_HEIGHT * THUMBNAIL_SCALE); // ~213px

interface TemplatesPanelProps {
  selectedTemplateId?: string;
  onSelectTemplate?: (template: Template) => void;
}

export default function TemplatesPanel({
  selectedTemplateId = "miami-modern",
  onSelectTemplate,
}: TemplatesPanelProps) {
  const getPreviewData = (slug: string) => {
    switch (slug) {
      case "professional":
        return SAMPLE_PROFESSIONAL_RESUME_DATA;
      case "creative-folio":
      case "miami-modern":
      default:
        return SAMPLE_RESUME_DATA;
    }
  };

  return (
    <div className="grid grid-cols-2 gap-3">
      {TEMPLATES_DATA.map((tmpl) => {
        const isSelected =
          selectedTemplateId === tmpl.id || selectedTemplateId === tmpl.slug;
        const previewData = getPreviewData(tmpl.slug);

        return (
          <button
            key={tmpl.id}
            type="button"
            onClick={() => onSelectTemplate?.(tmpl)}
            className={`group relative w-full overflow-hidden rounded-lg border bg-white text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:bg-neutral-950 ${
              isSelected
                ? "border-neutral-900 ring-2 ring-neutral-900/20 shadow-md"
                : "border-neutral-200/90 shadow-xs hover:border-neutral-400 hover:shadow-md dark:border-neutral-800"
            }`}
            style={{
              height: `${CARD_HEIGHT}px`,
            }}
          >
            <div
              className="pointer-events-none absolute left-0 top-0 origin-top-left select-none overflow-hidden bg-white"
              style={{
                width: `${A4_WIDTH}px`,
                height: `${A4_HEIGHT}px`,
                transform: `scale(${THUMBNAIL_SCALE})`,
              }}
            >
              <TemplateRenderer template={tmpl} data={previewData} />
            </div>

            <div
              className={`absolute inset-0 transition-colors duration-150 ${
                isSelected
                  ? "bg-neutral-950/5"
                  : "bg-transparent group-hover:bg-neutral-950/5"
              }`}
            />

            {isSelected && (
              <div className="absolute right-2 top-2 z-20 flex h-5 w-5 items-center justify-center rounded-full bg-neutral-900 text-white shadow-md dark:bg-neutral-100 dark:text-neutral-900">
                <Check className="h-3 w-3 stroke-[3]" />
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}