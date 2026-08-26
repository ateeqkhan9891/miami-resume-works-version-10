import { ArrowRight } from "lucide-react";
import Link from "next/link";

import TemplateCarousel from "./TemplateCarousel";
import TemplateFeatureGrid from "./TemplateFeatureGrid";
import TemplateShowcaseHeader from "./TemplateShowcaseHeader";

export default function TemplateShowcase() {
  return (
    <section className="relative isolate overflow-hidden bg-[#faf9f6] py-24 sm:py-32 dark:bg-background">
      
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_30%,rgba(0,0,0,0.02),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_30%,rgba(255,255,255,0.02),transparent)]"
      />

      <div className="flex flex-col gap-16 sm:gap-20">
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <TemplateShowcaseHeader />
        </div>

        
        <div className="w-full">
          <TemplateCarousel />
        </div>

        
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-14 px-6 lg:px-8">
          <TemplateFeatureGrid />

         <Link
            href="/templates"
            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors"
          >
            <span className="relative">
              Browse all templates
              {/* Smooth Expanding Underline */}
              <span className="absolute inset-x-0 bottom-0 h-0.5 w-0 bg-foreground transition-all duration-300 ease-out group-hover:w-full" />
            </span>
            <ArrowRight className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-1.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}