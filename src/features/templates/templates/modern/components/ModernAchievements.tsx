"use client";

import { Trophy, Trash2 } from "lucide-react";
import type { ResumePreviewData } from "@/types/resume";
import { EditableText } from "@/features/resume-builder/components/workspace/editable/EditableText";
import EditableSectionWrapper from "@/features/resume-builder/components/workspace/editable/EditableSectionWrapper";
import { useResumeStore } from "@/features/resume-builder/store/useResumeStore";

interface ModernAchievementsProps {
  achievements: ResumePreviewData["achievements"];
  isEditable?: boolean;
}

export default function ModernAchievements({
  achievements = [],
  isEditable = true,
}: ModernAchievementsProps) {
  const updateAchievements = useResumeStore((state) => state.updateAchievements);
  const removeAchievement = useResumeStore((state) => state.removeAchievement);
  const accentColor = useResumeStore((state) => state.design.accentColor ?? "#214e3b");

  return (
    <EditableSectionWrapper
      sectionId="achievements"
      defaultTitle="Key Achievements"
      icon={<Trophy className="h-3 w-3" />}
      isEditable={isEditable}
      canAddEntry={true}
    >
      <div className="space-y-3">
        {achievements.map((item) => (
          <article
            key={item.id}
            className="group/item relative rounded-lg border border-neutral-100 p-2.5 shadow-2xs"
          >
            {isEditable && achievements.length > 1 && (
              <button
                type="button"
                onClick={() => removeAchievement(item.id)}
                title="Remove Entry"
                className="absolute right-2 top-2 opacity-0 group-hover/item:opacity-100 p-1 text-neutral-400 hover:text-red-500 transition-opacity"
              >
                <Trash2 className="h-3 w-3" />
              </button>
            )}

            <div className="flex items-start justify-between gap-2">
              <h3 className="text-[10px] font-bold text-neutral-900">
                {isEditable ? (
                  <EditableText
                    value={item.title}
                    onChange={(val) => updateAchievements(item.id, "title", val)}
                    placeholder="Achievement Title"
                  />
                ) : (
                  item.title
                )}
              </h3>

              {(item.date || isEditable) && (
                <div className="text-[8px] text-neutral-400 shrink-0">
                  {isEditable ? (
                    <EditableText
                      value={item.date || ""}
                      onChange={(val) => updateAchievements(item.id, "date", val)}
                      placeholder="Date"
                    />
                  ) : (
                    item.date
                  )}
                </div>
              )}
            </div>

            {(item.description || isEditable) && (
              <div className="mt-1 text-[8.5px] leading-relaxed text-neutral-600">
                {isEditable ? (
                  <EditableText
                    value={item.description || ""}
                    onChange={(val) => updateAchievements(item.id, "description", val)}
                    placeholder="Describe impact..."
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