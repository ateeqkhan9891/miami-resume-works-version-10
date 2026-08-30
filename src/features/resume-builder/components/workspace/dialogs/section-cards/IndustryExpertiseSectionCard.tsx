
"use client";

export default function IndustryExpertiseSectionCard({ accentColor }: { accentColor: string }) {
  return (
    <div className="space-y-2.5 text-left">
      <div className="flex items-center justify-between border-b border-neutral-200/80 pb-1.5">
        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-900">
          Industry Expertise
        </span>
      </div>

      <div className="space-y-2">
        <div>
          <div className="flex justify-between text-[8.5px] font-semibold text-neutral-800">
            <span>Leadership</span>
            <span className="text-[7.5px] text-neutral-400">90%</span>
          </div>
          <div className="mt-1 h-1.5 w-full rounded-full bg-neutral-100">
            <div className="h-full w-[90%] rounded-full" style={{ backgroundColor: accentColor }} />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-[8.5px] font-semibold text-neutral-800">
            <span>Management</span>
            <span className="text-[7.5px] text-neutral-400">75%</span>
          </div>
          <div className="mt-1 h-1.5 w-full rounded-full bg-neutral-100">
            <div className="h-full w-[75%] rounded-full" style={{ backgroundColor: accentColor }} />
          </div>
        </div>
      </div>
    </div>
  );
}