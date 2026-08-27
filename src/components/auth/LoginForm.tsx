"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

import { signInWithEmail } from "@/services/auth/auth.service";
import {
  loginSchema,
  type LoginFormData,
} from "@/lib/validations/auth";

export default function LoginForm() {
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

      router.push("/dashboard");
      router.refresh();
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Unable to sign in. Please try again.",
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

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >

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
              placeholder="Enter your password"
              autoComplete="current-password"
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

        {/* Forgot Password */}
        <div className="flex justify-end">
          <Link
            href="/forgot-password"
            className="text-xs font-medium text-stone-500 transition-colors hover:text-emerald-600"
          >
            Forgot password?
          </Link>
        </div>

        {/* Server Error */}
        {error && (
          <p className="rounded-lg bg-destructive/10 px-3 py-2.5 text-sm text-destructive">
            {error}
          </p>
        )}

        {/* Submit */}
        <Button
          type="submit"
          className="h-10 w-full cursor-pointer bg-emerald-600 font-medium text-white shadow-sm hover:bg-emerald-700"
          disabled={isLoading}
        >
          {isLoading ? "Signing in..." : "Sign in"}
        </Button>
      </form>
    </div>
  );
}