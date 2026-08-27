import type { ResumePreviewData } from "@/types/resume";
import { ModernTemplateIcons } from "../ModernTemplateIcons";

interface ModernEducationProps {
  education: ResumePreviewData["education"];
}

export default function ModernEducation({
  education,
}: ModernEducationProps) {
  const EducationIcon = ModernTemplateIcons.education;

  return (
    <section>
      <div className="mb-3 flex items-center gap-2.5">
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-cyan-50 text-cyan-600">
          <EducationIcon size={11} strokeWidth={2.2} />
        </div>

        <h2 className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-900">
          Education
        </h2>

        <div className="h-px flex-1 bg-cyan-100" />
      </div>

      <div className="space-y-4">
        {education.map((item) => (
          <article
            key={item.id}
            className="flex items-start justify-between gap-5"
          >
            <div className="min-w-0">
              <h3 className="text-[10.5px] font-bold leading-snug text-slate-950">
                {item.degree}
              </h3>

              <p className="mt-0.5 text-[9.5px] font-semibold text-cyan-600">
                {item.school}
              </p>

              {item.location && (
                <p className="text-[9px] text-slate-500">
                  {item.location}
                </p>
              )}

              {item.gpa && (
                <p className="mt-1 text-[8.5px] text-slate-500">
                  GPA{" "}
                  <span className="font-semibold text-slate-700">
                    {item.gpa}
                  </span>
                </p>
              )}
            </div>

            {item.period && (
              <span className="shrink-0 text-[9px] font-medium text-slate-400">
                {item.period}
              </span>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}