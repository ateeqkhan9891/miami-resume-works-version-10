
"use client";

import { Plus } from "lucide-react";

interface SectionInserterProps {
  onInsertClick: () => void;
  isEditable?: boolean;
}

export default function SectionInserter({
  onInsertClick,
  isEditable = true,
}: SectionInserterProps) {
  if (!isEditable) return null;

  return (
    <div className="group relative my-2 flex h-5 w-full items-center justify-center">
      {/* Subtle line that reveals on hover */}
      <div className="h-[1.5px] w-full bg-transparent transition-colors duration-200 group-hover:bg-emerald-400/60" />

      {/* Enhancv-style Center (+) Pill */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onInsertClick();
        }}
        title="Add a new section"
        className="absolute z-10 flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400 bg-white text-emerald-600 shadow-xs transition-all duration-150 group-hover:scale-110 hover:bg-emerald-500 hover:text-white"
      >
        <Plus className="h-3 w-3 stroke-[2.5]" />
      </button>
    </div>
  );
}