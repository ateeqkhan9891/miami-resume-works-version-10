
"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Label } from "@/components/ui/label";

const FONTS = [
  { id: "inter", name: "Inter", category: "Modern Sans", sample: "Aa Bb Cc" },
  { id: "roboto", name: "Roboto", category: "Geometric Sans", sample: "Aa Bb Cc" },
  { id: "merriweather", name: "Merriweather", category: "Editorial Serif", sample: "Aa Bb Cc" },
  { id: "garamond", name: "EB Garamond", category: "Classic Serif", sample: "Aa Bb Cc" },
  { id: "jetbrains", name: "JetBrains Mono", category: "Technical Mono", sample: "Aa Bb Cc" },
];

export default function TypographyPanel() {
  const [selectedFont, setSelectedFont] = useState("inter");
  const [fontSize, setFontSize] = useState("medium");

  return (
    <div className="space-y-5">
      {/* Font Family List */}
      <div className="space-y-2">
        <Label className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
          Primary Font Family
        </Label>
        <div className="space-y-2">
          {FONTS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setSelectedFont(f.id)}
              className={`flex w-full items-center justify-between rounded-xl border p-3 text-left transition ${
                selectedFont === f.id
                  ? "border-neutral-900 bg-neutral-50 shadow-sm dark:border-neutral-100 dark:bg-neutral-800"
                  : "border-neutral-200 hover:border-neutral-300 dark:border-neutral-800"
              }`}
            >
              <div>
                <p className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">
                  {f.name}
                </p>
                <p className="text-[10px] text-neutral-500">{f.category}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-neutral-400">{f.sample}</span>
                {selectedFont === f.id && (
                  <Check className="h-4 w-4 text-neutral-900 dark:text-neutral-100" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Font Size Preset */}
      <div className="space-y-2">
        <Label className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
          Base Font Size
        </Label>
        <div className="grid grid-cols-3 gap-2">
          {[
            { id: "small", label: "Small (9pt)" },
            { id: "medium", label: "Standard (10pt)" },
            { id: "large", label: "Large (11pt)" },
          ].map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setFontSize(s.id)}
              className={`rounded-lg border px-2 py-2 text-[11px] font-medium transition ${
                fontSize === s.id
                  ? "border-neutral-900 bg-neutral-900 text-white dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-900"
                  : "border-neutral-200 text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}