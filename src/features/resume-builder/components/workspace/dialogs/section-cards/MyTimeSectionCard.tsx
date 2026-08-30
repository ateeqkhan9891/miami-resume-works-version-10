
"use client";

export default function MyTimeSectionCard({ accentColor }: { accentColor: string }) {
  return (
    <div className="space-y-2 text-left">
      <div className="flex items-center justify-between border-b border-neutral-200/80 pb-1.5">
        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-900">
          My Time
        </span>
      </div>

      <div className="flex items-center gap-3">
        {/* Visual Donut Chart */}
        <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-emerald-100 bg-emerald-500/10">
          <div
            className="h-7 w-7 rounded-full border-4 bg-white"
            style={{ borderColor: accentColor }}
          />
        </div>

        {/* Legend */}
        <div className="space-y-1 text-[7.5px] text-neutral-600">
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: accentColor }} />
            <span>Designing (35%)</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
            <span>Coding (45%)</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-neutral-300" />
            <span>Brainstorming (20%)</span>
          </div>
        </div>
      </div>
    </div>
  );
}