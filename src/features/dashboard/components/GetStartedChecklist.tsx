"use client";

import Link from "next/link";
import { Check, ChevronRight, Bookmark , CirclePlus  } from "lucide-react";
import type { ChecklistItem } from "../types";

interface EnrichedChecklistItem extends ChecklistItem {
  href: string;
}

interface GetStartedChecklistProps {
  items?: EnrichedChecklistItem[];
  onItemClick?: (item: EnrichedChecklistItem) => void;
}

const DEFAULT_ONBOARDING_STEPS: EnrichedChecklistItem[] = [
  {
    id: "upload_resume",
    label: "Upload your resume",
    completed: false,
    href: "/resume/new",
  },
  {
    id: "match_job",
    label: "Add a job and get a match score",
    completed: false,
    href: "/jobs",
  },
  {
    id: "save_jobs",
    label: "Save 3 jobs that you want to apply to",
    completed: false,
    href: "/saved-jobs",
  },
];

export default function GetStartedChecklist({
  items = DEFAULT_ONBOARDING_STEPS,
  onItemClick,
}: GetStartedChecklistProps) {
  const completedCount = items.filter((item) => item.completed).length;
  const totalCount = items.length;
  const progressPercent =
    totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-xs transition-shadow hover:shadow-sm">
      {/* Header & Dynamic Counter */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex size-6 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Bookmark className="size-3.5 text-accent-warm" />
          </div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
            Get Started
          </h3>
        </div>

        <span className="rounded-md bg-muted px-2 py-0.5 text-[11px] font-semibold text-muted-foreground">
          {completedCount}/{totalCount} Completed
        </span>
      </div>

      {/* Real Percentage Progress Bar */}
      <div className="mt-3.5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-primary transition-all duration-300 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Dynamic Action List */}
      <div className="mt-4 space-y-1.5">
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            onClick={() => onItemClick?.(item)}
            className={`group flex items-center justify-between rounded-xl px-2.5 py-2 transition-colors ${
              item.completed
                ? "text-muted-foreground hover:bg-muted/40"
                : "bg-surface font-medium text-foreground hover:bg-muted/60"
            }`}
          >
            <div className="flex items-center gap-3">
              {item.completed ? (
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xs">
                  <Check className="size-3" strokeWidth={3} />
                </span>
              ) : (
                <CirclePlus  className="size-5 shrink-0 text-muted-foreground/40 transition-colors group-hover:text-primary/60" />
              )}
              <span
                className={`text-xs tracking-tight ${
                  item.completed ? "line-through opacity-70" : ""
                }`}
              >
                {item.label}
              </span>
            </div>

            <ChevronRight
              className={`size-3.5 transition-transform duration-150 group-hover:translate-x-0.5 ${
                item.completed
                  ? "text-muted-foreground/30"
                  : "text-muted-foreground group-hover:text-foreground"
              }`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}