import type { ResumePreviewData } from "@/types/resume";
import { ModernTemplateIcons } from "../ModernTemplateIcons";

interface ModernAwardsProps {
  awards: ResumePreviewData["awards"];
}

export default function ModernAwards({
  awards,
}: ModernAwardsProps) {
  const AwardIcon = ModernTemplateIcons.awards;

  return (
    <section>
      <div className="mb-3 flex items-center gap-2.5">
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-cyan-50 text-cyan-600">
          <AwardIcon size={11} strokeWidth={2.2} />
        </div>

        <h2 className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-900">
          Awards & Honors
        </h2>

        <div className="h-px flex-1 bg-cyan-100" />
      </div>

      <div className="space-y-2.5">
        {awards.map((award) => (
          <article
            key={award.id}
            className="rounded-md border border-cyan-100 bg-cyan-50/40 px-3 py-2"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="min-w-0 text-[9.5px] font-bold leading-snug text-slate-900">
                {award.title}
              </h3>

              {award.date && (
                <span className="shrink-0 text-[7.5px] font-medium text-cyan-600">
                  {award.date}
                </span>
              )}
            </div>

            {award.issuer && (
              <p className="mt-0.5 text-[8px] font-medium text-slate-500">
                {award.issuer}
              </p>
            )}

            {award.description && (
              <p className="mt-0.5 text-[8.5px] leading-[1.5] text-slate-600">
                {award.description}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}