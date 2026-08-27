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
  // --------------------------------------------------
  // Toggle a filter option
  // --------------------------------------------------

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

  // --------------------------------------------------
  // Clear all filters
  // --------------------------------------------------

  const clearFilters = () => {
    onFiltersChange({});
  };

  // --------------------------------------------------
  // Count active filters
  // --------------------------------------------------

  const activeCount = Object.values(selectedFilters)
    .flat()
    .length;

  return (
    <section
      className="
        sticky top-16 z-40
        w-full
        border-b border-slate-200/70
        bg-white/85
        backdrop-blur-xl
      "
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-[66px] items-center gap-3">
          {/* ==================================================
              FILTER ICON / LABEL
              ================================================== */}

          <div
            className="
              hidden shrink-0
              items-center gap-2
              text-slate-500
              sm:flex
            "
          >
            <div
              className="
                flex size-8
                items-center justify-center
                rounded-xl
                border border-slate-200
                bg-white
                shadow-sm
              "
            >
              <SlidersHorizontal className="size-3.5 text-slate-600" />
            </div>

            <span className="text-xs font-semibold tracking-tight text-slate-700">
              Filters
            </span>

            {/* Active filter count */}

            {activeCount > 0 && (
              <span
                className="
                  flex size-5
                  items-center justify-center
                  rounded-full
                  bg-slate-900
                  text-[9px]
                  font-bold
                  text-white
                "
              >
                {activeCount}
              </span>
            )}
          </div>

          {/* ==================================================
              FILTER BAR
              ================================================== */}

          <div
            className="
              min-w-0
              flex-1
              overflow-x-auto
              scrollbar-none
            "
          >
            <div
              className="
                flex w-max
                items-center
                rounded-xl
                border border-slate-200/80
                bg-white
                p-1
                shadow-sm
              "
            >
              {Filters.map((filter) => {
                const Icon = filter.icon;

                const options = filter.options || [];

                const selected =
                  selectedFilters[filter.id] || [];

                const isActive = selected.length > 0;

                // --------------------------------------------------
                // Simple filter
                // Top Picks / ATS
                // --------------------------------------------------

                if (options.length === 0) {
                  return (
                    <div
                      key={filter.id}
                      className="px-0.5"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          toggleFilter(
                            filter.id,
                            "active"
                          )
                        }
                        className={cn(
                          `
                            group
                            flex h-9
                            cursor-pointer
                            items-center gap-2
                            rounded-lg
                            px-3
                            text-[11px]
                            font-semibold
                            tracking-tight
                            transition-all
                            outline-none
                          `,
                          isActive
                            ? `
                              bg-slate-900
                              text-white
                              shadow-sm
                            `
                            : `
                              text-slate-500
                              hover:bg-slate-50
                              hover:text-slate-900
                            `
                        )}
                      >
                        <Icon
                          className="
                            size-3.5
                            transition-transform
                            duration-200
                            group-hover:scale-110
                          "
                        />

                        {filter.label}
                      </button>
                    </div>
                  );
                }

                // --------------------------------------------------
                // Dropdown filter
                // --------------------------------------------------

                return (
                  <div
                    key={filter.id}
                    className="px-0.5"
                  >
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        className={cn(
                          `
                            group
                            flex h-9
                            cursor-pointer
                            items-center gap-2
                            rounded-lg
                            px-3
                            text-[11px]
                            font-semibold
                            tracking-tight
                            outline-none
                            transition-all
                          `,
                          isActive
                            ? `
                              bg-slate-100
                              text-slate-900
                            `
                            : `
                              text-slate-500
                              hover:bg-slate-50
                              hover:text-slate-900
                            `
                        )}
                      >
                        <Icon
                          className="
                            size-3.5
                            transition-transform
                            duration-200
                            group-hover:scale-110
                          "
                        />

                        <span>{filter.label}</span>

                        {/* Active option count */}

                        {isActive && (
                          <span
                            className="
                              flex size-5
                              items-center justify-center
                              rounded-full
                              bg-slate-900
                              text-[9px]
                              font-bold
                              text-white
                            "
                          >
                            {selected.length}
                          </span>
                        )}

                        <ChevronDown
                          className="
                            size-3
                            opacity-50
                            transition-transform
                            duration-200
                          "
                        />
                      </DropdownMenuTrigger>

                      {/* ==================================================
                          DROPDOWN
                          ================================================== */}

                      <DropdownMenuContent
                        align="center"
                        sideOffset={8}
                        className="
                          w-56
                          rounded-2xl
                          border border-slate-200
                          bg-white
                          p-1.5
                          shadow-xl
                        "
                      >
                        {/* Dropdown header */}

                        <div
                          className="
                            flex items-center justify-between
                            border-b border-slate-100
                            px-2.5 py-2.5
                          "
                        >
                          <span
                            className="
                              text-[10px]
                              font-bold
                              uppercase
                              tracking-[0.12em]
                              text-slate-400
                            "
                          >
                            {filter.label}
                          </span>

                          {isActive && (
                            <span
                              className="
                                text-[9px]
                                font-semibold
                                text-slate-400
                              "
                            >
                              {selected.length} selected
                            </span>
                          )}
                        </div>

                        {/* Dropdown options */}

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
                                `
                                  mt-1
                                  flex
                                  cursor-pointer
                                  items-center
                                  justify-between
                                  rounded-xl
                                  px-2.5
                                  py-2.5
                                  text-[11px]
                                  font-medium
                                  outline-none
                                  transition-colors
                                `,
                                isSelected &&
                                  `
                                    bg-slate-100
                                    text-slate-900
                                  `
                              )}
                            >
                              {/* Option */}

                              <div className="flex items-center gap-2.5">
                                <div
                                  className={cn(
                                    `
                                      flex size-7
                                      items-center justify-center
                                      rounded-lg
                                      border
                                    `,
                                    isSelected
                                      ? `
                                        border-slate-300
                                        bg-white
                                      `
                                      : `
                                        border-slate-200
                                        bg-slate-50
                                      `
                                  )}
                                >
                                  <OptionIcon className="size-3" />
                                </div>

                                <span>
                                  {option.label}
                                </span>
                              </div>

                              {/* Selected check */}

                              {isSelected && (
                                <Check className="size-3.5 text-slate-900" />
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

          {/* ==================================================
              CLEAR FILTERS
              Only appears when filters are active
              ================================================== */}

          {activeCount > 0 && (
            <button
              type="button"
              onClick={clearFilters}
              className="
                group
                hidden shrink-0
                items-center gap-1.5
                rounded-lg
                border border-slate-200
                bg-white
                px-3
                py-2
                text-[11px]
                font-semibold
                text-slate-500
                shadow-sm
                transition-all
                hover:border-slate-300
                hover:bg-slate-50
                hover:text-slate-900
                sm:flex
              "
            >
              <X
                className="
                  size-3
                  transition-transform
                  duration-200
                  group-hover:rotate-90
                "
              />

              Clear
            </button>
          )}
        </div>
      </div>
    </section>
  );
}