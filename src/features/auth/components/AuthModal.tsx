"use client";

import { useState } from "react";
import { ArrowLeft, ShieldCheck, KeyRound, UserCheck } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import LoginForm from "@/features/auth/components/LoginForm";
import SignupForm from "@/features/auth/components/SignupForm";
import ForgotPasswordForm from "@/features/auth/components/ForgotPasswordForm";

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#0A66C2">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.95 0-1.72.78-1.72 1.73s.77 1.73 1.72 1.73 1.73-.78 1.73-1.73-.78-1.73-1.73-1.73Z" />
    </svg>
  );
}

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultMode?: "signin" | "signup";
}

export default function AuthModal({
  open,
  onOpenChange,
  defaultMode = "signin",
}: AuthModalProps) {
  const [view, setView] = useState<"signin" | "signup" | "forgot">(defaultMode);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[420px] gap-0 overflow-hidden rounded-2xl border border-border bg-card p-0 shadow-2xl transition-all duration-200">
        {/* Header Bar */}
        <div className="border-b border-border bg-muted/25 px-6 pb-4 pt-5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary shadow-xs">
              {view === "signin" ? (
                <KeyRound className="h-4.5 w-4.5" />
              ) : (
                <UserCheck className="h-4.5 w-4.5" />
              )}
            </div>
            <div>
              <DialogTitle className="text-sm font-bold tracking-tight text-foreground">
                {view === "signin" && "Sign In to MiamiResume"}
                {view === "signup" && "Create Free Account"}
                {view === "forgot" && "Reset Password"}
              </DialogTitle>
              <p className="mt-0.5 text-[11px] text-muted-foreground">
                {view === "signin" && "Access your saved resumes and live scores"}
                {view === "signup" && "Build, tailor, and export unlimited resumes"}
                {view === "forgot" && "Enter your email to receive a recovery link"}
              </p>
            </div>
          </div>

          {/* Tab Switcher with Indicator */}
          {view !== "forgot" && (
            <div className="relative mt-4 flex rounded-xl border border-border bg-background/80 p-1 shadow-xs backdrop-blur-sm">
              <button
                type="button"
                onClick={() => setView("signin")}
                className={`relative z-10 flex-1 rounded-lg py-1 text-xs font-semibold transition-all duration-150 ${
                  view === "signin"
                    ? "bg-card text-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setView("signup")}
                className={`relative z-10 flex-1 rounded-lg py-1 text-xs font-semibold transition-all duration-150 ${
                  view === "signup"
                    ? "bg-card text-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                New Account
              </button>
            </div>
          )}
        </div>

        {/* Modal Form Content with Smooth Fade Transitions */}
        <div className="space-y-3.5 p-5 transition-all duration-200 sm:p-6">
          {view !== "forgot" && (
            <>
              {/* OAuth Providers */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  className="flex h-9 items-center justify-center gap-2 rounded-xl border border-border bg-background px-3 text-xs font-medium text-foreground transition-colors hover:border-foreground/30 hover:bg-muted"
                >
                  <GoogleIcon className="h-3.5 w-3.5 shrink-0" />
                  <span>Google</span>
                </button>

                <button
                  type="button"
                  className="flex h-9 items-center justify-center gap-2 rounded-xl border border-border bg-background px-3 text-xs font-medium text-foreground transition-colors hover:border-foreground/30 hover:bg-muted"
                >
                  <LinkedinIcon className="h-3.5 w-3.5 shrink-0" />
                  <span>LinkedIn</span>
                </button>
              </div>

              {/* Compact Divider */}
              <div className="relative my-1 flex items-center justify-center">
                <div className="h-px w-full bg-border" />
                <span className="absolute bg-card px-2 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  or email
                </span>
              </div>
            </>
          )}

          {/* Form Sections */}
          <div className="w-full text-left transition-opacity duration-200">
            {view === "signin" && (
              <div className="animate-in fade-in-50 duration-200">
                <LoginForm
                  showSocial={false}
                  onSuccess={() => onOpenChange(false)}
                  onForgotPasswordClick={() => setView("forgot")}
                />
              </div>
            )}

            {view === "signup" && (
              <div className="animate-in fade-in-50 duration-200">
                <SignupForm
                  showSocial={false}
                  onSuccess={() => onOpenChange(false)}
                />
              </div>
            )}

            {view === "forgot" && (
              <div className="space-y-3 animate-in fade-in-50 duration-200">
                <button
                  type="button"
                  onClick={() => setView("signin")}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition hover:text-foreground"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Back to Sign In</span>
                </button>
                <ForgotPasswordForm />
              </div>
            )}
          </div>

          {/* Security Footer */}
          <div className="flex items-center justify-center gap-1.5 pt-1 text-[11px] text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" />
            <span>256-bit encrypted authentication</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}