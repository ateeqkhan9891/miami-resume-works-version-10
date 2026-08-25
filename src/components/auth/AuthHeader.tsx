
import Link from "next/link";
import { Infinity } from "lucide-react";

export default function AuthHeader() {
  return (
    <Link
      href="/"
      aria-label="MiamiResumeWorks home"
      className="inline-flex items-center gap-2.5"
    >
      <Infinity
        className="size-8 text-primary"
        strokeWidth={2.2}
      />

      <span className="text-lg font-semibold tracking-tight">
        MiamiResumeWorks
      </span>
    </Link>
  );
}