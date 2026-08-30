"use client";

import { EditableText } from "@/features/resume-builder/components/workspace/editable/EditableText";
import { useResumeStore } from "@/features/resume-builder/store/useResumeStore";

export interface ProfessionalSummaryProps {
  summary: string;
  isEditable?: boolean;
}

export default function ProfessionalSummary({
  summary,
  isEditable = true,
}: ProfessionalSummaryProps) {
  const updateProfile = useResumeStore((state) => state.updateProfile);

  return (
    <section className="px-10 pt-6">
      <div className="flex items-center gap-3">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-950">
          Professional Summary
        </h2>

        <div className="h-px flex-1 bg-slate-200" />
      </div>

      <div className="mt-3 max-w-[690px] text-[10px] leading-[1.75] text-slate-600">
        {isEditable ? (
          <EditableText
            value={summary}
            onChange={(val) => updateProfile("summary", val)}
            placeholder="Write a concise overview of your career, technical strengths, and impact..."
            multiline
            className="w-full"
          />
        ) : (
          <p>{summary}</p>
        )}
      </div>
    </section>
  );
}