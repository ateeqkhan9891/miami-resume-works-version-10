"use client";

import { useState } from "react";
import {
  Briefcase,
  Building2,
  MapPin,
  Loader2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface AddJobManualModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmitJob?: (jobData: {
    title: string;
    company: string;
    location?: string;
    description: string;
  }) => Promise<void> | void;
}

export default function AddJobManualModal({
  open,
  onOpenChange,
  onSubmitJob,
}: AddJobManualModalProps) {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !company.trim() || !description.trim()) return;

    setIsSubmitting(true);
    try {
      if (onSubmitJob) {
        await onSubmitJob({
          title: title.trim(),
          company: company.trim(),
          location: location.trim(),
          description: description.trim(),
        });
      }
      onOpenChange(false);
      setTitle("");
      setCompany("");
      setLocation("");
      setDescription("");
    } finally {
      setIsSubmitting(false);
    }
  };

  const wordCount = description.trim() ? description.trim().split(/\s+/).length : 0;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl gap-0 overflow-hidden rounded-2xl border border-border bg-card p-0 shadow-2xl focus:outline-none sm:max-w-2xl">
        <DialogHeader className="border-b border-border px-6 py-4.5">
          <div className="flex items-center gap-3">
            <div className="flex size-9.5 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
              <Briefcase className="size-4.5" />
            </div>
            <div>
              <DialogTitle className="text-sm font-bold tracking-tight text-foreground">
                Add Job Posting
              </DialogTitle>
              <p className="text-xs text-muted-foreground">
                Targeted role for match scoring and resume tailoring
              </p>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 px-6 py-5">
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label 
                htmlFor="job-title-input" 
                className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground"
              >
                Job Title <span className="text-destructive">*</span>
              </label>
              <div className="relative">
                <Briefcase className="pointer-events-none absolute left-3 top-2.5 size-3.5 text-muted-foreground" />
                <input
                  id="job-title-input"
                  type="text"
                  required
                  placeholder="e.g. Senior Frontend Engineer"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="h-9 w-full rounded-xl border border-border bg-surface pl-8.5 pr-3 text-xs font-medium text-foreground outline-none transition focus:border-primary focus:bg-card focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label 
                htmlFor="company-input" 
                className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground"
              >
                Company <span className="text-destructive">*</span>
              </label>
              <div className="relative">
                <Building2 className="pointer-events-none absolute left-3 top-2.5 size-3.5 text-muted-foreground" />
                <input
                  id="company-input"
                  type="text"
                  required
                  placeholder="e.g. Stripe, Linear, Vercel"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="h-9 w-full rounded-xl border border-border bg-surface pl-8.5 pr-3 text-xs font-medium text-foreground outline-none transition focus:border-primary focus:bg-card focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
          </div>

          <div className="space-y-1.5">
            <label 
              htmlFor="location-input" 
              className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground"
            >
              Location / Work Model <span className="text-[10px] font-normal text-muted-foreground">(Optional)</span>
            </label>
            <div className="relative">
              <MapPin className="pointer-events-none absolute left-3 top-2.5 size-3.5 text-muted-foreground" />
              <input
                id="location-input"
                type="text"
                placeholder="e.g. San Francisco, CA or Remote"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="h-9 w-full rounded-xl border border-border bg-surface pl-8.5 pr-3 text-xs font-medium text-foreground outline-none transition focus:border-primary focus:bg-card focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label 
                htmlFor="job-description-input" 
                className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground"
              >
                Job Description & Qualifications <span className="text-destructive">*</span>
              </label>
              <span className="text-[10px] font-medium text-muted-foreground">
                {wordCount} words
              </span>
            </div>
            <textarea
              id="job-description-input"
              required
              rows={6}
              placeholder="Paste the full job posting, responsibilities, and required qualifications here to extract keywords..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full resize-none rounded-xl border border-border bg-surface p-3 text-xs font-medium leading-relaxed text-foreground outline-none transition focus:border-primary focus:bg-card focus:ring-1 focus:ring-primary"
            />
          </div>

          <div className="flex items-center justify-between border-t border-border pt-4">
            <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
              <ShieldCheck className="size-3.5 text-primary" />
              <span>Parsed securely for ATS analysis</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="h-9 rounded-xl border border-border bg-background px-4 text-xs font-medium text-foreground transition-colors hover:bg-muted active:scale-98"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={isSubmitting || !title || !company || !description}
                className="inline-flex h-9 items-center gap-1.5 rounded-xl bg-primary px-4.5 text-xs font-semibold text-primary-foreground shadow-xs transition-all hover:opacity-90 active:scale-95 disabled:pointer-events-none disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="size-3.5 animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>Add to Tracker</span>
                    <ArrowRight className="size-3.5" />
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}