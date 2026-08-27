import type { ResumePreviewData } from "@/types/resume";

interface ProfessionalEducationProps {
  education: ResumePreviewData["education"];
}

export default function ProfessionalEducation({
  education,
}: ProfessionalEducationProps) {
  return (
    <section>
      <div className="mb-5 flex items-center gap-3">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-950">
          Education
        </h2>

        <div className="h-px flex-1 bg-slate-200" />
      </div>

      <div className="space-y-5">
        {education.map((item) => (
          <article key={item.id}>
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="text-[10.5px] font-bold leading-[1.4] text-slate-950">
                  {item.degree}
                </h3>

                <p className="mt-1 text-[9px] font-semibold text-slate-600">
                  {item.school}
                </p>
              </div>

              <span className="shrink-0 text-[8px] font-medium text-slate-400">
                {item.period}
              </span>
            </div>

            {item.location && (
              <p className="mt-1 text-[8px] text-slate-400">
                {item.location}
              </p>
            )}

            {item.gpa && (
              <p className="mt-1.5 text-[8px] font-medium text-slate-500">
                GPA {item.gpa}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}