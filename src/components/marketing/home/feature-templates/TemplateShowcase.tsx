// src/components/marketing/home/feature-templates/TemplateShowcase.tsx
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import TemplateCarousel from "./TemplateCarousel";
import TemplateFeatureGrid from "./TemplateFeatureGrid";
import TemplateShowcaseHeader from "./TemplateShowcaseHeader";

export default function TemplateShowcase() {
  return (
    <section className="relative isolate overflow-hidden bg-background py-20 sm:py-28">
      {/* Background ambient texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_30%,var(--color-surface),transparent)]"
      />

      <div className="flex flex-col gap-14 sm:gap-20">
        {/* Header Section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <TemplateShowcaseHeader />
        </div>

        {/* Carousel Infinite Scroller */}
        <div className="w-full">
          <TemplateCarousel />
        </div>

        {/* Supporting Features & Footer Link */}
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 lg:px-8">
          <TemplateFeatureGrid />

          <Link
            href="/templates"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-xs font-bold text-foreground shadow-2xs transition-all hover:border-primary hover:text-primary hover:shadow-xs active:scale-95"
          >
            <span>Explore all resume templates</span>
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}