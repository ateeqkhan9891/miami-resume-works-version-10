"use client";

import type { ResumePreviewData } from "@/types/resume";
import { EditableText } from "@/features/resume-builder/components/workspace/editable/EditableText";
import { useResumeStore } from "@/features/resume-builder/store/useResumeStore";

interface CreativeLanguagesProps {
  languages: ResumePreviewData["languages"];
  isEditable?: boolean;
}

const proficiencyLevels = {
  basic: 2,
  conversational: 3,
  professional: 4,
  fluent: 5,
  native: 5,
} as const;

export default function CreativeLanguages({
  languages,
  isEditable = true,
}: CreativeLanguagesProps) {
  const updateLanguages = useResumeStore((state) => state.updateLanguages);

  return (
    <section>
      <div className="mb-5 flex items-center gap-3">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-950">
          Languages
        </h2>

        <div className="h-px flex-1 bg-zinc-200" />
      </div>

      <div className="space-y-3">
        {languages.map((language) => {
          const level = language.proficiency
            ? proficiencyLevels[language.proficiency]
            : 3;

          return (
            <div
              key={language.id}
              className="flex items-center justify-between gap-3"
            >
              <span className="text-[9px] font-medium text-zinc-700">
                {isEditable ? (
                  <EditableText
                    value={language.name}
                    onChange={(val) => updateLanguages(language.id, "name", val)}
                    placeholder="Language"
                  />
                ) : (
                  language.name
                )}
              </span>

              <div className="flex shrink-0 items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={index}
                    className={`h-1.5 w-1.5 rounded-full ${
                      index < level ? "bg-amber-400" : "bg-zinc-200"
                    }`}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}