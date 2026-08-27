
"use client";

import Image from "next/image";
import { Eye, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Template } from "@/types/template";

interface TemplateCardProps {
  template: Template;
  onPreview: (template: Template) => void;
}

export default function TemplateCard({ template,onPreview }: TemplateCardProps) {
  return (
    <article className="group">
      {/* Preview */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
        <div className="relative aspect-[3/4]">
          <Image
            src={template.thumbnailUrl}
            alt={`${template.name} resume template`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-slate-950/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
            <div className="flex items-center gap-3 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
              <Button
                variant="secondary"
                onClick={()=>onPreview(template)}
                className="gap-2 rounded-xl bg-white text-slate-900 shadow-lg hover:bg-slate-50"
              >
                <Eye className="size-4" />
                Preview
              </Button>

              <Button className="gap-2 rounded-xl bg-emerald-600 text-white shadow-lg hover:bg-emerald-700">
                Use Template
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Information */}
      <div className="mt-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-base font-semibold tracking-tight text-slate-900">
            {template.name}
          </h3>

          {template.isPopular && (
            <span className="shrink-0 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
              Popular
            </span>
          )}
        </div>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
          {template.description}
        </p>
      </div>
    </article>
  );
}