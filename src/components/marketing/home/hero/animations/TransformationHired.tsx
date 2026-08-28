"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

interface TransformationHiredProps {
  role: string;
  company: string;
  steps: readonly string[];
  activeStepIndex: number;
  visible: boolean;
}

export default function TransformationHired({
  role,
  company,
  steps,
  activeStepIndex,
  visible,
}: TransformationHiredProps) {
  const isFinal = activeStepIndex === steps.length - 1;

  return (
    <motion.div
      className="absolute -right-3 bottom-6 z-40 w-36 rounded-xl border border-slate-200 bg-white/95 p-2.5 shadow-xl backdrop-blur-sm sm:-right-8 sm:w-40"
      initial={{ opacity: 0, x: 20, scale: 0.92, filter: "blur(4px)" }}
      animate={{
        opacity: visible ? 1 : 0,
        x: visible ? 0 : 20,
        scale: visible ? 1 : 0.92,
        filter: visible ? "blur(0px)" : "blur(4px)",
      }}
      transition={{ type: "spring", stiffness: 260, damping: 28, mass: 0.7 }}
      aria-hidden={!visible}
    >
      <div className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold text-slate-700">
        <Briefcase className="size-3.5" />
        Application
      </div>

      <p className="truncate text-[11px] font-semibold text-slate-800">
        {role}
      </p>
      <p className="mb-2 truncate text-[10px] text-slate-400">{company}</p>

      <div className="flex flex-col gap-1">
        {steps.map((step, i) => {
          const active = i <= activeStepIndex;
          return (
            <div key={step} className="flex items-center gap-1.5">
              <motion.span
                className="size-1.5 rounded-full"
                animate={{
                  backgroundColor: active ? "#10b981" : "#e2e8f0",
                  scale: active && i === activeStepIndex ? 1.3 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
              <span
                className={`text-[10px] font-medium ${
                  active ? "text-slate-700" : "text-slate-300"
                }`}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>

      {isFinal && (
        <motion.p
          initial={{ opacity: 0, y: 4, filter: "blur(3px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ type: "spring", stiffness: 260, damping: 26 }}
          className="mt-2 rounded-md bg-emerald-50 px-2 py-1 text-center text-[10px] font-semibold text-emerald-600"
        >
          Offer received
        </motion.p>
      )}
    </motion.div>
  );
}