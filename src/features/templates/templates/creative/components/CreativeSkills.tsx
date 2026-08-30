"use client";

import type { ResumePreviewData } from "@/types/resume";
import { EditableText } from "@/features/resume-builder/components/workspace/editable/EditableText";
import { useResumeStore } from "@/features/resume-builder/store/useResumeStore";

interface CreativeSkillsProps {
  skills: ResumePreviewData["skills"];
  isEditable?: boolean;
}

export default function CreativeSkills({
  skills,
  isEditable = true,
}: CreativeSkillsProps) {
  const updateSkills = useResumeStore((state) => state.updateSkills);

  const handleSkillChange = (indexToUpdate: number, newVal: string) => {
    const updated = [...skills];
    if (!newVal.trim()) {
      updated.splice(indexToUpdate, 1);
    } else {
      updated[indexToUpdate] = newVal;
    }
    updateSkills(updated);
  };

  return (
    <section>
      <div className="mb-3 flex items-center gap-3">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-950">
          Skills
        </h2>

        <div className="h-px flex-1 bg-zinc-200" />
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
        {skills.map((skill, index) => {
          const level = [5, 5, 5, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3][index] ?? 3;

          return (
            <div
              key={index}
              className="flex min-w-0 items-center justify-between gap-2"
            >
              <span className="truncate text-[8px] font-medium text-zinc-700">
                {isEditable ? (
                  <EditableText
                    value={skill}
                    onChange={(val) => handleSkillChange(index, val)}
                    placeholder="Skill"
                  />
                ) : (
                  skill
                )}
              </span>

              <div className="flex shrink-0 items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, dotIndex) => (
                  <span
                    key={dotIndex}
                    className={`h-1.5 w-1.5 rounded-full ${
                      dotIndex < level ? "bg-amber-400" : "bg-zinc-200"
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