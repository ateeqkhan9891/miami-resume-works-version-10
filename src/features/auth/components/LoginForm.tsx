"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

import { signInWithEmail } from "@/features/auth/services/auth.service";
import {
  loginSchema,
  type LoginFormData,
} from "@/features/auth/schemas/auth";

interface LoginFormProps {
  onSuccess?: () => void;
  onForgotPasswordClick?: () => void;
  showSocial?: boolean;
}

export default function LoginForm({
  onSuccess,
  onForgotPasswordClick,
  showSocial = true,
}: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      await signInWithEmail(data.email, data.password);

      if (onSuccess) {
        onSuccess();
      } else {
        router.push("/dashboard");
        router.refresh();
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to sign in. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      {showSocial && (
        <>
          <Button
            type="button"
            variant="outline"
            className="h-9 w-full rounded-xl border-border bg-card text-xs font-medium text-foreground shadow-none hover:bg-muted"
          >
            Continue with Google
          </Button>

          <div className="flex items-center gap-3">
            <Separator className="flex-1" />
            <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              Or
            </span>
            <Separator className="flex-1" />
          </div>
        </>
      )}

      {error && (
        <div className="rounded-lg border border-destructive/20 bg-destructive/10 p-2.5 text-center text-xs text-destructive">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5">
        <div className="space-y-1.5">
          <Label htmlFor="login-email" className="text-[11px] font-medium text-muted-foreground">
            Email address
          </Label>
          <Input
            id="login-email"
            type="email"
            placeholder="kyliejenner.com"
            autoComplete="email"
            disabled={isLoading}
            className="h-9 rounded-xl border-border bg-background text-xs shadow-none placeholder:text-muted-foreground/60 focus-visible:ring-1 focus-visible:ring-primary"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-[10px] text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <Label htmlFor="login-password" className="text-[11px] font-medium text-muted-foreground">
              Password
            </Label>
            {onForgotPasswordClick ? (
              <button
                type="button"
                onClick={onForgotPasswordClick}
                className="text-[11px] font-medium text-primary underline-offset-2 hover:underline"
              >
                Forgot password?
              </button>
            ) : (
              <Link
                href="/forgot-password"
                className="text-[11px] font-medium text-primary underline-offset-2 hover:underline"
              >
                Forgot password?
              </Link>
            )}
          </div>
          <div className="relative">
            <Input
              id="login-password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              autoComplete="current-password"
              disabled={isLoading}
              className="h-9 rounded-xl border-border bg-background pr-9 text-xs shadow-none placeholder:text-muted-foreground/60 focus-visible:ring-1 focus-visible:ring-primary"
              {...register("password")}
            />
            <button
              type="button"
              onClick={() => setShowPassword((value) => !value)}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className="size-3.5" /> : <Eye className="size-3.5" />}
            </button>
          </div>
          {errors.password && (
            <p className="text-[10px] text-destructive">{errors.password.message}</p>
          )}
        </div>

        <Button
          type="submit"
          className="h-9 w-full rounded-xl bg-primary text-xs font-semibold text-primary-foreground shadow-xs transition hover:opacity-95 active:scale-[0.99]"
          disabled={isLoading}
        >
          {isLoading ? <Loader2 className="size-3.5 animate-spin" /> : "Sign in"}
        </Button>
      </form>
    </div>
  );
}