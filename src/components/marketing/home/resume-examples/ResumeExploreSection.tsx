"use client";

import { useState } from "react";
import { RESUME_DATA } from "./resume-data";
import ResumeTabs from "./ResumeTabs";
import ResumePreview from "./ResumePreview";

export default function ResumeExplorerSection() {
  const [activeId, setActiveId] = useState(RESUME_DATA[0].id);

  const activeResume = RESUME_DATA.find((item) => item.id === activeId) || RESUME_DATA[0];

  return (
    <section className="relative overflow-hidden bg-slate-50/50 py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-emerald-50/80 px-3.5 py-1 text-xs font-semibold tracking-wide text-emerald-700 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Tailored Layouts
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Find the right resume for your next leap
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            Role-tailored designs built to highlight your exact strengths and capture recruiter attention instantly.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <ResumeTabs
              activeId={activeId}
              onSelect={setActiveId}
            />
          </div>

          <div className="lg:col-span-7">
            <ResumePreview
              image={activeResume.image}
              label={activeResume.label}
            />
          </div>
        </div>
      </div>
    </section>
  );
}