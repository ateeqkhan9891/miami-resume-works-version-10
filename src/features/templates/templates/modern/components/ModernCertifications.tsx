"use client";

import { CheckCircle2, Trash2 } from "lucide-react";
import type { ResumePreviewData } from "@/types/resume";
import { EditableText } from "@/features/resume-builder/components/workspace/editable/EditableText";
import EditableSectionWrapper from "@/features/resume-builder/components/workspace/editable/EditableSectionWrapper";
import { useResumeStore } from "@/features/resume-builder/store/useResumeStore";

interface ModernCertificationsProps {
  certifications: ResumePreviewData["certifications"];
  isEditable?: boolean;
}

export default function ModernCertifications({
  certifications,
  isEditable = true,
}: ModernCertificationsProps) {
  const updateCertifications = useResumeStore((state) => state.updateCertifications);
  const removeCertification = useResumeStore((state) => state.removeCertification);

  return (
    <EditableSectionWrapper
      sectionId="certifications"
      defaultTitle="Certifications"
      icon={<CheckCircle2 className="h-3.5 w-3.5" />}
      isEditable={isEditable}
      canAddEntry={true}
    >
      <div className="space-y-3">
        {certifications.map((item) => (
          <article key={item.id} className="group/item relative rounded-lg border border-neutral-100 p-2.5 shadow-2xs">
            {isEditable && certifications.length > 1 && (
              <button
                type="button"
                onClick={() => removeCertification(item.id)}
                title="Remove Certification"
                className="absolute right-2 top-2 opacity-0 group-hover/item:opacity-100 p-1 text-neutral-400 hover:text-red-500 transition-opacity"
              >
                <Trash2 className="h-3 w-3" />
              </button>
            )}

            <h3 className="text-[9.5px] font-bold text-neutral-900">
              {isEditable ? (
                <EditableText
                  value={item.name}
                  onChange={(val) => updateCertifications(item.id, "name", val)}
                  placeholder="Certification Name"
                />
              ) : (
                item.name
              )}
            </h3>

            <div className="mt-0.5 flex items-center justify-between text-[8px] text-neutral-500">
              <div>
                {isEditable ? (
                  <EditableText
                    value={item.issuer}
                    onChange={(val) => updateCertifications(item.id, "issuer", val)}
                    placeholder="Issuer"
                  />
                ) : (
                  item.issuer
                )}
              </div>

              {(item.date || isEditable) && (
                <div>
                  {isEditable ? (
                    <EditableText
                      value={item.date || ""}
                      onChange={(val) => updateCertifications(item.id, "date", val)}
                      placeholder="Year"
                    />
                  ) : (
                    item.date
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </EditableSectionWrapper>
  );
}