import Image from "next/image";
import { Sparkles, ArrowUpRight } from "lucide-react";

interface ResumePreviewProps {
  image: string;
  label: string;
}

export default function ResumePreview({
  image,
  label,
}: ResumePreviewProps) {
  return (
    <div className="group relative flex min-h-[560px] items-center justify-center rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white via-slate-50/50 to-slate-100/50 p-6 sm:p-10 shadow-xl shadow-slate-200/50">
      
      {/* Decorative Glows */}
      <div className="pointer-events-none absolute -top-12 -right-12 h-64 w-64 rounded-full bg-emerald-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-sky-400/15 blur-3xl" />

      {/* Floating Badge */}
      <div className="absolute top-5 left-5 z-20 hidden items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/90 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-md sm:flex">
        <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
        <span>{label}</span>
      </div>

      {/* Frame / Preview Document */}
      <div className="relative z-10 w-full max-w-[430px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-900/10 transition-transform duration-500 ease-out group-hover:scale-[1.01]">
        <div className="overflow-hidden rounded-xl bg-slate-50">
          <Image
            src={image}
            alt={label}
            width={600}
            height={800}
            className="h-auto max-h-[540px] w-full object-contain transition-opacity duration-300"
            priority
          />
        </div>
      </div>
    </div>
  );
}