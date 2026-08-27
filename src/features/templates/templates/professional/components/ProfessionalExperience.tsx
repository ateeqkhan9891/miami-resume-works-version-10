import type { ResumePreviewData } from "@/types/resume";

interface ProfessionalExperienceProps {
  experience: ResumePreviewData["experience"];
}

export default function ProfessionalExperience({
  experience,
}: ProfessionalExperienceProps) {
  return (
    <section>
      <div className="mb-5 flex items-center gap-3">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-950">
          Professional Experience
        </h2>

        <div className="h-px flex-1 bg-slate-200" />
      </div>

      <div className="space-y-7">
        {experience.map((item) => (
          <article key={item.id} className="relative pl-4">
            <span className="absolute left-0 top-1.5 h-1.5 w-1.5 rounded-full bg-slate-800" />

            <div className="flex items-start justify-between gap-5">
              <div className="min-w-0">
                <h3 className="text-[12px] font-bold leading-tight text-slate-950">
                  {item.role}
                </h3>

                <p className="mt-1 text-[10px] font-semibold text-slate-600">
                  {item.company}
                </p>
              </div>

              <div className="shrink-0 text-right">
                <p className="text-[9px] font-semibold text-slate-700">
                  {item.period}
                </p>

                {item.location && (
                  <p className="mt-0.5 text-[8px] text-slate-400">
                    {item.location}
                  </p>
                )}
              </div>
            </div>

            <ul className="mt-3 space-y-1.5">
              {item.highlights.map((highlight, index) => (
                <li
                  key={`${item.id}-${index}`}
                  className="relative pl-3 text-[9.5px] leading-[1.65] text-slate-600"
                >
                  <span className="absolute left-0 top-[0.65em] h-1 w-1 rounded-full bg-slate-400" />
                  {highlight}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}