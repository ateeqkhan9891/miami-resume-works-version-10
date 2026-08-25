import Link from "next/link";
import { Infinity } from "lucide-react";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="MiamiResumeWorks home"
      className="flex shrink-0 items-center gap-2.5"
    >
      <Infinity
        className="size-9 text-[#214E3B]"
        strokeWidth={2.2}
      />

      <span className="text-lg font-semibold tracking-tight text-[#252525]">
        MiamiResumeWorks
      </span>
    </Link>
  );
}