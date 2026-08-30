"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SECTION_CARDS_CATALOG } from "./section-cards";
import { useResumeStore } from "@/features/resume-builder/store/useResumeStore";
import type { SectionCatalogItem } from "./section-cards/types";

interface AddSectionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AddSectionModal({
  open,
  onOpenChange,
}: AddSectionModalProps) {
  const addSection = useResumeStore((state) => state.addSection);
  const accentColor = useResumeStore((state) => state.design.accentColor ?? "#214e3b");

  const handleSelect = (item: SectionCatalogItem) => {
    addSection(item.type, item.title);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl sm:max-w-4xl w-full border border-neutral-200 bg-white p-0 shadow-2xl rounded-2xl overflow-hidden focus:outline-none font-sans">
        {/* Modal Header */}
        <div className="border-b border-neutral-100 bg-white px-8 pt-7 pb-4 text-center">
          <DialogTitle className="text-2xl font-bold tracking-tight text-neutral-900 font-sans">
            Add a new section
          </DialogTitle>
          <p className="mt-1 text-xs text-neutral-500 font-sans">
            Click on a section to add it to your resume
          </p>
        </div>

        {/* 3x3 Card Grid */}
        <div className="max-h-[75vh] overflow-y-auto bg-neutral-50/50 p-7">
          <div className="grid grid-cols-3 gap-5">
            {SECTION_CARDS_CATALOG.map((item) => {
              const CardComponent = item.component;

              return (
                <button
                  key={item.id + item.label}
                  type="button"
                  onClick={() => handleSelect(item)}
                  className="group flex flex-col items-center text-left focus:outline-none"
                >
                  {/* Miniature A4 Document Tile */}
                  <div className="relative flex h-[155px] w-full flex-col justify-between overflow-hidden rounded-xl border border-neutral-200 bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-200 group-hover:-translate-y-1 group-hover:border-neutral-400 group-hover:shadow-lg">
                    <CardComponent accentColor={accentColor} />

                    {/* Hover Purple Overlay Pill */}
                    <div className="absolute inset-0 flex items-center justify-center bg-indigo-950/20 opacity-0 backdrop-blur-[1px] transition-opacity duration-150 group-hover:opacity-100">
                      <div className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-[11px] font-semibold text-white shadow-md transition-transform duration-150 group-hover:scale-105">
                        Add to resume
                      </div>
                    </div>
                  </div>

                  {/* Sub-label Under Card */}
                  <span className="mt-2 text-xs font-semibold text-neutral-700 transition-colors group-hover:text-indigo-600">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}