"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  FilePenLine,
  LayoutTemplate,
  Lightbulb,
} from "lucide-react";

import {
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const products = [
  {
    title: "Cover Letter Builder",
    description: "Create and customize your cover letter.",
    href: "/cover-letters/builder",
    icon: FilePenLine,
  },
  {
    title: "Cover Letter Templates",
    description: "Start with a professional, proven layout.",
    href: "/cover-letters/templates",
    icon: LayoutTemplate,
  },
];

export default function CoverLettersMegaMenu() {
  return (
    <NavigationMenuContent>
      <div className="w-[720px] overflow-hidden rounded-xl border border-border bg-popover shadow-lg">
        <div className="grid grid-cols-[1.05fr_1fr]">
          {/* Featured */}
          <div className="border-r border-border p-6">
            <p className="text-xs font-medium text-muted-foreground">
              Cover Letters
            </p>

            <h3 className="mt-3 text-xl font-semibold tracking-tight">
              Make your application more personal.
            </h3>

            <p className="mt-2 max-w-[290px] text-sm leading-5 text-muted-foreground">
              Write a focused cover letter that explains why you're a strong
              fit for the role.
            </p>

            <Link
              href="/cover-letters/builder"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary"
            >
              Create a cover letter
              <ArrowUpRight className="size-3.5" />
            </Link>

            {/* Simple document preview */}
            <div className="mt-7 rounded-lg border border-border bg-muted/30 p-4">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <div>
                  <div className="h-1.5 w-20 rounded-full bg-foreground/20" />
                  <div className="mt-1.5 h-1 w-12 rounded-full bg-foreground/10" />
                </div>

                <div className="h-5 w-5 rounded-full border border-border bg-background" />
              </div>

              <div className="mt-4 space-y-2">
                <div className="h-1 w-full rounded-full bg-foreground/10" />
                <div className="h-1 w-[92%] rounded-full bg-foreground/10" />
                <div className="h-1 w-[82%] rounded-full bg-foreground/10" />
              </div>

              <div className="mt-4 space-y-2">
                <div className="h-1 w-full rounded-full bg-foreground/10" />
                <div className="h-1 w-[88%] rounded-full bg-foreground/10" />
                <div className="h-1 w-[70%] rounded-full bg-foreground/10" />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="p-6">
            <p className="mb-3 text-xs font-medium text-muted-foreground">
              Create
            </p>

            <div className="space-y-1">
              {products.map((product) => {
                const Icon = product.icon;

                return (
                  <NavigationMenuLink
                    key={product.title}
                    href={product.href}
                    className="group flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-muted"
                  >
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-background">
                      <Icon
                        className="size-4 text-muted-foreground group-hover:text-foreground"
                        strokeWidth={1.7}
                      />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-medium">
                        {product.title}
                      </p>

                      <p className="mt-0.5 text-xs leading-5 text-muted-foreground">
                        {product.description}
                      </p>
                    </div>

                    <ArrowUpRight className="ml-auto size-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </NavigationMenuLink>
                );
              })}
            </div>

            <div className="my-5 border-t border-border" />

            <p className="mb-3 text-xs font-medium text-muted-foreground">
              Resources
            </p>

            <NavigationMenuLink
              href="/learning/cover-letters"
              className="group flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-muted"
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-background">
                <Lightbulb
                  className="size-4 text-muted-foreground group-hover:text-foreground"
                  strokeWidth={1.7}
                />
              </div>

              <div>
                <p className="text-sm font-medium">
                  Cover Letter Guide
                </p>

                <p className="mt-0.5 text-xs leading-5 text-muted-foreground">
                  Learn what to include and how to structure it.
                </p>
              </div>

              <ArrowUpRight className="ml-auto mt-1 size-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </NavigationMenuLink>

            <Link
              href="/learning"
              className="mt-3 inline-flex px-3 text-xs font-medium text-muted-foreground hover:text-foreground"
            >
              View all career resources →
            </Link>
          </div>
        </div>
      </div>
    </NavigationMenuContent>
  );
}