"use client";

import Link from "next/link";
import { Gauge, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

interface ResumeScoreCardProps {
  score?: number;
  documentTitle?: string;
  documentId?: string;
}

export default function ResumeScoreCard({
  score = 84,
  documentTitle = "Senior Frontend Resume",
  documentId = "1",
}: ResumeScoreCardProps) {
  const isHigh = score >= 80;
  const isMedium = score >= 60;

  const scoreColor = isHigh
    ? "text-success"
    : isMedium
      ? "text-warning"
      : "text-destructive";

  const scoreBg = isHigh
    ? "bg-success/10 border-success/20"
    : isMedium
      ? "bg-warning/10 border-warning/20"
      : "bg-destructive/10 border-destructive/20";

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-xs transition-all hover:border-primary/30 hover:shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="flex size-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
          <Gauge className="size-5" />
        </div>

        <div
          className={`flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-bold ${scoreBg} ${scoreColor}`}
        >
          <Sparkles className="size-3" />
          <span>{score}/100</span>
        </div>
      </div>

      <div className="mt-4 space-y-1">
        <h4 className="text-sm font-bold tracking-tight text-foreground">
          ATS Readiness Score
        </h4>
        <p className="text-xs text-muted-foreground line-clamp-1">
          Based on <span className="font-medium text-foreground">{documentTitle}</span>
        </p>
      </div>

      <div className="mt-3.5 space-y-1.5 rounded-xl border border-border/60 bg-surface/70 p-2.5 text-[11px]">
        <div className="flex items-center gap-2 text-foreground">
          <CheckCircle2 className="size-3.5 text-success shrink-0" />
          <span>Keyword density matches senior tier</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <span className="size-3.5 flex items-center justify-center font-bold text-accent-warm">•</span>
          <span>Add 2 measurable metric bullets</span>
        </div>
      </div>

      <Link
        href={`/resume/${documentId}?tab=ats`}
        className="mt-4 flex h-8.5 w-full items-center justify-center gap-1.5 rounded-xl bg-primary px-3 text-xs font-semibold text-primary-foreground shadow-2xs transition-all hover:opacity-90 active:scale-98"
      >
        <span>Improve Score</span>
        <ArrowRight className="size-3.5" />
      </Link>
    </div>
  );
}