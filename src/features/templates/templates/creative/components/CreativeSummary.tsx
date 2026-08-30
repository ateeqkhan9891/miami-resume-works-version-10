"use client";

import { EditableText } from "@/features/resume-builder/components/workspace/editable/EditableText";
import { useResumeStore } from "@/features/resume-builder/store/useResumeStore";

interface CreativeSummaryProps {
  summary: string;
  isEditable?: boolean;
}

export default function CreativeSummary({
  summary,
  isEditable = true,
}: CreativeSummaryProps) {
  const updateProfile = useResumeStore((state) => state.updateProfile);

  return (
    <section className="px-10 pt-8">
      <div className="flex items-start gap-5">
        <div className="mt-1 h-10 w-1 shrink-0 rounded-full bg-amber-400" />

        <div className="w-full">
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-amber-600">
            About Me
          </p>

          <div className="mt-2 max-w-[650px] text-[10px] leading-[1.8] text-zinc-600">
            {isEditable ? (
              <EditableText
                value={summary}
                onChange={(val) => updateProfile("summary", val)}
                placeholder="Share your creative background and focus..."
                multiline
                className="w-full"
              />
            ) : (
              <p>{summary}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}