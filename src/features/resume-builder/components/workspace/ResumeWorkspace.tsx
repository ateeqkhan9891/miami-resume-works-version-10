"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import WorkspaceTopHeader from "./top-header/WorkspaceTopHeader";
import EditorToolbar from "./editor-toolbar/EditorToolbar";
import WorkspaceSidePanel from "./side-panel/WorkspaceSidePanel";
import ResumeCanvas from "./resume-canvas/ResumeCanvas";
import RearrangeDialog from "./dialogs/RearrangeDialog";
import TailorOnboardingModal from "./dialogs/TailorOnboardingModal";
import ImportResumeModal from "./dialogs/ImportResumeModal";
import AddSectionModal from "./dialogs/AddSectionModal";
import AuthModal from "@/features/auth/components/AuthModal";
import { TEMPLATES_DATA } from "@/features/templates/data/templates";
import { useResumeStore } from "@/features/resume-builder/store/useResumeStore";
import type { Template } from "@/types/template";
import type { ActivePanelType } from "../../types/workspace-panels";
import type { TargetJobData } from "../../types/job-tailoring";
import type { SaveStatusType } from "./top-header/SaveStatus";

export default function ResumeWorkspace() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const templateQuery = searchParams.get("template");

  // History state & actions from Zustand store
  const undo = useResumeStore((state) => state.undo);
  const redo = useResumeStore((state) => state.redo);
  const canUndo = useResumeStore((state) => state.canUndo());
  const canRedo = useResumeStore((state) => state.canRedo());

  const getInitialTemplate = (): Template => {
    if (templateQuery) {
      const match = TEMPLATES_DATA.find(
        (t) => t.slug === templateQuery || t.id === templateQuery
      );
      if (match) return match;
    }
    return TEMPLATES_DATA[0];
  };

  const [currentTemplate, setCurrentTemplate] = useState<Template>(getInitialTemplate);
  const isInternalSwitchRef = useRef(false);

  useEffect(() => {
    if (isInternalSwitchRef.current) {
      isInternalSwitchRef.current = false;
      return;
    }

    if (templateQuery) {
      const match = TEMPLATES_DATA.find(
        (t) => t.slug === templateQuery || t.id === templateQuery
      );
      if (match && match.id !== currentTemplate.id && match.slug !== currentTemplate.slug) {
        setCurrentTemplate(match);
      }
    }
  }, [templateQuery, currentTemplate.id, currentTemplate.slug]);

  const handleSelectTemplate = (newTemplate: Template) => {
    isInternalSwitchRef.current = true;
    setCurrentTemplate(newTemplate);

    const params = new URLSearchParams(window.location.search);
    params.set("template", newTemplate.slug);
    window.history.replaceState(null, "", `${pathname}?${params.toString()}`);
  };

  const [activePanel, setActivePanel] = useState<ActivePanelType>(null);
  const [isRearrangeOpen, setIsRearrangeOpen] = useState(false);
  const [isTailorModalOpen, setIsTailorModalOpen] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [isAddSectionOpen, setIsAddSectionOpen] = useState(false);

  // Auth Modal State
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");
  const [currentUser, setCurrentUser] = useState<{ name: string; email: string } | null>(null);

  const [targetJob, setTargetJob] = useState<TargetJobData | null>(null);
  const [saveStatus, setSaveStatus] = useState<SaveStatusType>("saved");
  const [documentTitle, setDocumentTitle] = useState("Software Engineer Resume");

  const handleOpenAuth = (mode: "signin" | "signup") => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const handleTailorToolbarClick = () => {
    if (!targetJob) {
      setIsTailorModalOpen(true);
    } else {
      setActivePanel(activePanel === "tailor-job" ? null : "tailor-job");
    }
  };

  const handleTailorSubmit = (data: TargetJobData) => {
    setTargetJob(data);
    setActivePanel("tailor-job");
  };

  const handleImportComplete = () => {
    setSaveStatus("saving");
    setTimeout(() => {
      setSaveStatus("saved");
    }, 600);
  };

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-background">
      {/* 1. Global Navigation Top Header */}
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
        onUndo={undo}
        onRedo={redo}
        canUndo={canUndo}
        canRedo={canRedo}
      />

      {/* 3. Main Workspace Canvas & Side Panel */}
      <div className="relative flex flex-1 overflow-hidden">
        <WorkspaceSidePanel
          activePanel={activePanel}
          onClose={() => setActivePanel(null)}
          selectedTemplate={currentTemplate}
          onSelectTemplate={handleSelectTemplate}
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

      <AddSectionModal
        open={isAddSectionOpen}
        onOpenChange={setIsAddSectionOpen}
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