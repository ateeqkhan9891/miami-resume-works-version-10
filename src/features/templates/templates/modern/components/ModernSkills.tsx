"use client";

import { Wrench } from "lucide-react";
import type { ResumePreviewData } from "@/types/resume";
import { EditableText } from "@/features/resume-builder/components/workspace/editable/EditableText";
import EditableSectionWrapper from "@/features/resume-builder/components/workspace/editable/EditableSectionWrapper";
import { useResumeStore } from "@/features/resume-builder/store/useResumeStore";

interface ModernSkillsProps {
  skills: ResumePreviewData["skills"];
  isEditable?: boolean;
}

export default function ModernSkills({
  skills,
  isEditable = true,
}: ModernSkillsProps) {
  const updateSkills = useResumeStore((state) => state.updateSkills);
  const accentColor = useResumeStore((state) => state.design.accentColor);

  const handleSkillsChange = (rawText: string) => {
    const list = rawText
      .split(/[,•\n]+/)
      .map((s) => s.trim())
      .filter(Boolean);
    updateSkills(list);
  };

  return (
    <EditableSectionWrapper
      sectionId="skills"
      defaultTitle="Skills"
      icon={<Wrench className="h-3.5 w-3.5" />}
      isEditable={isEditable}
      canAddEntry={false}
    >
      <div className="flex flex-wrap gap-1.5">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="rounded-md px-2 py-0.5 text-[8.5px] font-semibold shadow-2xs"
            style={{
              backgroundColor: `${accentColor}15`,
              color: accentColor,
              border: `1px solid ${accentColor}30`,
            }}
          >
            {skill}
          </span>
        ))}
      </div>

      {isEditable && (
        <div className="mt-2.5 border-t border-neutral-100 pt-2">
          <span className="text-[7.5px] uppercase text-neutral-400">Edit Skills (comma separated):</span>
          <EditableText
            value={skills.join(", ")}
            onChange={handleSkillsChange}
            placeholder="TypeScript, React, Next.js, Node.js..."
            multiline
            className="mt-1 w-full text-[8.5px] text-neutral-600"
          />
        </div>
      )}
    </EditableSectionWrapper>
  );
}