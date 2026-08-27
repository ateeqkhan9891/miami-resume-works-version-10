import type { ResumePreviewData } from "@/types/resume";

interface CreativeExperienceProps {
  experience: ResumePreviewData["experience"];
}

export default function CreativeExperience({
  experience,
}: CreativeExperienceProps) {
  return (
    <section>
      <div className="mb-5 flex items-center gap-3">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-950">
          Experience
        </h2>

        <div className="h-px flex-1 bg-zinc-200" />
      </div>

      <div className="space-y-7">
        {experience.map((item) => (
          <article
            key={item.id}
            className="relative border-l-2 border-amber-200 pl-5"
          >
            <span className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-amber-400" />

            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-[12px] font-bold leading-tight text-zinc-950">
                  {item.role}
                </h3>

                <p className="mt-1 text-[9.5px] font-semibold text-zinc-600">
                  {item.company}
                </p>
              </div>

              <div className="shrink-0 text-right">
                <p className="text-[8.5px] font-semibold text-zinc-700">
                  {item.period}
                </p>

                <p className="mt-0.5 text-[8px] text-zinc-400">
                  {item.location}
                </p>
              </div>
            </div>

            <ul className="mt-3 space-y-1.5">
              {item.highlights.map((highlight, index) => (
                <li
                  key={`${item.id}-${index}`}
                  className="relative pl-3 text-[9px] leading-[1.7] text-zinc-600"
                >
                  <span className="absolute left-0 top-[0.7em] h-1 w-1 rounded-full bg-amber-400" />
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