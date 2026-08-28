"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";

import ResumeTemplateCarousel from "./animations/ResumeTemplateCarousel";
import TransformationColorSwap from "./animations/TransformationColorSwap";
import TransformationReorder from "./animations/TransformationReorder";
import TransformationScan from "./animations/TransformationScan";
import TransformationScore from "./animations/TransformationScore";
import TransformationHired from "./animations/TransformationHired";
import {
  PHASE_SEQUENCE,
  ATS_PROGRESSION,
  JOB_KEYWORDS,
  APPLICATION_STEPS,
  DEFAULT_SECTION_ORDER,
  REORDERED_SECTIONS,
  type DemoPhase,
} from "./animations/ResumeTransformation";

const HERO_RESUME_IMAGES = {
  modern: "/images/templates/modern/urooj-modern-resume.png",
  creative: "/images/templates/creative/Mahira-khan-creative.png",
  professional: "/images/templates/professional/mahira-khan-professional.png",
} as const;

type ResumeKey = keyof typeof HERO_RESUME_IMAGES;

const LOOP_CYCLES: Array<{
  key: ResumeKey;
  templateName: string;
  font: string;
  color: string;
  colorLabel: string;
}> = [
  { key: "modern", templateName: "Miami Modern", font: "Inter", color: "#4f46e5", colorLabel: "Indigo" },
  { key: "professional", templateName: "Professional", font: "Georgia", color: "#334155", colorLabel: "Slate" },
  { key: "creative", templateName: "Creative Folio", font: "Inter", color: "#f59e0b", colorLabel: "Amber" },
];

export default function HeroResumeShowcase() {
  const reduceMotion = useReducedMotion();
  const [cycleIndex, setCycleIndex] = useState(0);
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [atsStep, setAtsStep] = useState(0);
  const [appStep, setAppStep] = useState(0);

  const cycle = LOOP_CYCLES[cycleIndex % LOOP_CYCLES.length];
  const nextCycle = LOOP_CYCLES[(cycleIndex + 1) % LOOP_CYCLES.length];
  const phase: DemoPhase = PHASE_SEQUENCE[phaseIndex].phase;

  const active = phase === "idle" ? cycle : nextCycle;

  useEffect(() => {
    const current = PHASE_SEQUENCE[phaseIndex];
    const duration = reduceMotion ? Math.min(current.duration, 1200) : current.duration;

    const timer = setTimeout(() => {
      const isLastPhase = phaseIndex === PHASE_SEQUENCE.length - 1;
      if (isLastPhase) {
        setCycleIndex((c) => c + 1);
        setAtsStep(0);
        setAppStep(0);
        setPhaseIndex(0);
      } else {
        setPhaseIndex((p) => p + 1);
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [phaseIndex, reduceMotion]);

  useEffect(() => {
    if (phase !== "ats_optimization") return;
    if (atsStep >= ATS_PROGRESSION.length - 1) return;

    const timer = setTimeout(() => {
      setAtsStep((s) => Math.min(s + 1, ATS_PROGRESSION.length - 1));
    }, 700);

    return () => clearTimeout(timer);
  }, [phase, atsStep]);

  useEffect(() => {
    if (phase !== "application") return;
    if (appStep >= APPLICATION_STEPS.length - 1) return;

    const timer = setTimeout(() => {
      setAppStep((s) => Math.min(s + 1, APPLICATION_STEPS.length - 1));
    }, 900);

    return () => clearTimeout(timer);
  }, [phase, appStep]);

  const sections =
    phase === "section_reorder" ||
    phase === "ats_optimization" ||
    phase === "job_match" ||
    phase === "application"
      ? REORDERED_SECTIONS
      : DEFAULT_SECTION_ORDER;

  return (
    <div className="relative aspect-[3/4] w-full max-w-[220px] sm:max-w-[260px] lg:max-w-[300px]">
      <ResumeTemplateCarousel activeKey={active.key}>
        <Image
          src={HERO_RESUME_IMAGES[active.key]}
          alt={`${active.templateName} resume template preview`}
          fill
          sizes="(max-width: 640px) 60vw, 300px"
          className="object-cover"
          priority
        />
      </ResumeTemplateCarousel>

      <TransformationColorSwap
        templateName={active.templateName}
        font={active.font}
        color={active.color}
        colorLabel={active.colorLabel}
        spacing="Comfortable"
        visible={phase === "design_edit"}
      />

      <TransformationReorder
        sections={sections}
        visible={phase === "section_reorder"}
      />

      <TransformationScan
        score={ATS_PROGRESSION[atsStep]}
        checks={["Clear structure", "Standard headings", "Good keyword coverage"]}
        visible={phase === "ats_optimization"}
      />

      <TransformationScore
        role="Senior Software Engineer"
        matchPercent={92}
        keywords={JOB_KEYWORDS}
        visible={phase === "job_match"}
      />

      <TransformationHired
        role="Senior Software Engineer"
        company="Acme"
        steps={APPLICATION_STEPS}
        activeStepIndex={appStep}
        visible={phase === "application"}
      />
    </div>
  );
}