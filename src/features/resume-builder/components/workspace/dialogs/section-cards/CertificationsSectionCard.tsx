"use client";

export default function CertificationsSectionCard({ accentColor }: { accentColor: string }) {
  return (
    <div className="space-y-2 text-left">
      <div className="flex items-center justify-between border-b border-neutral-200/80 pb-1.5">
        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-900">
          Certifications
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-[8px]">
        <div>
          <div className="font-bold text-neutral-900">Google Analytics</div>
          <div className="text-[7px] text-neutral-400">Google Academy</div>
        </div>

        <div>
          <div className="font-bold text-neutral-900">Contextual Marketing</div>
          <div className="text-[7px] text-neutral-400">HubSpot Academy</div>
        </div>
      </div>
    </div>
  );
}