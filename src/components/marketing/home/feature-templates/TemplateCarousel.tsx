"use client";

import { motion, useMotionValue } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { TEMPLATE_SHOWCASE_ITEMS } from "./template-showcase-data";

export default function TemplateCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  // Triple items to guarantee enough runway for manual and continuous navigation
  const displayItems = [
    ...TEMPLATE_SHOWCASE_ITEMS,
    ...TEMPLATE_SHOWCASE_ITEMS,
    ...TEMPLATE_SHOWCASE_ITEMS,
  ];

  // Auto-scroll loop using requestAnimationFrame
  useEffect(() => {
    let animationFrameId: number;

    const loop = () => {
      if (!isPaused && containerRef.current) {
        const halfWidth = containerRef.current.scrollWidth / 3;
        let currentX = x.get() - 0.75; // Auto-scroll speed

        // Seamless wrap around
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

  // Handle Manual Arrow Step Navigation
  const handleScroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const step = 340; // Approx item width + gap
    const halfWidth = containerRef.current.scrollWidth / 3;
    let targetX = direction === "left" ? x.get() + step : x.get() - step;

    if (targetX > 0) {
      targetX = -halfWidth + step;
    } else if (Math.abs(targetX) >= halfWidth) {
      targetX = 0;
    }

    x.set(targetX);
  };

  return (
    /* 1. Entire Carousel Background Wrapper */
    <div
      className="group/carousel relative mx-auto w-full max-w-7xl overflow-hidden rounded-3xl border border-border/40 bg-muted/20 py-10 shadow-sm backdrop-blur-sm sm:py-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Left Navigation Arrow */}
      <button
        type="button"
        aria-label="Previous templates"
        onClick={() => handleScroll("left")}
        className="absolute cursor-pointer left-4 top-1/2 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border/80 bg-background/90 text-foreground shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-background sm:left-8"
      >
        <ArrowLeft className="size-4" />
      </button>

      {/* Right Navigation Arrow */}
      <button
        type="button"
        aria-label="Next templates"
        onClick={() => handleScroll("right")}
        className="absolute cursor-pointer right-4 top-1/2 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border/80 bg-background/90 text-foreground shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-background sm:right-8"
      >
        <ArrowRight className="size-4" />
      </button>

      {/* Carousel Track */}
      <motion.div
        ref={containerRef}
        style={{ x }}
        className="flex w-max gap-6 px-4 sm:gap-8 lg:gap-10"
      >
        {displayItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="group relative w-[240px] flex-none sm:w-[280px] lg:w-[320px]"
          >
            {/* 2. Individual Resume Card Wrapper */}
            <div className="relative cursor-pointer aspect-[210/297] w-full overflow-hidden rounded-xl border border-border/60 bg-background/90 p-2.5 shadow-sm transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:border-border group-hover:shadow-xl dark:bg-card/80">
              <div className="relative h-full w-full overflow-hidden rounded-lg bg-background">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 320px"
                  className="object-contain"
                />
              </div>

              {/* Minimal floating CTA overlay on hover */}
              <div className="absolute inset-0 flex items-end justify-center rounded-xl bg-black/5 p-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <Link
                  href={`/templates/${item.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background shadow-md transition-transform duration-150 hover:scale-105"
                >
                  Use this template
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </div>

            <p className="mt-3 text-center text-xs font-medium text-muted-foreground/80 transition-colors group-hover:text-foreground">
              {item.name}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}