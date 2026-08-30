// src/components/marketing/home/feature-templates/TemplateCarousel.tsx
"use client";

import { motion, useMotionValue } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Eye,
  ShieldCheck,
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
        let currentX = x.get() - 0.7;

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
        {/* Left & Right Edge Gradients */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent sm:w-28" 
        />
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent sm:w-28" 
        />

        {/* Direction Controls */}
        <button
          type="button"
          aria-label="Previous template"
          onClick={() => handleScroll("left")}
          className="absolute left-6 top-1/2 z-40 flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-border bg-card/95 text-foreground shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:border-primary/40 active:scale-95"
        >
          <ArrowLeft className="size-4.5" />
        </button>

        <button
          type="button"
          aria-label="Next template"
          onClick={() => handleScroll("right")}
          className="absolute right-6 top-1/2 z-40 flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-border bg-card/95 text-foreground shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:border-primary/40 active:scale-95"
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
              {/* Outer Card */}
              <div 
                onClick={() => openPreview(template)}
                className="relative aspect-[210/297] w-full cursor-pointer overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-xs transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:border-primary/40 group-hover:shadow-2xl"
              >
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

                {/* Left Top Badge: ATS Ready */}
                {template.isAtsFriendly && (
                  <div className="pointer-events-none absolute left-4.5 top-4.5 z-20">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-card/95 px-2.5 py-1 text-[10px] font-bold text-primary shadow-xs backdrop-blur-md">
                      <ShieldCheck className="size-3 text-primary" />
                      <span>ATS Ready</span>
                    </span>
                  </div>
                )}

                {/* Right Top Badge: Popular */}
                {template.isPopular && (
                  <div className="pointer-events-none absolute right-4.5 top-4.5 z-20">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-[10px] font-bold text-amber-700 shadow-xs backdrop-blur-md dark:border-amber-400/30 dark:bg-amber-400/15 dark:text-amber-300">
                      <span className="size-1.5 rounded-full bg-amber-500 animate-pulse" />
                      <span>Popular</span>
                    </span>
                  </div>
                )}

                {/* Dark Glass Overlay on Hover */}
                <div className="pointer-events-none absolute inset-0 z-30 flex flex-col items-center justify-center gap-2.5 rounded-2xl bg-foreground/15 p-5 opacity-0 backdrop-blur-[3px] transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                  <Link
                    href={`/resume/new?template=${template.slug}`}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex h-10 w-full max-w-[180px] cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary px-4 text-xs font-bold text-primary-foreground shadow-lg transition-transform hover:scale-102 active:scale-95"
                  >
                    <span>Use Template</span>
                    <ArrowUpRight className="size-3.5" />
                  </Link>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openPreview(template);
                    }}
                    className="inline-flex h-9 w-full max-w-[180px] cursor-pointer items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 text-xs font-semibold text-foreground shadow-sm transition-transform hover:bg-muted hover:scale-102 active:scale-95"
                  >
                    <Eye className="size-3.5 text-muted-foreground" />
                    <span>Quick Preview</span>
                  </button>
                </div>
              </div>

              {/* Card Meta */}
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