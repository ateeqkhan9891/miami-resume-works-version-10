// src/components/marketing/home/feature-templates/TemplateCarousel.tsx
"use client";

import { motion, useMotionValue } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Eye,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { TEMPLATES_DATA } from "@/features/templates/data/templates";
import type { Template } from "@/types/template";
import TemplatePreviewModal from "./TemplatePreviewModal";

export default function TemplateCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  // Triple repeat ensures an infinite, gapless scrolling loop
  const displayItems = [
    ...TEMPLATES_DATA,
    ...TEMPLATES_DATA,
    ...TEMPLATES_DATA,
    ...TEMPLATES_DATA,
  ];

  useEffect(() => {
    let animationFrameId: number;

    const loop = () => {
      if (!isPaused && containerRef.current) {
        const halfWidth = containerRef.current.scrollWidth / 2;
        let currentX = x.get() - 0.7; // Smooth auto-scroll speed

        if (Math.abs(currentX) >= halfWidth) {
          currentX = 0;
        }
        x.set(currentX);
      }
      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, x]);

  const handleScroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const step = 340;
    const halfWidth = containerRef.current.scrollWidth / 2;
    let targetX = direction === "left" ? x.get() + step : x.get() - step;

    if (targetX > 0) {
      targetX = -halfWidth + step;
    } else if (Math.abs(targetX) >= halfWidth) {
      targetX = 0;
    }

    x.set(targetX);
  };

  const openPreview = (template: Template) => {
    setSelectedTemplate(template);
    setIsPreviewOpen(true);
  };

  return (
    <>
      <div
        className="group/carousel relative w-full overflow-hidden py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left & Right Vignette Gradients */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute left-0 top-0 z-20 h-full w-20 bg-gradient-to-r from-background to-transparent sm:w-36" 
        />
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute right-0 top-0 z-20 h-full w-20 bg-gradient-to-l from-background to-transparent sm:w-36" 
        />

        {/* Floating Direction Controls */}
        <button
          type="button"
          aria-label="Previous template"
          onClick={() => handleScroll("left")}
          className="absolute left-6 top-1/2 z-30 flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-border bg-card/95 text-foreground shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:border-primary/40 active:scale-95"
        >
          <ArrowLeft className="size-4.5" />
        </button>

        <button
          type="button"
          aria-label="Next template"
          onClick={() => handleScroll("right")}
          className="absolute right-6 top-1/2 z-30 flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-border bg-card/95 text-foreground shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:border-primary/40 active:scale-95"
        >
          <ArrowRight className="size-4.5" />
        </button>

        {/* Motion Track */}
        <motion.div
          ref={containerRef}
          style={{ x }}
          className="flex w-max gap-6 px-8 sm:gap-8 lg:gap-10"
        >
          {displayItems.map((template, index) => (
            <div
              key={`${template.id}-${index}`}
              className="group relative w-[260px] flex-none sm:w-[290px] lg:w-[320px]"
            >
              {/* Outer Card with Elevation on Hover */}
              <div className="relative aspect-[210/297] w-full overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-xs transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:border-primary/40 group-hover:shadow-2xl">
                
                {/* Paper Canvas */}
                <div className="relative h-full w-full overflow-hidden rounded-xl border border-border/50 bg-white shadow-2xs">
                  <Image
                    src={template.thumbnailUrl}
                    alt={template.name}
                    fill
                    sizes="(max-width: 640px) 260px, (max-width: 1024px) 290px, 320px"
                    className="object-contain p-1 transition-transform duration-500 group-hover:scale-103"
                  />
                </div>

                {/* Badges */}
                <div className="absolute left-5 top-5 z-10 flex flex-col gap-1.5">
                  {template.isAtsFriendly && (
                    <span className="inline-flex items-center gap-1 rounded-md border border-border/80 bg-card/90 px-2 py-0.5 text-[10px] font-bold text-primary shadow-2xs backdrop-blur-xs">
                      <ShieldCheck className="size-3 text-primary" />
                      ATS Ready
                    </span>
                  )}
                  {template.isPopular && (
                    <span className="inline-flex items-center gap-1 rounded-md border border-accent-warm/40 bg-accent-warm/15 px-2 py-0.5 text-[10px] font-bold text-foreground shadow-2xs backdrop-blur-xs">
                      <Sparkles className="size-2.5 text-accent-warm" />
                      Popular
                    </span>
                  )}
                </div>

                {/* Dark Glass Overlay on Hover */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2.5 rounded-2xl bg-foreground/15 p-5 opacity-0 backdrop-blur-[3px] transition-all duration-200 group-hover:opacity-100">
                  <Link
                    href={`/resume/new?template=${template.slug}`}
                    className="inline-flex h-10 w-full max-w-[180px] items-center justify-center gap-2 rounded-xl bg-primary px-4 text-xs font-bold text-primary-foreground shadow-lg transition-transform hover:scale-102 active:scale-95"
                  >
                    <span>Use Template</span>
                    <ArrowUpRight className="size-3.5" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => openPreview(template)}
                    className="inline-flex h-9 w-full max-w-[180px] items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 text-xs font-semibold text-foreground shadow-sm transition-transform hover:bg-muted hover:scale-102 active:scale-95"
                  >
                    <Eye className="size-3.5 text-muted-foreground" />
                    <span>Quick Preview</span>
                  </button>
                </div>
              </div>

              {/* Card Meta Description */}
              <div className="mt-3.5 px-1 text-center">
                <p className="text-xs font-bold text-foreground transition-colors group-hover:text-primary">
                  {template.name}
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-muted-foreground line-clamp-1">
                  {template.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Connected High-Fidelity Dialog */}
      <TemplatePreviewModal
        template={selectedTemplate}
        open={isPreviewOpen}
        onOpenChange={setIsPreviewOpen}
      />
    </>
  );
}