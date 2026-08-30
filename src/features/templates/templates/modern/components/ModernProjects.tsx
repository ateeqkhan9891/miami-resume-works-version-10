"use client";

import { FolderGit2, Trash2 } from "lucide-react";
import type { ResumePreviewData } from "@/types/resume";
import { EditableText } from "@/features/resume-builder/components/workspace/editable/EditableText";
import EditableSectionWrapper from "@/features/resume-builder/components/workspace/editable/EditableSectionWrapper";
import { useResumeStore } from "@/features/resume-builder/store/useResumeStore";

interface ModernProjectsProps {
  projects: ResumePreviewData["projects"];
  isEditable?: boolean;
}

export default function ModernProjects({
  projects,
  isEditable = true,
}: ModernProjectsProps) {
  const updateProject = useResumeStore((state) => state.updateProject);
  const removeProject = useResumeStore((state) => state.removeProject);

  return (
    <EditableSectionWrapper
      sectionId="projects"
      defaultTitle="Projects"
      icon={<FolderGit2 className="h-3.5 w-3.5" />}
      isEditable={isEditable}
      canAddEntry={true}
    >
      <div className="space-y-4">
        {projects.map((project) => (
          <article key={project.id} className="group/item relative rounded-lg border border-neutral-100 p-3 shadow-2xs">
            {isEditable && projects.length > 1 && (
              <button
                type="button"
                onClick={() => removeProject(project.id)}
                title="Remove Project"
                className="absolute right-2 top-2 opacity-0 group-hover/item:opacity-100 p-1 text-neutral-400 hover:text-red-500 transition-opacity"
              >
                <Trash2 className="h-3 w-3" />
              </button>
            )}

            <div className="flex items-start justify-between gap-4">
              <h3 className="text-[11px] font-bold text-neutral-900">
                {isEditable ? (
                  <EditableText
                    value={project.name}
                    onChange={(val) => updateProject(project.id, "name", val)}
                    placeholder="Project Name"
                  />
                ) : (
                  project.name
                )}
              </h3>

              {(project.url || isEditable) && (
                <div className="text-[8.5px] text-emerald-700">
                  {isEditable ? (
                    <EditableText
                      value={project.url || ""}
                      onChange={(val) => updateProject(project.id, "url", val)}
                      placeholder="URL"
                    />
                  ) : (
                    project.url
                  )}
                </div>
              )}
            </div>

            {(project.description || isEditable) && (
              <div className="mt-1 text-[9px] leading-relaxed text-neutral-600">
                {isEditable ? (
                  <EditableText
                    value={project.description || ""}
                    onChange={(val) => updateProject(project.id, "description", val)}
                    placeholder="Project description and results..."
                    multiline
                    className="w-full"
                  />
                ) : (
                  <p>{project.description}</p>
                )}
              </div>
            )}

            {project.technologies?.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="rounded bg-emerald-50 px-1.5 py-0.5 text-[7.5px] font-medium text-emerald-800">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </EditableSectionWrapper>
  );
}