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
      <h2 className="border-b border-cyan-400 pb-1 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-900">
        Education
      </h2>

      <div className="mt-3 space-y-4">
        {education.map((item) => (
          <article
            key={item.id}
            className="flex items-start gap-2.5"
          >
            {/* Education Icon */}
            <EducationIcon
              size={14}
              strokeWidth={2}
              className="mt-0.5 shrink-0 text-cyan-600"
            />

            <div className="min-w-0 flex-1">
              {/* Degree */}
              <h3 className="text-[11px] font-bold leading-snug text-slate-900">
                {item.degree}
              </h3>

              {/* School / Location / Period */}
              <div className="mt-0.5 flex flex-wrap items-center gap-x-1.5 text-[9.5px] text-slate-500">
                <span className="font-semibold text-cyan-600">
                  {item.school}
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

              {/* GPA */}
              {item.gpa && (
                <p className="mt-1 text-[9.5px] text-slate-600">
                  GPA:{" "}
                  <span className="font-medium text-slate-700">
                    {item.gpa}
                  </span>
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}