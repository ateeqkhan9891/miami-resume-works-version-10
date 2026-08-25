import type { ReactNode } from "react";

import AuthHeader from "./AuthHeader";

export default function AuthShell({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-gradient-to-br from-stone-50 via-background to-amber-50/60">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(217,190,150,0.16),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(180,150,110,0.12),transparent_35%)]" />

      <img
        src="/images/authImage.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[-40px] top-1/2 z-0 h-[55%] w-auto -translate-y-1/2 object-contain opacity-65"
      />

      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex h-20 max-w-7xl items-center px-6">
          <AuthHeader />
        </div>
      </header>

      <main className="relative z-10 flex min-h-dvh items-center justify-center px-6 py-24">
        <div className="w-full max-w-md rounded-3xl border border-white/70 bg-white/80 p-8 shadow-2xl shadow-stone-900/10 backdrop-blur-2xl">
          {children}
        </div>
      </main>
    </div>
  );
}