import type { ResumePreviewData } from "@/types/resume";

interface CreativeProjectsProps {
  projects: ResumePreviewData["projects"];
}

export default function CreativeProjects({
  projects,
}: CreativeProjectsProps) {
  return (
    <section>
      <div className="mb-3 flex items-center gap-3">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-950">
          Selected Projects
        </h2>

        <div className="h-px flex-1 bg-zinc-200" />
      </div>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className="relative pl-5"
          >
            <span className="absolute left-0 top-0 text-[8px] font-bold text-amber-500">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="flex items-start justify-between gap-3">
              <h3 className="text-[10px] font-bold text-zinc-950">
                {project.name}
              </h3>

              {project.url && (
                <span className="shrink-0 text-[7.5px] text-zinc-400">
                  {project.url}
                </span>
              )}
            </div>

            {project.description && (
              <p className="mt-1 text-[8.5px] leading-[1.5] text-zinc-500">
                {project.description}
              </p>
            )}

            {project.technologies.length > 0 && (
              <div className="mt-1.5 flex flex-wrap gap-1">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-amber-50 px-1.5 py-0.5 text-[7px] font-medium text-amber-700"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}