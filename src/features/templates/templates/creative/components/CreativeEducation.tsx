"use client";

import type { ResumePreviewData } from "@/types/resume";
import { EditableText } from "@/features/resume-builder/components/workspace/editable/EditableText";
import { useResumeStore } from "@/features/resume-builder/store/useResumeStore";

interface CreativeEducationProps {
  education: ResumePreviewData["education"];
  isEditable?: boolean;
}

export default function CreativeEducation({
  education,
  isEditable = true,
}: CreativeEducationProps) {
  const updateEducation = useResumeStore((state) => state.updateEducation);

  return (
    <section>
      <div className="mb-5 flex items-center gap-3">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-950">
          Education
        </h2>

        <div className="h-px flex-1 bg-zinc-200" />
      </div>

      <div className="space-y-5">
        {education.map((item) => (
          <article
            key={item.id}
            className="relative pl-4"
          >
            <span className="absolute left-0 top-1 h-2 w-2 rounded-full bg-amber-400" />

            <div className="text-[8px] font-bold uppercase tracking-[0.12em] text-amber-600">
              {isEditable ? (
                <EditableText
                  value={item.period}
                  onChange={(val) => updateEducation(item.id, "period", val)}
                  placeholder="Graduation Year"
                />
              ) : (
                item.period
              )}
            </div>

            <h3 className="mt-1 text-[10px] font-bold leading-[1.4] text-zinc-950">
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

            <div className="mt-1 text-[9px] font-medium text-zinc-600">
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
              <div className="mt-0.5 text-[8px] text-zinc-400">
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
              <div className="mt-1.5 flex items-center gap-1 text-[8px] text-zinc-500">
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
    </section>
  );
}