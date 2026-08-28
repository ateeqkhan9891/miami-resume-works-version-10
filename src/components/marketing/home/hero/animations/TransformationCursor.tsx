"use client";

import { motion } from "framer-motion";
import { MousePointer2 } from "lucide-react";

interface TransformationCursorProps {
  x: number | string;
  y: number | string;
  visible: boolean;
}

export default function TransformationCursor({
  x,
  y,
  visible,
}: TransformationCursorProps) {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute z-50"
      initial={false}
      animate={{
        left: x,
        top: y,
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.8,
      }}
      transition={{ type: "spring", stiffness: 220, damping: 26 }}
    >
      <MousePointer2
        className="size-4 text-slate-900 drop-shadow-md"
        fill="white"
        strokeWidth={1.5}
      />
    </motion.div>
  );
}