import { CheckCircle2, AlertTriangle, ShieldCheck } from "lucide-react";

export default function ResumeCheckerGraphic() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-12">
        <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-800 bg-slate-950/60 p-6 text-center sm:col-span-5">
          <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-4 border-emerald-500/20 border-t-emerald-500">
            <span className="text-3xl font-bold text-white">94</span>
            <span className="text-xs text-slate-400">/100</span>
          </div>
          <p className="mt-3 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
            Ready to Apply
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:col-span-7">
          <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/80 p-3 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Keyword Optimization</span>
            </div>
            <span className="font-semibold text-emerald-400">98%</span>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/80 p-3 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Section Header Parsing</span>
            </div>
            <span className="font-semibold text-emerald-400">100%</span>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/80 p-3 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <AlertTriangle className="h-4 w-4 text-amber-400" />
              <span>Action Verbs Frequency</span>
            </div>
            <span className="font-semibold text-amber-400">3 Fixes</span>
          </div>
        </div>
      </div>
    </div>
  );
}