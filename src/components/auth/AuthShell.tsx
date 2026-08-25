import type { ReactNode } from "react";

import AuthHeader from "./AuthHeader";

export default function AuthShell({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto grid min-h-screen max-w-[1440px] lg:grid-cols-2">
        {/* Brand panel */}
        <section className="hidden bg-primary p-10 text-primary-foreground lg:flex lg:flex-col lg:justify-between">
          <AuthHeader />

          <div className="max-w-lg pb-16">
            <p className="mb-4 text-sm font-medium text-primary-foreground/70">
              Your career, presented better.
            </p>

            <h1 className="text-5xl font-semibold tracking-tight">
              Build a resume that gets noticed.
            </h1>

            <p className="mt-6 max-w-md text-base leading-7 text-primary-foreground/70">
              Create polished resumes, cover letters, and career documents
              with tools designed to help you move forward.
            </p>
          </div>

          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} MiamiResumeWorks
          </p>
        </section>

        {/* Auth content */}
        <section className="flex min-h-screen flex-col">
          <div className="flex justify-end p-6 lg:hidden">
            <AuthHeader />
          </div>

          <div className="flex flex-1 items-center justify-center px-6 py-12">
            <div className="w-full max-w-md">
              {children}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}