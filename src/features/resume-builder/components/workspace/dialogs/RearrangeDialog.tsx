"use client";

import { useEffect, useState } from "react";
import { Lock, GripVertical, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { useResumeStore, type LayoutSectionItem, type ResumeLayoutOrder } from "@/features/resume-builder/store/useResumeStore";

interface RearrangeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function RearrangeDialog({
  open,
  onOpenChange,
}: RearrangeDialogProps) {
  const layoutOrder = useResumeStore((state) => state.layoutOrder);
  const setLayoutOrder = useResumeStore((state) => state.setLayoutOrder);

  const [leftSections, setLeftSections] = useState<LayoutSectionItem[]>(layoutOrder.left);
  const [rightSections, setRightSections] = useState<LayoutSectionItem[]>(layoutOrder.right);
  const [dragItem, setDragItem] = useState<{ id: string; col: "left" | "right"; index: number } | null>(null);

  useEffect(() => {
    if (open) {
      setLeftSections(layoutOrder.left);
      setRightSections(layoutOrder.right);
    }
  }, [open, layoutOrder]);

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
    setLeftSections([
      { id: "summary", name: "Summary" },
      { id: "experience", name: "Experience" },
      { id: "projects", name: "Selected Projects" },
    ]);
    setRightSections([
      { id: "skills", name: "Skills" },
      { id: "education", name: "Education" },
      { id: "certifications", name: "Certifications" },
      { id: "languages", name: "Languages" },
      { id: "awards", name: "Awards" },
    ]);
  };

  const handleContinue = () => {
    setLayoutOrder({ left: leftSections, right: rightSections });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl border-0 bg-neutral-50/90 p-4 shadow-none focus:outline-none sm:max-w-xl">
        <div className="flex flex-col items-center">
          <DialogTitle className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Hold & Drag the boxes to rearrange the sections
          </DialogTitle>
          <p className="mt-1.5 text-xs font-medium text-neutral-500 dark:text-neutral-400">
            Reorder items or move them between columns
          </p>

          <div className="relative mt-4 w-[380px] rounded-xl border border-neutral-200/90 bg-white p-4 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:border-neutral-800 dark:bg-neutral-900">
            {/* Header */}
            <div className="relative flex h-11 w-full items-center justify-center rounded-lg border border-emerald-100 bg-emerald-50/80 text-xs font-semibold text-emerald-950 shadow-xs">
              <Lock className="absolute left-3.5 h-3.5 w-3.5 text-emerald-600/80" />
              <span>Header (Locked)</span>
            </div>

            {/* Columns */}
            <div className="mt-2.5 grid grid-cols-2 gap-2.5">
              {/* Left Column */}
              <div
                onDragOver={handleDragOver}
                onDrop={() => handleDrop("left", leftSections.length)}
                className="flex flex-col gap-2 min-h-[220px] rounded-lg border border-dashed border-neutral-200 p-1.5"
              >
                <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 text-center">Left Column</div>
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
                    className="group relative flex min-h-[42px] cursor-grab select-none items-center justify-center rounded-lg border border-emerald-100 bg-emerald-50/70 p-2 text-center text-xs font-medium text-emerald-950 shadow-xs hover:border-emerald-300 hover:bg-emerald-100/70 active:cursor-grabbing"
                  >
                    <GripVertical className="absolute left-2 h-3.5 w-3.5 text-emerald-500 opacity-60 group-hover:opacity-100" />
                    <span className="truncate px-4">{section.name}</span>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div
                onDragOver={handleDragOver}
                onDrop={() => handleDrop("right", rightSections.length)}
                className="flex flex-col gap-2 min-h-[220px] rounded-lg border border-dashed border-neutral-200 p-1.5"
              >
                <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 text-center">Right Column</div>
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
                    className="group relative flex min-h-[42px] cursor-grab select-none items-center justify-center rounded-lg border border-emerald-100 bg-emerald-50/70 p-2 text-center text-xs font-medium text-emerald-950 shadow-xs hover:border-emerald-300 hover:bg-emerald-100/70 active:cursor-grabbing"
                  >
                    <GripVertical className="absolute left-2 h-3.5 w-3.5 text-emerald-500 opacity-60 group-hover:opacity-100" />
                    <span className="truncate px-4">{section.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleReset}
              className="h-9 gap-1.5 rounded-full px-4 text-xs font-medium text-neutral-600 hover:bg-neutral-200/60"
            >
              <RotateCcw className="h-3 w-3" />
              <span>Reset Layout</span>
            </Button>

            <Button
              type="button"
              onClick={handleContinue}
              className="h-10 rounded-xl bg-emerald-600 px-8 text-xs font-semibold text-white shadow-md hover:bg-emerald-700"
            >
              Continue Editing
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}