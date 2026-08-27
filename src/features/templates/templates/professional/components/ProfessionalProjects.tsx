import type { ResumePreviewData } from "@/types/resume";

interface ProfessionalProjectsProps {
  projects: ResumePreviewData["projects"];
}

export default function ProfessionalProjects({
  projects,
}: ProfessionalProjectsProps) {
  return (
    <section>
      <div className="mb-5 flex items-center gap-3">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-950">
          Selected Projects
        </h2>

        <div className="h-px flex-1 bg-slate-200" />
      </div>

      <div className="space-y-6">
        {projects.map((project) => (
          <article key={project.id}>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-[11px] font-bold text-slate-950">
                {project.name}
              </h3>

              {project.url && (
                <span className="shrink-0 text-[8px] font-medium text-slate-400">
                  {project.url}
                </span>
              )}
            </div>

            {project.description && (
              <p className="mt-2 text-[9.5px] leading-[1.65] text-slate-600">
                {project.description}
              </p>
            )}

            {project.technologies.length > 0 && (
              <div className="mt-2.5 flex flex-wrap gap-x-2 gap-y-1">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="text-[8px] font-medium text-slate-500"
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