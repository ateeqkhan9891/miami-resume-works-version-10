"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Undo2,
  Redo2,
  Plus,
  ArrowUpDown,
  Palette,
  GripVertical,
  Check,
  Trash2,
  Image as ImageIcon,
  MousePointer2,
} from "lucide-react";

const STAGES = [
  "reorder",
  "colors",
  "add-section",
  "photo-toggle",
  "remove-section",
  "ai-rewrite",
] as const;

export default function TemplatesHeroVisual() {
  const [stageIndex, setStageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStageIndex((prev) => (prev + 1) % STAGES.length);
    }, 3600);
    return () => clearInterval(timer);
  }, []);

  const stage = STAGES[stageIndex];

  return (
    <div className="relative mt-8 flex min-h-[520px] w-full items-start justify-center px-4 py-0 select-none">
      
      {/* Background Glows */}
      <div className="pointer-events-none absolute -left-10 top-0 size-64 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-0 size-64 rounded-full bg-indigo-500/10 blur-3xl" />

      {/* Floating Action Menu Bar (Permanent on Left) */}
      <div className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-1.5 rounded-2xl border border-slate-200/90 bg-white/95 p-2 shadow-2xl backdrop-blur-md">
        <div className="flex items-center gap-1 border-b border-slate-100 pb-1.5 text-slate-400">
          <button className="rounded p-1 hover:bg-slate-100"><Undo2 className="size-3.5" /></button>
          <button className="rounded p-1 hover:bg-slate-100"><Redo2 className="size-3.5" /></button>
        </div>

        <div className={`flex items-center gap-2 rounded-xl px-2.5 py-1.5 text-xs font-semibold transition-all ${stage === "add-section" ? "bg-emerald-50 text-emerald-700 font-bold ring-1 ring-emerald-400" : "text-slate-600"}`}>
          <Plus className="size-3.5" />
          <span className="hidden sm:inline">Add Section</span>
        </div>

        <div className={`flex items-center gap-2 rounded-xl px-2.5 py-1.5 text-xs font-semibold transition-all ${stage === "reorder" ? "bg-indigo-50 text-indigo-700 font-bold ring-1 ring-indigo-400" : "text-slate-600"}`}>
          <ArrowUpDown className="size-3.5" />
          <span className="hidden sm:inline">Reorder</span>
        </div>

        <div className={`flex items-center gap-2 rounded-xl px-2.5 py-1.5 text-xs font-semibold transition-all ${stage === "photo-toggle" ? "bg-sky-50 text-sky-700 font-bold ring-1 ring-sky-400" : "text-slate-600"}`}>
          <ImageIcon className="size-3.5" />
          <span className="hidden sm:inline">Photo</span>
        </div>

        <div className={`flex items-center gap-2 rounded-xl px-2.5 py-1.5 text-xs font-semibold transition-all ${stage === "colors" ? "bg-purple-50 text-purple-700 font-bold ring-1 ring-purple-400" : "text-slate-600"}`}>
          <Palette className="size-3.5" />
          <span className="hidden sm:inline">Colors</span>
        </div>

        <div className={`flex items-center gap-2 rounded-xl px-2.5 py-1.5 text-xs font-semibold transition-all ${stage === "remove-section" ? "bg-rose-50 text-rose-700 font-bold ring-1 ring-rose-400" : "text-slate-600"}`}>
          <Trash2 className="size-3.5" />
          <span className="hidden sm:inline">Delete</span>
        </div>
      </div>

      {/* Main Resume Canvas Card */}
      <motion.div
        layout
        className="relative z-20 ml-8 sm:ml-20 w-full max-w-[420px] rounded-3xl border border-slate-200/90 bg-white p-6 shadow-2xl shadow-slate-900/10"
      >
        
        {/* Document Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-base font-bold text-slate-900">Miami Wazir</h3>
              {stage === "ai-rewrite" && (
                <span className="rounded-full bg-emerald-100 px-1.5 py-0.5 text-[9px] font-bold text-emerald-800">
                  AI Synced
                </span>
              )}
            </div>
            <p className={`text-xs font-semibold transition-colors ${stage === "colors" ? "text-purple-600" : "text-emerald-600"}`}>
              Full Stack Software Engineer
            </p>
          </div>

          {/* Photo Toggle Animation */}
          <AnimatePresence mode="wait">
            {stage !== "photo-toggle" ? (
              <motion.div
                key="avatar"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className={`flex size-11 items-center justify-center rounded-2xl text-xs font-bold text-white shadow-md transition-colors ${stage === "colors" ? "bg-purple-600" : "bg-slate-900"}`}
              >
                MW
              </motion.div>
            ) : (
              <motion.div
                key="badge"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="flex h-8 items-center gap-1 rounded-xl bg-sky-50 px-2.5 text-[10px] font-bold text-sky-700 ring-1 ring-sky-200"
              >
                <Check className="size-3" /> Photo Removed
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Dynamic Shift & Reorder Blocks */}
        <motion.div layout className="mt-4 flex flex-col gap-3">
          
          {/* Section A: Experience Block */}
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className={`rounded-2xl border p-3.5 transition-all ${
              stage === "reorder"
                ? "order-2 border-indigo-300 bg-indigo-50/40 shadow-sm"
                : stage === "ai-rewrite"
                ? "border-emerald-300 bg-emerald-50/40 shadow-sm"
                : "order-1 border-slate-100 bg-slate-50/70"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <GripVertical className="size-3.5 text-slate-400" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700">
                  Experience
                </span>
              </div>
              <span className="text-[10px] text-slate-400">2023 - Present</span>
            </div>

            <div className="mt-2">
              <p className="text-xs font-semibold text-slate-900">Senior Platform Architect</p>
              <p className="mt-0.5 text-[11px] text-slate-500">
                {stage === "ai-rewrite"
                  ? "Spearheaded Next.js migration, cutting load latency by 45%."
                  : "Worked on frontend features and dashboard updates."}
              </p>
            </div>
          </motion.div>

          {/* Section B: Skills Block */}
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className={`rounded-2xl border p-3.5 transition-all ${
              stage === "reorder"
                ? "order-1 border-indigo-300 bg-indigo-50/40 shadow-sm"
                : "order-2 border-slate-100 bg-slate-50/70"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <GripVertical className="size-3.5 text-slate-400" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700">
                  Tech Stack
                </span>
              </div>
              {stage === "reorder" && (
                <span className="rounded bg-indigo-100 px-1.5 py-0.5 text-[9px] font-bold text-indigo-700">
                  Shifted Up
                </span>
              )}
            </div>

            <div className="mt-2 flex flex-wrap gap-1.5">
              {["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"].map((skill) => (
                <span
                  key={skill}
                  className={`rounded-md border bg-white px-2 py-0.5 text-[10px] font-medium shadow-2xs transition-colors ${
                    stage === "colors"
                      ? "border-purple-200 text-purple-700"
                      : "border-slate-200 text-slate-700"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Section C: Newly Added Section */}
          <AnimatePresence>
            {stage === "add-section" && (
              <motion.div
                initial={{ opacity: 0, height: 0, scale: 0.9 }}
                animate={{ opacity: 1, height: "auto", scale: 1 }}
                exit={{ opacity: 0, height: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="order-3 overflow-hidden rounded-2xl border border-emerald-300 bg-emerald-50/50 p-3.5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Plus className="size-3.5 text-emerald-600" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-900">
                      Certifications Added
                    </span>
                  </div>
                  <span className="rounded bg-emerald-200 px-1.5 py-0.5 text-[9px] font-bold text-emerald-800">
                    New
                  </span>
                </div>
                <p className="mt-1 text-xs font-semibold text-slate-800">
                  AWS Certified Solutions Architect
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Section D: Section Being Deleted */}
          <AnimatePresence>
            {stage !== "remove-section" && (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8, height: 0 }}
                transition={{ duration: 0.3 }}
                className="order-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Languages
                  </span>
                  <span className="text-[10px] text-slate-400">English • Native</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      </motion.div>

      {/* Floating Palette Color Selector Popover (On Right) */}
      <AnimatePresence>
        {stage === "colors" && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0, x: 20 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            exit={{ scale: 0.8, opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute -right-2 sm:-right-4 top-1/3 z-40 flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-2xl backdrop-blur-md"
          >
            <button className="size-6 rounded-full bg-purple-600 ring-2 ring-purple-600/40 shadow-sm" />
            <button className="size-6 rounded-full bg-emerald-600" />
            <button className="size-6 rounded-full bg-blue-600" />
            <button className="size-6 rounded-full bg-amber-600" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Live Pointer Cursor Following the Active Task */}
      <motion.div
        animate={
          stage === "reorder"
            ? { x: -80, y: -20 }
            : stage === "colors"
            ? { x: 170, y: -30 }
            : stage === "add-section"
            ? { x: -80, y: -90 }
            : stage === "photo-toggle"
            ? { x: 130, y: -160 }
            : stage === "remove-section"
            ? { x: -80, y: 120 }
            : { x: 60, y: -20 }
        }
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="pointer-events-none absolute z-50 flex items-center gap-1.5 drop-shadow-2xl"
      >
        <MousePointer2 className="size-5 fill-indigo-600 text-indigo-600" />
        <div className="rounded-full bg-indigo-600 px-2.5 py-0.5 text-[11px] font-bold text-white shadow-md capitalize">
          {stage.replace("-", " ")}
        </div>
      </motion.div>

    </div>
  );
}