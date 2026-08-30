"use client";

import { User } from "lucide-react";
import { EditableText } from "@/features/resume-builder/components/workspace/editable/EditableText";
import EditableSectionWrapper from "@/features/resume-builder/components/workspace/editable/EditableSectionWrapper";
import { useResumeStore } from "@/features/resume-builder/store/useResumeStore";

interface ModernSummaryProps {
  summary: string;
  isEditable?: boolean;
}

export default function ModernSummary({
  summary,
  isEditable = true,
}: ModernSummaryProps) {
  const updateProfile = useResumeStore((state) => state.updateProfile);

  return (
    <EditableSectionWrapper
      sectionId="summary"
      defaultTitle="Summary"
      icon={<User className="h-3.5 w-3.5" />}
      isEditable={isEditable}
      canAddEntry={false}
    >
      <div className="rounded-lg border border-emerald-500/30 bg-emerald-50/10 p-3 text-[10px] leading-relaxed text-neutral-700">
        {isEditable ? (
          <EditableText
            value={summary}
            onChange={(val) => updateProfile("summary", val)}
            placeholder="Briefly explain why you're a great fit for the role..."
            multiline
            className="w-full"
          />
        ) : (
          <p>{summary}</p>
        )}
      </div>
    </EditableSectionWrapper>
  );
}