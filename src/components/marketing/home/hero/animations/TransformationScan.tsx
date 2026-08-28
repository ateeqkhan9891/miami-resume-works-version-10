"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

interface TransformationScanProps {
  score: number;
  checks: string[];
  visible: boolean;
}

export default function TransformationScan({
  score,
  checks,
  visible,
}: TransformationScanProps) {
  return (
    <motion.div
      className="absolute -bottom-3 left-1/2 z-40 w-40 -translate-x-1/2 rounded-xl border border-slate-200 bg-white/95 p-2.5 shadow-xl backdrop-blur-sm sm:w-44"
      initial={{ opacity: 0, y: 20, scale: 0.92, filter: "blur(4px)" }}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 20,
        scale: visible ? 1 : 0.92,
        filter: visible ? "blur(0px)" : "blur(4px)",
      }}
      transition={{ type: "spring", stiffness: 260, damping: 28, mass: 0.7 }}
      aria-hidden={!visible}
    >
      <div className="mb-1.5 flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-700">
          <ShieldCheck className="size-3.5 text-emerald-500" />
          ATS Score
        </span>
        <motion.span
          key={score}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm font-bold text-emerald-600"
        >
          {score}
        </motion.span>
      </div>

      <div className="mb-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
        <motion.div
          className="h-full rounded-full bg-emerald-500"
          animate={{ width: `${score}%` }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        />
      </div>

      <div className="space-y-1">
        {checks.map((check) => (
          <div
            key={check}
            className="flex items-center gap-1.5 text-[10px] text-slate-500"
          >
            <span className="text-emerald-500">✓</span>
            {check}
          </div>
        ))}
      </div>
    </motion.div>
  );
}