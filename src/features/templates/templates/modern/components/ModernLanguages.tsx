"use client";

import { Languages, Trash2 } from "lucide-react";
import type { ResumePreviewData } from "@/types/resume";
import { EditableText } from "@/features/resume-builder/components/workspace/editable/EditableText";
import EditableSectionWrapper from "@/features/resume-builder/components/workspace/editable/EditableSectionWrapper";
import { useResumeStore } from "@/features/resume-builder/store/useResumeStore";

interface ModernLanguagesProps {
  languages: ResumePreviewData["languages"];
  isEditable?: boolean;
}

export default function ModernLanguages({
  languages,
  isEditable = true,
}: ModernLanguagesProps) {
  const updateLanguages = useResumeStore((state) => state.updateLanguages);
  const removeLanguage = useResumeStore((state) => state.removeLanguage);

  return (
    <EditableSectionWrapper
      sectionId="languages"
      defaultTitle="Languages"
      icon={<Languages className="h-3.5 w-3.5" />}
      isEditable={isEditable}
      canAddEntry={true}
    >
      <div className="space-y-2">
        {languages.map((item) => (
          <div
            key={item.id}
            className="group/item relative flex items-center justify-between rounded-md border border-neutral-100 px-2.5 py-1.5 shadow-2xs"
          >
            <span className="text-[9px] font-semibold text-neutral-800">
              {isEditable ? (
                <EditableText
                  value={item.name}
                  onChange={(val) => updateLanguages(item.id, "name", val)}
                  placeholder="Language"
                />
              ) : (
                item.name
              )}
            </span>

            <div className="flex items-center gap-2">
              <span className="text-[8px] font-medium capitalize text-emerald-700">
                {isEditable ? (
                  <EditableText
                    value={item.proficiency}
                    onChange={(val) => updateLanguages(item.id, "proficiency", val)}
                    placeholder="fluent"
                  />
                ) : (
                  item.proficiency
                )}
              </span>

              {isEditable && languages.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeLanguage(item.id)}
                  title="Remove Language"
                  className="opacity-0 group-hover/item:opacity-100 p-0.5 text-neutral-400 hover:text-red-500 transition-opacity"
                >
                  <Trash2 className="h-2.5 w-2.5" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </EditableSectionWrapper>
  );
}