import Link from "next/link";

export default function HeaderActions() {
  return (
    <div className="flex items-center gap-2">
      <Link
        href="/learning"
        className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-[#6F716C] transition-colors hover:bg-[#EDEAE2] hover:text-[#252525]"
      >
        Help
      </Link>

      <Link
        href="/login"
        className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-[#252525] transition-colors hover:bg-[#EDEAE2]"
      >
        Log in
      </Link>

      <Link
        href="/signup"
        className="cursor-pointer rounded-lg bg-[#214E3B] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#183D2D]"
      >
        Get Started
      </Link>
    </div>
  );
}