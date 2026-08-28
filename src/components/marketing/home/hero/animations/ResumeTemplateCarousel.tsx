"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface ResumeTemplateCarouselProps {
  activeKey: string;
  children: ReactNode;
  idle?: boolean;
}

export default function ResumeTemplateCarousel({
  activeKey,
  children,
  idle = false,
}: ResumeTemplateCarouselProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative h-full w-full">
      {/* Ambient glow behind the stack — gives it depth against the section background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 scale-90 rounded-[2rem] bg-primary/25 opacity-60 blur-2xl"
      />

      {/* Fanned deck behind the active card */}
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-2.5 translate-y-2 rotate-[4deg] rounded-2xl bg-white/50 shadow-xl shadow-slate-900/5 ring-1 ring-slate-900/5"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-1 translate-y-1 rotate-[2deg] rounded-2xl bg-white/75 shadow-xl shadow-slate-900/5 ring-1 ring-slate-900/5"
      />

      <AnimatePresence initial={false}>
        <motion.div
          key={activeKey}
          className="absolute inset-0 h-full w-full overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_-15px_rgba(15,23,42,0.35)] ring-1 ring-slate-900/5"
          initial={{ opacity: 0, y: reduceMotion ? 0 : -18, rotate: -2.5, scale: 0.96 }}
          animate={
            reduceMotion
              ? { opacity: 1, y: 0, rotate: 0, scale: 1 }
              : {
                  opacity: 1,
                  y: idle ? [0, -4, 0] : 0,
                  rotate: 0,
                  scale: 1,
                }
          }
          exit={
            reduceMotion
              ? { opacity: 0 }
              : {
                  opacity: 0,
                  y: 280,
                  x: 52,
                  rotate: 26,
                  scale: 0.88,
                }
          }
          transition={
            idle
              ? { y: { duration: 3.2, ease: "easeInOut", repeat: Infinity } }
              : reduceMotion
                ? { duration: 0.3 }
                : { duration: 0.65, ease: [0.6, 0.02, 1, 0.4] }
          }
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}