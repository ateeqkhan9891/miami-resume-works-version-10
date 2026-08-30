"use client";

import type { ResumePreviewData } from "@/types/resume";
import { EditableText } from "@/features/resume-builder/components/workspace/editable/EditableText";
import { useResumeStore } from "@/features/resume-builder/store/useResumeStore";

interface ProfessionalEducationProps {
  education: ResumePreviewData["education"];
  isEditable?: boolean;
}

export default function ProfessionalEducation({
  education,
  isEditable = true,
}: ProfessionalEducationProps) {
  const updateEducation = useResumeStore((state) => state.updateEducation);

  return (
    <section>
      <div className="mb-5 flex items-center gap-3">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-950">
          Education
        </h2>

        <div className="h-px flex-1 bg-slate-200" />
      </div>

      <div className="space-y-5">
        {education.map((item) => (
          <article key={item.id}>
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <h3 className="text-[10.5px] font-bold leading-[1.4] text-slate-950">
                  {isEditable ? (
                    <EditableText
                      value={item.degree}
                      onChange={(val) => updateEducation(item.id, "degree", val)}
                      placeholder="Degree / Major"
                    />
                  ) : (
                    item.degree
                  )}
                </h3>

                <div className="mt-1 text-[9px] font-semibold text-slate-600">
                  {isEditable ? (
                    <EditableText
                      value={item.school}
                      onChange={(val) => updateEducation(item.id, "school", val)}
                      placeholder="Institution / School"
                    />
                  ) : (
                    item.school
                  )}
                </div>
              </div>

              <div className="shrink-0 text-[8px] font-medium text-slate-400">
                {isEditable ? (
                  <EditableText
                    value={item.period}
                    onChange={(val) => updateEducation(item.id, "period", val)}
                    placeholder="Period (e.g. 2018 - 2022)"
                  />
                ) : (
                  item.period
                )}
              </div>
            </div>

            {(item.location || isEditable) && (
              <div className="mt-1 text-[8px] text-slate-400">
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
              <div className="mt-1.5 flex items-center gap-1 text-[8px] font-medium text-slate-500">
                <span>GPA</span>
                {isEditable ? (
                  <EditableText
                    value={item.gpa || ""}
                    onChange={(val) => updateEducation(item.id, "gpa", val)}
                    placeholder="3.8 / 4.0"
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