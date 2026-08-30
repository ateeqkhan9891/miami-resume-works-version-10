"use client";

import type { ResumePreviewData } from "@/types/resume";
import { EditableText } from "@/features/resume-builder/components/workspace/editable/EditableText";
import { useResumeStore } from "@/features/resume-builder/store/useResumeStore";

interface ProfessionalExperienceProps {
  experience: ResumePreviewData["experience"];
  isEditable?: boolean;
}

export default function ProfessionalExperience({
  experience,
  isEditable = true,
}: ProfessionalExperienceProps) {
  const updateExperience = useResumeStore((state) => state.updateExperience);

  const handleHighlightChange = (
    expId: string,
    highlights: string[],
    indexToUpdate: number,
    newVal: string
  ) => {
    const updatedHighlights = [...highlights];
    updatedHighlights[indexToUpdate] = newVal;
    updateExperience(expId, "highlights", updatedHighlights);
  };

  return (
    <section>
      <div className="mb-5 flex items-center gap-3">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-950">
          Professional Experience
        </h2>

        <div className="h-px flex-1 bg-slate-200" />
      </div>

      <div className="space-y-7">
        {experience.map((item) => (
          <article key={item.id} className="relative pl-4">
            <span className="absolute left-0 top-1.5 h-1.5 w-1.5 rounded-full bg-slate-800" />

            <div className="flex items-start justify-between gap-5">
              <div className="min-w-0 flex-1">
                <h3 className="text-[12px] font-bold leading-tight text-slate-950">
                  {isEditable ? (
                    <EditableText
                      value={item.role}
                      onChange={(val) => updateExperience(item.id, "role", val)}
                      placeholder="Role Title"
                    />
                  ) : (
                    item.role
                  )}
                </h3>

                <div className="mt-1 text-[10px] font-semibold text-slate-600">
                  {isEditable ? (
                    <EditableText
                      value={item.company}
                      onChange={(val) => updateExperience(item.id, "company", val)}
                      placeholder="Company Name"
                    />
                  ) : (
                    item.company
                  )}
                </div>
              </div>

              <div className="shrink-0 text-right">
                <div className="text-[9px] font-semibold text-slate-700">
                  {isEditable ? (
                    <EditableText
                      value={item.period}
                      onChange={(val) => updateExperience(item.id, "period", val)}
                      placeholder="2021 - Present"
                    />
                  ) : (
                    item.period
                  )}
                </div>

                {(item.location || isEditable) && (
                  <div className="mt-0.5 text-[8px] text-slate-400">
                    {isEditable ? (
                      <EditableText
                        value={item.location || ""}
                        onChange={(val) => updateExperience(item.id, "location", val)}
                        placeholder="Location"
                      />
                    ) : (
                      item.location
                    )}
                  </div>
                )}
              </div>
            </div>

            {(item.highlights?.length > 0 || isEditable) && (
              <ul className="mt-3 space-y-1.5">
                {item.highlights.map((highlight, index) => (
                  <li
                    key={`${item.id}-${index}`}
                    className="relative pl-3 text-[9.5px] leading-[1.65] text-slate-600"
                  >
                    <span className="absolute left-0 top-[0.65em] h-1 w-1 rounded-full bg-slate-400" />
                    {isEditable ? (
                      <EditableText
                        value={highlight}
                        onChange={(newVal) =>
                          handleHighlightChange(item.id, item.highlights, index, newVal)
                        }
                        placeholder="Key accomplishment or responsibility..."
                        multiline
                        className="w-full"
                      />
                    ) : (
                      highlight
                    )}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}