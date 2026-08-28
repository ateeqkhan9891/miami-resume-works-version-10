"use client";

import dynamic from "next/dynamic";

const HeroResumeShowcase = dynamic(() => import("./HeroResumeShowcase"), {
  ssr: false,
});

export default HeroResumeShowcase;