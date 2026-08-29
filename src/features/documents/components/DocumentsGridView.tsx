"use client";

import Link from "next/link";
import {
  FileText,
  Pin,
  Copy,
  Wand2,
  Download,
  Trash2,
  Building2,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import type { DocumentItem } from "../types";

interface DocumentsGridViewProps {
  documents: DocumentItem[];
  onPin: (id: string) => void;
  onDuplicate: (doc: DocumentItem) => void;
  onDelete: (id: string) => void;
}

export default function DocumentsGridView({
  documents,
  onPin,
  onDuplicate,
  onDelete,
}: DocumentsGridViewProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {documents.map((doc) => (
        <div
          key={doc.id}
          className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-4 shadow-xs transition-all duration-150 hover:border-primary/40 hover:shadow-sm"
        >
          {/* Header Preview & Pin */}
          <div>
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                  <FileText className="size-4" />
                </div>
                <span className="rounded-md border border-border bg-surface px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
                  {doc.type}
                </span>
              </div>

              <button
                type="button"
                onClick={() => onPin(doc.id)}
                title="Pin document"
                className={`flex size-7 items-center justify-center rounded-lg transition-colors ${
                  doc.isPinned
                    ? "bg-amber-500/15 text-amber-600"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <Pin className={`size-3.5 ${doc.isPinned ? "fill-current" : ""}`} />
              </button>
            </div>

            <h3 className="mt-3 text-xs font-bold tracking-tight text-foreground line-clamp-1">
              {doc.name}
            </h3>

            {/* Target Job Badge */}
            <div className="mt-2 flex items-center gap-1.5 text-xs">
              {doc.jobTarget ? (
                <div className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-2 py-0.5 text-[11px] font-medium text-foreground">
                  <Building2 className="size-3 text-muted-foreground" />
                  <span className="truncate max-w-[120px]">{doc.jobTarget.company}</span>
                  {doc.jobTarget.matchScore && (
                    <span className="rounded bg-amber-500 px-1 py-0.2 text-[9px] font-bold text-white">
                      {doc.jobTarget.matchScore}%
                    </span>
                  )}
                </div>
              ) : (
                <span className="text-[11px] text-muted-foreground/60 italic">No job targeted</span>
              )}
            </div>
          </div>

          {/* Footer Metadata & Actions */}
          <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3">
            <span className="text-[10px] text-muted-foreground">{doc.modifiedAt}</span>

            <div className="flex items-center gap-1">
              <Link
                href={`/resume/${doc.id}`}
                title="Open editor"
                className="flex size-7 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <ExternalLink className="size-3.5" />
              </Link>
              <button
                type="button"
                onClick={() => onDuplicate(doc)}
                title="Duplicate"
                className="flex size-7 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <Copy className="size-3.5" />
              </button>
              <button
                type="button"
                onClick={() => onDelete(doc.id)}
                title="Delete"
                className="flex size-7 items-center justify-center rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
              >
                <Trash2 className="size-3.5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}