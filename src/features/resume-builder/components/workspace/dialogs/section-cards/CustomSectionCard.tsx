"use client";

import { Sparkles, Calendar } from "lucide-react";

export default function CustomSectionCard({ accentColor }: { accentColor: string }) {
  return (
    <div className="space-y-2 text-left">
      <div className="flex items-center justify-between border-b border-neutral-200/80 pb-1.5">
        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-900">
          Custom Title
        </span>
      </div>

      <div className="space-y-2">
        <div className="flex items-start gap-1.5">
          <Sparkles className="mt-0.5 h-3 w-3 shrink-0" style={{ color: accentColor }} />
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between text-[9px] font-bold text-neutral-900">
              <span className="truncate">Inspired & Challenged</span>
              <span className="flex items-center gap-1 text-[7.5px] font-normal text-neutral-400">
                <Calendar className="h-2.5 w-2.5" /> 10/2024 - 08/2025
              </span>
            </div>
            <p className="mt-0.5 line-clamp-2 text-[8px] leading-tight text-neutral-500">
              Cross-functional architectural design sprints to build modular components.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-1.5 opacity-60">
          <Sparkles className="mt-0.5 h-3 w-3 shrink-0" style={{ color: accentColor }} />
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between text-[9px] font-bold text-neutral-900">
              <span className="truncate">Inspired & Challenged</span>
              <span className="text-[7.5px] font-normal text-neutral-400">10/2024 - 08/2025</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}