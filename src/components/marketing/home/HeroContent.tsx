import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroContent() {
  return (
    <div className="max-w-xl">
      <div className="mb-4 inline-flex items-center rounded-full border border-border/70 bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm">
        Build a resume you&apos;re proud to share
      </div>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-5xl">
        Build a resume that gets you{" "}
        <span className="text-primary">noticed.</span>
      </h1>

      <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
        Create a polished, professional resume with proven templates,
        intuitive editing tools, and everything you need to present your
        experience with confidence.
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link href="/signup">
          <Button size="default" className="group w-full sm:w-auto cursor-pointer">
            Create my resume
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>

        <Link href="/templates">
          <Button size="default" variant="outline" className="w-full sm:w-auto cursor-pointer">
            Explore templates
          </Button>
        </Link>
      </div>

      <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-muted-foreground sm:text-sm">
        <div className="flex items-center gap-1.5">
          <Check className="size-3.5 text-primary" />
          Professional templates
        </div>
        <div className="flex items-center gap-1.5">
          <Check className="size-3.5 text-primary" />
          Easy to customize
        </div>
        <div className="flex items-center gap-1.5">
          <Check className="size-3.5 text-primary" />
          ATS-friendly options
        </div>
      </div>
    </div>
  );
}