"use client";

import Image from "next/image";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import type { Template } from "@/types/template";

interface TemplatePreviewDialogProps {
  template: Template | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function TemplatePreviewDialog({
  template,
  open,
  onOpenChange,
}: TemplatePreviewDialogProps) {
  if (!template) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-7xl border-0 bg-slate-100/95 p-0 shadow-2xl"
      >
        <div className="relative flex h-[86vh] rounded-sm items-center justify-center overflow-hidden">
          {/* Resume */}
          <div className="relative rounded-sm h-[86vh] max-w-[90vw] overflow-hidden bg-white shadow-2xl">
            <Image
              src={template.fullPreviewUrl}
              alt={`${template.name} resume template preview`}
              width={1200}
              height={1600}
              className="h-full w-auto object-contain"
              priority
            />

            {/* Floating Use Template */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
              <Button
                size="sm"
                className="h-9 rounded-full bg-emerald-600 px-5 text-sm font-medium text-white shadow-lg ring-1 ring-white/20 transition-all hover:bg-emerald-700 hover:shadow-xl"
              >
                Use Template
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}