

"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useRouter } from "next/navigation";

import { signUpWithEmail } from "@/services/auth/auth.service";

import {
  signupSchema,
  type SignupFormData,
} from "@/lib/validations/auth";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


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

    // console.log("SIGNUP SUCCESS:", result);

    if(result.session) {
        router.push("/dashboard");
        router.refresh();
        } else {
        router.push("/verify-email");
        }
  } catch (error) {
    console.error("SIGNUP ERROR:", error);

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
      <Button
        type="button"
        variant="outline"
        className="w-full cursor-pointer"
      >
        Continue with Google
      </Button>

      <div className="flex items-center gap-3">
        <Separator className="flex-1" />

        <span className="text-xs text-muted-foreground">OR</span>

        <Separator className="flex-1" />
      </div>

        {error && (
    <p className="rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">
        {error}
    </p>
    )}

      <form 
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full name</Label>

          <Input
            id="fullName"
            // name="fullName"
            type="text"
            placeholder="Kylie Jenner"
            autoComplete="name"
            {...register("fullName")}
          />

          {errors.fullName && (
            <p className="text-xs text-destructive">
                {errors.fullName.message}
            </p>
            )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email address</Label>

          <Input
            id="email"
            // name="email"
            type="email"
            placeholder="kyliejenner@.com"
            autoComplete="email"
            {...register("email")}
          />

          {errors.email && (
            <p className="text-xs text-destructive">
                {errors.email.message}
            </p>
            )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>

          <div className="relative">
            <Input
              id="password"
            //   name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              autoComplete="new-password"
              className="pr-10"
              {...register("password")}
            />

            {errors.password && (
                <p className="text-xs text-destructive">
                    {errors.password.message}
                </p>
                )}

            <button
              type="button"
              onClick={() => setShowPassword((value) => !value)}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-muted-foreground hover:text-foreground"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="size-4" />
              ) : (
                <Eye className="size-4" />
              )}
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm password</Label>

          <div className="relative">
            <Input
              id="confirmPassword"
            //   name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
              autoComplete="new-password"
              className="pr-10"
              {...register("confirmPassword")}
            />

            {errors.confirmPassword && (
                <p className="text-xs text-destructive">
                    {errors.confirmPassword.message}
                </p>
                )}

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword((value) => !value)
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-muted-foreground hover:text-foreground"
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
        </div>

        <Button
          type="submit"
          className="w-full cursor-pointer"
          disabled={isLoading}
        >
          {isLoading ? "Creating account..." : "Create account"}
        </Button>
      </form>
    </div>
  );
}