"use client";

import type { ResumePreviewData } from "@/types/resume";
import { EditableText } from "@/features/resume-builder/components/workspace/editable/EditableText";
import { useResumeStore } from "@/features/resume-builder/store/useResumeStore";

interface ProfessionalCertificationsProps {
  certifications: ResumePreviewData["certifications"];
  isEditable?: boolean;
}

export default function ProfessionalCertifications({
  certifications,
  isEditable = true,
}: ProfessionalCertificationsProps) {
  const updateCertifications = useResumeStore((state) => state.updateCertifications);

  return (
    <section>
      <div className="mb-5 flex items-center gap-3">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-950">
          Certifications
        </h2>

        <div className="h-px flex-1 bg-slate-200" />
      </div>

      <div className="space-y-4">
        {certifications.map((certification) => (
          <article key={certification.id}>
            <h3 className="text-[9.5px] font-bold leading-[1.45] text-slate-950">
              {isEditable ? (
                <EditableText
                  value={certification.name}
                  onChange={(val) => updateCertifications(certification.id, "name", val)}
                  placeholder="Certification Name"
                />
              ) : (
                certification.name
              )}
            </h3>

            <div className="mt-1 flex items-center justify-between gap-3">
              <div className="text-[8.5px] text-slate-600">
                {isEditable ? (
                  <EditableText
                    value={certification.issuer}
                    onChange={(val) => updateCertifications(certification.id, "issuer", val)}
                    placeholder="Issuer"
                  />
                ) : (
                  certification.issuer
                )}
              </div>

              {(certification.date || isEditable) && (
                <div className="shrink-0 text-[8px] font-medium text-slate-400">
                  {isEditable ? (
                    <EditableText
                      value={certification.date || ""}
                      onChange={(val) => updateCertifications(certification.id, "date", val)}
                      placeholder="Year"
                    />
                  ) : (
                    certification.date
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}