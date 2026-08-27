"use client";

import { useState } from "react";

import { TEMPLATES_DATA } from "@/features/templates/data/templates";
import type { Template } from "@/types/template";

import TemplateCard from "./TemplateCard";
import TemplatePreviewDialog from "./TemplatePreviewModal";

export default function TemplateGrid() {
  const [selectedTemplate, setSelectedTemplate] =
    useState<Template | null>(null);

  const [previewOpen, setPreviewOpen] = useState(false);

  function handlePreview(template: Template) {
    setSelectedTemplate(template);
    setPreviewOpen(true);
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TEMPLATES_DATA.map((template) => (
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