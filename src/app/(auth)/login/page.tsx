import Link from "next/link";

import LoginForm from "@/features/auth/components/LoginForm";

export default function LoginPage() {
  return (
    <div>
      {/* Heading */}
      <div className="mb-7">
        <h1 className="text-2xl font-semibold tracking-tight text-stone-950">
          Welcome back
        </h1>

        <p className="mt-2 text-sm leading-6 text-stone-500">
          Sign in to continue to your MiamiResumeWorks account.
        </p>
      </div>

      {/* Form */}
      <LoginForm />

      {/* Signup Link */}
      <p className="mt-7 text-center text-sm text-stone-500">
        Don&apos;t have an account?{" "}
        <Link
          href="/signup"
          className="font-medium text-emerald-600 transition-colors hover:text-emerald-700 hover:underline"
        >
          Create one
        </Link>
      </p>
    </div>
  );
}