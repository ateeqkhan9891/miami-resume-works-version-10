"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  HelpCircle,
  UploadCloud,
  Check,
  Pencil,
  ChevronDown,
  CircleGauge ,
  Infinity,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SaveStatus, { type SaveStatusType } from "./SaveStatus";

interface WorkspaceTopHeaderProps {
  saveStatus: SaveStatusType;
  documentTitle?: string;
  onTitleChange?: (newTitle: string) => void;
  onUploadClick?: () => void;
  onHelpClick?: () => void;
  onLoginClick?: () => void;
  onSignUpClick?: () => void;
  user?: { name: string; email: string; role?: "admin" | "user" } | null;
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
      {/* Left Segment: Logo, Gap, Workspace Trigger, Resume Title & Save Status */}
      <div className="flex items-center gap-3">
        {/* Logo */}
        <Link
          href="/"
          className="flex size-8 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary transition-transform duration-200 hover:scale-105"
        >
          <Infinity className="size-4.5" strokeWidth={2.4} />
        </Link>

        {/* Workspace Dropdown without asChild */}
        <DropdownMenu>
          <DropdownMenuTrigger className="group flex items-center gap-1.5 rounded-lg border border-border bg-muted/40 px-2.5 py-1 text-xs font-medium text-foreground outline-none transition-colors hover:bg-muted focus-visible:ring-1 focus-visible:ring-primary">
            <span>Workspace</span>
            <ChevronDown className="h-3 w-3 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="start"
            sideOffset={8}
            className="w-48 rounded-xl border border-border bg-card p-1.5 shadow-xl"
          >
            <DropdownMenuGroup>
              <DropdownMenuLabel className="px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                Workspace
              </DropdownMenuLabel>

              <DropdownMenuSeparator className="my-1 bg-border" />

              <DropdownMenuItem className="p-0">
                <Link
                  href="/dashboard"
                  className="flex w-full cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium text-foreground transition hover:bg-muted"
                >
                  <CircleGauge  className="h-3.5 w-3.5 text-primary" />
                  <span>Dashboard</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

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

        {/* Dynamic Save Status */}
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