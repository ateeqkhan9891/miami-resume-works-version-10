"use client";

import { useState } from "react";
import type { ResumePreviewData } from "@/types/resume";

import ModernHeader from "./components/ModernHeader";
import ModernSummary from "./components/ModernSummary";
import ModernExperience from "./components/ModernExperience";
import ModernProjects from "./components/ModernProjects";
import ModernEducation from "./components/ModernEducation";
import ModernSkills from "./components/ModernSkills";
import ModernLanguages from "./components/ModernLanguages";
import ModernCertifications from "./components/ModernCertifications";
import ModernAwards from "./components/ModernAwards";

import SectionInserter from "@/features/resume-builder/components/workspace/editable/SectionInserter";
import AddSectionModal from "@/features/resume-builder/components/workspace/dialogs/AddSectionModal";
import { useResumeStore } from "@/features/resume-builder/store/useResumeStore";

interface ModernTemplateProps {
  data: ResumePreviewData;
  isEditable?: boolean;
}

export default function ModernTemplate({
  data,
  isEditable = true,
}: ModernTemplateProps) {
  const [isAddSectionOpen, setIsAddSectionOpen] = useState(false);
  const design = useResumeStore((state) => state.design);
  const layoutOrder = useResumeStore((state) => state.layoutOrder);

  const openAddSection = () => setIsAddSectionOpen(true);

  // Font family mapping
  const fontClassMap: Record<string, string> = {
    inter: "font-sans",
    roboto: "font-sans",
    merriweather: "font-serif",
    garamond: "font-serif",
    "geist-mono": "font-mono",
  };
  const activeFont = fontClassMap[design.fontFamily] || "font-sans";

  // Margins mapping
  const marginClassMap = {
    compact: "px-6 py-4",
    normal: "px-10 py-6",
    spacious: "px-14 py-8",
  }[design.pageMargin];

  // Font size mapping
  const fontSizeClassMap = {
    small: "text-[10px]",
    medium: "text-[11px]",
    large: "text-[12px]",
  }[design.fontSize];

  // Line spacing mapping
  const lineSpacingClassMap = {
    dense: "leading-tight",
    normal: "leading-relaxed",
    relaxed: "leading-loose",
  }[design.lineSpacing];

  // Helper to render section component by ID
  const renderSection = (sectionId: string) => {
    switch (sectionId) {
      case "summary":
        return (data.profile.summary || isEditable) ? (
          <ModernSummary summary={data.profile.summary || ""} isEditable={isEditable} />
        ) : null;
      case "experience":
        return (data.experience.length > 0 || isEditable) ? (
          <ModernExperience experience={data.experience} isEditable={isEditable} />
        ) : null;
      case "projects":
        return (data.projects.length > 0 || isEditable) ? (
          <ModernProjects projects={data.projects} isEditable={isEditable} />
        ) : null;
      case "skills":
        return (data.skills.length > 0 || isEditable) ? (
          <ModernSkills skills={data.skills} isEditable={isEditable} />
        ) : null;
      case "education":
        return (data.education.length > 0 || isEditable) ? (
          <ModernEducation education={data.education} isEditable={isEditable} />
        ) : null;
      case "certifications":
        return (data.certifications.length > 0 || isEditable) ? (
          <ModernCertifications certifications={data.certifications} isEditable={isEditable} />
        ) : null;
      case "languages":
        return (data.languages.length > 0 || isEditable) ? (
          <ModernLanguages languages={data.languages} isEditable={isEditable} />
        ) : null;
      case "awards":
        return (data.awards.length > 0 || isEditable) ? (
          <ModernAwards awards={data.awards} isEditable={isEditable} />
        ) : null;
      default:
        return null;
    }
  };

  return (
    <div
      className={`mx-auto flex min-h-[1123px] w-[794px] flex-col bg-white text-neutral-900 shadow-2xl ${activeFont} ${fontSizeClassMap} ${lineSpacingClassMap}`}
      style={{
        // Accent color CSS variable for dynamic matching
        ["--primary-accent" as any]: design.accentColor,
      }}
    >
      {/* Header with live profile and photo format */}
      <ModernHeader profile={data.profile} isEditable={isEditable} />

      {/* Main Resume Canvas Body */}
      <div className={`flex-1 ${marginClassMap}`}>
        <div className="grid grid-cols-12 gap-8">
          {/* Main Left Column (Dynamically ordered) */}
          <main className="col-span-8 flex flex-col space-y-4">
            {layoutOrder.left.map((item) => {
              const component = renderSection(item.id);
              if (!component) return null;
              return (
                <div key={item.id}>
                  {component}
                  <SectionInserter onInsertClick={openAddSection} isEditable={isEditable} />
                </div>
              );
            })}
          </main>

          {/* Sidebar Right Column (Dynamically ordered) */}
          <aside className="col-span-4 flex flex-col space-y-4">
            {layoutOrder.right.map((item) => {
              const component = renderSection(item.id);
              if (!component) return null;
              return (
                <div key={item.id}>
                  {component}
                  <SectionInserter onInsertClick={openAddSection} isEditable={isEditable} />
                </div>
              );
            })}
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="mx-10 flex items-center justify-between border-t border-neutral-200 py-3 text-[8px] text-neutral-400">
        <span>{data.profile.website || "miamiresume.com"}</span>
        <span>Powered by MiamiResume</span>
      </footer>

      {/* Section Insertion Modal */}
      <AddSectionModal
        open={isAddSectionOpen}
        onOpenChange={setIsAddSectionOpen}
      />
    </div>
  );
}