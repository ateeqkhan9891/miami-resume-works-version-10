"use client";

import Link from "next/link";
import {
  FileText,
  Download,
  MoreHorizontal,
  ArrowRight,
  Sparkles,
  Copy,
  Trash2,
  ExternalLink,
  Plus,
  Briefcase,
  FileSpreadsheet,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { RecentDocument } from "../types";

interface RecentDocumentsTableProps {
  documents?: RecentDocument[];
  onDownload?: (doc: RecentDocument) => void;
  onDuplicate?: (doc: RecentDocument) => void;
  onDelete?: (doc: RecentDocument) => void;
}

export default function RecentDocumentsTable({
  documents = [],
  onDownload,
  onDuplicate,
  onDelete,
}: RecentDocumentsTableProps) {
  // Empty State View
  if (!documents || documents.length === 0) {
    return (
      <section
        aria-label="Recent Documents"
        className="space-y-3"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex size-6 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <FileSpreadsheet className="size-3.5 text-accent-warm" />
            </div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Recent Documents
            </h3>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card/60 px-6 py-12 text-center">
          <div className="flex size-12 items-center justify-center rounded-2xl border border-border bg-muted/40 text-muted-foreground shadow-2xs">
            <FileText className="size-6" />
          </div>
          <h4 className="mt-3.5 text-sm font-semibold text-foreground">
            No documents yet
          </h4>
          <p className="mt-1 max-w-sm text-xs text-muted-foreground">
            Create your first ATS-optimized resume or cover letter to begin tracking your applications.
          </p>
          <Link
            href="/resume/new"
            className="mt-4 inline-flex h-8.5 items-center gap-1.5 rounded-xl bg-primary px-3.5 text-xs font-semibold text-primary-foreground shadow-2xs transition-all hover:opacity-90 active:scale-95"
          >
            <Plus className="size-3.5" />
            <span>Create New Resume</span>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section aria-label="Recent Documents" className="space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex size-6 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <FileSpreadsheet className="size-3.5 text-accent-warm" />
          </div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
            Recent Documents
          </h3>
        </div>

        <Link
          href="/documents"
          className="group inline-flex items-center gap-1 text-xs font-semibold text-primary transition-opacity hover:opacity-80"
        >
          <span>All Documents</span>
          <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      {/* Table Container */}
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-border bg-muted/30 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              <tr>
                <th scope="col" className="px-5 py-3">Document Name</th>
                <th scope="col" className="px-5 py-3">Target Job</th>
                <th scope="col" className="px-5 py-3">Type</th>
                <th scope="col" className="px-5 py-3">Last Modified</th>
                <th scope="col" className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {documents.map((doc) => (
                <tr
                  key={doc.id}
                  className="group transition-colors hover:bg-muted/40"
                >
                  {/* Name & Link */}
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-primary/15 bg-primary/10 text-primary">
                        <FileText className="size-4" />
                      </div>
                      <Link
                        href={doc.href}
                        className="font-semibold text-foreground transition-colors hover:text-primary hover:underline"
                      >
                        {doc.title}
                      </Link>
                    </div>
                  </td>

                  {/* Target Job */}
                  <td className="px-5 py-3.5 text-muted-foreground">
                    {doc.jobTarget ? (
                      <div className="inline-flex items-center gap-1.5 rounded-md border border-border/80 bg-surface px-2 py-0.5 text-xs text-foreground">
                        <Briefcase className="size-3 text-muted-foreground" />
                        <span className="truncate max-w-[160px]">{doc.jobTarget}</span>
                      </div>
                    ) : (
                      <span className="text-muted-foreground/60">—</span>
                    )}
                  </td>

                  {/* Document Type Badge */}
                  <td className="px-5 py-3.5">
                    <span className="inline-flex rounded-md border border-border bg-muted/40 px-2 py-0.5 text-[11px] font-medium text-foreground">
                      {doc.type}
                    </span>
                  </td>

                  {/* Last Edit Timestamp */}
                  <td className="px-5 py-3.5 text-muted-foreground">
                    {doc.lastEdited}
                  </td>

                  {/* Actions */}
                  <td className="px-5 py-3.5 text-right">
                    <div className="inline-flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => onDownload?.(doc)}
                        title="Download PDF"
                        className="flex size-7 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      >
                        <Download className="size-3.5" />
                        <span className="sr-only">Download {doc.title}</span>
                      </button>

                      <DropdownMenu>
                        <DropdownMenuTrigger className="flex size-7 items-center justify-center rounded-lg text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-1 focus-visible:ring-ring">
                          <MoreHorizontal className="size-4" />
                          <span className="sr-only">Document Options</span>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent
                          align="end"
                          sideOffset={6}
                          className="w-44 rounded-xl border border-border bg-card p-1 shadow-xl"
                        >
                          <DropdownMenuGroup>
                            <DropdownMenuItem className="p-0">
                              <Link
                                href={doc.href}
                                className="flex w-full cursor-pointer items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-medium text-foreground transition hover:bg-muted"
                              >
                                <ExternalLink className="size-3.5 text-muted-foreground" />
                                <span>Open in Editor</span>
                              </Link>
                            </DropdownMenuItem>

                            <DropdownMenuItem
                              onClick={() => onDuplicate?.(doc)}
                              className="cursor-pointer gap-2 rounded-lg px-2.5 py-1.5 text-xs font-medium text-foreground transition hover:bg-muted"
                            >
                              <Copy className="size-3.5 text-muted-foreground" />
                              <span>Duplicate</span>
                            </DropdownMenuItem>

                            <DropdownMenuItem className="p-0">
                              <Link
                                href={`/jobs?tailorDocId=${doc.id}`}
                                className="flex w-full cursor-pointer items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-medium text-foreground transition hover:bg-muted"
                              >
                                <Sparkles className="size-3.5 text-accent-warm" />
                                <span>Tailor to Job</span>
                              </Link>
                            </DropdownMenuItem>
                          </DropdownMenuGroup>

                          <DropdownMenuSeparator className="my-1 bg-border" />

                          <DropdownMenuGroup>
                            <DropdownMenuItem
                              onClick={() => onDelete?.(doc)}
                              className="cursor-pointer gap-2 rounded-lg px-2.5 py-1.5 text-xs font-medium text-destructive transition hover:bg-destructive/10"
                            >
                              <Trash2 className="size-3.5" />
                              <span>Delete Document</span>
                            </DropdownMenuItem>
                          </DropdownMenuGroup>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}