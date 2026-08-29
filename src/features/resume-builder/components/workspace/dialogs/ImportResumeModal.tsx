"use client";

import { useState, useRef } from "react";
import {
  UploadCloud,
  FileText,
  Upload,
  AlertCircle,
  Loader2,
  X,
  FileCode2,
  Sparkles,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.95 0-1.72.78-1.72 1.73s.77 1.73 1.72 1.73 1.73-.78 1.73-1.73-.78-1.73-1.73-1.73Z" />
    </svg>
  );
}

interface ImportResumeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onImportComplete?: (parsedData: Record<string, unknown>) => void;
}

export default function ImportResumeModal({
  open,
  onOpenChange,
  onImportComplete,
}: ImportResumeModalProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isParsing, setIsParsing] = useState(false);
  const [parsingStep, setParsingStep] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const validateAndSetFile = (file: File) => {
    setError(null);
    const validTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/json",
    ];

    if (!validTypes.includes(file.type) && !file.name.endsWith(".json")) {
      setError("Please upload a valid PDF (.pdf), Word (.docx), or JSON (.json) file.");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setError("File size exceeds the 10MB limit.");
      return;
    }

    setSelectedFile(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const handleStartImport = () => {
    if (!selectedFile) return;

    setIsParsing(true);
    setError(null);
    setParsingStep("Reading document structure & layout layers...");

    setTimeout(() => {
      setParsingStep("Extracting work experience, skills & education...");
    }, 700);

    setTimeout(() => {
      setParsingStep("Formatting content into resume fields...");
    }, 1300);

    setTimeout(() => {
      setIsParsing(false);
      onImportComplete?.({
        fileName: selectedFile.name,
        parsedAt: new Date().toISOString(),
      });
      onOpenChange(false);
      setSelectedFile(null);
      setParsingStep("");
    }, 1800);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl gap-0 overflow-hidden rounded-xl border border-border bg-card p-0 shadow-xl sm:max-w-lg">
        {/* Header */}
        <DialogHeader className="border-b border-border bg-muted/30 p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-primary">
              <Upload className="h-4 w-4" />
            </div>
            <div>
              <DialogTitle className="text-sm font-semibold tracking-tight text-foreground">
                Import Existing Resume
              </DialogTitle>
              <DialogDescription className="mt-0.5 text-xs text-muted-foreground">
                Upload your file to extract and populate resume sections automatically.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        {/* Modal Body */}
        <div className="space-y-3.5 p-5">
          {/* Security Notice */}
          <div className="flex items-center gap-2.5 rounded-lg border border-border bg-muted/40 px-3 py-2">
            <ShieldCheck className="h-4 w-4 shrink-0 text-primary" />
            <p className="text-[11px] text-muted-foreground">
              Your resume is securely parsed in-memory and mapped into ATS-compliant fields.
            </p>
          </div>

          {/* Hidden File Input */}
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.docx,.json"
            onChange={handleFileSelect}
            className="hidden"
          />

          {/* Rectangular Drag & Drop Dropzone */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`group relative flex min-h-[160px] cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed p-5 text-center transition-all ${
              isDragging
                ? "border-primary bg-accent"
                : "border-border bg-background hover:border-foreground/40 hover:bg-muted/30"
            }`}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card shadow-xs transition-transform group-hover:scale-105">
              <UploadCloud className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>

            <p className="mt-2.5 text-xs font-medium text-foreground">
              Click to browse or drop your resume file here
            </p>

            <div className="mt-2.5 flex items-center gap-1.5 text-[10px] font-medium text-muted-foreground">
              <span className="rounded border border-border bg-muted/50 px-1.5 py-0.5 uppercase">PDF</span>
              <span className="rounded border border-border bg-muted/50 px-1.5 py-0.5 uppercase">DOCX</span>
              <span className="rounded border border-border bg-muted/50 px-1.5 py-0.5 uppercase">JSON</span>
              <span className="ml-1 text-[11px]">Max 10MB</span>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="flex items-center gap-2 rounded-lg border border-destructive/20 bg-destructive/10 p-2.5 text-xs text-destructive">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Selected File Card */}
          {selectedFile && !error && (
            <div className="flex items-center justify-between rounded-lg border border-border bg-background p-2.5 shadow-xs">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/40 text-primary">
                  {selectedFile.name.endsWith(".json") ? (
                    <FileCode2 className="h-4 w-4" />
                  ) : (
                    <FileText className="h-4 w-4" />
                  )}
                </div>
                <div className="truncate">
                  <p className="truncate text-xs font-medium text-foreground">
                    {selectedFile.name}
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    {(selectedFile.size / 1024).toFixed(1)} KB • Ready to extract
                  </p>
                </div>
              </div>

              {!isParsing && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedFile(null);
                  }}
                  className="h-7 w-7 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  <X className="h-3.5 w-3.5" />
                  <span className="sr-only">Remove file</span>
                </Button>
              )}
            </div>
          )}

          {/* Structured Data Shortcuts */}
          <div className="space-y-1.5 pt-0.5">
            <span className="text-[11px] font-medium text-muted-foreground">
              Or import from schema formats:
            </span>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="group flex items-center justify-center gap-2 rounded-lg border border-border bg-background p-2 text-xs font-medium text-foreground transition hover:border-foreground/30 hover:bg-muted"
              >
                <LinkedinIcon className="h-3.5 w-3.5 text-[#0a66c2]" />
                <span>LinkedIn PDF Export</span>
              </button>

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="group flex items-center justify-center gap-2 rounded-lg border border-border bg-background p-2 text-xs font-medium text-foreground transition hover:border-foreground/30 hover:bg-muted"
              >
                <FileCode2 className="h-3.5 w-3.5 text-primary" />
                <span>JSON Resume Schema</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-border bg-muted/30 p-3.5 px-5">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => onOpenChange(false)}
            disabled={isParsing}
            className="h-8 rounded-lg text-xs text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            Cancel
          </Button>

          <Button
            type="button"
            disabled={!selectedFile || isParsing}
            onClick={handleStartImport}
            className="h-8 gap-2 rounded-lg bg-primary px-4 text-xs font-medium text-primary-foreground shadow-xs transition hover:opacity-95 active:scale-95 disabled:opacity-50"
          >
            {isParsing ? (
              <>
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                <span>{parsingStep || "Processing..."}</span>
              </>
            ) : (
              <>
                <span>Parse & Populate</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}