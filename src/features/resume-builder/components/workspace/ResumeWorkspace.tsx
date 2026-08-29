"use client";

import { useState } from "react";
import WorkspaceTopHeader from "./top-header/WorkspaceTopHeader";
import EditorToolbar from "./editor-toolbar/EditorToolbar";
import WorkspaceSidePanel from "./side-panel/WorkspaceSidePanel";
import ResumeCanvas from "./resume-canvas/ResumeCanvas";
import RearrangeDialog from "./dialogs/RearrangeDialog";
import TailorOnboardingModal from "./dialogs/TailorOnboardingModal";
import ImportResumeModal from "./dialogs/ImportResumeModal";
import { TEMPLATES_DATA } from "@/features/templates/data/templates";
import type { Template } from "@/types/template";
import type { ActivePanelType } from "../../types/workspace-panels";
import type { TargetJobData } from "../../types/job-tailoring";
import type { SaveStatusType } from "./top-header/SaveStatus";

export default function ResumeWorkspace() {
  const [activePanel, setActivePanel] = useState<ActivePanelType>(null);
  const [isRearrangeOpen, setIsRearrangeOpen] = useState(false);
  const [isTailorModalOpen, setIsTailorModalOpen] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [targetJob, setTargetJob] = useState<TargetJobData | null>(null);

  const [saveStatus, setSaveStatus] = useState<SaveStatusType>("saved");
  const [documentTitle, setDocumentTitle] = useState("Software Engineer Resume");
  const [currentTemplate, setCurrentTemplate] = useState<Template>(TEMPLATES_DATA[0]);

  // Tailor Toolbar action routing
  const handleTailorToolbarClick = () => {
    if (!targetJob) {
      setIsTailorModalOpen(true);
    } else {
      setActivePanel(activePanel === "tailor-job" ? null : "tailor-job");
    }
  };

  // ATS check jump-to-section navigator
  const handleNavigateToSection = (sectionId: string) => {
    const element = document.getElementById(`resume-section-${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      element.classList.add("ring-2", "ring-primary", "transition-all");
      setTimeout(() => {
        element.classList.remove("ring-2", "ring-primary");
      }, 1500);
    }
  };

  // Job analysis form submission callback
  const handleTailorSubmit = (data: TargetJobData) => {
    setTargetJob(data);
    setActivePanel("tailor-job");
  };

  // Resume document import completion callback
  const handleImportComplete = (parsedData: any) => {
    setSaveStatus("saving");
    setTimeout(() => {
      setSaveStatus("saved");
    }, 800);
  };

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-background">
      {/* 1. Global Navigation Top Header */}
      <WorkspaceTopHeader
        saveStatus={saveStatus}
        documentTitle={documentTitle}
        onTitleChange={setDocumentTitle}
        onUploadClick={() => setIsImportModalOpen(true)}
        onHelpClick={() => console.log("Help modal triggered")}
      />

      {/* 2. Editor Toolbar */}
      <EditorToolbar
        activePanel={activePanel}
        onTogglePanel={setActivePanel}
        onTailorClick={handleTailorToolbarClick}
        onRearrangeClick={() => setIsRearrangeOpen(true)}
      />

      {/* 3. Main Workspace Canvas & Side Panel */}
      <div className="relative flex flex-1 overflow-hidden">
        <WorkspaceSidePanel
          activePanel={activePanel}
          onClose={() => setActivePanel(null)}
          selectedTemplate={currentTemplate}
          onSelectTemplate={(newTemplate) => setCurrentTemplate(newTemplate)}
          targetJob={targetJob}
          onOpenTailorModal={() => setIsTailorModalOpen(true)}
        />

        <ResumeCanvas currentTemplate={currentTemplate} />
      </div>

      {/* 4. Centered Modals & Dialogs */}
      <RearrangeDialog
        open={isRearrangeOpen}
        onOpenChange={setIsRearrangeOpen}
      />

      <TailorOnboardingModal
        open={isTailorModalOpen}
        onOpenChange={setIsTailorModalOpen}
        onSubmit={handleTailorSubmit}
      />

      <ImportResumeModal
        open={isImportModalOpen}
        onOpenChange={setIsImportModalOpen}
        onImportComplete={handleImportComplete}
      />
    </div>
  );
}