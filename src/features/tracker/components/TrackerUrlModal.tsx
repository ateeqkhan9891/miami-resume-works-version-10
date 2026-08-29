"use client";

import { useState } from "react";
import { Link as LinkIcon, Globe } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface TrackerUrlModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialUrl?: string;
  onSave: (url: string) => void;
}

export default function TrackerUrlModal({
  open,
  onOpenChange,
  initialUrl = "",
  onSave,
}: TrackerUrlModalProps) {
  const [url, setUrl] = useState(initialUrl);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(url.trim());
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md gap-0 rounded-2xl border border-border bg-card p-0 shadow-2xl focus:outline-none">
        <DialogHeader className="border-b border-border px-5 py-4">
          <div className="flex items-center gap-2.5">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <LinkIcon className="size-4" />
            </div>
            <DialogTitle className="text-sm font-bold text-foreground">
              Job Listing URL
            </DialogTitle>
          </div>
        </DialogHeader>

        <form onSubmit={handleFormSubmit} className="space-y-4 p-5">
          <div className="space-y-1.5">
            <label className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              Posting Link
            </label>
            <div className="relative">
              <Globe className="pointer-events-none absolute left-3 top-2.5 size-3.5 text-muted-foreground" />
              <input
                type="url"
                required
                placeholder="https://linkedin.com/jobs/view/..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="h-9 w-full rounded-xl border border-border bg-surface pl-8.5 pr-3 text-xs font-medium text-foreground outline-none transition focus:border-primary focus:bg-card focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 border-t border-border pt-3">
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="h-8.5 rounded-xl border border-border bg-background px-3 text-xs font-medium text-foreground hover:bg-muted"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="h-8.5 rounded-xl bg-primary px-4 text-xs font-semibold text-primary-foreground shadow-xs transition hover:opacity-90 active:scale-95"
            >
              Save Link
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}