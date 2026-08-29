"use client";

import { useState } from "react";
import { Plus, BriefcaseBusiness, TrendingUp , ArrowRight } from "lucide-react";
import AddJobManualModal from "./AddJobManualModal";

export default function AddJobBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSaveManualJob = async (jobData: {
    title: string;
    company: string;
    location?: string;
    description: string;
  }) => {
    // When Supabase/backend is ready, insert job here
    console.log("Adding job to tracker:", jobData);
  };

  return (
    <>
      <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-xs transition-all duration-200 hover:border-primary/40 hover:shadow-sm">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary transition-transform duration-200 group-hover:scale-105">
              <BriefcaseBusiness className="size-5" />
            </div>

            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold tracking-tight text-foreground">
                  Targeting a specific role?
                </h3>
                <span className="inline-flex items-center gap-1 rounded-md bg-accent-warm/15 px-1.5 py-0.5 text-[10px] font-semibold text-accent-warm">
                  <TrendingUp  className="size-2.5" />
                  <span>ATS Match</span>
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                Add a job posting manually to tailor your resume and check keyword match score.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-xl bg-primary px-4 text-xs font-semibold text-primary-foreground shadow-2xs transition-all hover:opacity-90 active:scale-95"
          >
            <Plus className="size-3.5" strokeWidth={2.5} />
            <span>Add Job Manually</span>
          </button>
        </div>
      </div>

      <AddJobManualModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        onSubmitJob={handleSaveManualJob}
      />
    </>
  );
}