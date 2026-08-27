import type { ResumePreviewData } from "@/types/resume";

interface CreativeEducationProps {
  education: ResumePreviewData["education"];
}

export default function CreativeEducation({
  education,
}: CreativeEducationProps) {
  return (
    <section>
      <div className="mb-5 flex items-center gap-3">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-950">
          Education
        </h2>

        <div className="h-px flex-1 bg-zinc-200" />
      </div>

      <div className="space-y-5">
        {education.map((item) => (
          <article
            key={item.id}
            className="relative pl-4"
          >
            <span className="absolute left-0 top-1 h-2 w-2 rounded-full bg-amber-400" />

            <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-amber-600">
              {item.period}
            </p>

            <h3 className="mt-1 text-[10px] font-bold leading-[1.4] text-zinc-950">
              {item.degree}
            </h3>

            <p className="mt-1 text-[9px] font-medium text-zinc-600">
              {item.school}
            </p>

            {item.location && (
              <p className="mt-0.5 text-[8px] text-zinc-400">
                {item.location}
              </p>
            )}

            {item.gpa && (
              <p className="mt-1.5 text-[8px] text-zinc-500">
                GPA {item.gpa}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}