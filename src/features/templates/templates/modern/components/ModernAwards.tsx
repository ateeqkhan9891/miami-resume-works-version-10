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
      <h2 className="border-b border-cyan-400 pb-1 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-900">
        Awards & Honors
      </h2>

      <div className="mt-3 space-y-3">
        {awards.map((award) => (
          <article
            key={award.id}
            className="flex items-start gap-2.5"
          >
            <AwardIcon
              size={13}
              strokeWidth={2}
              className="mt-0.5 shrink-0 text-cyan-600"
            />

            <div className="min-w-0 flex-1">
              <h3 className="text-[10.5px] font-bold leading-snug text-slate-900">
                {award.title}
              </h3>

              {(award.issuer || award.date) && (
                <div className="mt-0.5 flex items-center gap-1.5 text-[9px] text-slate-500">
                  {award.issuer && (
                    <span className="font-medium text-slate-600">
                      {award.issuer}
                    </span>
                  )}

                  {award.issuer && award.date && (
                    <span>·</span>
                  )}

                  {award.date && (
                    <span>{award.date}</span>
                  )}
                </div>
              )}

              {award.description && (
                <p className="mt-0.5 text-[9.5px] leading-relaxed text-slate-600">
                  {award.description}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}