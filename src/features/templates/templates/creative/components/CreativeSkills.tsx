import type { ResumePreviewData } from "@/types/resume";

interface CreativeSkillsProps {
  skills: ResumePreviewData["skills"];
}

export default function CreativeSkills({
  skills,
}: CreativeSkillsProps) {
  return (
    <section>
      <div className="mb-3 flex items-center gap-3">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-950">
          Skills
        </h2>

        <div className="h-px flex-1 bg-zinc-200" />
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
        {skills.map((skill, index) => {
          const level = [5, 5, 5, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3][index] ?? 3;

          return (
            <div
              key={skill}
              className="flex min-w-0 items-center justify-between gap-2"
            >
              <span className="truncate text-[8px] font-medium text-zinc-700">
                {skill}
              </span>

              <div className="flex shrink-0 items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, dotIndex) => (
                  <span
                    key={dotIndex}
                    className={`h-1.5 w-1.5 rounded-full ${
                      dotIndex < level
                        ? "bg-amber-400"
                        : "bg-zinc-200"
                    }`}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}