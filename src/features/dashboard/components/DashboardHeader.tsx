"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Infinity, CircleFadingArrowUp  } from "lucide-react";
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
    <header className="sticky top-0 z-40 flex h-14 w-full shrink-0 items-center justify-between border-b border-border bg-card/95 px-5 backdrop-blur-md transition-colors sm:px-6">
      {/* Left Segment: Logo + Horizontal Nav */}
      <div className="flex h-full items-center gap-6 lg:gap-8">
        <Link
          href="/"
          aria-label="MiamiResumeWorks Home"
          className="group flex size-8 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary transition-all duration-200 hover:scale-105 hover:bg-primary/15"
        >
          <Infinity className="size-4.5 transition-transform duration-200 group-hover:rotate-12" strokeWidth={2.4} />
        </Link>

        <nav className="flex h-full items-center gap-1 overflow-x-auto no-scrollbar">
          {DASHBOARD_NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/dashboard" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative flex h-full items-center px-3 text-[13px] font-medium tracking-[-0.01em] transition-colors ${
                  isActive
                    ? "font-semibold text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute inset-x-2.5 bottom-0 h-[2px] rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Right Segment: Upgrade Button + User Menu */}
      <div className="flex items-center gap-2.5 sm:gap-3">
        <Link
          href="/pricing"
          className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-primary px-3.5 text-xs font-semibold text-primary-foreground shadow-xs transition-all duration-150 hover:opacity-90 active:scale-95"
        >
          <CircleFadingArrowUp  className="size-3.5 text-accent-warm" />
          <span>Upgrade</span>
        </Link>

        <div className="h-4 w-px bg-border" />

        <UserDropdownMenu />
      </div>
    </header>
  );
}