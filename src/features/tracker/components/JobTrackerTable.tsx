"use client";

import { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Columns3,
  TrendingUp,
  Plus,
  ChevronDown,
  Layers,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import TrackerTableRow from "./TrackerTableRow";
import TrackerStatisticsModal from "./TrackerStatisticsModal";
import TrackerColumnsModal from "./TrackerColumnsModal";
import AddJobManualModal from "@/features/dashboard/components/AddJobManualModal";
import {
  INITIAL_TRACKER_ROWS,
  ALL_STATUSES,
  formatCurrentDate,
} from "../data/tracker-mock";
import type { JobTrackerRow, ColumnKey } from "../types/table";

export default function JobTrackerTable() {
  const [rows, setRows] = useState<JobTrackerRow[]>(INITIAL_TRACKER_ROWS);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<string>("All Statuses");

  // Modals
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isColumnsOpen, setIsColumnsOpen] = useState(false);
  const [isNewAppModalOpen, setIsNewAppModalOpen] = useState(false);

  // Column Visibility
  const [visibleColumns, setVisibleColumns] = useState<Record<ColumnKey, boolean>>({
    position: true,
    company: true,
    link: true,
    status: true,
    dateSaved: true,
    dateApplied: true,
    workplaceType: true,
    resume: true,
    coverLetter: true,
    notes: true,
  });

  const toggleColumn = (col: ColumnKey) => {
    setVisibleColumns((prev) => ({ ...prev, [col]: !prev[col] }));
  };

  const updateRow = (id: string, field: keyof JobTrackerRow, value: any) => {
    setRows((prev) =>
      prev.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  const deleteRow = (id: string) => {
    setRows((prev) => prev.filter((r) => r.id !== id));
  };

  const handleAddNewRow = () => {
    const newRow: JobTrackerRow = {
      id: `${Date.now()}`,
      position: "",
      company: "",
      status: "Bookmarked",
      dateSaved: formatCurrentDate(),
      dateApplied: "",
      notes: "",
    };
    setRows((prev) => [...prev, newRow]);
  };

  const handleCreateFromModal = (jobData: {
    title: string;
    company: string;
    location?: string;
    description: string;
  }) => {
    const newRow: JobTrackerRow = {
      id: `${Date.now()}`,
      position: jobData.title,
      company: jobData.company,
      status: "Applied",
      dateSaved: formatCurrentDate(),
      dateApplied: new Date().toISOString().split("T")[0],
      workplaceType: jobData.location?.toLowerCase().includes("remote") ? "Remote" : "Hybrid",
      matchScore: 85,
      resumeName: "Tailored Resume",
    };
    setRows((prev) => [newRow, ...prev]);
  };

  const filteredRows = rows.filter((row) => {
    const matchesSearch =
      row.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (row.notes && row.notes.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesStatus =
      selectedStatusFilter === "All Statuses" || row.status === selectedStatusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="w-full space-y-4">
      {/* Top Application Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-card p-4 shadow-xs sm:px-6">
        {/* Left Side: Brand Indicator & Search */}
        <div className="flex flex-1 items-center gap-5">
          <div className="flex items-center gap-2.5">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
              <Layers className="size-4.5" />
            </div>
            <div>
              <h1 className="text-base font-bold tracking-tight text-foreground">
                Job Tracker
              </h1>
              <p className="text-[11px] text-muted-foreground">
                {rows.filter((r) => r.position.trim()).length} Active Applications
              </p>
            </div>
          </div>

          <div className="relative max-w-xs flex-1">
            <Search className="pointer-events-none absolute right-3.5 top-2.5 size-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search company, title, or note..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-9 w-full rounded-full border border-border bg-surface pl-4 pr-9 text-xs font-medium text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary focus:bg-card"
            />
          </div>
        </div>

        {/* Right Side Controls */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Status Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex h-9 items-center gap-1.5 rounded-xl border border-border bg-card px-3.5 text-xs font-semibold text-foreground outline-none transition hover:bg-muted">
              <SlidersHorizontal className="size-3.5 text-muted-foreground" />
              <span>{selectedStatusFilter}</span>
              <ChevronDown className="size-3 text-muted-foreground" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 rounded-xl p-1.5 shadow-xl">
              <DropdownMenuItem
                onClick={() => setSelectedStatusFilter("All Statuses")}
                className="text-xs font-medium cursor-pointer rounded-lg"
              >
                All Statuses
              </DropdownMenuItem>
              {ALL_STATUSES.map((status) => (
                <DropdownMenuItem
                  key={status}
                  onClick={() => setSelectedStatusFilter(status)}
                  className="text-xs font-medium cursor-pointer rounded-lg"
                >
                  {status}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Columns Selector */}
          <button
            type="button"
            onClick={() => setIsColumnsOpen(true)}
            className="flex h-9 items-center gap-1.5 rounded-xl border border-border bg-card px-3.5 text-xs font-semibold text-foreground transition hover:bg-muted"
          >
            <Columns3 className="size-3.5 text-muted-foreground" />
            <span>Columns</span>
            <ChevronDown className="size-3 text-muted-foreground" />
          </button>

          {/* View Statistics */}
          <button
            type="button"
            onClick={() => setIsStatsOpen(true)}
            className="flex h-9 items-center gap-1.5 rounded-xl border border-border bg-card px-3.5 text-xs font-semibold text-foreground transition hover:bg-muted"
          >
            <TrendingUp className="size-3.5 text-muted-foreground" />
            <span>View Statistics</span>
            <ChevronDown className="size-3 text-muted-foreground" />
          </button>

          {/* Primary Action */}
          <button
            type="button"
            onClick={() => setIsNewAppModalOpen(true)}
            className="flex h-9 items-center gap-2 rounded-xl bg-primary px-4 text-xs font-semibold text-primary-foreground shadow-2xs transition hover:opacity-90 active:scale-95"
          >
            <Plus className="size-4 stroke-[2.5]" />
            <span>New Application</span>
          </button>
        </div>
      </div>

      {/* Spreadsheet Container */}
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1200px] border-collapse text-left">
            <thead>
              <tr className="border-b border-border bg-surface/80 text-[12.5px] font-bold text-foreground">
                <th className="w-12 px-3.5 py-3 text-center">
                  <input
                    type="checkbox"
                    className="size-4 rounded-md border-border text-primary focus:ring-0"
                  />
                </th>
                {visibleColumns.position && (
                  <th className="min-w-[200px] border-r border-border/60 px-4 py-3">
                    Position
                  </th>
                )}
                {visibleColumns.company && (
                  <th className="min-w-[170px] border-r border-border/60 px-4 py-3">
                    Company
                  </th>
                )}
                {visibleColumns.link && (
                  <th className="w-12 border-r border-border/60 px-2 py-3 text-center" />
                )}
                {visibleColumns.status && (
                  <th className="min-w-[170px] border-r border-border/60 px-4 py-3">
                    Status
                  </th>
                )}
                {visibleColumns.dateSaved && (
                  <th className="min-w-[130px] border-r border-border/60 px-4 py-3">
                    Date Saved
                  </th>
                )}
                {visibleColumns.dateApplied && (
                  <th className="min-w-[150px] border-r border-border/60 px-4 py-3">
                    Date Applied
                  </th>
                )}
                {visibleColumns.workplaceType && (
                  <th className="min-w-[130px] border-r border-border/60 px-4 py-3">
                    Type
                  </th>
                )}
                {visibleColumns.resume && (
                  <th className="min-w-[160px] border-r border-border/60 px-4 py-3">
                    Resume
                  </th>
                )}
                {visibleColumns.coverLetter && (
                  <th className="min-w-[150px] border-r border-border/60 px-4 py-3">
                    Cover Letter
                  </th>
                )}
                {visibleColumns.notes && (
                  <th className="min-w-[180px] border-r border-border/60 px-4 py-3">
                    Notes
                  </th>
                )}
                <th className="w-12 px-3.5 py-3 text-center">
                  <button
                    type="button"
                    onClick={handleAddNewRow}
                    title="Add Row"
                    className="flex size-6 items-center justify-center rounded-lg text-muted-foreground transition hover:bg-muted hover:text-foreground"
                  >
                    <Plus className="size-4" />
                  </button>
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredRows.map((row) => (
                <TrackerTableRow
                  key={row.id}
                  row={row}
                  visibleColumns={visibleColumns}
                  onUpdate={(field, val) => updateRow(row.id, field, val)}
                  onDelete={() => deleteRow(row.id)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Connected Modals */}
      <TrackerStatisticsModal
        open={isStatsOpen}
        onOpenChange={setIsStatsOpen}
        rows={rows}
      />

      <TrackerColumnsModal
        open={isColumnsOpen}
        onOpenChange={setIsColumnsOpen}
        visibleColumns={visibleColumns}
        onToggleColumn={toggleColumn}
      />

      <AddJobManualModal
        open={isNewAppModalOpen}
        onOpenChange={setIsNewAppModalOpen}
        onSubmitJob={handleCreateFromModal}
      />
    </div>
  );
}