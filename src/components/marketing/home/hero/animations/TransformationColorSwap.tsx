"use client";

import { motion } from "framer-motion";
import { Palette } from "lucide-react";

interface TransformationColorSwapProps {
  templateName: string;
  font: string;
  color: string;
  colorLabel: string;
  spacing: string;
  visible: boolean;
}

export default function TransformationColorSwap({
  templateName,
  font,
  color,
  colorLabel,
  spacing,
  visible,
}: TransformationColorSwapProps) {
  return (
    <motion.div
      className="absolute -left-3 top-6 z-40 w-36 rounded-xl border border-slate-200 bg-white/95 p-2.5 shadow-xl backdrop-blur-sm sm:-left-6 sm:w-40"
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
      <div className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold text-slate-700">
        <Palette className="size-3.5" />
        Design
      </div>

      <div className="space-y-2 text-[10.5px]">
        <Row label="Template" value={templateName} />
        <Row label="Font" value={font} />
        <div className="flex items-center justify-between">
          <span className="text-slate-400">Color</span>
          <span className="flex items-center gap-1.5 font-medium text-slate-700">
            <span
              className="size-2.5 rounded-full"
              style={{ backgroundColor: color }}
            />
            {colorLabel}
          </span>
        </div>
        <Row label="Spacing" value={spacing} />
      </div>
    </motion.div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-slate-400">{label}</span>
      <span className="font-medium text-slate-700">{value}</span>
    </div>
  );
}