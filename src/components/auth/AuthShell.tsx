import type { ReactNode } from "react";

import AuthHeader from "./AuthHeader";

export default function AuthShell({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Soft ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-1/2 size-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[140px]" />
        <div className="absolute left-[15%] top-[20%] size-56 rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-[10%] right-[15%] size-64 rounded-full bg-primary/5 blur-[110px]" />
      </div>

      {/* Header */}
      <div className="absolute left-0 right-0 top-0 z-20">
        <div className="mx-auto flex h-20 max-w-7xl items-center px-6">
          <AuthHeader />
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 -z-0 hidden lg:block"
      >
      <svg
        viewBox="0 0 320 320"
        className="h-80 w-80 text-primary/10"
        fill="none"
      >
        <path
          d="M0 300C80 260 90 180 150 130C210 80 260 70 320 0"
          stroke="currentColor"
          strokeWidth="2"
        />

        <path
          d="M35 280C80 245 120 205 135 155C145 120 145 75 125 35"
          stroke="currentColor"
          strokeWidth="2"
        />

        <path
          d="M75 235C105 225 130 205 145 180"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    </div>

      
      <main className="relative z-10 flex min-h-screen items-center justify-center px-6 py-28">
        <div className="w-full max-w-md rounded-3xl border border-border/70 bg-card/85 p-8 shadow-xl shadow-black/5 backdrop-blur-2xl">
          {children}
        </div>
      </main>
    </div>
  );
}