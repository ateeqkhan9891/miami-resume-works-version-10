import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

const BENEFITS = [
  "ATS-friendly",
  "Professional templates",
  "Easy to customize",
];

export default function HeroContent() {
  return (
    <div className="max-w-2xl">
      {/* Eyebrow */}
      {/* <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary shadow-sm">
        <Sparkles className="size-3.5" />
        AI-powered resume builder
      </div> */}

      {/* Heading */}
      <h1 className="max-w-2xl text-balance text-4xl font-bold tracking-[-0.045em] text-foreground sm:text-5xl lg:text-[4.25rem] lg:leading-[1.02]">
        Build a resume that{" "}
        <span className="relative whitespace-nowrap text-primary">
          gets you noticed.
        </span>
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
        Create a polished, ATS-friendly resume with professional templates
        and intelligent editing tools designed to help you stand out from
        the competition.
      </p>

      {/* CTAs */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/signup">
          <Button
            size="lg"
            className="group h-12 w-full rounded-xl px-6 shadow-lg shadow-primary/20 sm:w-auto"
          >
            Create my resume
            <ArrowRight className="ml-2 size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Button>
        </Link>

        <Link href="/templates">
          <Button
            size="lg"
            variant="outline"
            className="h-12 w-full rounded-xl border-border/70 bg-background/70 px-6 backdrop-blur-sm sm:w-auto"
          >
            Explore templates
          </Button>
        </Link>
      </div>

      {/* Benefits */}
      <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2.5">
        {BENEFITS.map((benefit) => (
          <div
            key={benefit}
            className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground sm:text-sm"
          >
            <span className="flex size-4 items-center justify-center rounded-full bg-primary/10">
              <Check className="size-2.5 text-primary" strokeWidth={3} />
            </span>

            {benefit}
          </div>
        ))}
      </div>
    </div>
  );
}