"use client";

import * as React from "react";

import { Filters } from "@/features/templates/template-filters";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  ChevronDown,
  Check,
  X,
  SlidersHorizontal,
} from "lucide-react";

import { cn } from "@/lib/utils";

interface TemplateFiltersProps {
  selectedFilters: Record<string, string[]>;
  onFiltersChange: (
    filters: Record<string, string[]>
  ) => void;
}

export default function TemplateFilters({
  selectedFilters,
  onFiltersChange,
}: TemplateFiltersProps) {
  const toggleFilter = (
    filterId: string,
    optionId: string
  ) => {
    const current = selectedFilters[filterId] || [];

    const selected = current.includes(optionId);

    const updated = selected
      ? current.filter((id) => id !== optionId)
      : [...current, optionId];

    const next = { ...selectedFilters };

    if (updated.length === 0) {
      delete next[filterId];
    } else {
      next[filterId] = updated;
    }

    onFiltersChange(next);
  };

  const clearFilters = () => {
    onFiltersChange({});
  };

  const activeCount = Object.values(selectedFilters)
    .flat().length;

  return (
    <section className="sticky top-16 z-40 w-full py-3">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4">

        {/* Filter Header */}
        <div className="flex h-7 items-center gap-2">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/80 px-3 py-1 text-[11px] font-medium text-muted-foreground shadow-sm backdrop-blur-md">
            <SlidersHorizontal className="size-3 text-primary" />

            <span>Filter Templates</span>

            {activeCount > 0 && (
              <span className="ml-1 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                {activeCount}
              </span>
            )}
          </div>

          {activeCount > 0 && (
            <button
              type="button"
              onClick={clearFilters}
              className="group flex cursor-pointer items-center gap-1 rounded-full border border-destructive/20 bg-destructive/10 px-2.5 py-1 text-[11px] font-medium text-destructive transition hover:bg-destructive/20"
            >
              <X className="size-3 transition-transform group-hover:rotate-90" />

              Clear all
            </button>
          )}
        </div>

        {/* Filter Bar */}
        <div className="max-w-full overflow-x-auto rounded-2xl border border-border/80 bg-background/90 p-1 shadow-lg backdrop-blur-xl">
          <div className="flex items-center divide-x divide-border/60">

            {Filters.map((filter) => {
              const Icon = filter.icon;
              const options = filter.options || [];

              const selected =
                selectedFilters[filter.id] || [];

              const isActive = selected.length > 0;

              {/* Simple Button */}
              if (options.length === 0) {
                return (
                  <div key={filter.id} className="px-1">
                    <button
                      type="button"
                      onClick={() =>
                        toggleFilter(filter.id, "active")
                      }
                      className={cn(
                        "group flex h-9 cursor-pointer items-center gap-2 rounded-xl px-3 text-xs font-medium transition",
                        isActive
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      <Icon className="size-3.5 group-hover:scale-110" />

                      {filter.label}
                    </button>
                  </div>
                );
              }

              {/* Dropdown */}
              return (
                <div key={filter.id} className="px-1">
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      className={cn(
                        "group flex h-9 cursor-pointer items-center gap-2 rounded-xl px-3 text-xs font-medium outline-none transition",
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      <Icon className="size-3.5 group-hover:scale-110" />

                      {filter.label}

                      {isActive && (
                        <span className="flex size-4 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-primary-foreground">
                          {selected.length}
                        </span>
                      )}

                      <ChevronDown className="size-3.5 opacity-60" />
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                      align="center"
                      sideOffset={8}
                      className="w-56 rounded-2xl p-1.5 shadow-xl"
                    >
                      <div className="border-b px-2.5 py-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                        {filter.label}
                      </div>

                      {options.map((option) => {
                        const OptionIcon = option.icon;

                        const isSelected =
                          selected.includes(option.id);

                        return (
                          <DropdownMenuItem
                            key={option.id}
                            onClick={(e) => {
                              e.preventDefault();

                              toggleFilter(
                                filter.id,
                                option.id
                              );
                            }}
                            className={cn(
                              "mt-1 flex cursor-pointer items-center justify-between rounded-xl px-2.5 py-2",
                              isSelected &&
                                "bg-primary/10 text-primary"
                            )}
                          >
                            <div className="flex items-center gap-2.5">
                              <div
                                className={cn(
                                  "flex size-6 items-center justify-center rounded-lg border",
                                  isSelected
                                    ? "border-primary/30 bg-primary/15"
                                    : "border-border/50 bg-muted/40"
                                )}
                              >
                                <OptionIcon className="size-3" />
                              </div>

                              {option.label}
                            </div>

                            {isSelected && (
                              <Check className="size-3.5" />
                            )}
                          </DropdownMenuItem>
                        );
                      })}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}