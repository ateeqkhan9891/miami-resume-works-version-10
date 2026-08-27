"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

import { signUpWithEmail } from "@/services/auth/auth.service";

import {
  signupSchema,
  type SignupFormData,
} from "@/lib/validations/auth";

export default function SignupForm() {
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

      if (result.session) {
        router.push("/dashboard");
        router.refresh();
      } else {
        router.push("/verify-email");
      }
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Unable to create your account. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-5">

      {/* Google */}
      <Button
        type="button"
        variant="outline"
        className="h-10 w-full cursor-pointer border-stone-200 bg-white font-medium shadow-none hover:bg-stone-50"
      >
        Continue with Google
      </Button>

      {/* Divider */}
      <div className="flex items-center gap-3">
        <Separator className="flex-1" />

        <span className="text-[11px] font-medium uppercase tracking-wider text-stone-400">
          Or
        </span>

        <Separator className="flex-1" />
      </div>

      {/* Error */}
      {error && (
        <p className="rounded-lg bg-destructive/10 px-3 py-2.5 text-sm text-destructive">
          {error}
        </p>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >

        {/* Full Name */}
        <div className="space-y-2">
          <Label
            htmlFor="fullName"
            className="text-sm font-medium text-stone-700"
          >
            Full name
          </Label>

          <Input
            id="fullName"
            type="text"
            placeholder="Kylie Jenner"
            autoComplete="name"
            disabled={isLoading}
            className="h-10 border-stone-200 bg-white shadow-none focus-visible:ring-emerald-500/30"
            {...register("fullName")}
          />

          {errors.fullName && (
            <p className="text-xs text-destructive">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label
            htmlFor="email"
            className="text-sm font-medium text-stone-700"
          >
            Email address
          </Label>

          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            disabled={isLoading}
            className="h-10 border-stone-200 bg-white shadow-none focus-visible:ring-emerald-500/30"
            {...register("email")}
          />

          {errors.email && (
            <p className="text-xs text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="space-y-2">
          <Label
            htmlFor="password"
            className="text-sm font-medium text-stone-700"
          >
            Password
          </Label>

          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              autoComplete="new-password"
              disabled={isLoading}
              className="h-10 border-stone-200 bg-white pr-10 shadow-none focus-visible:ring-emerald-500/30"
              {...register("password")}
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword((value) => !value)
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-stone-400 transition-colors hover:text-stone-700"
              aria-label={
                showPassword
                  ? "Hide password"
                  : "Show password"
              }
            >
              {showPassword ? (
                <EyeOff className="size-4" />
              ) : (
                <Eye className="size-4" />
              )}
            </button>
          </div>

          {errors.password && (
            <p className="text-xs text-destructive">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="space-y-2">
          <Label
            htmlFor="confirmPassword"
            className="text-sm font-medium text-stone-700"
          >
            Confirm password
          </Label>

          <div className="relative">
            <Input
              id="confirmPassword"
              type={
                showConfirmPassword
                  ? "text"
                  : "password"
              }
              placeholder="Confirm your password"
              autoComplete="new-password"
              disabled={isLoading}
              className="h-10 border-stone-200 bg-white pr-10 shadow-none focus-visible:ring-emerald-500/30"
              {...register("confirmPassword")}
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(
                  (value) => !value,
                )
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-stone-400 transition-colors hover:text-stone-700"
              aria-label={
                showConfirmPassword
                  ? "Hide password"
                  : "Show password"
              }
            >
              {showConfirmPassword ? (
                <EyeOff className="size-4" />
              ) : (
                <Eye className="size-4" />
              )}
            </button>
          </div>

          {errors.confirmPassword && (
            <p className="text-xs text-destructive">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="h-10 w-full cursor-pointer bg-emerald-600 font-medium text-white shadow-sm hover:bg-emerald-700"
          disabled={isLoading}
        >
          {isLoading
            ? "Creating account..."
            : "Create account"}
        </Button>
      </form>
    </div>
  );
}