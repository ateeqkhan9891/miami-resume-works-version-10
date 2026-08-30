
"use client";

import { Calendar } from "lucide-react";

export default function VolunteeringSectionCard({ accentColor }: { accentColor: string }) {
  return (
    <div className="space-y-1.5 text-left">
      <div className="flex items-center justify-between border-b border-neutral-200/80 pb-1.5">
        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-900">
          Volunteering
        </span>
      </div>

      <div>
        <div className="text-[9.5px] font-bold text-neutral-900">Executive Member</div>
        <div className="text-[8.5px] font-semibold" style={{ color: accentColor }}>
          AIESEC
        </div>
        <div className="flex items-center gap-1 text-[7.5px] text-neutral-400">
          <Calendar className="h-2.5 w-2.5" /> 09/2023 - Present
        </div>
      </div>

      <p className="line-clamp-2 text-[8px] leading-tight text-neutral-500">
        International NGO developing youth leadership through cross-cultural exchanges.
      </p>
    </div>
  );
}