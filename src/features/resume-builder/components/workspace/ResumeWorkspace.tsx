"use client";

import { useState } from "react";
import WorkspaceTopHeader from "./top-header/WorkspaceTopHeader";
import EditorToolbar from "./editor-toolbar/EditorToolbar";
import WorkspaceSidePanel from "./side-panel/WorkspaceSidePanel";
import ResumeCanvas from "./resume-canvas/ResumeCanvas";
import RearrangeDialog from "./dialogs/RearrangeDialog";
import TailorOnboardingModal from "./dialogs/TailorOnboardingModal";
import ImportResumeModal from "./dialogs/ImportResumeModal";
import AuthModal from "@/features/auth/components/AuthModal";
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

  // Auth Modal State
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");
  const [currentUser, setCurrentUser] = useState<{ name: string; email: string } | null>(null);

  const [targetJob, setTargetJob] = useState<TargetJobData | null>(null);
  const [saveStatus, setSaveStatus] = useState<SaveStatusType>("saved");
  const [documentTitle, setDocumentTitle] = useState("Software Engineer Resume");
  const [currentTemplate, setCurrentTemplate] = useState<Template>(TEMPLATES_DATA[0]);

  // Auth Handlers
  const handleOpenAuth = (mode: "signin" | "signup") => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  // Tailor Toolbar Action
  const handleTailorToolbarClick = () => {
    if (!targetJob) {
      setIsTailorModalOpen(true);
    } else {
      setActivePanel(activePanel === "tailor-job" ? null : "tailor-job");
    }
  };

  // Job analysis form submission callback
  const handleTailorSubmit = (data: TargetJobData) => {
    setTargetJob(data);
    setActivePanel("tailor-job");
  };

  // Resume document import completion callback
  const handleImportComplete = () => {
    setSaveStatus("saving");
    setTimeout(() => {
      setSaveStatus("saved");
    }, 600);
  };

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-background">
      {/* 1. Global Navigation Top Header with Auth Triggers */}
      <WorkspaceTopHeader
        saveStatus={saveStatus}
        documentTitle={documentTitle}
        onTitleChange={setDocumentTitle}
        onUploadClick={() => setIsImportModalOpen(true)}
        onHelpClick={() => console.log("Help trigger")}
        onLoginClick={() => handleOpenAuth("signin")}
        onSignUpClick={() => handleOpenAuth("signup")}
        user={currentUser}
      />

      {/* 2. Editor Sub-Toolbar */}
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

      {/* 4. Dialogs & Modals */}
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

      {/* 5. Auth Modal */}
      <AuthModal
        open={isAuthModalOpen}
        onOpenChange={setIsAuthModalOpen}
        defaultMode={authMode}
      />
    </div>
  );
}