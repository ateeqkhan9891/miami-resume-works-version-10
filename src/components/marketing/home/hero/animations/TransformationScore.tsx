"use client";

import { motion } from "framer-motion";
import { Target } from "lucide-react";

interface TransformationScoreProps {
  role: string;
  matchPercent: number;
  keywords: string[];
  visible: boolean;
}

export default function TransformationScore({
  role,
  matchPercent,
  keywords,
  visible,
}: TransformationScoreProps) {
  return (
    <motion.div
      className="absolute -left-3 top-1/2 z-40 w-36 -translate-y-1/2 rounded-xl border border-slate-200 bg-white/95 p-2.5 shadow-xl backdrop-blur-sm sm:-left-8 sm:w-40"
      initial={{ opacity: 0, x: -20, scale: 0.92, filter: "blur(4px)" }}
      animate={{
        opacity: visible ? 1 : 0,
        x: visible ? 0 : -20,
        scale: visible ? 1 : 0.92,
        filter: visible ? "blur(0px)" : "blur(4px)",
      }}
      transition={{ type: "spring", stiffness: 260, damping: 28, mass: 0.7 }}
      aria-hidden={!visible}
    >
      <p className="truncate text-[11px] font-semibold text-slate-700">
        {role}
      </p>

      <div className="my-2 flex items-center gap-1.5">
        <Target className="size-3.5 text-primary" />
        <motion.span
          key={matchPercent}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg font-bold text-primary"
        >
          {matchPercent}%
        </motion.span>
        <span className="text-[10px] text-slate-400">match</span>
      </div>

      <div className="flex flex-wrap gap-1">
        {keywords.map((kw) => (
          <span
            key={kw}
            className="rounded-md bg-primary/10 px-1.5 py-0.5 text-[9.5px] font-medium text-primary"
          >
            ✓ {kw}
          </span>
        ))}
      </div>
    </motion.div>
  );
}