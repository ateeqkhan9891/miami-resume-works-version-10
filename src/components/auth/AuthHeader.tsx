import Link from "next/link";
import { Infinity } from "lucide-react";

export default function AuthHeader() {
  return (
    <Link
      href="/"
      aria-label="MiamiResumeWorks home"
      className="group inline-flex items-center gap-2.5"
    >
      <span className="flex size-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100 transition-transform duration-200 group-hover:scale-105">
        <Infinity
          className="size-5"
          strokeWidth={2.3}
        />
      </span>

      <span className="text-[17px] font-semibold tracking-[-0.02em] text-stone-900">
        MiamiResumeWorks
      </span>
    </Link>
  );
}