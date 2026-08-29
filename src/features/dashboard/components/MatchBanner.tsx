
import Link from "next/link";
import { Upload, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MatchBanner() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-dashed border-emerald-500/40 bg-emerald-50/30 p-6 sm:p-8">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 rounded-md bg-emerald-100/60 px-2 py-0.5 text-[11px] font-semibold text-emerald-800">
            <span>Smart Match</span>
          </div>

          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            Find jobs that match your experience
          </h2>

          <p className="max-w-md text-xs leading-relaxed text-muted-foreground">
            Upload your resume and MiamiResume will automatically match your skills to high-paying open positions.
          </p>

          <div className="pt-2">
            <Button
              asChild
              size="sm"
              className="h-9 gap-2 rounded-xl bg-indigo-600 px-4 text-xs font-semibold text-white shadow-xs transition hover:bg-indigo-700"
            >
              <Link href="/resume/new">
                <Upload className="size-3.5" />
                <span>Upload Resume</span>
              </Link>
            </Button>
          </div>
        </div>

        <div className="hidden shrink-0 sm:block">
          <div className="flex size-28 items-center justify-center rounded-2xl border border-emerald-200 bg-white shadow-xs">
            <FileText className="size-12 text-emerald-500" />
          </div>
        </div>
      </div>
    </div>
  );
}