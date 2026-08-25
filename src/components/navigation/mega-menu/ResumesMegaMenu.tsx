import Link from "next/link";
import {
  CircleCheck,
  GalleryHorizontalEnd,
  LayoutTemplate,
  PenLine,
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
    title: "Templates",
    description: "Explore professional designs.",
    href: "/resume/templates",
    icon: LayoutTemplate,
  },
  {
    title: "Examples",
    description: "Find inspiration for your career.",
    href: "/resume/examples",
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
      <div className="w-[680px] rounded-2xl border border-border bg-popover p-7 shadow-xl">
        <div className="grid grid-cols-[0.8fr_1.2fr] gap-10">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
              Resumes
            </p>

            <h3 className="mt-3 text-2xl font-semibold tracking-tight">
              Build a resume
              <br />
              you're proud of.
            </h3>

            <p className="mt-3 max-w-[230px] text-sm leading-6 text-muted-foreground">
              Create a polished resume with professional tools and thoughtfully
              designed templates.
            </p>

            <Link
              href="/resume/ai-resume-builder"
              className="mt-6 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
            >
              Create your resume →
            </Link>
          </div>

          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Explore
            </p>

            <div className="divide-y divide-border">
              {items.map((item) => {
                const Icon = item.icon;

                return (
                  <NavigationMenuLink
                    key={item.title}
                    href={item.href}
                    className="group flex cursor-pointer items-center gap-4 py-3.5"
                  >
                    <Icon className="size-[18px] text-muted-foreground transition-colors group-hover:text-primary" />

                    <div>
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {item.description}
                      </p>
                    </div>

                    <span className="ml-auto opacity-0 transition-opacity group-hover:opacity-100">
                      →
                    </span>
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