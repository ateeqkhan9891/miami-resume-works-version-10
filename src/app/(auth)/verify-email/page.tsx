import Link from "next/link";

export default function VerifyEmailPage() {
  return (
    <div className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-4">
      {/* Soft ambient glow */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
      />

      {/* Confirmation card */}
      <div className="w-full max-w-md rounded-3xl border border-border/70 bg-card/80 p-8 text-center shadow-xl shadow-black/5 backdrop-blur-xl">
        {/* Icon */}
        <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="size-6"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75 12 12l8.25-5.25M4.5 5.25h15A1.5 1.5 0 0 1 21 6.75v10.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.25V6.75a1.5 1.5 0 0 1 1.5-1.5Z"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-semibold tracking-tight">
          Check your inbox
        </h1>

        <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
          We sent a verification link to your email address.
          Click the link to activate your account.
        </p>

        <Link
          href="/login"
          className="mt-7 inline-flex h-10 w-full items-center justify-center rounded-xl bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 cursor-pointer"
        >
          Back to sign in
        </Link>

        <p className="mt-5 text-xs text-muted-foreground">
          Didn&apos;t receive it? Check your spam or junk folder.
        </p>
      </div>
    </div>
  );
}