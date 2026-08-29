"use client";

import { Check, Columns3 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import type { ColumnKey } from "../types/table";

interface TrackerColumnsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  visibleColumns: Record<ColumnKey, boolean>;
  onToggleColumn: (col: ColumnKey) => void;
}

const ALL_COLUMNS: { key: ColumnKey; label: string }[] = [
  { key: "position", label: "Position" },
  { key: "company", label: "Company" },
  { key: "link", label: "Job Link" },
  { key: "status", label: "Status" },
  { key: "dateSaved", label: "Date Saved" },
  { key: "dateApplied", label: "Date Applied" },
  { key: "workplaceType", label: "Workplace Type" },
  { key: "resume", label: "Resume & Match" },
  { key: "coverLetter", label: "Cover Letter" },
  { key: "notes", label: "Notes" },
];

export default function TrackerColumnsModal({
  open,
  onOpenChange,
  visibleColumns,
  onToggleColumn,
}: TrackerColumnsModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm gap-0 rounded-2xl border border-border bg-card p-0 shadow-2xl focus:outline-none">
        <DialogHeader className="border-b border-border px-5 py-4">
          <div className="flex items-center gap-2">
            <Columns3 className="size-4 text-primary" />
            <DialogTitle className="text-sm font-bold text-foreground">
              Manage Visible Columns
            </DialogTitle>
          </div>
        </DialogHeader>

        <div className="space-y-1 p-3">
          {ALL_COLUMNS.map((col) => {
            const isVisible = visibleColumns[col.key];
            return (
              <button
                key={col.key}
                type="button"
                onClick={() => onToggleColumn(col.key)}
                className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-medium text-foreground transition hover:bg-muted"
              >
                <span>{col.label}</span>
                <span
                  className={`flex size-4.5 items-center justify-center rounded-md border ${
                    isVisible
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-surface"
                  }`}
                >
                  {isVisible && <Check className="size-3 stroke-[2.5]" />}
                </span>
              </button>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}