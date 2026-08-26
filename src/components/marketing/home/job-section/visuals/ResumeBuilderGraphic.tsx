import { Sparkles, Languages, Check, ArrowRight, Wand2 } from "lucide-react";

export default function ResumeBuilderGraphic() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-2.5">
        <div className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/90 px-3 py-1.5 text-xs font-medium text-slate-300">
          <Languages className="h-3.5 w-3.5 text-sky-400" />
          <span>Translate Resume</span>
        </div>
        <div className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/90 px-3 py-1.5 text-xs font-medium text-slate-300">
          <Sparkles className="h-3.5 w-3.5 text-amber-400" />
          <span>Improve Text</span>
        </div>
        <div className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/90 px-3 py-1.5 text-xs font-medium text-slate-300">
          <Wand2 className="h-3.5 w-3.5 text-emerald-400" />
          <span>Add Section</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-12 sm:items-center">
        <div className="sm:col-span-6">
          <div className="rounded-2xl border border-slate-700/80 bg-slate-800/95 p-4 shadow-xl">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-rose-500 animate-ping" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-rose-400">
                Spelling & Tone Fix
              </span>
            </div>
            <p className="mt-2 text-xs text-slate-400">Did you mean to refine this term?</p>
            <div className="mt-3 flex items-center justify-between gap-2 rounded-xl bg-slate-900/80 p-2.5 text-xs">
              <span className="line-through text-slate-500">Enginiering</span>
              <ArrowRight className="h-3.5 w-3.5 text-slate-600" />
              <span className="font-semibold text-emerald-400">Engineering</span>
            </div>
            <div className="mt-3 flex justify-end">
              <button className="rounded-lg bg-emerald-500 px-3 py-1 text-xs font-semibold text-slate-950 hover:bg-emerald-400">
                Apply Fix
              </button>
            </div>
          </div>
        </div>

        <div className="sm:col-span-6">
          <div className="rounded-2xl border border-slate-200/90 bg-white p-5 text-slate-900 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">
                  Experience
                </p>
                <h4 className="text-sm font-bold text-slate-900">Solutions Architect</h4>
              </div>
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                Parsed
              </span>
            </div>
            <ul className="mt-3 space-y-1.5 text-xs text-slate-700">
              <li className="flex items-start gap-1.5">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                <span>Modernized cloud migration pipeline reducing latency by 35%.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}