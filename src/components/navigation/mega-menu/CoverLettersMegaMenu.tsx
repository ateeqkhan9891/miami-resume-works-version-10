import Link from "next/link";
import {
  ArrowUpRight,
  FilePenLine,
  LayoutTemplate,
  User,
} from "lucide-react";

import {
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const links = [
  {
    title: "Cover Letter Builder",
    description: "Write a tailored letter faster.",
    href: "/cover-letters/builder",
    icon: FilePenLine,
  },
  {
    title: "Cover Letter Templates",
    description: "Professional layouts ready to use.",
    href: "/cover-letters/templates",
    icon: LayoutTemplate,
  },
];

export default function CoverLettersMegaMenu() {
  return (
    <NavigationMenuContent>
      <div className="w-[760px] overflow-hidden rounded-2xl border border-border bg-popover shadow-xl">
        <div className="grid grid-cols-[1fr_1.15fr_0.8fr]">
          {/* Intro */}
          <div className="p-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
              Cover Letters
            </p>

            <h3 className="mt-4 text-[25px] font-semibold leading-tight tracking-tight">
              Say more
              <br />
              than your resume can.
            </h3>

            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Tell employers why you're the right person for the opportunity.
            </p>

            <Link
              href="/cover-letters/builder"
              className="mt-6 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
            >
              Start writing
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

          {/* Links */}
          <div className="border-x border-border px-5 py-7">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Get started
            </p>

            {links.map((item) => {
              const Icon = item.icon;

              return (
                <NavigationMenuLink
                  key={item.title}
                  href={item.href}
                  className="group flex cursor-pointer items-start gap-4 rounded-xl px-3 py-4 hover:bg-muted"
                >
                  <Icon
                    className="mt-0.5 size-[19px] text-muted-foreground transition-colors group-hover:text-primary"
                    strokeWidth={1.7}
                  />

                  <div>
                    <p className="text-sm font-medium">{item.title}</p>

                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </NavigationMenuLink>
              );
            })}
          </div>

          {/* Learning */}
          <div className="bg-muted p-7">
            <User
              className="size-5 text-primary"
              strokeWidth={1.7}
            />

            <p className="mt-5 text-sm font-semibold">
              Write with confidence.
            </p>

            <p className="mt-2 text-xs leading-5 text-muted-foreground">
              Learn how to make your cover letter relevant, concise, and
              memorable.
            </p>

            <Link
              href="/learning"
              className="mt-5 inline-flex cursor-pointer text-xs font-semibold text-primary hover:text-primary/80"
            >
              Explore guides →
            </Link>
          </div>
        </div>
      </div>
    </NavigationMenuContent>
  );
}