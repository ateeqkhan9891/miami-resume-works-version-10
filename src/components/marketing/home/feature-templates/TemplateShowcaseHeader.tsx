"use client";

import { motion } from "framer-motion";
import { FileText, Sparkles } from "lucide-react";

export default function TemplateShowcaseHeader() {
  return (
    <div className="relative mx-auto max-w-5xl text-center">
      <motion.div
        aria-hidden="true"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-12 top-1/2 -z-10 -translate-y-1/2 opacity-70 blur-[1px] sm:-left-20"
      >
        <div className="size-0 border-b-[42px] border-l-[24px] border-r-[24px] border-b-violet-500/30 border-l-transparent border-r-transparent drop-shadow-[0_0_20px_rgba(139,92,246,0.3)]" />
      </motion.div>

      <motion.div
        aria-hidden="true"
        animate={{
          y: [0, 10, 0],
          rotate: [12, 28, 12],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-8 -top-6 -z-10 size-10 rounded-xl bg-gradient-to-br from-amber-400/30 to-rose-400/30 opacity-70 blur-[1px] drop-shadow-[0_0_20px_rgba(251,191,36,0.25)] sm:-right-16"
      />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/20 bg-violet-500/[0.08] px-3.5 py-1 text-xs font-medium tracking-wide text-violet-600 dark:text-violet-400"
      >
        <FileText className="size-3 text-violet-500" />
        <span>Curated Templates</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="mt-4 whitespace-nowrap text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
      >
        Designed to make a strong{" "}
       <span className="inline-block rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-600 dark:border-emerald-500/40 dark:bg-emerald-500/15 dark:text-emerald-400">
        first impression
      </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg"
      >
        Choose from thoughtfully crafted layouts calibrated for readability, ATS compatibility, and executive polish.
      </motion.p>
    </div>
  );
}