"use client";

import { useState } from "react";
import {
  ChevronDown,
  Check,
  Calendar,
  Monitor,
  Globe,
  Building,
  Plus,
  ExternalLink,
  Trash2,
  Sparkles,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import TrackerUrlModal from "./TrackerUrlModal";
import { STATUS_CONFIG, ALL_STATUSES, formatCurrentDate } from "../data/tracker-mock";
import type { JobTrackerRow, WorkplaceType, ColumnKey } from "../types/table";

interface TrackerTableRowProps {
  row: JobTrackerRow;
  visibleColumns: Record<ColumnKey, boolean>;
  onUpdate: (field: keyof JobTrackerRow, value: any) => void;
  onDelete: () => void;
}

export default function TrackerTableRow({
  row,
  visibleColumns,
  onUpdate,
  onDelete,
}: TrackerTableRowProps) {
  const [isUrlModalOpen, setIsUrlModalOpen] = useState(false);

  const formattedAppliedDate = row.dateApplied
    ? formatCurrentDate(new Date(row.dateApplied + "T00:00:00"))
    : null;

  return (
    <>
      <tr className="group h-12.5 border-b border-border/70 transition-colors hover:bg-muted/30">
        {/* Row Checkbox */}
        <td className="w-12 px-3.5 text-center">
          <input
            type="checkbox"
            checked={row.selected || false}
            onChange={(e) => onUpdate("selected", e.target.checked)}
            className="size-4 rounded-md border-border text-primary focus:ring-primary/20"
          />
        </td>

        {/* Position */}
        {visibleColumns.position && (
          <td className="min-w-[200px] border-r border-border/50 px-4 py-2">
            <input
              type="text"
              placeholder="Add Job Position"
              value={row.position}
              onChange={(e) => onUpdate("position", e.target.value)}
              className="w-full bg-transparent text-[13px] font-semibold text-foreground placeholder:italic placeholder:font-normal placeholder:text-muted-foreground/50 outline-none"
            />
          </td>
        )}

        {/* Company */}
        {visibleColumns.company && (
          <td className="min-w-[170px] border-r border-border/50 px-4 py-2">
            <input
              type="text"
              placeholder="Add Company"
              value={row.company}
              onChange={(e) => onUpdate("company", e.target.value)}
              className="w-full bg-transparent text-[13px] font-medium text-foreground placeholder:italic placeholder:font-normal placeholder:text-muted-foreground/50 outline-none"
            />
          </td>
        )}

        {/* URL Link */}
        {visibleColumns.link && (
          <td className="w-12 border-r border-border/50 px-2 py-2 text-center">
            {row.jobUrl ? (
              <a
                href={row.jobUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={row.jobUrl}
                className="inline-flex size-7 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary transition-colors hover:bg-primary/20"
              >
                <ExternalLink className="size-3.5" />
              </a>
            ) : (
              <button
                type="button"
                onClick={() => setIsUrlModalOpen(true)}
                title="Add Job Link"
                className="inline-flex size-7 items-center justify-center rounded-lg text-muted-foreground/50 transition-colors hover:bg-muted hover:text-foreground"
              >
                <Plus className="size-3.5" />
              </button>
            )}
          </td>
        )}

        {/* Status Dropdown */}
        {visibleColumns.status && (
          <td className="min-w-[170px] border-r border-border/50 px-4 py-2">
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                <div
                  className={`inline-flex items-center gap-2 rounded-lg border px-3 py-1 text-xs font-semibold shadow-2xs transition hover:opacity-90 ${
                    STATUS_CONFIG[row.status].bg
                  } ${STATUS_CONFIG[row.status].text}`}
                >
                  <span
                    className={`size-1.5 rounded-full ${STATUS_CONFIG[row.status].dotColor}`}
                  />
                  <span>{row.status}</span>
                  <ChevronDown className="size-3 opacity-60" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                sideOffset={6}
                className="w-52 rounded-xl border border-border bg-card p-1.5 shadow-xl"
              >
                {ALL_STATUSES.map((status) => {
                  const isCurrent = row.status === status;
                  return (
                    <DropdownMenuItem
                      key={status}
                      onClick={() => onUpdate("status", status)}
                      className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-xs font-medium text-foreground hover:bg-muted"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`size-2 rounded-full ${STATUS_CONFIG[status].dotColor}`}
                        />
                        <span>{status}</span>
                      </div>
                      {isCurrent && <Check className="size-3.5 text-primary" />}
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </td>
        )}

        {/* Date Saved */}
        {visibleColumns.dateSaved && (
          <td className="min-w-[130px] border-r border-border/50 px-4 py-2 text-[12.5px] font-medium text-muted-foreground">
            {row.dateSaved}
          </td>
        )}

        {/* Date Applied (Native Datepicker) */}
        {visibleColumns.dateApplied && (
          <td className="min-w-[150px] border-r border-border/50 px-4 py-2 text-xs">
            <div className="relative inline-flex items-center">
              <input
                type="date"
                value={row.dateApplied || ""}
                onChange={(e) => onUpdate("dateApplied", e.target.value)}
                className="absolute inset-0 cursor-pointer opacity-0"
              />
              {formattedAppliedDate ? (
                <div className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-surface px-2.5 py-1 text-[12px] font-medium text-foreground">
                  <Calendar className="size-3 text-muted-foreground" />
                  <span>{formattedAppliedDate}</span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-1 text-[12px] font-medium text-muted-foreground/60 transition hover:text-foreground">
                  <Plus className="size-3.5" />
                  <span>Select Date</span>
                </div>
              )}
            </div>
          </td>
        )}

        {/* Workplace Type */}
        {visibleColumns.workplaceType && (
          <td className="min-w-[130px] border-r border-border/50 px-4 py-2 text-xs">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground outline-none hover:text-foreground">
                {row.workplaceType === "Hybrid" && (
                  <span className="flex items-center gap-1.5 font-medium text-foreground">
                    <Monitor className="size-3.5 text-muted-foreground" />
                    <span>Hybrid</span>
                  </span>
                )}
                {row.workplaceType === "Remote" && (
                  <span className="flex items-center gap-1.5 font-medium text-foreground">
                    <Globe className="size-3.5 text-muted-foreground" />
                    <span>Remote</span>
                  </span>
                )}
                {row.workplaceType === "On-site" && (
                  <span className="flex items-center gap-1.5 font-medium text-foreground">
                    <Building className="size-3.5 text-muted-foreground" />
                    <span>On-site</span>
                  </span>
                )}
                {!row.workplaceType && (
                  <span className="flex items-center gap-1 text-muted-foreground/60">
                    <Plus className="size-3.5" />
                    <span>Type</span>
                  </span>
                )}
                <ChevronDown className="size-3 opacity-60 ml-0.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-36 rounded-xl p-1 shadow-lg">
                {(["Hybrid", "Remote", "On-site"] as WorkplaceType[]).map((type) => (
                  <DropdownMenuItem
                    key={type}
                    onClick={() => onUpdate("workplaceType", type)}
                    className="text-xs cursor-pointer rounded-lg px-2.5 py-1.5 font-medium"
                  >
                    {type}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </td>
        )}

        {/* Resume & ATS Score */}
        {visibleColumns.resume && (
          <td className="min-w-[160px] border-r border-border/50 px-4 py-2 text-xs">
            {row.resumeName ? (
              <div className="inline-flex items-center gap-2">
                {row.matchScore && (
                  <span className="inline-flex items-center gap-1 rounded-md bg-amber-500/15 px-1.5 py-0.5 text-[10px] font-bold text-amber-700 dark:text-amber-300">
                    <Sparkles className="size-2.5" />
                    {row.matchScore}%
                  </span>
                )}
                <span className="font-semibold text-foreground truncate max-w-[100px]">
                  {row.resumeName}
                </span>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => onUpdate("resumeName", "Default Resume")}
                className="flex items-center gap-1 text-[12px] text-muted-foreground/60 hover:text-foreground"
              >
                <Plus className="size-3.5" />
                <span>Resume</span>
              </button>
            )}
          </td>
        )}

        {/* Cover Letter */}
        {visibleColumns.coverLetter && (
          <td className="min-w-[150px] border-r border-border/50 px-4 py-2 text-xs">
            {row.coverLetterName ? (
              <span className="font-semibold text-foreground truncate max-w-[110px] block">
                {row.coverLetterName}
              </span>
            ) : (
              <button
                type="button"
                onClick={() => onUpdate("coverLetterName", "Cover Letter")}
                className="flex items-center gap-1 text-[12px] text-muted-foreground/60 hover:text-foreground"
              >
                <Plus className="size-3.5" />
                <span>Cover Letter</span>
              </button>
            )}
          </td>
        )}

        {/* Notes */}
        {visibleColumns.notes && (
          <td className="min-w-[180px] border-r border-border/50 px-4 py-2 text-xs">
            <input
              type="text"
              placeholder="Write a note..."
              value={row.notes || ""}
              onChange={(e) => onUpdate("notes", e.target.value)}
              className="w-full bg-transparent text-[12.5px] text-foreground placeholder:italic placeholder:text-muted-foreground/50 outline-none"
            />
          </td>
        )}

        {/* Delete Row Action */}
        <td className="w-12 px-3 py-2 text-center">
          <button
            type="button"
            onClick={onDelete}
            title="Delete Row"
            className="flex size-7 items-center justify-center rounded-lg text-muted-foreground/40 transition hover:bg-destructive/10 hover:text-destructive"
          >
            <Trash2 className="size-3.5" />
          </button>
        </td>
      </tr>

      <TrackerUrlModal
        open={isUrlModalOpen}
        onOpenChange={setIsUrlModalOpen}
        initialUrl={row.jobUrl}
        onSave={(url) => onUpdate("jobUrl", url)}
      />
    </>
  );
}