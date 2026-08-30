"use client";

import { GraduationCap, Trash2 } from "lucide-react";
import type { ResumePreviewData } from "@/types/resume";
import { EditableText } from "@/features/resume-builder/components/workspace/editable/EditableText";
import EditableSectionWrapper from "@/features/resume-builder/components/workspace/editable/EditableSectionWrapper";
import { useResumeStore } from "@/features/resume-builder/store/useResumeStore";

interface ModernEducationProps {
  education: ResumePreviewData["education"];
  isEditable?: boolean;
}

export default function ModernEducation({
  education,
  isEditable = true,
}: ModernEducationProps) {
  const updateEducation = useResumeStore((state) => state.updateEducation);
  const removeEducation = useResumeStore((state) => state.removeEducation);

  return (
    <EditableSectionWrapper
      sectionId="education"
      defaultTitle="Education"
      icon={<GraduationCap className="h-3.5 w-3.5" />}
      isEditable={isEditable}
      canAddEntry={true}
    >
      <div className="space-y-4">
        {education.map((item) => (
          <article key={item.id} className="group/item relative rounded-lg border border-neutral-100 p-2.5 shadow-2xs">
            {isEditable && education.length > 1 && (
              <button
                type="button"
                onClick={() => removeEducation(item.id)}
                title="Remove Education"
                className="absolute right-2 top-2 opacity-0 group-hover/item:opacity-100 p-1 text-neutral-400 hover:text-red-500 transition-opacity"
              >
                <Trash2 className="h-3 w-3" />
              </button>
            )}

            <div className="text-[7.5px] font-bold uppercase tracking-wider text-emerald-700">
              {isEditable ? (
                <EditableText
                  value={item.period}
                  onChange={(val) => updateEducation(item.id, "period", val)}
                  placeholder="2018 - 2022"
                />
              ) : (
                item.period
              )}
            </div>

            <h3 className="mt-0.5 text-[10px] font-bold text-neutral-900">
              {isEditable ? (
                <EditableText
                  value={item.degree}
                  onChange={(val) => updateEducation(item.id, "degree", val)}
                  placeholder="Degree"
                />
              ) : (
                item.degree
              )}
            </h3>

            <div className="mt-0.5 text-[9px] font-semibold text-neutral-600">
              {isEditable ? (
                <EditableText
                  value={item.school}
                  onChange={(val) => updateEducation(item.id, "school", val)}
                  placeholder="School / University"
                />
              ) : (
                item.school
              )}
            </div>

            {(item.location || isEditable) && (
              <div className="text-[8px] text-neutral-400">
                {isEditable ? (
                  <EditableText
                    value={item.location || ""}
                    onChange={(val) => updateEducation(item.id, "location", val)}
                    placeholder="Location"
                  />
                ) : (
                  item.location
                )}
              </div>
            )}

            {(item.gpa || isEditable) && (
              <div className="mt-1 flex items-center gap-1 text-[8px] text-neutral-500">
                <span>GPA</span>
                {isEditable ? (
                  <EditableText
                    value={item.gpa || ""}
                    onChange={(val) => updateEducation(item.id, "gpa", val)}
                    placeholder="3.8"
                  />
                ) : (
                  <span>{item.gpa}</span>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </EditableSectionWrapper>
  );
}