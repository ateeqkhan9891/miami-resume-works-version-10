"use client";

import { useEffect, useRef, useState } from "react";
import TemplateRenderer from "@/features/templates/components/TemplateRenderer";
import { SAMPLE_RESUME_DATA } from "@/features/templates/data/sample-resume-data";
import { SAMPLE_PROFESSIONAL_RESUME_DATA } from "@/features/templates/data/sample-professional-mahira-resume";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

import type { Template } from "@/types/template";

interface TemplatePreviewDialogProps {
  template: Template | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const A4_WIDTH = 794;
const A4_HEIGHT = 1123;

export default function TemplatePreviewDialog({
  template,
  open,
  onOpenChange,
}: TemplatePreviewDialogProps) {
  const [scale, setScale] = useState<number>(0.75);

  useEffect(() => {
    if (!open) return;

    const calculateScale = () => {
      // 90% of screen height/width leaving safe padding
      const availableHeight = window.innerHeight * 0.9;
      const availableWidth = window.innerWidth * 0.9;

      const scaleY = availableHeight / A4_HEIGHT;
      const scaleX = availableWidth / A4_WIDTH;

      const fittedScale = Math.min(scaleX, scaleY, 1);
      setScale(Number(fittedScale.toFixed(3)));
    };

    calculateScale();
    window.addEventListener("resize", calculateScale);
    return () => window.removeEventListener("resize", calculateScale);
  }, [open]);

  if (!template) return null;

  let previewData = SAMPLE_RESUME_DATA;
  if (template.slug === "professional") {
    previewData = SAMPLE_PROFESSIONAL_RESUME_DATA;
  }
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="!fixed !left-1/2 !top-1/2 !-translate-x-1/2 !-translate-y-1/2 !w-fit !h-fit !max-w-none !max-h-none !bg-transparent !p-0 !border-0 !shadow-none [&>button]:hidden focus:outline-none"
      >
        <DialogTitle className="sr-only">
          Preview of {template.name || "Resume Template"}
        </DialogTitle>

        
        <div
          style={{
            width: `${A4_WIDTH * scale}px`,
            height: `${A4_HEIGHT * scale}px`,
          }}
          className="relative shrink-0 select-none shadow-2xl rounded-xs"
          onClick={(e) => e.stopPropagation()} 
        >
         
          <div
            style={{
              width: `${A4_WIDTH}px`,
              height: `${A4_HEIGHT}px`,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
            }}
            className="absolute left-0 top-0 overflow-hidden bg-white"
          >
            <TemplateRenderer
              template={template}
              data={previewData}
            />
          </div>

          {/* Floating 'Use Template' Pill Button */}
          <div className="absolute bottom-2 left-1/2 z-30 -translate-x-1/2">
            {/* <Button
              size="sm"
              className="h-10  rounded-full bg-emerald-600 px-7 text-xs font-semibold text-white shadow-xl ring-1 ring-white/20 transition-all hover:bg-emerald-500 hover:scale-105 active:scale-95 cursor-pointer"
            >
              Use Template
            </Button> */}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}