import Link from "next/link";
import {
  CircleCheck,
  GalleryHorizontalEnd,
  LayoutTemplate,
  PenLine,
  ArrowRight,
} from "lucide-react";

import {
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const items = [
  {
    title: "Resume Builder",
    description: "Create and edit your resume.",
    href: "/resume/ai-resume-builder",
    icon: PenLine,
  },
  {
    title: "Resume Templates",
    description: "Explore professional designs.",
    href: "/resume/resume-templates",
    icon: LayoutTemplate,
  },
  {
    title: "Resume Examples",
    description: "Find inspiration for your career.",
    href: "/resume/resume-examples",
    icon: GalleryHorizontalEnd,
  },
  {
    title: "Resume Checker",
    description: "Improve your resume with confidence.",
    href: "/resume/resume-checker",
    icon: CircleCheck,
  },
];

export default function ResumesMegaMenu() {
  return (
    <NavigationMenuContent>
      <div className="w-[700px] overflow-hidden rounded-2xl border border-border bg-popover shadow-xl">
        <div className="grid grid-cols-[0.85fr_1.15fr]">
          {/* Left panel — brand/intro, subtly differentiated background */}
          <div className="relative flex flex-col justify-between overflow-hidden border-r border-border bg-muted/40 p-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl"
            />

            <div className="relative">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                Resumes
              </p>

              <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-foreground">
                Build a resume
                <br />
                you&apos;re proud of.
              </h3>

              <p className="mt-3 max-w-[230px] text-sm leading-6 text-muted-foreground">
                Professional tools and thoughtfully designed templates —
                built for the way hiring actually works.
              </p>
            </div>

            <Link
              href="/resume/ai-resume-builder"
              className="group relative mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-foreground/90"
            >
              Create your resume
              <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Right panel — explore links */}
          <div className="p-5">
            <p className="mb-1 px-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Explore
            </p>

            <div className="flex flex-col">
              {items.map((item) => {
                const Icon = item.icon;

                return (
                  <NavigationMenuLink
                    key={item.title}
                    href={item.href}
                    className="group flex cursor-pointer items-center gap-3.5 rounded-xl p-3 transition-colors hover:bg-muted"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors group-hover:border-primary/30 group-hover:bg-primary/10 group-hover:text-primary">
                      <Icon className="size-[17px]" />
                    </span>

                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground">
                        {item.title}
                      </p>
                      <p className="mt-0.5 truncate text-xs text-muted-foreground">
                        {item.description}
                      </p>
                    </div>

                    <ArrowRight className="ml-auto size-3.5 shrink-0 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </NavigationMenuLink>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </NavigationMenuContent>
  );
}