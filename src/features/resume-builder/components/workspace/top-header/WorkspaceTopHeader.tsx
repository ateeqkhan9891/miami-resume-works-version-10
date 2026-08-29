"use client";

import { useState } from "react";
import Logo from "@/components/navigation/Logo";
import { Button } from "@/components/ui/button";
import { HelpCircle, Upload, Check, Pencil } from "lucide-react";
import SaveStatus, { type SaveStatusType } from "./SaveStatus";

interface WorkspaceTopHeaderProps {
  saveStatus: SaveStatusType;
  documentTitle?: string;
  onTitleChange?: (newTitle: string) => void;
  onUploadClick?: () => void;
  onHelpClick?: () => void;
  onLoginClick?: () => void;
  onSignUpClick?: () => void;
  user?: { name: string; email: string } | null;
}

export default function WorkspaceTopHeader({
  saveStatus,
  documentTitle = "Untitled Resume",
  onTitleChange,
  onUploadClick,
  onHelpClick,
  onLoginClick,
  onSignUpClick,
  user = null,
}: WorkspaceTopHeaderProps) {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [title, setTitle] = useState(documentTitle);

  const handleTitleSubmit = () => {
    setIsEditingTitle(false);
    if (onTitleChange && title.trim()) {
      onTitleChange(title.trim());
    }
  };

  return (
    <header className="flex h-14 w-full shrink-0 items-center justify-between border-b border-neutral-200/80 bg-white px-4 dark:border-neutral-800 dark:bg-neutral-900">
      {/* Left Segment: Branding, Document Name & Save Status */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3">
          <Logo />
        </div>

        <div className="h-4 w-px bg-neutral-200 dark:bg-neutral-800" />

        {/* Editable Resume Title */}
        <div className="flex items-center gap-1.5">
          {isEditingTitle ? (
            <div className="flex items-center gap-1">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onBlur={handleTitleSubmit}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleTitleSubmit();
                  if (e.key === "Escape") setIsEditingTitle(false);
                }}
                autoFocus
                className="h-7 rounded-md border border-neutral-300 bg-neutral-50 px-2 text-xs font-medium text-neutral-900 outline-none focus:border-neutral-900 focus:bg-white dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={handleTitleSubmit}
                className="h-6 w-6 rounded-md text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700"
              >
                <Check className="h-3.5 w-3.5" />
              </Button>
            </div>
          ) : (
            <button
              onClick={() => setIsEditingTitle(true)}
              className="group flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
            >
              <span className="max-w-[180px] truncate">{title}</span>
              <Pencil className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-60" />
            </button>
          )}
        </div>

        <div className="h-4 w-px bg-neutral-200 dark:bg-neutral-800" />

        {/* Dynamic Save Status */}
        <SaveStatus status={saveStatus} />
      </div>

      {/* Right Segment: Utilities & Auth Actions */}
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={onHelpClick}
          className="h-8 gap-1.5 rounded-lg px-2.5 text-xs font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
        >
          <HelpCircle className="h-3.5 w-3.5 text-neutral-500" />
          <span>Help</span>
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={onUploadClick}
          className="h-8 gap-1.5 rounded-lg border-neutral-200/90 bg-neutral-50/50 text-xs font-medium text-neutral-700 shadow-none transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300"
        >
          <Upload className="h-3.5 w-3.5 text-neutral-500" />
          <span>Import</span>
        </Button>

        <div className="my-auto h-4 w-px bg-neutral-200 dark:bg-neutral-800" />

        {user ? (
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
              {user.name}
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-1.5">
            <Button
              variant="ghost"
              size="sm"
              onClick={onLoginClick}
              className="h-8 rounded-lg px-3 text-xs font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
            >
              Sign In
            </Button>

            <Button
              size="sm"
              onClick={onSignUpClick}
              className="h-8 rounded-lg bg-neutral-900 px-3 text-xs font-medium text-white shadow-sm transition-all hover:bg-neutral-800 active:scale-95 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white"
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}