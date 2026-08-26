"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

import { HERO_RESUME_IMAGES } from "./hero-data";

// Distinct 3D angle transforms per resume
const RESUME_VARIANTS = [
  {
    initial: { opacity: 0, scale: 0.92, rotateX: 10, rotateY: -14, rotateZ: -3, y: 15 },
    animate: { opacity: 1, scale: 1, rotateX: 5, rotateY: -8, rotateZ: -2, y: 0 },
    exit: { opacity: 0, scale: 0.95, rotateX: -6, rotateY: 8, rotateZ: 2, y: -15 },
  },
  {
    initial: { opacity: 0, scale: 0.92, rotateX: -6, rotateY: 14, rotateZ: 3, y: 15 },
    animate: { opacity: 1, scale: 1, rotateX: -3, rotateY: 8, rotateZ: 2, y: 0 },
    exit: { opacity: 0, scale: 0.95, rotateX: 6, rotateY: -10, rotateZ: -2, y: -15 },
  },
  {
    initial: { opacity: 0, scale: 0.92, rotateX: 12, rotateY: 0, rotateZ: 0, y: 20 },
    animate: { opacity: 1, scale: 1, rotateX: 3, rotateY: 0, rotateZ: 0, y: 0 },
    exit: { opacity: 0, scale: 0.95, rotateX: -8, rotateY: 0, rotateZ: 0, y: -20 },
  },
];

export default function HeroResumeShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % HERO_RESUME_IMAGES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentVariant = RESUME_VARIANTS[activeIndex % RESUME_VARIANTS.length];

  return (
    <div className="relative flex w-full max-w-[320px] sm:max-w-[360px] flex-col items-center [perspective:1200px]">
      {/* Soft Glow Under the Resume */}
      <div className="absolute inset-4 -z-10 rounded-full bg-primary/25 blur-3xl" />

      {/* Scaled-down Resume Display Container */}
      <div className="relative aspect-[210/297] w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={HERO_RESUME_IMAGES[activeIndex]}
            initial={currentVariant.initial}
            animate={currentVariant.animate}
            exit={currentVariant.exit}
            transition={{
              type: "spring",
              stiffness: 140,
              damping: 18,
            }}
            className="relative h-full w-full"
            style={{ transformStyle: "preserve-3d" }}
          >
            <Image
              src={HERO_RESUME_IMAGES[activeIndex]}
              alt={`Resume design ${activeIndex + 1}`}
              fill
              priority={activeIndex === 0}
              sizes="(max-width: 640px) 300px, 360px"
              className="rounded-md object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.18)]"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Carousel Dots */}
      <div className="mt-4 flex items-center gap-2">
        {HERO_RESUME_IMAGES.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`View template ${index + 1}`}
            onClick={() => setActiveIndex(index)}
            className="group py-1"
          >
            <span
              className={`block h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-6 bg-primary"
                  : "w-1.5 bg-foreground/20 group-hover:bg-foreground/40"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}