"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import TemplateRenderer from "@/features/templates/components/TemplateRenderer";
import { SAMPLE_RESUME_DATA } from "@/features/templates/data/sample-resume-data";
import { SAMPLE_PROFESSIONAL_RESUME_DATA } from "@/features/templates/data/sample-professional-mahira-resume";
import type { Template } from "@/types/template";

interface TemplatePreviewDialogProps {
  template: Template | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const A4_WIDTH = 794;
const A4_HEIGHT = 1123;

export default function TemplatePreviewModal({
  template,
  open,
  onOpenChange,
}: TemplatePreviewDialogProps) {
  const [scale, setScale] = useState<number>(0.75);

  useEffect(() => {
    if (!open) return;

    const calculateScale = () => {
      // Leaves breathing room for the top close button and bottom floating CTA
      const availableHeight = window.innerHeight * 0.86;
      const availableWidth = window.innerWidth * 0.92;

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

  const previewData =
    template.slug === "professional"
      ? SAMPLE_PROFESSIONAL_RESUME_DATA
      : SAMPLE_RESUME_DATA;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="!fixed !left-1/2 !top-1/2 !-translate-x-1/2 !-translate-y-1/2 !w-fit !h-fit !max-w-none !max-h-none !bg-transparent !p-0 !border-0 !shadow-none [&>button]:hidden focus:outline-none"
      >
        <DialogTitle className="sr-only">
          Preview of {template.name || "Resume Template"}
        </DialogTitle>

        {/* Floating Close Button Top Right */}
        <button
          type="button"
          onClick={() => onOpenChange(false)}
          aria-label="Close preview"
          className="absolute -top-11 right-0 z-50 flex size-9 items-center justify-center rounded-full border border-border/60 bg-card/90 text-foreground shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:bg-card active:scale-95 sm:-right-11 sm:top-0"
        >
          <X className="size-4.5" />
        </button>

        {/* Scaled A4 Document Container */}
        <div
          style={{
            width: `${A4_WIDTH * scale}px`,
            height: `${A4_HEIGHT * scale}px`,
          }}
          className="relative shrink-0 select-none overflow-hidden rounded-xl border border-border/80 bg-white shadow-2xl ring-1 ring-black/5"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Unscaled Inner Renderer Container */}
          <div
            style={{
              width: `${A4_WIDTH}px`,
              height: `${A4_HEIGHT}px`,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
            }}
            className="absolute left-0 top-0 overflow-hidden bg-white"
          >
            <TemplateRenderer template={template} data={previewData} />
          </div>

          {/* Floating 'Use Template' Pill Bar */}
          <div className="pointer-events-none absolute inset-x-0 bottom-4 z-30 flex justify-center">
            <Link
              href={`/resume/new?template=${template.slug}`}
              className="pointer-events-auto inline-flex h-10.5 items-center gap-2 rounded-full border border-primary/20 bg-primary px-7 text-xs font-bold text-primary-foreground shadow-xl transition-all duration-150 hover:opacity-95 hover:shadow-2xl active:scale-95"
            >
              <span>Use This Template</span>
              <ArrowRight className="size-3.5" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}