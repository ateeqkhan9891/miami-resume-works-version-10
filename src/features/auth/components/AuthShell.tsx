import type { ReactNode } from "react";
import AuthHeader from "./AuthHeader";

interface AuthShellProps {
  children: ReactNode;
}

export default function AuthShell({ children }: AuthShellProps) {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-20 -top-20 size-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 size-80 rounded-full bg-accent/40 blur-3xl" />
      </div>

      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex h-16 max-w-7xl items-center px-6">
          <AuthHeader />
        </div>
      </header>

      <main className="relative z-10 flex min-h-dvh items-center justify-center px-4 py-20">
        <div className="w-full max-w-[420px]">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-xl shadow-foreground/[0.02] sm:p-7">
            {children}
          </div>

          <p className="mt-4 text-center text-[11px] text-muted-foreground">
            Protected by 256-bit secure encryption
          </p>
        </div>
      </main>
    </div>
  );
}