"use client";

import React, { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { useResumeStore } from "@/features/resume-builder/store/useResumeStore";
import { EditableText } from "./EditableText";
import type { SectionType } from "@/types/resume";

interface EditableSectionWrapperProps {
  sectionId: SectionType;
  defaultTitle: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  isEditable?: boolean;
  canAddEntry?: boolean;
  className?: string;
}

export default function EditableSectionWrapper({
  sectionId,
  defaultTitle,
  children,
  icon,
  isEditable = true,
  canAddEntry = true,
  className = "",
}: EditableSectionWrapperProps) {
  const [isHovered, setIsHovered] = useState(false);

  const sectionTitles = useResumeStore((state) => state.resumeData.sectionTitles || {});
  const accentColor = useResumeStore((state) => state.design.accentColor ?? "#214e3b");
  const dividerStyle = useResumeStore((state) => state.design.dividerStyle ?? "solid");
  const updateSectionTitle = useResumeStore((state) => state.updateSectionTitle);
  const addEntry = useResumeStore((state) => state.addEntry);
  const removeSection = useResumeStore((state) => state.removeSection);

  const currentTitle = sectionTitles[sectionId] || defaultTitle;

  // Render the dynamic heading underline / divider based on the design store
  const renderDivider = () => {
    switch (dividerStyle) {
      case "solid":
        return (
          <div
            className="h-[1.5px] flex-1 transition-colors"
            style={{ backgroundColor: `${accentColor}35` }}
          />
        );
      case "dashed":
        return (
          <div
            className="h-0 flex-1 border-b-2 border-dashed transition-colors"
            style={{ borderColor: `${accentColor}40` }}
          />
        );
      case "minimal":
        return (
          <div
            className="h-[3px] w-6 rounded-full transition-colors"
            style={{ backgroundColor: accentColor }}
          />
        );
      case "none":
      default:
        return null;
    }
  };

  if (!isEditable) {
    return (
      <section className={`relative ${className}`}>
        <div className="mb-3 flex items-center gap-2.5">
          {icon && (
            <div
              className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-white shadow-2xs"
              style={{ backgroundColor: accentColor }}
            >
              {icon}
            </div>
          )}
          <h2
            className="text-[11px] font-bold uppercase tracking-wider transition-colors"
            style={{ color: accentColor }}
          >
            {currentTitle}
          </h2>
          {renderDivider()}
        </div>
        {children}
      </section>
    );
  }

  return (
    <section
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative rounded-lg transition-all duration-150 ${
        isHovered ? "ring-1 p-2 -m-2 bg-neutral-50/50" : "p-0"
      } ${className}`}
      style={isHovered ? { borderColor: `${accentColor}40` } : undefined}
    >
      {/* Header with Icon, Editable Title, Dynamic Divider, and Action Pill */}
      <div className="mb-3 flex items-center justify-between gap-2.5">
        <div className="flex min-w-0 flex-1 items-center gap-2.5">
          {icon && (
            <div
              className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-white shadow-2xs"
              style={{ backgroundColor: accentColor }}
            >
              {icon}
            </div>
          )}

          <h2
            className="shrink-0 text-[11px] font-bold uppercase tracking-wider transition-colors"
            style={{ color: accentColor }}
          >
            <EditableText
              value={currentTitle}
              onChange={(newTitle) => updateSectionTitle(sectionId, newTitle)}
              placeholder={defaultTitle}
            />
          </h2>

          {renderDivider()}
        </div>

        {/* Hover Pill Bar */}
        {isHovered && (
          <div className="flex shrink-0 items-center rounded-lg border border-neutral-200/90 bg-white p-0.5 shadow-md">
            {canAddEntry && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  addEntry(sectionId);
                }}
                style={{ backgroundColor: accentColor }}
                className="flex items-center gap-1 rounded-md px-2 py-1 text-[10px] font-semibold text-white shadow-xs transition-opacity hover:opacity-90"
              >
                <Plus className="h-3 w-3 stroke-[2.5]" />
                <span>Entry</span>
              </button>
            )}

            <div className="mx-1 h-3.5 w-px bg-neutral-200" />

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                removeSection(sectionId);
              }}
              title="Delete Section"
              className="flex h-6 w-6 items-center justify-center rounded-md text-neutral-400 transition-colors hover:bg-red-50 hover:text-red-600"
            >
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          </div>
        )}
      </div>

      <div className="relative">{children}</div>
    </section>
  );
}