"use client";

import { TrendingUp } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import type { JobTrackerRow } from "../types/table";

interface TrackerStatisticsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  rows: JobTrackerRow[];
}

export default function TrackerStatisticsModal({
  open,
  onOpenChange,
  rows,
}: TrackerStatisticsModalProps) {
  const total = rows.filter((r) => r.position.trim() || r.company.trim()).length;
  const applied = rows.filter((r) => r.status === "Applied").length;
  const interviewing = rows.filter((r) => r.status === "Interviewing").length;
  const accepted = rows.filter((r) => r.status === "Accepted").length;

  const interviewRate = applied > 0 ? Math.round((interviewing / applied) * 100) : 0;
  const offerRate = applied > 0 ? Math.round((accepted / applied) * 100) : 0;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg gap-0 rounded-2xl border border-border bg-card p-0 shadow-2xl focus:outline-none">
        <DialogHeader className="border-b border-border px-5 py-4">
          <div className="flex items-center gap-2.5">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <TrendingUp className="size-4 text-accent-warm" />
            </div>
            <DialogTitle className="text-sm font-bold text-foreground">
              Application Pipeline Insights
            </DialogTitle>
          </div>
        </DialogHeader>

        <div className="space-y-4 p-5">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-xl border border-border bg-surface p-3 text-center">
              <p className="text-[10px] font-semibold uppercase text-muted-foreground">Tracked</p>
              <p className="mt-1 text-lg font-bold text-foreground">{total}</p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-3 text-center">
              <p className="text-[10px] font-semibold uppercase text-muted-foreground">Applied</p>
              <p className="mt-1 text-lg font-bold text-sky-600">{applied}</p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-3 text-center">
              <p className="text-[10px] font-semibold uppercase text-muted-foreground">Interviews</p>
              <p className="mt-1 text-lg font-bold text-amber-600">{interviewing}</p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-3 text-center">
              <p className="text-[10px] font-semibold uppercase text-muted-foreground">Offers</p>
              <p className="mt-1 text-lg font-bold text-emerald-600">{accepted}</p>
            </div>
          </div>

          <div className="space-y-2.5 rounded-xl border border-border/80 bg-surface/50 p-4">
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-muted-foreground">Interview Conversion Rate</span>
              <span className="font-bold text-foreground">{interviewRate}%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-full bg-amber-500 rounded-full" style={{ width: `${interviewRate}%` }} />
            </div>

            <div className="flex items-center justify-between text-xs pt-2">
              <span className="font-medium text-muted-foreground">Offer Conversion Rate</span>
              <span className="font-bold text-foreground">{offerRate}%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${offerRate}%` }} />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}