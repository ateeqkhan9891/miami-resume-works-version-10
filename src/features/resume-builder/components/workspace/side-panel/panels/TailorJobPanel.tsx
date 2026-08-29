"use client";

import { CheckCircle2, XCircle, Sparkles, RefreshCw, Briefcase, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { TargetJobData } from "@/features/resume-builder/types/job-tailoring";

interface TailorJobPanelProps {
  jobData: TargetJobData | null;
  onEditJob: () => void;
}

export default function TailorJobPanel({
  jobData,
  onEditJob,
}: TailorJobPanelProps) {
  if (!jobData) return null;

  return (
    <div className="space-y-5">
      {/* Current Job Badge */}
      <div className="flex items-center justify-between rounded-xl border border-indigo-100 bg-indigo-50/50 p-3 dark:border-indigo-900/40 dark:bg-indigo-950/20">
        <div className="flex items-center gap-2.5 overflow-hidden">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white">
            <Briefcase className="h-4 w-4" />
          </div>
          <div className="truncate">
            <h3 className="truncate text-xs font-bold text-neutral-900 dark:text-neutral-100">
              {jobData.jobTitle}
            </h3>
            <p className="text-[11px] text-neutral-500">{jobData.companyName || "Target Company"}</p>
          </div>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={onEditJob}
          className="h-7 shrink-0 gap-1 rounded-lg border-indigo-200 bg-white text-[11px] font-medium text-indigo-700 hover:bg-indigo-50"
        >
          <RefreshCw className="h-3 w-3" />
          <span>Change</span>
        </Button>
      </div>

      {/* Match Score Card */}
      <div className="rounded-xl border border-neutral-200/90 bg-white p-3.5 shadow-xs dark:border-neutral-800 dark:bg-neutral-900">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
            Keyword Match Score
          </span>
          <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
            {jobData.matchScore || 0}%
          </span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
          <div
            className="h-full rounded-full bg-indigo-600 transition-all duration-500"
            style={{ width: `${jobData.matchScore || 0}%` }}
          />
        </div>
      </div>

      {/* Missing Keywords */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-rose-950 dark:text-rose-300">
            Missing Keywords
          </span>
          <span className="text-[10px] text-neutral-400">
            {jobData.missingKeywords?.length || 0} skills
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {jobData.missingKeywords?.map((kw) => (
            <span
              key={kw}
              className="inline-flex items-center gap-1 rounded-md border border-rose-200 bg-rose-50/60 px-2 py-1 text-[11px] font-medium text-rose-700 dark:border-rose-900/50 dark:bg-rose-950/40 dark:text-rose-300"
            >
              <XCircle className="h-3 w-3 text-rose-500" />
              {kw}
            </span>
          ))}
        </div>
      </div>

      {/* Matched Keywords */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-emerald-950 dark:text-emerald-300">
            Matched Keywords
          </span>
          <span className="text-[10px] text-neutral-400">
            {jobData.matchedKeywords?.length || 0} skills
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {jobData.matchedKeywords?.map((kw) => (
            <span
              key={kw}
              className="inline-flex items-center gap-1 rounded-md border border-emerald-200 bg-emerald-50/60 px-2 py-1 text-[11px] font-medium text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-950/40 dark:text-emerald-300"
            >
              <CheckCircle2 className="h-3 w-3 text-emerald-500" />
              {kw}
            </span>
          ))}
        </div>
      </div>

      {/* Actionable Suggestions */}
      {jobData.suggestions && jobData.suggestions.length > 0 && (
        <div className="space-y-2">
          <span className="flex items-center gap-1 text-xs font-semibold text-neutral-800 dark:text-neutral-200">
            <Lightbulb className="h-3.5 w-3.5 text-amber-500" />
            <span>Smart Recommendations</span>
          </span>
          <div className="space-y-2">
            {jobData.suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="rounded-lg border border-neutral-200/80 bg-neutral-50/50 p-2.5 text-[11px] leading-relaxed text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300"
              >
                {suggestion}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}