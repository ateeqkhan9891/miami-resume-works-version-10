import { Button } from "@/components/ui/button";
import { ArrowUpRight, CheckCircle2, Lock, Star, Sparkles } from "lucide-react";

export default function HeroContent() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-5">
        {/* <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50/80 px-3.5 py-1 text-xs font-semibold text-emerald-800 backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
          <span>ATS-Verified Designs</span>
        </div> */}

        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Professional Resume{" "}
          <span className="relative inline-block text-emerald-600 underline decoration-emerald-400/40 decoration-wavy underline-offset-8">
            Templates
          </span>
        </h1>

        <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Start with a recruiter-approved, ATS-friendly template, then let the AI builder tailor your content in minutes. Download high-res PDFs ready for instant submission.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3.5">
        <Button
          size="lg"
          className="h-12 cursor-pointer rounded-xl bg-emerald-600 px-7 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition-all hover:bg-emerald-700"
        >
          Import Existing Resume
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="h-12 gap-1.5 cursor-pointer rounded-xl border-slate-300 bg-white px-6 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:text-slate-900"
        >
          <span>Help Me Choose</span>
          <ArrowUpRight className="h-4 w-4 text-slate-400" />
        </Button>
      </div>

      <div className="flex items-center gap-2 text-xs text-slate-500">
        <Lock className="h-3.5 w-3.5 text-emerald-600" />
        <span>We never share your data or use it for AI model training.</span>
      </div>

      <div className="flex items-center gap-4 pt-2">
        <div className="flex -space-x-2 overflow-hidden">
          <img
            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
            alt="User avatar"
          />
          <img
            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
            alt="User avatar"
          />
          <img
            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
            alt="User avatar"
          />
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-xs font-medium text-slate-600">
            Trusted by over <strong className="text-slate-900">45,000+</strong> candidates
          </p>
        </div>
      </div>
    </div>
  );
}