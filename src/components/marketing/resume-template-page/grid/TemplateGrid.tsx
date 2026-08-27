"use client";

import { useState } from "react";

import { TEMPLATES_DATA } from "@/features/templates/data/templates";
import {
  filterTemplates,
  type SelectedTemplateFilters,
} from "@/features/templates/utils/filter-templates";

import type { Template } from "@/types/template";

import TemplateCard from "./TemplateCard";
import TemplatePreviewDialog from "./TemplatePreviewModal";

interface TemplateGridProps {
  selectedFilters: SelectedTemplateFilters;
}

export default function TemplateGrid({
  selectedFilters,
}: TemplateGridProps) {
  const [selectedTemplate, setSelectedTemplate] =
    useState<Template | null>(null);

  const [previewOpen, setPreviewOpen] = useState(false);

  const filteredTemplates = filterTemplates(
    TEMPLATES_DATA,
    selectedFilters
  );

  function handlePreview(template: Template) {
    setSelectedTemplate(template);
    setPreviewOpen(true);
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredTemplates.map((template) => (
          <TemplateCard
            key={template.id}
            template={template}
            onPreview={handlePreview}
          />
        ))}
      </div>

      <TemplatePreviewDialog
        template={selectedTemplate}
        open={previewOpen}
        onOpenChange={setPreviewOpen}
      />
    </>
  );
}