import type { ReactNode } from "react";

import AuthHeader from "./AuthHeader";

interface AuthShellProps {
  children: ReactNode;
}

export default function AuthShell({
  children,
}: AuthShellProps) {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-stone-50">

      {/* Ambient Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-32 -top-32 size-96 rounded-full bg-emerald-100/40 blur-3xl" />

        <div className="absolute -bottom-32 -right-32 size-96 rounded-full bg-amber-100/50 blur-3xl" />
      </div>

      {/* Decorative Image */}
      <img
        src="/images/authImage.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[-40px] top-1/2 z-0 hidden h-[55%] w-auto -translate-y-1/2 object-contain opacity-50 lg:block"
      />

      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex h-20 max-w-7xl items-center px-6">
          <AuthHeader />
        </div>
      </header>

      {/* Main */}
      <main className="relative z-10 flex min-h-dvh items-center justify-center px-5 py-24">
        <div className="w-full max-w-md">

          {/* Auth Card */}
          <div className="rounded-3xl border border-stone-200/80 bg-white/90 p-7 shadow-xl shadow-stone-900/[0.06] backdrop-blur-xl sm:p-8">
            {children}
          </div>

          {/* Trust Text */}
          <p className="mt-5 text-center text-xs text-stone-500">
            Secure authentication powered by MiamiResumeWorks
          </p>

        </div>
      </main>

    </div>
  );
}