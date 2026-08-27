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
      <h2 className="border-b border-cyan-400 pb-1 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-900">
        Experience
      </h2>

      <div className="mt-3 space-y-4">
        {experience.map((item) => (
          <article
            key={item.id}
            className="flex items-start gap-2.5"
          >
            {/* Experience Icon */}
            <ExperienceIcon
              size={14}
              strokeWidth={2}
              className="mt-0.5 shrink-0 text-cyan-600"
            />

            <div className="min-w-0 flex-1">
              {/* Role */}
              <h3 className="text-[11px] font-bold leading-snug text-slate-900">
                {item.role}
              </h3>

              {/* Company / Location / Period */}
              <div className="mt-0.5 flex flex-wrap items-center gap-x-1.5 text-[9.5px] text-slate-500">
                <span className="font-semibold text-cyan-600">
                  {item.company}
                </span>

                {item.location && (
                  <>
                    <span>·</span>
                    <span>{item.location}</span>
                  </>
                )}

                {item.period && (
                  <>
                    <span>·</span>
                    <span>{item.period}</span>
                  </>
                )}
              </div>

              {/* Highlights */}
              {item.highlights?.length > 0 && (
                <ul className="mt-1.5 space-y-1">
                  {item.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="relative pl-3 text-[9.5px] leading-relaxed text-slate-600"
                    >
                      <span className="absolute left-0 top-[5px] h-1 w-1 rounded-full bg-cyan-600" />

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