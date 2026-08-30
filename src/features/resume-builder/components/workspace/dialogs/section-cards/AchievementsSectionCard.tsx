
"use client";

import { Sparkles, Megaphone } from "lucide-react";

export default function AchievementsSectionCard({ accentColor }: { accentColor: string }) {
  return (
    <div className="space-y-2 text-left">
      <div className="flex items-center justify-between border-b border-neutral-200/80 pb-1.5">
        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-900">
          Key Achievements
        </span>
      </div>

      <div className="space-y-2">
        <div className="flex items-start gap-1.5">
          <Sparkles className="mt-0.5 h-3 w-3 shrink-0" style={{ color: accentColor }} />
          <div>
            <div className="text-[9px] font-bold text-neutral-900">10x Scale Growth</div>
            <p className="mt-0.5 text-[8px] leading-tight text-neutral-500">
              Scaled active user platform from 50k to 500k DAU with 99.99% uptime.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-1.5">
          <Megaphone className="mt-0.5 h-3 w-3 shrink-0" style={{ color: accentColor }} />
          <div>
            <div className="text-[9px] font-bold text-neutral-900">Developed Strong Brand</div>
            <p className="mt-0.5 text-[8px] leading-tight text-neutral-500">
              Delivered unified brand strategy across all digital and retail touchpoints.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}