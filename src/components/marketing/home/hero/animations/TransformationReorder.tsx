"use client";

import { motion } from "framer-motion";
import { GripVertical, ListOrdered } from "lucide-react";

interface TransformationReorderProps {
  sections: string[];
  visible: boolean;
}

export default function TransformationReorder({
  sections,
  visible,
}: TransformationReorderProps) {
  return (
    <motion.div
      className="absolute -right-4 top-8 z-40 w-40 rounded-xl border border-slate-200 bg-white/95 p-3 shadow-xl backdrop-blur-sm sm:-right-8"
      initial={{ opacity: 0, x: 16, scale: 0.95 }}
      animate={{
        opacity: visible ? 1 : 0,
        x: visible ? 0 : 16,
        scale: visible ? 1 : 0.95,
      }}
      transition={{ type: "spring", stiffness: 220, damping: 24 }}
      aria-hidden={!visible}
    >
      <div className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold text-slate-700">
        <ListOrdered className="size-3.5" />
        Sections
      </div>

      <div className="flex flex-col gap-1">
        {sections.map((section) => (
          <motion.div
            key={section}
            layout
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
            className="flex items-center gap-1.5 rounded-md bg-slate-50 px-2 py-1 text-[10.5px] font-medium text-slate-600"
          >
            <GripVertical className="size-3 shrink-0 text-slate-300" />
            {section}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}