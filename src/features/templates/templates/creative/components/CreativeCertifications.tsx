"use client";

import type { ResumePreviewData } from "@/types/resume";
import { EditableText } from "@/features/resume-builder/components/workspace/editable/EditableText";
import { useResumeStore } from "@/features/resume-builder/store/useResumeStore";

interface CreativeCertificationsProps {
  certifications: ResumePreviewData["certifications"];
  isEditable?: boolean;
}

export default function CreativeCertifications({
  certifications,
  isEditable = true,
}: CreativeCertificationsProps) {
  const updateCertifications = useResumeStore((state) => state.updateCertifications);

  return (
    <section>
      <div className="mb-5 flex items-center gap-3">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-950">
          Certifications
        </h2>

        <div className="h-px flex-1 bg-zinc-200" />
      </div>

      <div className="space-y-4">
        {certifications.map((certification) => (
          <article
            key={certification.id}
            className="relative pl-4"
          >
            <span className="absolute left-0 top-1 h-2 w-2 rounded-full bg-amber-400" />

            <h3 className="text-[9px] font-bold leading-[1.45] text-zinc-950">
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

            <div className="mt-1 text-[8.5px] font-medium text-zinc-600">
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
              <div className="mt-0.5 text-[8px] text-zinc-400">
                {isEditable ? (
                  <EditableText
                    value={certification.date || ""}
                    onChange={(val) => updateCertifications(certification.id, "date", val)}
                    placeholder="Date"
                  />
                ) : (
                  certification.date
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}