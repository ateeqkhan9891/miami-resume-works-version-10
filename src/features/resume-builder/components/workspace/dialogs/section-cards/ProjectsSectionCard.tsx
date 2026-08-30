"use client";

import { Calendar } from "lucide-react";

export default function ProjectsSectionCard({ accentColor }: { accentColor: string }) {
  return (
    <div className="space-y-1.5 text-left">
      <div className="flex items-center justify-between border-b border-neutral-200/80 pb-1.5">
        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-900">
          Projects
        </span>
      </div>

      <div>
        <div className="text-[9.5px] font-bold text-neutral-900">Tesla Model S for Kids</div>
        <div className="flex items-center gap-1 text-[7.5px] text-neutral-400">
          <Calendar className="h-2.5 w-2.5" /> 11/2024 - 04/2025
        </div>
      </div>

      <ul className="space-y-0.5 text-[8px] leading-tight text-neutral-500">
        <li>• Designed modular battery pack layout & chassis specs</li>
        <li>• Coordinated with hardware teams for safety compliance</li>
      </ul>
    </div>
  );
}