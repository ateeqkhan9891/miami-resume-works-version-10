import Link from "next/link";
import { Infinity } from "lucide-react";

export default function AuthHeader() {
  return (
    <Link
      href="/"
      aria-label="MiamiResumeWorks home"
      className="group inline-flex items-center gap-2.5 outline-none"
    >
      <span className="flex size-8 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary transition-transform duration-200 group-hover:scale-105">
        <Infinity className="size-4.5" strokeWidth={2.4} />
      </span>

      <span className="text-base font-semibold tracking-tight text-foreground">
        MiamiResumeWorks
      </span>
    </Link>
  );
}