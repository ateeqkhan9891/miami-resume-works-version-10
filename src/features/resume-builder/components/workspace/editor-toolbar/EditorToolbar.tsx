"use client";

import {
  ScanSearch,
  Briefcase,
  LayoutTemplate,
  Layers,
  Palette,
  Type,
  ChevronDown,
  RotateCcw,
  RotateCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ActivePanelType } from "@/features/resume-builder/types/workspace-panels";

interface EditorToolbarProps {
  activePanel: ActivePanelType;
  onTogglePanel: (panel: ActivePanelType) => void;
  onTailorClick: () => void;
  onRearrangeClick: () => void;
  onUndo?: () => void;
  onRedo?: () => void;
  canUndo?: boolean;
  canRedo?: boolean;
}

export default function EditorToolbar({
  activePanel,
  onTogglePanel,
  onTailorClick,
  onRearrangeClick,
  onUndo,
  onRedo,
  canUndo = false,
  canRedo = false,
}: EditorToolbarProps) {
  const handleToggle = (panel: ActivePanelType) => {
    onTogglePanel(activePanel === panel ? null : panel);
  };

  return (
    <header className="flex h-13 w-full shrink-0 items-center justify-between border-b border-neutral-200/80 bg-white px-4 shadow-[0_1px_2px_rgba(0,0,0,0.03)] dark:border-neutral-800 dark:bg-neutral-900">
      {/* Action Buttons */}
      <div className="flex items-center gap-2">
        {/* ATS Check */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleToggle("ats-check")}
          className={`h-8 gap-1.5 rounded-lg border-emerald-200 text-xs font-semibold shadow-sm transition-all duration-150 ${
            activePanel === "ats-check"
              ? "bg-emerald-600 text-white hover:bg-emerald-700"
              : "bg-emerald-50/70 text-emerald-900 hover:bg-emerald-100/80"
          }`}
        >
          <ScanSearch className="h-3.5 w-3.5" />
          <span>ATS Check</span>
        </Button>

        {/* Tailor to Job */}
        <Button
          variant="outline"
          size="sm"
          onClick={onTailorClick}
          className={`h-8 gap-1.5 rounded-lg border-indigo-200 text-xs font-semibold shadow-sm transition-all duration-150 ${
            activePanel === "tailor-job"
              ? "bg-indigo-600 text-white hover:bg-indigo-700"
              : "bg-indigo-50/70 text-indigo-900 hover:bg-indigo-100/80"
          }`}
        >
          <Briefcase className="h-3.5 w-3.5" />
          <span>Tailor to Job</span>
        </Button>
      </div>

      {/* Editor Layout Controls */}
      <div className="flex items-center gap-2">
        <div className="h-4 w-px bg-neutral-200 dark:bg-neutral-800" />

        <nav aria-label="Editor tools" className="flex items-center gap-1">
          <Button
            variant={activePanel === "templates" ? "secondary" : "ghost"}
            size="sm"
            onClick={() => handleToggle("templates")}
            className="h-8 gap-1.5 rounded-lg px-2.5 text-xs font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
          >
            <LayoutTemplate className="h-3.5 w-3.5 text-neutral-500" />
            <span>Templates</span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={onRearrangeClick}
            className="h-8 gap-1.5 rounded-lg px-2.5 text-xs font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
          >
            <Layers className="h-3.5 w-3.5 text-neutral-500" />
            <span>Rearrange</span>
          </Button>

          <Button
            variant={activePanel === "design" ? "secondary" : "ghost"}
            size="sm"
            onClick={() => handleToggle("design")}
            className="h-8 gap-1.5 rounded-lg px-2.5 text-xs font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
          >
            <Palette className="h-3.5 w-3.5 text-neutral-500" />
            <span>Design</span>
          </Button>

          <Button
            variant={activePanel === "font" ? "secondary" : "ghost"}
            size="sm"
            onClick={() => handleToggle("font")}
            className="h-8 gap-1.5 rounded-lg px-2.5 text-xs font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
          >
            <Type className="h-3.5 w-3.5 text-neutral-500" />
            <span>Font</span>
            <ChevronDown className="h-3 w-3 opacity-50" />
          </Button>
        </nav>
      </div>

      {/* History Controls */}
      <div className="flex items-center gap-1">
        <div className="flex items-center gap-0.5 rounded-lg border border-neutral-200/80 bg-neutral-50/80 p-0.5 dark:border-neutral-800 dark:bg-neutral-900">
          <Button
            variant="ghost"
            size="icon"
            onClick={onUndo}
            disabled={!canUndo}
            aria-label="Undo"
            className="h-7 w-7 rounded-md text-neutral-600 hover:bg-white hover:text-neutral-900 disabled:opacity-30 dark:text-neutral-400 dark:hover:bg-neutral-800"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={onRedo}
            disabled={!canRedo}
            aria-label="Redo"
            className="h-7 w-7 rounded-md text-neutral-600 hover:bg-white hover:text-neutral-900 disabled:opacity-30 dark:text-neutral-400 dark:hover:bg-neutral-800"
          >
            <RotateCw className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </header>
  );
}