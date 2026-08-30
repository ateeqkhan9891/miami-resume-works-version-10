
"use client";

import { TrendingUp } from "lucide-react";

export default function StrengthsSectionCard({ accentColor }: { accentColor: string }) {
  return (
    <div className="space-y-2 text-left">
      <div className="flex items-center justify-between border-b border-neutral-200/80 pb-1.5">
        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-900">
          Strengths
        </span>
      </div>

      <div className="space-y-2">
        <div className="flex items-start gap-1.5">
          <TrendingUp className="mt-0.5 h-3 w-3 shrink-0" style={{ color: accentColor }} />
          <div>
            <div className="text-[9px] font-bold text-neutral-900">Go-getter</div>
            <p className="mt-0.5 text-[8px] leading-tight text-neutral-500">
              20+ recognitions have taught me that persistence leads to outcome.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-1.5 opacity-60">
          <TrendingUp className="mt-0.5 h-3 w-3 shrink-0" style={{ color: accentColor }} />
          <div>
            <div className="text-[9px] font-bold text-neutral-900">Critical Thinker</div>
          </div>
        </div>
      </div>
    </div>
  );
}