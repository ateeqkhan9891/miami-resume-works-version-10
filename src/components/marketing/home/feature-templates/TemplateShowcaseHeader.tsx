// src/components/marketing/home/feature-templates/TemplateShowcaseHeader.tsx
"use client";

import { motion } from "framer-motion";
import { Sparkles, FileText, CheckCircle2 } from "lucide-react";

export default function TemplateShowcaseHeader() {
  return (
    <div className="relative mx-auto max-w-4xl text-center">
      {/* Decorative ambient glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute left-1/2 -top-12 -z-10 h-36 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" 
      />

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-semibold text-foreground shadow-2xs"
      >
        <span className="size-1.5 rounded-full bg-primary animate-pulse" />
        <span>ATS-Engineered Templates</span>
      </motion.div>

      {/* Main Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="mt-5 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
      >
        Designed to get noticed by{" "}
        <span className="relative inline-block text-primary">
          top recruiters
          <span 
            aria-hidden="true" 
            className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-accent-warm/40" 
          />
        </span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base font-medium"
      >
        Built with clean typographic grids, measured hierarchy, and validated ATS parsing structures that pass corporate screens.
      </motion.p>
    </div>
  );
}