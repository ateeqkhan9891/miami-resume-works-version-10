"use client";

import { useState } from "react";

import TemplateFilters from "../filters/TemplateFilters";
import TemplateGrid from "./TemplateGrid";

export default function TemplateSection() {
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({});

  return (
    <>
      {/* Template Filters */}
      <TemplateFilters
        selectedFilters={selectedFilters}
        onFiltersChange={setSelectedFilters}
      />

      {/* Template Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <TemplateGrid selectedFilters={selectedFilters} />
        </div>
      </section>
    </>
  );
}