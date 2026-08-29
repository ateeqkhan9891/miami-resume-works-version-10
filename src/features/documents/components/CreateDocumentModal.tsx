"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FileText, Mail, ArrowRight, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface CreateDocumentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreateDocument: (name: string, type: "Resume" | "Cover Letter") => void;
}

export default function CreateDocumentModal({
  open,
  onOpenChange,
  onCreateDocument,
}: CreateDocumentModalProps) {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState<"Resume" | "Cover Letter">("Resume");
  const [docName, setDocName] = useState("");

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    const finalName = docName.trim() || `New ${selectedType}`;
    onCreateDocument(finalName, selectedType);
    onOpenChange(false);
    setDocName("");
    router.push(selectedType === "Resume" ? "/resume/new" : "/cover-letters/builder");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md gap-0 rounded-2xl border border-border bg-card p-0 shadow-2xl focus:outline-none">
        <DialogHeader className="border-b border-border px-6 py-4.5">
          <DialogTitle className="text-sm font-bold tracking-tight text-foreground">
            Create New Document
          </DialogTitle>
          <p className="text-xs text-muted-foreground">
            Select a document format to start building with ATS-optimized templates.
          </p>
        </DialogHeader>

        <form onSubmit={handleCreate} className="space-y-4 p-6">
          {/* Document Type Selector */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setSelectedType("Resume")}
              className={`flex flex-col items-center gap-2 rounded-xl border p-4 text-center transition-all ${
                selectedType === "Resume"
                  ? "border-primary bg-primary/10 text-foreground ring-1 ring-primary"
                  : "border-border bg-surface text-muted-foreground hover:bg-muted"
              }`}
            >
              <div className="flex size-9 items-center justify-center rounded-lg bg-card shadow-2xs">
                <FileText className="size-4 text-primary" />
              </div>
              <span className="text-xs font-bold">Resume</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedType("Cover Letter")}
              className={`flex flex-col items-center gap-2 rounded-xl border p-4 text-center transition-all ${
                selectedType === "Cover Letter"
                  ? "border-primary bg-primary/10 text-foreground ring-1 ring-primary"
                  : "border-border bg-surface text-muted-foreground hover:bg-muted"
              }`}
            >
              <div className="flex size-9 items-center justify-center rounded-lg bg-card shadow-2xs">
                <Mail className="size-4 text-primary" />
              </div>
              <span className="text-xs font-bold">Cover Letter</span>
            </button>
          </div>

          {/* Name Field */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              Document Name (Optional)
            </label>
            <input
              type="text"
              placeholder={`e.g. Senior Software Engineer ${selectedType}`}
              value={docName}
              onChange={(e) => setDocName(e.target.value)}
              className="h-9 w-full rounded-xl border border-border bg-surface px-3 text-xs font-medium text-foreground outline-none transition focus:border-primary focus:bg-card focus:ring-1 focus:ring-primary"
            />
          </div>

          <div className="flex items-center justify-end gap-2 border-t border-border pt-3">
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="h-8.5 rounded-xl border border-border bg-background px-3.5 text-xs font-medium text-foreground hover:bg-muted"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex h-8.5 items-center gap-1.5 rounded-xl bg-primary px-4 text-xs font-semibold text-primary-foreground shadow-xs transition hover:opacity-90 active:scale-95"
            >
              <span>Continue to Editor</span>
              <ArrowRight className="size-3.5" />
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}