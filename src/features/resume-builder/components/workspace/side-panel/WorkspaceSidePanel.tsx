"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ActivePanelType } from "@/features/resume-builder/types/workspace-panels";
import type { Template } from "@/types/template";
import type { TargetJobData } from "@/features/resume-builder/types/job-tailoring";

import AtsCheckPanel from "./panels/AtsCheckPanel";
import TailorJobPanel from "./panels/TailorJobPanel";
import TemplatesPanel from "./panels/TemplatesPanel";
import DesignPanel from "./panels/DesignPanel";
import TypographyPanel from "./panels/TypographyPanel";

interface WorkspaceSidePanelProps {
  activePanel: ActivePanelType;
  onClose: () => void;
  selectedTemplate: Template;
  onSelectTemplate: (template: Template) => void;
  targetJob: TargetJobData | null;
  onOpenTailorModal: () => void;
}

export default function WorkspaceSidePanel({
  activePanel,
  onClose,
  selectedTemplate,
  onSelectTemplate,
  targetJob,
  onOpenTailorModal,
}: WorkspaceSidePanelProps) {
  const isOpen = activePanel !== null;

  const handleTemplateSelect = (template: Template) => {
    onSelectTemplate(template);
    // On small screens, close the panel after selection for immediate visual feedback
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      onClose();
    }
  };

  return (
    <>
      {/* Mobile Dimmed Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[1px] md:hidden"
        />
      )}

      {/* Sliding Drawer Container */}
      <aside
        aria-label="Workspace tool panel"
        className={`fixed inset-y-0 left-0 z-40 flex w-full max-w-[380px] flex-col border-r border-neutral-200/80 bg-white shadow-2xl transition-transform duration-300 ease-in-out dark:border-neutral-800 dark:bg-neutral-900 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Panel Header */}
        <div className="flex h-14 shrink-0 items-center justify-between border-b border-neutral-200/80 px-4 dark:border-neutral-800">
          <h2 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
            {activePanel === "templates" && "Resume Templates"}
            {activePanel === "ats-check" && "ATS Optimization"}
            {activePanel === "tailor-job" && "Tailor to Job"}
            {activePanel === "design" && "Design & Formatting"}
            {activePanel === "font" && "Typography"}
          </h2>

          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8 rounded-lg text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close panel</span>
          </Button>
        </div>

        {/* Panel Content Body */}
        <div className="flex-1 overflow-y-auto p-4">
          {activePanel === "templates" && (
            <TemplatesPanel
              selectedTemplate={selectedTemplate}
              onSelectTemplate={handleTemplateSelect}
            />
          )}
          {activePanel === "ats-check" && <AtsCheckPanel />}
          {activePanel === "tailor-job" && (
            <TailorJobPanel
              targetJob={targetJob}
              onOpenModal={onOpenTailorModal}
            />
          )}
          {activePanel === "design" && <DesignPanel />}
          {activePanel === "font" && <TypographyPanel />}
        </div>
      </aside>
    </>
  );
}