import type { ResumePreviewData } from "@/types/resume";
import { ModernTemplateIcons } from "../ModernTemplateIcons";

interface ModernExperienceProps {
  experience: ResumePreviewData["experience"];
}

export default function ModernExperience({
  experience,
}: ModernExperienceProps) {
  const ExperienceIcon = ModernTemplateIcons.experience;

  return (
    <section>
      <div className="mb-3 flex items-center gap-2.5">
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-cyan-50 text-cyan-600">
          <ExperienceIcon size={11} strokeWidth={2.2} />
        </div>

        <h2 className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-900">
          Experience
        </h2>

        <div className="h-px flex-1 bg-cyan-100" />
      </div>

      <div className="space-y-4">
        {experience.map((item, index) => (
          <article
            key={item.id}
            className="relative flex gap-3"
          >
            <div className="flex w-5 shrink-0 flex-col items-center">
              <div className="mt-1 h-2 w-2 rounded-full bg-cyan-500 ring-2 ring-cyan-50" />

              {index < experience.length - 1 && (
                <div className="mt-1 w-px flex-1 bg-cyan-100" />
              )}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="text-[11px] font-bold leading-snug text-slate-950">
                    {item.role}
                  </h3>

                  <p className="mt-0.5 text-[9.5px] font-semibold text-cyan-600">
                    {item.company}
                    {item.location && ` · ${item.location}`}
                  </p>
                </div>

                {item.period && (
                  <span className="shrink-0 text-[8.5px] font-medium text-slate-400">
                    {item.period}
                  </span>
                )}
              </div>

              {item.highlights?.length > 0 && (
                <ul className="mt-1.5 space-y-1">
                  {item.highlights.map((highlight, highlightIndex) => (
                    <li
                      key={highlightIndex}
                      className="relative pl-3 text-[9.5px] leading-[1.55] text-slate-600"
                    >
                      <span className="absolute left-0 top-[5px] h-1 w-1 rounded-full bg-cyan-500" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}