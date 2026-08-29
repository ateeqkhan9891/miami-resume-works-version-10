"use client";

import { useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

import { signUpWithEmail } from "@/features/auth/services/auth.service";
import {
  signupSchema,
  type SignupFormData,
} from "@/features/auth/schemas/auth";

interface SignupFormProps {
  onSuccess?: () => void;
  showSocial?: boolean;
}

export default function SignupForm({
  onSuccess,
  showSocial = true,
}: SignupFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await signUpWithEmail(
        data.fullName,
        data.email,
        data.password,
      );

      if (onSuccess) {
        onSuccess();
      } else if (result.session) {
        router.push("/dashboard");
        router.refresh();
      } else {
        router.push("/verify-email");
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to create your account. Please try again.",
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

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div className="space-y-1">
          <Label htmlFor="signup-name" className="text-[11px] font-medium text-muted-foreground">
            Full name
          </Label>
          <Input
            id="signup-name"
            type="text"
            placeholder="Kylie Jenner"
            autoComplete="name"
            disabled={isLoading}
            className="h-9 rounded-xl border-border bg-background text-xs shadow-none placeholder:text-muted-foreground/60 focus-visible:ring-1 focus-visible:ring-primary"
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="text-[10px] text-destructive">{errors.fullName.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <Label htmlFor="signup-email" className="text-[11px] font-medium text-muted-foreground">
            Email address
          </Label>
          <Input
            id="signup-email"
            type="email"
            placeholder="kyliejener@gmail.com"
            autoComplete="email"
            disabled={isLoading}
            className="h-9 rounded-xl border-border bg-background text-xs shadow-none placeholder:text-muted-foreground/60 focus-visible:ring-1 focus-visible:ring-primary"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-[10px] text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1">
            <Label htmlFor="signup-password" className="text-[11px] font-medium text-muted-foreground">
              Password
            </Label>
            <div className="relative">
              <Input
                id="signup-password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                autoComplete="new-password"
                disabled={isLoading}
                className="h-9 rounded-xl border-border bg-background pr-8 text-xs shadow-none placeholder:text-muted-foreground/60 focus-visible:ring-1 focus-visible:ring-primary"
                {...register("password")}
              />
              <button
                type="button"
                onClick={() => setShowPassword((value) => !value)}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="size-3" /> : <Eye className="size-3" />}
              </button>
            </div>
            {errors.password && (
              <p className="text-[10px] text-destructive">{errors.password.message}</p>
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="signup-confirm-password" className="text-[11px] font-medium text-muted-foreground">
              Confirm
            </Label>
            <div className="relative">
              <Input
                id="signup-confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••"
                autoComplete="new-password"
                disabled={isLoading}
                className="h-9 rounded-xl border-border bg-background pr-8 text-xs shadow-none placeholder:text-muted-foreground/60 focus-visible:ring-1 focus-visible:ring-primary"
                {...register("confirmPassword")}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((value) => !value)}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
              >
                {showConfirmPassword ? <EyeOff className="size-3" /> : <Eye className="size-3" />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-[10px] text-destructive">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>

        <Button
          type="submit"
          className="mt-1 h-9 w-full rounded-xl bg-primary text-xs font-semibold text-primary-foreground shadow-xs transition hover:opacity-95 active:scale-[0.99]"
          disabled={isLoading}
        >
          {isLoading ? <Loader2 className="size-3.5 animate-spin" /> : "Create account"}
        </Button>
      </form>
    </div>
  );
}