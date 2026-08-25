import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  FileText,
  GraduationCap,
  Search,
} from "lucide-react";

import {
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const sections = [
  {
    title: "Resume",
    icon: FileText,
    links: [
      { title: "Resume Guides", href: "/learning/resume-guides" },
      { title: "Resume Examples", href: "/resume/examples" },
    ],
  },
  {
    title: "Career",
    icon: GraduationCap,
    links: [
      { title: "Career Advice", href: "/learning/career-advice" },
      { title: "Interview Tips", href: "/learning/interview-tips" },
    ],
  },
  {
    title: "Cover Letters",
    icon: BriefcaseBusiness,
    links: [
      { title: "Writing Guides", href: "/learning/cover-letters" },
      { title: "Examples", href: "/cover-letters/examples" },
    ],
  },
  {
    title: "Job Search",
    icon: Search,
    links: [
      { title: "Job Search Tips", href: "/learning/job-search" },
      { title: "Career Growth", href: "/learning/career-growth" },
    ],
  },
];

export default function LearningMegaMenu() {
  return (
    <NavigationMenuContent>
      <div className="w-[720px] rounded-2xl border border-border bg-popover p-7 shadow-xl">
        <div className="grid grid-cols-[0.75fr_1.25fr] gap-10">
          {/* Intro */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
              Learning
            </p>

            <h3 className="mt-4 text-[26px] font-semibold leading-[1.12] tracking-tight">
              Learn.
              <br />
              Improve.
              <br />
              Move forward.
            </h3>

            <p className="mt-4 max-w-[210px] text-sm leading-6 text-muted-foreground">
              Practical career advice for building better applications and
              navigating your next opportunity.
            </p>

            <Link
              href="/learning"
              className="mt-6 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
            >
              Browse all resources
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

          {/* Resources */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-7">
            {sections.map((section) => {
              const Icon = section.icon;

              return (
                <div key={section.title}>
                  <div className="flex items-center gap-2">
                    <Icon
                      className="size-4 text-primary"
                      strokeWidth={1.7}
                    />

                    <p className="text-xs font-semibold">
                      {section.title}
                    </p>
                  </div>

                  <div className="mt-3 space-y-2">
                    {section.links.map((link) => (
                      <NavigationMenuLink
                        key={link.title}
                        href={link.href}
                        className="block cursor-pointer text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.title}
                      </NavigationMenuLink>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </NavigationMenuContent>
  );
}