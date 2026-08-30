"use client";

import { Check, Type, Baseline, ArrowUpDown } from "lucide-react";
import { Label } from "@/components/ui/label";
import { useResumeStore } from "@/features/resume-builder/store/useResumeStore";

const FONT_OPTIONS = [
  { id: "inter", name: "Inter", category: "Modern Clean Sans", fontClass: "font-sans" },
  { id: "roboto", name: "Roboto", category: "Geometric Sans", fontClass: "font-sans" },
  { id: "merriweather", name: "Merriweather", category: "Editorial Serif", fontClass: "font-serif" },
  { id: "garamond", name: "EB Garamond", category: "Classic Executive Serif", fontClass: "font-serif" },
  { id: "geist-mono", name: "Geist Mono", category: "Technical Monospace", fontClass: "font-mono" },
];

export default function TypographyPanel() {
  const design = useResumeStore((state) => state.design);
  const updateDesign = useResumeStore((state) => state.updateDesign);

  return (
    <div className="space-y-5 p-1 pb-8">
      {/* 1. Font Family Picker */}
      <div className="space-y-2">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-900 dark:text-neutral-100">
          <Type className="h-3.5 w-3.5 text-neutral-500" />
          <span>Font Family</span>
        </div>
        <p className="text-[11px] text-neutral-500">
          Choose a typeface that best matches your industry and seniority level.
        </p>

        <div className="space-y-1.5 pt-1">
          {FONT_OPTIONS.map((font) => (
            <button
              key={font.id}
              type="button"
              onClick={() => updateDesign("fontFamily", font.id)}
              className={`flex w-full items-center justify-between rounded-xl border p-2.5 text-left transition-all ${
                design.fontFamily === font.id
                  ? "border-neutral-950 bg-neutral-100/80 shadow-xs dark:border-neutral-100 dark:bg-neutral-800"
                  : "border-neutral-200 bg-white hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900"
              }`}
            >
              <div>
                <p className={`text-xs font-semibold text-neutral-900 dark:text-neutral-100 ${font.fontClass}`}>
                  {font.name}
                </p>
                <p className="text-[10px] text-neutral-500">{font.category}</p>
              </div>
              {design.fontFamily === font.id && (
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-neutral-950 text-white dark:bg-neutral-100 dark:text-neutral-950">
                  <Check className="h-3 w-3 stroke-[3]" />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Text Scaling */}
      <div className="space-y-2">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-900 dark:text-neutral-100">
          <Baseline className="h-3.5 w-3.5 text-neutral-500" />
          <span>Text Scale</span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[
            { id: "small", label: "Compact 9pt" },
            { id: "medium", label: "Standard 10pt" },
            { id: "large", label: "Spacious 11pt" },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => updateDesign("fontSize", item.id as any)}
              className={`rounded-xl border py-2 text-center text-[10.5px] font-medium transition ${
                design.fontSize === item.id
                  ? "border-neutral-950 bg-neutral-950 text-white dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-950"
                  : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Line Height / Density */}
      <div className="space-y-2">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-900 dark:text-neutral-100">
          <ArrowUpDown className="h-3.5 w-3.5 text-neutral-500" />
          <span>Line Density</span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[
            { id: "dense", label: "Tight" },
            { id: "normal", label: "Normal" },
            { id: "relaxed", label: "Relaxed" },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => updateDesign("lineSpacing", item.id as any)}
              className={`rounded-xl border py-2 text-center text-[10.5px] font-medium capitalize transition ${
                design.lineSpacing === item.id
                  ? "border-neutral-950 bg-neutral-950 text-white dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-950"
                  : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}