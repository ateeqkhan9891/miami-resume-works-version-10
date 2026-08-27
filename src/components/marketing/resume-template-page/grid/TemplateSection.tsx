"use client";

import { useState } from "react";

import { TEMPLATES_DATA } from "@/features/templates/data/templates";

import TemplateFilters from "../filters/TemplateFilters";
import TemplateGrid from "./TemplateGrid";

export default function TemplateSection() {
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({});

  return (
    <>
      <TemplateFilters
        selectedFilters={selectedFilters}
        onFiltersChange={setSelectedFilters}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-medium text-emerald-600">
              Resume Templates
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Choose a resume template
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Choose a professionally designed resume template and
              customize it to match your experience and career goals.
            </p>
          </div>

          <TemplateGrid selectedFilters={selectedFilters} />
        </div>
      </section>
    </>
  );
}