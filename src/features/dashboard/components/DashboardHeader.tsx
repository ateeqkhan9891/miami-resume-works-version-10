"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Infinity, CircleFadingArrowUp } from "lucide-react";
import UserDropdownMenu from "./UserDropdownMenu";

const DASHBOARD_NAV_LINKS = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Documents", href: "/documents" },
  { label: "Find Jobs", href: "/jobs" },
  { label: "My Saved Jobs", href: "/saved-jobs" },
  { label: "Prepare for Interview", href: "/interview-prep" },
  { label: "LinkedIn Coach", href: "/linkedin-coach" },
];

export default function DashboardHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 flex h-16 w-full shrink-0 items-center justify-between border-b border-border bg-card/95 px-6 backdrop-blur-md transition-colors sm:px-8">
      {/* Left Segment: Logo + Horizontal Nav */}
      <div className="flex h-full items-center gap-8 lg:gap-10">
        <Link
          href="/"
          aria-label="MiamiResumeWorks Home"
          className="group flex size-9 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary shadow-xs transition-all duration-200 hover:scale-105 hover:bg-primary/15"
        >
          <Infinity
            className="size-5 transition-transform duration-200 group-hover:rotate-12"
            strokeWidth={2.3}
          />
        </Link>

        <nav className="flex h-full items-center gap-1.5 overflow-x-auto no-scrollbar">
          {DASHBOARD_NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/dashboard" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative flex h-full items-center rounded-md px-3.5 text-[13.5px] font-medium tracking-tight transition-colors hover:text-foreground ${
                  isActive
                    ? "font-semibold text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                <span className="relative z-10 py-1">{link.label}</span>

                {/* Subtle Hover Pill */}
                <span className="absolute inset-x-1.5 inset-y-3.5 -z-0 rounded-lg bg-muted/0 transition-colors group-hover:bg-muted/60" />

                {/* Active Indicator Line */}
                {isActive && (
                  <span className="absolute inset-x-2 bottom-0 h-[2.5px] rounded-t-full bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Right Segment: Upgrade Button + User Menu */}
      <div className="flex items-center gap-3 sm:gap-4">
        <Link
          href="/pricing"
          className="inline-flex h-9 items-center gap-2 rounded-xl bg-primary px-4 text-xs font-semibold text-primary-foreground shadow-xs transition-all duration-150 hover:opacity-90 active:scale-95"
        >
          <CircleFadingArrowUp className="size-4 text-accent-warm" strokeWidth={2.2} />
          <span>Upgrade</span>
        </Link>

        <div className="h-5 w-px bg-border" />

        <UserDropdownMenu />
      </div>
    </header>
  );
}