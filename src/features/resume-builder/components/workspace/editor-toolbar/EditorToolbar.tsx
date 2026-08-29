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

interface EditorToolbarProps {
  onUndo?: () => void;
  onRedo?: () => void;
  canUndo?: boolean;
  canRedo?: boolean;
  onAtsCheck?: () => void;
  onTailorToJob?: () => void;
  onTemplatesClick?: () => void;
  onRearrangeClick?: () => void;
  onDesignClick?: () => void;
  onFontClick?: () => void;
}

export default function EditorToolbar({
  onUndo,
  onRedo,
  canUndo = true,
  canRedo = false,
  onAtsCheck,
  onTailorToJob,
  onTemplatesClick,
  onRearrangeClick,
  onDesignClick,
  onFontClick,
}: EditorToolbarProps) {
  return (
    <header className="flex h-13 w-full shrink-0 items-center justify-between border-b border-neutral-200/80 bg-white px-4 shadow-[0_1px_2px_rgba(0,0,0,0.03)] dark:border-neutral-800 dark:bg-neutral-900">
      {/* Left side: Prominent Highlighted Action Buttons */}
      <div className="flex items-center gap-2">
        {/* ATS Check Button Highlight */}
        <Button
          variant="outline"
          size="sm"
          onClick={onAtsCheck}
          className="h-8 gap-1.5 rounded-lg border-emerald-200 bg-emerald-50/70 text-xs font-semibold text-emerald-900 shadow-sm transition-all duration-150 hover:border-emerald-300 hover:bg-emerald-100/80 active:scale-95 dark:border-emerald-800/60 dark:bg-emerald-950/40 dark:text-emerald-300 dark:hover:bg-emerald-900/50"
        >
          <ScanSearch className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>ATS Check</span>
        </Button>

        {/* Tailor to Job Button Highlight */}
        <Button
          variant="outline"
          size="sm"
          onClick={onTailorToJob}
          className="h-8 gap-1.5 rounded-lg border-indigo-200 bg-indigo-50/70 text-xs font-semibold text-indigo-900 shadow-sm transition-all duration-150 hover:border-indigo-300 hover:bg-indigo-100/80 active:scale-95 dark:border-indigo-800/60 dark:bg-indigo-950/40 dark:text-indigo-300 dark:hover:bg-indigo-900/50"
        >
          <Briefcase className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
          <span>Tailor to Job</span>
        </Button>
      </div>

      {/* Center: Layout & Styling Controls */}
      <div className="flex items-center gap-2">
        <div className="h-4 w-px bg-neutral-200 dark:bg-neutral-800" />

        <nav aria-label="Editor tools" className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={onTemplatesClick}
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
            variant="ghost"
            size="sm"
            onClick={onDesignClick}
            className="h-8 gap-1.5 rounded-lg px-2.5 text-xs font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
          >
            <Palette className="h-3.5 w-3.5 text-neutral-500" />
            <span>Design</span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={onFontClick}
            className="h-8 gap-1.5 rounded-lg px-2.5 text-xs font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
          >
            <Type className="h-3.5 w-3.5 text-neutral-500" />
            <span>Font</span>
            <ChevronDown className="h-3 w-3 opacity-50" />
          </Button>
        </nav>
      </div>

      {/* Right side: Undo / Redo History */}
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