
"use client";

import { useState } from "react";
import {
  X,
  Printer,
  Download,
  ZoomIn,
  ZoomOut,
  Maximize2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import ResumePage from "../resume-canvas/ResumePage";
import type { Template } from "@/types/template";

interface FullscreenPreviewModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentTemplate: Template;
  resumeTitle?: string;
}

export default function FullscreenPreviewModal({
  open,
  onOpenChange,
  currentTemplate,
  resumeTitle = "Resume",
}: FullscreenPreviewModalProps) {
  const [scale, setScale] = useState(0.85);

  const handleZoomIn = () => setScale((s) => Math.min(s + 0.1, 1.25));
  const handleZoomOut = () => setScale((s) => Math.max(s - 0.1, 0.5));
  const handleResetZoom = () => setScale(0.85);

  const handlePrint = () => {
    window.print();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] h-[92vh] gap-0 overflow-hidden rounded-2xl border border-border bg-muted/40 p-0 shadow-2xl sm:max-w-5xl">
        {/* Top Control Bar */}
        <div className="flex h-13 w-full shrink-0 items-center justify-between border-b border-border bg-card px-5">
          <div className="flex items-center gap-2">
            <Maximize2 className="h-4 w-4 text-primary" />
            <DialogTitle className="text-xs font-semibold text-foreground">
              Full Document Preview — {resumeTitle}
            </DialogTitle>
          </div>

          {/* Center Zoom Controls */}
          <div className="flex items-center gap-1 rounded-lg border border-border bg-background p-0.5 shadow-xs">
            <Button
              variant="ghost"
              size="icon"
              type="button"
              onClick={handleZoomOut}
              disabled={scale <= 0.5}
              className="h-7 w-7 rounded-md text-muted-foreground hover:text-foreground"
            >
              <ZoomOut className="h-3.5 w-3.5" />
            </Button>
            <button
              type="button"
              onClick={handleResetZoom}
              className="px-2 text-[11px] font-medium text-foreground hover:text-primary"
            >
              {Math.round(scale * 100)}%
            </button>
            <Button
              variant="ghost"
              size="icon"
              type="button"
              onClick={handleZoomIn}
              disabled={scale >= 1.25}
              className="h-7 w-7 rounded-md text-muted-foreground hover:text-foreground"
            >
              <ZoomIn className="h-3.5 w-3.5" />
            </Button>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              type="button"
              onClick={handlePrint}
              className="h-7.5 gap-1.5 rounded-lg border-border bg-background text-xs font-medium text-foreground shadow-none hover:bg-muted"
            >
              <Printer className="h-3.5 w-3.5 text-muted-foreground" />
              <span>Print</span>
            </Button>

            <Button
              size="sm"
              type="button"
              onClick={handlePrint}
              className="h-7.5 gap-1.5 rounded-lg bg-primary text-xs font-semibold text-primary-foreground shadow-xs hover:opacity-95"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Save PDF</span>
            </Button>

            <div className="h-4 w-px bg-border mx-1" />

            <Button
              variant="ghost"
              size="icon"
              type="button"
              onClick={() => onOpenChange(false)}
              className="h-7.5 w-7.5 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close preview</span>
            </Button>
          </div>
        </div>

        {/* Scaled A4 Sheet Scroll Canvas */}
        <div className="relative flex flex-1 items-start justify-center overflow-y-auto p-8">
          <div
            className="transition-transform duration-150 ease-out origin-top shadow-2xl rounded-sm"
            style={{ transform: `scale(${scale})` }}
          >
            <ResumePage currentTemplate={currentTemplate} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}