"use client";

import { useState } from "react";
import {
  Target,
  FileSearch,
  Layers,
  ListChecks,
  ArrowRight,
  Loader2,
  Building2,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { TargetJobData } from "@/features/resume-builder/types/job-tailoring";

interface TailorOnboardingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: TargetJobData) => void;
}

export default function TailorOnboardingModal({
  open,
  onOpenChange,
  onSubmit,
}: TailorOnboardingModalProps) {
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = () => {
    if (!jobDescription.trim()) return;

    setIsAnalyzing(true);

    // Mock processing delay (ready for backend / LLM endpoint)
    setTimeout(() => {
      setIsAnalyzing(false);
      onSubmit({
        jobTitle: jobTitle.trim() || "Target Role",
        companyName: companyName.trim() || "Company",
        jobDescription: jobDescription.trim(),
        matchScore: 78,
        matchedKeywords: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Git"],
        missingKeywords: ["GraphQL", "Docker", "CI/CD Pipelines", "Jest"],
        suggestions: [
          "Add measurable impact to your React project descriptions.",
          "Incorporate containerization keywords (e.g. Docker) into your skills list.",
          "Align your professional summary with the target job title.",
        ],
      });
      onOpenChange(false);
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl gap-0 overflow-hidden rounded-3xl border border-neutral-200/80 bg-white p-0 shadow-2xl dark:border-neutral-800 dark:bg-neutral-900 sm:max-w-xl">
        {/* Header */}
        <DialogHeader className="border-b border-neutral-100 bg-neutral-50/70 p-6 pb-5 dark:border-neutral-800 dark:bg-neutral-900/50">
          <div className="flex items-center gap-3.5">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50 text-indigo-600 shadow-xs dark:border-indigo-900/50 dark:bg-indigo-950/40 dark:text-indigo-300">
              <Target className="h-5 w-5" />
            </div>
            <div>
              <DialogTitle className="text-base font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                Tailor Resume to Job Posting
              </DialogTitle>
              <DialogDescription className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-400">
                Targeted keyword matching and automated ATS alignment.
              </DialogDescription>
            </div>
          </div>

          {/* Workflow Step Indicator */}
          <div className="mt-5 grid grid-cols-3 gap-2">
            <div className="flex items-center gap-2 rounded-xl border border-indigo-200/90 bg-indigo-50/50 p-2 dark:border-indigo-900/40 dark:bg-indigo-950/30">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white">
                <FileSearch className="h-3.5 w-3.5" />
              </div>
              <span className="text-[11px] font-semibold text-indigo-950 dark:text-indigo-200">
                1. Job Spec
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-neutral-200/70 bg-white/80 p-2 dark:border-neutral-800 dark:bg-neutral-800/40">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-500 dark:bg-neutral-700 dark:text-neutral-300">
                <Layers className="h-3.5 w-3.5" />
              </div>
              <span className="text-[11px] font-medium text-neutral-600 dark:text-neutral-400">
                2. Extract
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-neutral-200/70 bg-white/80 p-2 dark:border-neutral-800 dark:bg-neutral-800/40">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-500 dark:bg-neutral-700 dark:text-neutral-300">
                <ListChecks className="h-3.5 w-3.5" />
              </div>
              <span className="text-[11px] font-medium text-neutral-600 dark:text-neutral-400">
                3. Optimize
              </span>
            </div>
          </div>
        </DialogHeader>

        {/* Form Body */}
        <div className="max-h-[380px] space-y-4 overflow-y-auto p-6">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                Job Title <span className="font-normal text-neutral-400">(Optional)</span>
              </Label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  placeholder="e.g. Frontend Engineer"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  className="h-9 w-full rounded-xl border border-neutral-200 bg-neutral-50/60 pl-8.5 pr-3 text-xs text-neutral-900 outline-none transition focus:border-indigo-600 focus:bg-white dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                Company <span className="font-normal text-neutral-400">(Optional)</span>
              </Label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  placeholder="e.g. Stripe, Vercel"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="h-9 w-full rounded-xl border border-neutral-200 bg-neutral-50/60 pl-8.5 pr-3 text-xs text-neutral-900 outline-none transition focus:border-indigo-600 focus:bg-white dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100"
                />
              </div>
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <Label className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                Job Description <span className="text-rose-500">*</span>
              </Label>
              <span className="text-[10px] text-neutral-400">
                {jobDescription.length} characters
              </span>
            </div>
            <textarea
              rows={6}
              placeholder="Paste the full job post, requirements, tech stacks, and responsibilities here..."
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              className="w-full resize-none rounded-xl border border-neutral-200 bg-neutral-50/60 p-3 text-xs leading-relaxed text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-indigo-600 focus:bg-white dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100"
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between border-t border-neutral-100 bg-neutral-50/50 p-4 px-6 dark:border-neutral-800 dark:bg-neutral-900/50">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => onOpenChange(false)}
            className="h-9 rounded-xl text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200"
          >
            Cancel
          </Button>

          <Button
            type="button"
            disabled={!jobDescription.trim() || isAnalyzing}
            onClick={handleAnalyze}
            className="h-9 gap-2 rounded-xl bg-indigo-600 px-5 text-xs font-semibold text-white shadow-sm transition hover:bg-indigo-700 active:scale-95 disabled:opacity-50"
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                <span>Extracting Requirements...</span>
              </>
            ) : (
              <>
                <span>Analyze & Match</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}