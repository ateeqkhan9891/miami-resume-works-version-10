"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bookmark,
  Briefcase,
  Building2,
  FilePlus2,
  Sparkles,
  Zap,
} from "lucide-react";
import type { SavedJob } from "../types";

interface ApplyTodayCardProps {
  job?: SavedJob | null;
  onAddCoverLetter?: (job: SavedJob) => void;
  onQuickTailor?: (job: SavedJob) => void;
}

export default function ApplyTodayCard({
  job,
  onAddCoverLetter,
  onQuickTailor,
}: ApplyTodayCardProps) {
  // Empty State: Prompt user to find or bookmark jobs
  if (!job) {
    return (
      <section
        aria-label="Apply Today Queue"
        className="rounded-2xl border border-dashed border-border bg-card/60 p-6 transition-colors hover:border-primary/40"
      >
        <div className="flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-muted/40 text-muted-foreground">
              <Briefcase className="size-4.5" />
            </div>
            <div className="space-y-0.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                Apply Queue Ready
              </h3>
              <p className="text-xs text-muted-foreground">
                Bookmark or import targeted roles to track tailoring and match scores.
              </p>
            </div>
          </div>

          <Link
            href="/jobs"
            className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-lg border border-border bg-background px-3 text-xs font-semibold text-foreground shadow-xs transition-colors hover:bg-muted"
          >
            <span>Browse Jobs</span>
            <ArrowRight className="size-3 text-muted-foreground" />
          </Link>
        </div>
      </section>
    );
  }

  // Determine dynamic badge colors based on ATS score
  const isHighMatch = job.matchScore >= 75;
  const isMediumMatch = job.matchScore >= 50;

  const matchBadgeStyles = isHighMatch
    ? "border-emerald-500/20 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400"
    : isMediumMatch
      ? "border-amber-500/20 bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400"
      : "border-border bg-muted text-muted-foreground";

  return (
    <section aria-label="Apply Today Queue" className="space-y-3">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex size-6 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Zap className="size-3.5 text-accent-warm" />
          </div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
            Apply Today
          </h3>
        </div>

        <Link
          href="/saved-jobs"
          className="group inline-flex items-center gap-1 text-xs font-semibold text-primary transition-opacity hover:opacity-80"
        >
          <span>All Saved Jobs</span>
          <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      {/* Main Role Card */}
      <div className="group rounded-2xl border border-border bg-card p-4.5 shadow-xs transition-all duration-200 hover:border-primary/30 hover:shadow-sm">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          {/* Job Details */}
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="text-sm font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                {job.title}
              </h4>

              <div
                className={`inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[11px] font-bold ${matchBadgeStyles}`}
              >
                <Sparkles className="size-2.5" />
                <span>{job.matchScore}% Match</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Building2 className="size-3.5" />
                <span>{job.company}</span>
              </span>

              <span className="size-1 rounded-full bg-border" />

              <span className="inline-flex items-center gap-1 font-medium capitalize text-foreground">
                <Bookmark className="size-3 text-accent-warm" />
                <span>{job.status}</span>
              </span>
            </div>
          </div>

          {/* Direct CTA Action Buttons (No asChild) */}
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => onQuickTailor?.(job)}
              className="inline-flex h-8.5 items-center gap-1.5 rounded-xl border border-border bg-surface px-3 text-xs font-semibold text-foreground shadow-2xs transition-colors hover:bg-muted active:scale-98"
            >
              <Sparkles className="size-3.5 text-primary" />
              <span>Tailor Resume</span>
            </button>

            <Link
              href={`/cover-letters/builder?jobId=${job.id}`}
              onClick={() => onAddCoverLetter?.(job)}
              className="inline-flex h-8.5 items-center gap-1.5 rounded-xl bg-primary px-3 text-xs font-semibold text-primary-foreground shadow-2xs transition-all duration-150 hover:opacity-90 active:scale-98"
            >
              <FilePlus2 className="size-3.5" />
              <span>Add Cover Letter</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}