"use client";

import { useState } from "react";
import Logo from "@/components/navigation/Logo";
import { Button } from "@/components/ui/button";
import { HelpCircle, UploadCloud, Check, Pencil } from "lucide-react";
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
    <header className="flex h-14 w-full shrink-0 items-center justify-between border-b border-border bg-card px-4">
      {/* Left Segment: Branding, Document Title & Save Status */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3">
          <Logo />
        </div>

        <div className="h-4 w-px bg-border" />

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
                className="h-7 rounded-md border border-input bg-muted/40 px-2 text-xs font-medium text-foreground outline-none focus:border-primary focus:bg-card"
              />
              <Button
                variant="ghost"
                size="icon"
                type="button"
                onClick={handleTitleSubmit}
                className="h-6 w-6 rounded-md text-primary hover:bg-accent/40"
              >
                <Check className="h-3.5 w-3.5" />
              </Button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setIsEditingTitle(true)}
              className="group flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-foreground transition-colors hover:bg-muted"
            >
              <span className="max-w-[180px] truncate">{title}</span>
              <Pencil className="h-3 w-3 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
          )}
        </div>

        <div className="h-4 w-px bg-border" />

        {/* Dynamic Save Status Indicator */}
        <SaveStatus status={saveStatus} />
      </div>

      {/* Right Segment: Utilities & Actions */}
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          type="button"
          onClick={onHelpClick}
          className="h-8 gap-1.5 rounded-lg px-2.5 text-xs font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          <HelpCircle className="h-3.5 w-3.5 text-muted-foreground" />
          <span>Help</span>
        </Button>

        <Button
          variant="outline"
          size="sm"
          type="button"
          onClick={onUploadClick}
          className="h-8 gap-1.5 rounded-lg border-border bg-card text-xs font-medium text-foreground shadow-none transition-colors hover:bg-muted"
        >
          <UploadCloud className="h-3.5 w-3.5 text-muted-foreground" />
          <span>Import</span>
        </Button>

        <div className="my-auto h-4 w-px bg-border" />

        {user ? (
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-foreground">
              {user.name}
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-1.5">
            <Button
              variant="ghost"
              size="sm"
              type="button"
              onClick={onLoginClick}
              className="h-8 rounded-lg px-3 text-xs font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              Sign In
            </Button>

            <Button
              size="sm"
              type="button"
              onClick={onSignUpClick}
              className="h-8 rounded-lg bg-primary px-3 text-xs font-medium text-primary-foreground shadow-xs transition-all hover:opacity-95 active:scale-95"
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}