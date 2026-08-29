"use client";

import { useState } from "react";
import { Lock, GripVertical, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

export interface LayoutSectionItem {
  id: string;
  name: string;
}

interface RearrangeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave?: (layout: { left: LayoutSectionItem[]; right: LayoutSectionItem[] }) => void;
}

const DEFAULT_LEFT_SECTIONS: LayoutSectionItem[] = [
  { id: "education", name: "Education" },
  { id: "experience", name: "Experience" },
  { id: "summary", name: "Summary" },
  { id: "skills", name: "Skills" },
  { id: "languages", name: "Languages" },
];

const DEFAULT_RIGHT_SECTIONS: LayoutSectionItem[] = [
  { id: "achievements", name: "Key Achievements" },
  { id: "courses", name: "Courses" },
  { id: "interests", name: "Interests & Hobbies" },
];

export default function RearrangeDialog({
  open,
  onOpenChange,
  onSave,
}: RearrangeDialogProps) {
  const [leftSections, setLeftSections] = useState<LayoutSectionItem[]>(DEFAULT_LEFT_SECTIONS);
  const [rightSections, setRightSections] = useState<LayoutSectionItem[]>(DEFAULT_RIGHT_SECTIONS);

  const [dragItem, setDragItem] = useState<{ id: string; col: "left" | "right"; index: number } | null>(null);

  const handleDragStart = (id: string, col: "left" | "right", index: number) => {
    setDragItem({ id, col, index });
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (targetCol: "left" | "right", targetIndex: number) => {
    if (!dragItem) return;

    const sourceList = dragItem.col === "left" ? [...leftSections] : [...rightSections];
    const targetList = targetCol === "left" ? [...leftSections] : [...rightSections];

    const [movedItem] = sourceList.splice(dragItem.index, 1);

    if (dragItem.col === targetCol) {
      sourceList.splice(targetIndex, 0, movedItem);
      if (targetCol === "left") setLeftSections(sourceList);
      else setRightSections(sourceList);
    } else {
      targetList.splice(targetIndex, 0, movedItem);
      if (dragItem.col === "left") {
        setLeftSections(sourceList);
        setRightSections(targetList);
      } else {
        setRightSections(sourceList);
        setLeftSections(targetList);
      }
    }

    setDragItem(null);
  };

  const handleReset = () => {
    setLeftSections(DEFAULT_LEFT_SECTIONS);
    setRightSections(DEFAULT_RIGHT_SECTIONS);
  };

  const handleContinue = () => {
    onSave?.({ left: leftSections, right: rightSections });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl border-0 bg-neutral-50/90 p-4 shadow-none focus:outline-none sm:max-w-xl">
        <div className="flex flex-col items-center">
          {/* Header Title */}
          <DialogTitle className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Hold & Drag the boxes to rearrange the sections
          </DialogTitle>
          <p className="mt-1.5 text-xs font-medium text-neutral-500 dark:text-neutral-400">
            Page 1 of 1
          </p>

          {/* Miniature A4 Canvas Sheet */}
          <div className="relative mt-4 w-[380px] rounded-xl border border-neutral-200/90 bg-white p-4 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:border-neutral-800 dark:bg-neutral-900">
            {/* 1. Fixed Locked Header */}
            <div className="relative flex h-11 w-full items-center justify-center rounded-lg border border-indigo-100 bg-indigo-50/80 text-xs font-semibold text-indigo-950 shadow-xs dark:border-indigo-900/50 dark:bg-indigo-950/40 dark:text-indigo-200">
              <Lock className="absolute left-3.5 h-3.5 w-3.5 text-indigo-500/80" />
              <span>Header</span>
            </div>

            {/* 2. Two-Column Reorderable Grid */}
            <div className="mt-2.5 grid grid-cols-2 gap-2.5">
              {/* Left Column */}
              <div
                onDragOver={handleDragOver}
                onDrop={() => handleDrop("left", leftSections.length)}
                className="flex flex-col gap-2 min-h-[220px]"
              >
                {leftSections.map((section, idx) => (
                  <div
                    key={section.id}
                    draggable
                    onDragStart={() => handleDragStart(section.id, "left", idx)}
                    onDragOver={handleDragOver}
                    onDrop={(e) => {
                      e.stopPropagation();
                      handleDrop("left", idx);
                    }}
                    className="group relative flex min-h-[46px] cursor-grab select-none items-center justify-center rounded-lg border border-indigo-100/90 bg-indigo-50/70 p-2 text-center text-xs font-medium text-indigo-950 shadow-xs transition-all hover:border-indigo-300 hover:bg-indigo-100/70 active:cursor-grabbing dark:border-indigo-900/40 dark:bg-indigo-950/30 dark:text-indigo-200 dark:hover:bg-indigo-900/40"
                  >
                    <GripVertical className="absolute left-2 h-3.5 w-3.5 text-indigo-400 opacity-60 transition-opacity group-hover:opacity-100" />
                    <span className="truncate px-4">{section.name}</span>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div
                onDragOver={handleDragOver}
                onDrop={() => handleDrop("right", rightSections.length)}
                className="flex flex-col gap-2 min-h-[220px]"
              >
                {rightSections.map((section, idx) => (
                  <div
                    key={section.id}
                    draggable
                    onDragStart={() => handleDragStart(section.id, "right", idx)}
                    onDragOver={handleDragOver}
                    onDrop={(e) => {
                      e.stopPropagation();
                      handleDrop("right", idx);
                    }}
                    className="group relative flex min-h-[46px] cursor-grab select-none items-center justify-center rounded-lg border border-indigo-100/90 bg-indigo-50/70 p-2 text-center text-xs font-medium text-indigo-950 shadow-xs transition-all hover:border-indigo-300 hover:bg-indigo-100/70 active:cursor-grabbing dark:border-indigo-900/40 dark:bg-indigo-950/30 dark:text-indigo-200 dark:hover:bg-indigo-900/40"
                  >
                    <GripVertical className="absolute left-2 h-3.5 w-3.5 text-indigo-400 opacity-60 transition-opacity group-hover:opacity-100" />
                    <span className="truncate px-4">{section.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex items-center gap-3">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleReset}
              className="h-9 gap-1.5 rounded-full px-4 text-xs font-medium text-neutral-600 hover:bg-neutral-200/60 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800"
            >
              <RotateCcw className="h-3 w-3" />
              <span>Reset Layout</span>
            </Button>

            <Button
              type="button"
              onClick={handleContinue}
              className="h-10 rounded-xl bg-emerald-600 px-8 text-xs font-semibold text-white shadow-md transition-all hover:bg-emerald-700 hover:shadow-lg active:scale-95"
            >
              Continue Editing
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}