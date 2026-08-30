"use client";

import { Briefcase, Trash2 } from "lucide-react";
import type { ResumePreviewData } from "@/types/resume";
import { EditableText } from "@/features/resume-builder/components/workspace/editable/EditableText";
import EditableSectionWrapper from "@/features/resume-builder/components/workspace/editable/EditableSectionWrapper";
import { useResumeStore } from "@/features/resume-builder/store/useResumeStore";

interface ModernExperienceProps {
  experience: ResumePreviewData["experience"];
  isEditable?: boolean;
}

export default function ModernExperience({
  experience,
  isEditable = true,
}: ModernExperienceProps) {
  const updateExperience = useResumeStore((state) => state.updateExperience);
  const removeExperience = useResumeStore((state) => state.removeExperience);
  const accentColor = useResumeStore((state) => state.design.accentColor ?? "#214e3b");
  const bulletStyle = useResumeStore((state) => state.design.bulletStyle ?? "dot");

  const handleHighlightChange = (
    expId: string,
    highlights: string[],
    indexToUpdate: number,
    newVal: string
  ) => {
    const updated = [...highlights];
    updated[indexToUpdate] = newVal;
    updateExperience(expId, "highlights", updated);
  };

  // Helper to render customized bullet glyph
  const renderBullet = () => {
    switch (bulletStyle) {
      case "diamond":
        return (
          <span
            className="absolute left-0 top-[0.6em] h-1.5 w-1.5 rotate-45"
            style={{ backgroundColor: accentColor }}
          />
        );
      case "dash":
        return (
          <span
            className="absolute left-0 top-[0.65em] h-[1.5px] w-2 rounded-full"
            style={{ backgroundColor: accentColor }}
          />
        );
      case "dot":
      default:
        return (
          <span
            className="absolute left-0 top-[0.6em] h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: accentColor }}
          />
        );
    }
  };

  return (
    <EditableSectionWrapper
      sectionId="experience"
      defaultTitle="Experience"
      icon={<Briefcase className="h-3 w-3" />}
      isEditable={isEditable}
      canAddEntry={true}
    >
      <div className="space-y-5">
        {experience.map((item) => (
          <article
            key={item.id}
            className="group/item relative border-l-2 pl-3.5 transition-colors"
            style={{ borderColor: `${accentColor}30` }}
          >
            {/* Timeline Marker */}
            <span
              className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full shadow-2xs"
              style={{ backgroundColor: accentColor }}
            />

            {/* Individual Item Deletion */}
            {isEditable && experience.length > 1 && (
              <button
                type="button"
                onClick={() => removeExperience(item.id)}
                title="Remove Entry"
                className="absolute right-0 top-0 opacity-0 group-hover/item:opacity-100 p-1 text-neutral-400 hover:text-red-500 transition-opacity"
              >
                <Trash2 className="h-3 w-3" />
              </button>
            )}

            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <h3 className="text-[11.5px] font-bold text-neutral-900 leading-tight">
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

                <div
                  className="mt-0.5 text-[10px] font-semibold"
                  style={{ color: accentColor }}
                >
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

              <div className="shrink-0 text-right text-[8.5px] text-neutral-500">
                {isEditable ? (
                  <EditableText
                    value={item.period}
                    onChange={(val) => updateExperience(item.id, "period", val)}
                    placeholder="2022 - Present"
                  />
                ) : (
                  <div>{item.period}</div>
                )}
                {(item.location || isEditable) && (
                  <div className="text-neutral-400">
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

            {/* Bullet List */}
            <ul className="mt-2 space-y-1">
              {item.highlights.map((highlight, index) => (
                <li key={index} className="relative pl-3.5 text-[9.5px] leading-relaxed text-neutral-600">
                  {renderBullet()}
                  {isEditable ? (
                    <EditableText
                      value={highlight}
                      onChange={(newVal) =>
                        handleHighlightChange(item.id, item.highlights, index, newVal)
                      }
                      placeholder="Bullet point achievement..."
                      multiline
                      className="w-full"
                    />
                  ) : (
                    highlight
                  )}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </EditableSectionWrapper>
  );
}