import type { ResumePreviewData } from "@/types/resume";

interface ProfessionalAwardsProps {
  awards: ResumePreviewData["awards"];
}

export default function ProfessionalAwards({
  awards,
}: ProfessionalAwardsProps) {
  return (
    <section>
      <div className="mb-5 flex items-center gap-3">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-950">
          Awards
        </h2>

        <div className="h-px flex-1 bg-slate-200" />
      </div>

      <div className="space-y-4">
        {awards.map((award) => (
          <article key={award.id}>
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-[9.5px] font-bold leading-[1.45] text-slate-950">
                {award.title}
              </h3>

              {award.date && (
                <span className="shrink-0 text-[8px] text-slate-400">
                  {award.date}
                </span>
              )}
            </div>

            {award.issuer && (
              <p className="mt-1 text-[8.5px] font-medium text-slate-600">
                {award.issuer}
              </p>
            )}

            {award.description && (
              <p className="mt-1 text-[8px] leading-[1.5] text-slate-500">
                {award.description}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}