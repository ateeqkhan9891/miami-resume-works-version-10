"use client";

import { Trophy, Trash2 } from "lucide-react";
import type { ResumePreviewData } from "@/types/resume";
import { EditableText } from "@/features/resume-builder/components/workspace/editable/EditableText";
import EditableSectionWrapper from "@/features/resume-builder/components/workspace/editable/EditableSectionWrapper";
import { useResumeStore } from "@/features/resume-builder/store/useResumeStore";

interface ModernAwardsProps {
  awards: ResumePreviewData["awards"];
  isEditable?: boolean;
}

export default function ModernAwards({
  awards,
  isEditable = true,
}: ModernAwardsProps) {
  const updateAwards = useResumeStore((state) => state.updateAwards);
  const removeAward = useResumeStore((state) => state.removeAward);

  return (
    <EditableSectionWrapper
      sectionId="awards"
      defaultTitle="Awards"
      icon={<Trophy className="h-3.5 w-3.5" />}
      isEditable={isEditable}
      canAddEntry={true}
    >
      <div className="space-y-3">
        {awards.map((item) => (
          <article key={item.id} className="group/item relative rounded-lg border border-neutral-100 p-2.5 shadow-2xs">
            {isEditable && awards.length > 1 && (
              <button
                type="button"
                onClick={() => removeAward(item.id)}
                title="Remove Award"
                className="absolute right-2 top-2 opacity-0 group-hover/item:opacity-100 p-1 text-neutral-400 hover:text-red-500 transition-opacity"
              >
                <Trash2 className="h-3 w-3" />
              </button>
            )}

            <div className="flex items-start justify-between gap-2">
              <h3 className="text-[9.5px] font-bold text-neutral-900">
                {isEditable ? (
                  <EditableText
                    value={item.title}
                    onChange={(val) => updateAwards(item.id, "title", val)}
                    placeholder="Award Title"
                  />
                ) : (
                  item.title
                )}
              </h3>

              {(item.date || isEditable) && (
                <div className="text-[8px] text-neutral-400">
                  {isEditable ? (
                    <EditableText
                      value={item.date || ""}
                      onChange={(val) => updateAwards(item.id, "date", val)}
                      placeholder="Year"
                    />
                  ) : (
                    item.date
                  )}
                </div>
              )}
            </div>

            {(item.issuer || isEditable) && (
              <div className="mt-0.5 text-[8.5px] font-medium text-emerald-800">
                {isEditable ? (
                  <EditableText
                    value={item.issuer || ""}
                    onChange={(val) => updateAwards(item.id, "issuer", val)}
                    placeholder="Issuing Organization"
                  />
                ) : (
                  item.issuer
                )}
              </div>
            )}

            {(item.description || isEditable) && (
              <div className="mt-1 text-[8px] text-neutral-600">
                {isEditable ? (
                  <EditableText
                    value={item.description || ""}
                    onChange={(val) => updateAwards(item.id, "description", val)}
                    placeholder="Brief description..."
                    multiline
                    className="w-full"
                  />
                ) : (
                  <p>{item.description}</p>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </EditableSectionWrapper>
  );
}