"use client";

import { Globe, StarCheck, StarHalf } from "lucide-react";

export default function OnlinePresenceSectionCard({ accentColor }: { accentColor: string }) {
  return (
    <div className="space-y-2 text-left">
      <div className="flex items-center justify-between border-b border-neutral-200/80 pb-1.5">
        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-900">
          Find Me Online
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-[8px]">
        <div className="flex items-center gap-1.5 rounded border border-neutral-100 bg-neutral-50/50 p-1.5">
          <StarCheck className="h-3 w-3 text-indigo-600" />
          <div className="truncate">
            <div className="font-bold text-neutral-900">LinkedIn</div>
            <div className="text-[7px] text-neutral-400">/in/username</div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 rounded border border-neutral-100 bg-neutral-50/50 p-1.5">
          <StarHalf className="h-3 w-3 text-neutral-800" />
          <div className="truncate">
            <div className="font-bold text-neutral-900">GitHub</div>
            <div className="text-[7px] text-neutral-400">@username</div>
          </div>
        </div>
      </div>
    </div>
  );
}