"use client";

import type { ResumePreviewData } from "@/types/resume";
import { EditableText } from "@/features/resume-builder/components/workspace/editable/EditableText";
import { useResumeStore } from "@/features/resume-builder/store/useResumeStore";

interface CreativeAwardsProps {
  awards: ResumePreviewData["awards"];
  isEditable?: boolean;
}

export default function CreativeAwards({
  awards,
  isEditable = true,
}: CreativeAwardsProps) {
  const updateAwards = useResumeStore((state) => state.updateAwards);

  return (
    <section>
      <div className="mb-5 flex items-center gap-3">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-950">
          Awards
        </h2>

        <div className="h-px flex-1 bg-zinc-200" />
      </div>

      <div className="space-y-4">
        {awards.map((award) => (
          <article
            key={award.id}
            className="relative pl-4"
          >
            <span className="absolute left-0 top-1 h-2 w-2 rounded-full bg-amber-400" />

            <div className="flex items-start justify-between gap-3">
              <h3 className="text-[9px] font-bold leading-[1.45] text-zinc-950">
                {isEditable ? (
                  <EditableText
                    value={award.title}
                    onChange={(val) => updateAwards(award.id, "title", val)}
                    placeholder="Award Title"
                  />
                ) : (
                  award.title
                )}
              </h3>

              {(award.date || isEditable) && (
                <div className="shrink-0 text-[8px] text-zinc-400">
                  {isEditable ? (
                    <EditableText
                      value={award.date || ""}
                      onChange={(val) => updateAwards(award.id, "date", val)}
                      placeholder="Date"
                    />
                  ) : (
                    award.date
                  )}
                </div>
              )}
            </div>

            {(award.issuer || isEditable) && (
              <div className="mt-1 text-[8.5px] font-medium text-zinc-600">
                {isEditable ? (
                  <EditableText
                    value={award.issuer || ""}
                    onChange={(val) => updateAwards(award.id, "issuer", val)}
                    placeholder="Issuer"
                  />
                ) : (
                  award.issuer
                )}
              </div>
            )}

            {(award.description || isEditable) && (
              <div className="mt-1 text-[8px] leading-[1.5] text-zinc-500">
                {isEditable ? (
                  <EditableText
                    value={award.description || ""}
                    onChange={(val) => updateAwards(award.id, "description", val)}
                    placeholder="Description..."
                    multiline
                    className="w-full"
                  />
                ) : (
                  award.description
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}