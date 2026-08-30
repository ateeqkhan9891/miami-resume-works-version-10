"use client";

import type { ResumePreviewData } from "@/types/resume";
import { EditableText } from "@/features/resume-builder/components/workspace/editable/EditableText";
import { useResumeStore } from "@/features/resume-builder/store/useResumeStore";

interface ProfessionalLanguagesProps {
  languages: ResumePreviewData["languages"];
  isEditable?: boolean;
}

const proficiencyLabels = {
  basic: "Basic",
  conversational: "Conversational",
  professional: "Professional",
  fluent: "Fluent",
  native: "Native",
} as const;

export default function ProfessionalLanguages({
  languages,
  isEditable = true,
}: ProfessionalLanguagesProps) {
  const updateLanguages = useResumeStore((state) => state.updateLanguages);

  return (
    <section>
      <div className="mb-5 flex items-center gap-3">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-950">
          Languages
        </h2>

        <div className="h-px flex-1 bg-slate-200" />
      </div>

      <div className="space-y-2.5">
        {languages.map((language) => (
          <div
            key={language.id}
            className="flex items-center justify-between gap-4"
          >
            <span className="text-[9px] font-semibold text-slate-700">
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

            <span className="text-[8px] text-slate-400">
              {isEditable ? (
                <EditableText
                  value={language.proficiency}
                  onChange={(val) => updateLanguages(language.id, "proficiency", val)}
                  placeholder="fluent"
                />
              ) : (
                language.proficiency
                  ? proficiencyLabels[language.proficiency]
                  : "Professional"
              )}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}