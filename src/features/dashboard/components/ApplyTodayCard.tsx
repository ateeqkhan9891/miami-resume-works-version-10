
import Link from "next/link";
import { Plus, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { SavedJob } from "../types";

const DEFAULT_JOB: SavedJob = {
  id: "1",
  title: "AI & Backend Engineer",
  company: "Volga Partners",
  matchScore: 62,
  status: "bookmarked",
};

export default function ApplyTodayCard({ job = DEFAULT_JOB }: { job?: SavedJob }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-foreground">Apply Today</h3>
        <Link
          href="/saved-jobs"
          className="text-xs font-medium text-indigo-600 hover:underline"
        >
          All Saved Jobs
        </Link>
      </div>

      <div className="rounded-xl border border-border bg-card p-4 shadow-xs">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-foreground">{job.title}</span>
              <span className="rounded-md bg-amber-100 px-1.5 py-0.5 text-[10px] font-semibold text-amber-800">
                {job.matchScore}% Match
              </span>
            </div>
            <p className="text-xs text-muted-foreground">{job.company}</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-lg border border-border bg-muted/30 px-2.5 py-1 text-xs font-medium text-foreground">
              <Bookmark className="size-3 text-indigo-600" />
              <span className="capitalize">{job.status}</span>
            </span>

            <Button
              asChild
              size="sm"
              variant="outline"
              className="h-8 gap-1 rounded-lg text-xs"
            >
              <Link href="/cover-letters/builder">
                <Plus className="size-3" />
                <span>Add Cover Letter</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}