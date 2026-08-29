"use client";

import Link from "next/link";
import {
  FileText,
  Tag,
  Plus,
  Pin,
  Copy,
  Wand2,
  Download,
  Trash2,
} from "lucide-react";
import type { DocumentItem } from "../types";

interface DocumentsTableViewProps {
  documents: DocumentItem[];
  allSelected: boolean;
  onToggleSelectAll: () => void;
  onToggleSelect: (id: string) => void;
  onPin: (id: string) => void;
  onDuplicate: (doc: DocumentItem) => void;
  onDelete: (id: string) => void;
}

export default function DocumentsTableView({
  documents,
  allSelected,
  onToggleSelectAll,
  onToggleSelect,
  onPin,
  onDuplicate,
  onDelete,
}: DocumentsTableViewProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xs">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[950px] border-collapse text-left">
          <thead>
            <tr className="border-b border-border bg-surface/70 text-[12px] font-bold text-foreground">
              <th className="w-12 px-4 py-3.5 text-center">
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={onToggleSelectAll}
                  className="size-4 rounded border-border text-primary focus:ring-0"
                />
              </th>
              <th className="px-4 py-3.5">Name</th>
              <th className="min-w-[170px] px-4 py-3.5">Job</th>
              <th className="min-w-[110px] px-4 py-3.5">Type</th>
              <th className="min-w-[130px] px-4 py-3.5">Created</th>
              <th className="min-w-[120px] px-4 py-3.5">Modified</th>
              <th className="w-40 px-4 py-3.5 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-border text-xs font-medium">
            {documents.map((doc) => (
              <tr
                key={doc.id}
                className="group h-13 transition-colors hover:bg-muted/40"
              >
                {/* Checkbox */}
                <td className="px-4 py-2.5 text-center">
                  <input
                    type="checkbox"
                    checked={doc.selected || false}
                    onChange={() => onToggleSelect(doc.id)}
                    className="size-4 rounded border-border text-primary focus:ring-0"
                  />
                </td>

                {/* Name */}
                <td className="px-4 py-2.5">
                  <div className="flex items-center gap-3">
                    <Tag className="size-3.5 text-muted-foreground/60 transition-colors group-hover:text-muted-foreground" />
                    <FileText className="size-4 text-primary" />
                    <Link
                      href={`/resume/${doc.id}`}
                      className="font-bold text-foreground transition-colors hover:text-primary hover:underline"
                    >
                      {doc.name}
                    </Link>
                  </div>
                </td>

                {/* Job Link & Score Badge */}
                <td className="px-4 py-2.5">
                  {doc.jobTarget ? (
                    <div className="inline-flex items-center gap-2">
                      <span className="font-semibold text-primary underline underline-offset-4 decoration-border">
                        {doc.jobTarget.company}
                      </span>
                      {doc.jobTarget.matchScore && (
                        <span className="rounded bg-accent-warm/20 px-1.5 py-0.5 text-[10px] font-bold text-foreground">
                          {doc.jobTarget.matchScore}%
                        </span>
                      )}
                    </div>
                  ) : (
                    <button
                      type="button"
                      className="flex items-center gap-1 font-semibold text-muted-foreground/70 transition hover:text-foreground"
                    >
                      <Plus className="size-3.5" />
                      <span>Add</span>
                    </button>
                  )}
                </td>

                {/* Type Badge */}
                <td className="px-4 py-2.5">
                  <span className="inline-flex rounded-md border border-border bg-surface px-2 py-0.5 text-[11px] font-semibold text-foreground">
                    {doc.type}
                  </span>
                </td>

                {/* Created */}
                <td className="px-4 py-2.5 text-muted-foreground">
                  {doc.createdAt}
                </td>

                {/* Modified */}
                <td className="px-4 py-2.5 font-semibold text-foreground">
                  {doc.modifiedAt}
                </td>

                {/* Actions Palette */}
                <td className="px-4 py-2.5 text-right">
                  <div className="inline-flex items-center gap-1 text-muted-foreground">
                    <button
                      type="button"
                      onClick={() => onPin(doc.id)}
                      title="Pin to top"
                      className={`flex size-7.5 items-center justify-center rounded-lg transition hover:bg-muted ${
                        doc.isPinned
                          ? "bg-accent-warm/15 text-accent-warm"
                          : "hover:text-foreground"
                      }`}
                    >
                      <Pin className={`size-3.5 ${doc.isPinned ? "fill-current" : ""}`} />
                    </button>

                    <button
                      type="button"
                      onClick={() => onDuplicate(doc)}
                      title="Duplicate"
                      className="flex size-7.5 items-center justify-center rounded-lg transition hover:bg-muted hover:text-foreground"
                    >
                      <Copy className="size-3.5" />
                    </button>

                    <Link
                      href={`/jobs?tailorDocId=${doc.id}`}
                      title="Tailor to Job"
                      className="flex size-7.5 items-center justify-center rounded-lg transition hover:bg-muted hover:text-foreground"
                    >
                      <Wand2 className="size-3.5 text-accent-warm" />
                    </Link>

                    <button
                      type="button"
                      title="Download PDF"
                      className="flex size-7.5 items-center justify-center rounded-lg transition hover:bg-muted hover:text-foreground"
                    >
                      <Download className="size-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => onDelete(doc.id)}
                      title="Delete"
                      className="flex size-7.5 items-center justify-center rounded-lg transition hover:bg-destructive/10 hover:text-destructive"
                    >
                      <Trash2 className="size-3.5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}