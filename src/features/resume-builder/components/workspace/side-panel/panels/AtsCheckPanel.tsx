"use client";

import { useState } from "react";
import {
  ScanSearch,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  FileCheck2,
  Layers,
  Sparkles,
  ArrowRight,
  Loader2,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { AtsScanResult, AtsIssue } from "@/features/resume-builder/types/ats-scanner";
import type { TargetJobData } from "@/features/resume-builder/types/job-tailoring";

interface AtsCheckPanelProps {
  scanResult?: AtsScanResult | null;
  targetJob?: TargetJobData | null;
  isScanning?: boolean;
  onRunScan?: () => void;
  onNavigateToSection?: (sectionId: string) => void;
  onOpenTailorModal?: () => void;
}

export default function AtsCheckPanel({
  scanResult = null,
  targetJob = null,
  isScanning = false,
  onRunScan,
  onNavigateToSection,
  onOpenTailorModal,
}: AtsCheckPanelProps) {
  const [activeCategory, setActiveCategory] = useState<string>("formatting");

  const filterIssues = (category: AtsIssue["category"]) => {
    return scanResult?.issues.filter((i) => i.category === category) || [];
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-emerald-600 bg-emerald-50 border-emerald-200 dark:border-emerald-900/40 dark:bg-emerald-950/30 dark:text-emerald-300";
    if (score >= 60) return "text-amber-600 bg-amber-50 border-amber-200 dark:border-amber-900/40 dark:bg-amber-950/30 dark:text-amber-300";
    return "text-rose-600 bg-rose-50 border-rose-200 dark:border-rose-900/40 dark:bg-rose-950/30 dark:text-rose-300";
  };

  return (
    <div className="space-y-4 pb-8 text-foreground">
      {/* 1. Header / Action Scanner Card */}
      <div className="space-y-3 rounded-2xl border border-border bg-card p-4 shadow-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <ScanSearch className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-xs font-semibold text-foreground">
                ATS Compatibility Engine
              </h3>
              <p className="text-[11px] text-muted-foreground">
                {scanResult ? `Last scanned at ${scanResult.scannedAt}` : "No scan performed yet"}
              </p>
            </div>
          </div>
        </div>

        <Button
          onClick={onRunScan}
          disabled={isScanning}
          className="h-8.5 w-full gap-2 rounded-xl bg-primary text-xs font-semibold text-primary-foreground transition-all hover:opacity-95 active:scale-95 disabled:opacity-50"
        >
          {isScanning ? (
            <>
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
              <span>Analyzing Document Structure...</span>
            </>
          ) : (
            <>
              <ScanSearch className="h-3.5 w-3.5" />
              <span>{scanResult ? "Re-scan Resume" : "Run ATS Scan"}</span>
            </>
          )}
        </Button>
      </div>

      {/* 2. Empty / Prompt State */}
      {!scanResult && !isScanning && (
        <div className="space-y-3 rounded-2xl border border-dashed border-border bg-muted/20 p-5 text-center">
          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground">
            <FileText className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-xs font-semibold text-foreground">
              Ready for Parser Diagnostics
            </h4>
            <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
              Click &quot;Run ATS Scan&quot; above to inspect layout parsing, missing sections, formatting traps, and content impact.
            </p>
          </div>
        </div>
      )}

      {/* 3. Scan Results View */}
      {scanResult && !isScanning && (
        <>
          {/* Overall Score Banner */}
          <div className="rounded-2xl border border-border bg-card p-4 shadow-xs">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                  Overall ATS Score
                </span>
                <h4 className="text-2xl font-bold tracking-tight text-foreground">
                  {scanResult.overallScore} <span className="text-xs font-normal text-muted-foreground">/ 100</span>
                </h4>
              </div>
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl border text-sm font-bold shadow-xs ${getScoreColor(
                  scanResult.overallScore
                )}`}
              >
                {scanResult.overallScore}%
              </div>
            </div>

            {/* Score Breakdown Bar */}
            <div className="mt-3 grid grid-cols-4 gap-1.5 text-center">
              <div className="rounded-lg bg-muted/40 p-1.5">
                <span className="block text-[9px] text-muted-foreground">Format</span>
                <span className="text-xs font-semibold">{scanResult.formattingScore}%</span>
              </div>
              <div className="rounded-lg bg-muted/40 p-1.5">
                <span className="block text-[9px] text-muted-foreground">Sections</span>
                <span className="text-xs font-semibold">{scanResult.sectionsScore}%</span>
              </div>
              <div className="rounded-lg bg-muted/40 p-1.5">
                <span className="block text-[9px] text-muted-foreground">Keywords</span>
                <span className="text-xs font-semibold">{scanResult.keywordsScore}%</span>
              </div>
              <div className="rounded-lg bg-muted/40 p-1.5">
                <span className="block text-[9px] text-muted-foreground">Content</span>
                <span className="text-xs font-semibold">{scanResult.contentScore}%</span>
              </div>
            </div>
          </div>

          {/* Diagnostic Categories */}
          <Accordion
            type="single"
            collapsible
            value={activeCategory}
            onValueChange={(val) => setActiveCategory(val)}
            className="space-y-2.5"
          >
            {/* Category: Formatting */}
            <AccordionItem
              value="formatting"
              className="rounded-2xl border border-border bg-card/60 px-3.5 shadow-xs"
            >
              <AccordionTrigger className="py-3 text-xs font-semibold text-foreground hover:no-underline">
                <div className="flex items-center gap-2">
                  <FileCheck2 className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>Formatting & Structure</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-2 pt-1 pb-3">
                {filterIssues("formatting").length === 0 ? (
                  <div className="flex items-center gap-2 rounded-xl bg-emerald-50/60 p-2.5 text-xs text-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-300">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                    <span>No layout or table parsing errors detected.</span>
                  </div>
                ) : (
                  filterIssues("formatting").map((issue) => (
                    <div
                      key={issue.id}
                      onClick={() => issue.targetSectionId && onNavigateToSection?.(issue.targetSectionId)}
                      className={`group flex cursor-pointer items-start justify-between rounded-xl border p-2.5 transition-all hover:border-foreground/30 ${
                        issue.severity === "error"
                          ? "border-rose-200 bg-rose-50/50 dark:border-rose-900/40 dark:bg-rose-950/20"
                          : "border-amber-200 bg-amber-50/50 dark:border-amber-900/40 dark:bg-amber-950/20"
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {issue.severity === "error" ? (
                          <XCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-rose-500" />
                        ) : (
                          <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-500" />
                        )}
                        <div>
                          <p className="text-xs font-semibold text-foreground">{issue.title}</p>
                          <p className="text-[11px] leading-relaxed text-muted-foreground">{issue.description}</p>
                        </div>
                      </div>
                      {issue.targetSectionId && (
                        <ArrowRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                      )}
                    </div>
                  ))
                )}
              </AccordionContent>
            </AccordionItem>

            {/* Category: Sections */}
            <AccordionItem
              value="sections"
              className="rounded-2xl border border-border bg-card/60 px-3.5 shadow-xs"
            >
              <AccordionTrigger className="py-3 text-xs font-semibold text-foreground hover:no-underline">
                <div className="flex items-center gap-2">
                  <Layers className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>Required Sections</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-2 pt-1 pb-3">
                {filterIssues("sections").map((issue) => (
                  <div
                    key={issue.id}
                    onClick={() => issue.targetSectionId && onNavigateToSection?.(issue.targetSectionId)}
                    className="flex cursor-pointer items-center justify-between rounded-xl border border-border bg-card p-2.5 transition-all hover:border-foreground/30"
                  >
                    <div className="flex items-center gap-2">
                      {issue.severity === "success" ? (
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                      ) : (
                        <AlertTriangle className="h-3.5 w-3.5 text-amber-500" />
                      )}
                      <span className="text-xs font-medium text-foreground">{issue.title}</span>
                    </div>
                    {issue.targetSectionId && (
                      <span className="text-[10px] text-muted-foreground hover:underline">
                        Jump to section
                      </span>
                    )}
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>

            {/* Category: Target Job Keywords */}
            <AccordionItem
              value="keywords"
              className="rounded-2xl border border-border bg-card/60 px-3.5 shadow-xs"
            >
              <AccordionTrigger className="py-3 text-xs font-semibold text-foreground hover:no-underline">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>Keyword Targeting</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-2.5 pt-1 pb-3">
                {!targetJob ? (
                  <div className="space-y-2 rounded-xl border border-border bg-muted/30 p-3 text-center">
                    <p className="text-[11px] text-muted-foreground">
                      Keyword matching requires a target job description to identify missing hard and soft skills.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={onOpenTailorModal}
                      className="h-7 text-xs font-medium"
                    >
                      Add Target Job Description
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-1">
                      {scanResult.missingKeywords?.map((kw) => (
                        <span
                          key={kw}
                          className="inline-flex items-center gap-1 rounded-md border border-rose-200 bg-rose-50 px-1.5 py-0.5 text-[10px] font-medium text-rose-700 dark:border-rose-900/40 dark:bg-rose-950/30 dark:text-rose-300"
                        >
                          <XCircle className="h-2.5 w-2.5 text-rose-500" />
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>

            {/* Category: Content Quality */}
            <AccordionItem
              value="content"
              className="rounded-2xl border border-border bg-card/60 px-3.5 shadow-xs"
            >
              <AccordionTrigger className="py-3 text-xs font-semibold text-foreground hover:no-underline">
                <div className="flex items-center gap-2">
                  <FileText className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>Content Impact & Verbs</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-2 pt-1 pb-3">
                {filterIssues("content").map((issue) => (
                  <div
                    key={issue.id}
                    onClick={() => issue.targetSectionId && onNavigateToSection?.(issue.targetSectionId)}
                    className="flex cursor-pointer items-start justify-between rounded-xl border border-border bg-card p-2.5 transition-all hover:border-foreground/30"
                  >
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-500" />
                      <div>
                        <p className="text-xs font-semibold text-foreground">{issue.title}</p>
                        <p className="text-[11px] text-muted-foreground">{issue.description}</p>
                      </div>
                    </div>
                    {issue.targetSectionId && (
                      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground opacity-60" />
                    )}
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </>
      )}
    </div>
  );
}