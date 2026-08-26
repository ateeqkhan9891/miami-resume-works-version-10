import { ChevronRight } from "lucide-react";
import { RESUME_DATA } from "./resume-data";

interface ResumeTabsProps {
  activeId: string;
  onSelect: (id: string) => void;
}

export default function ResumeTabs({
  activeId,
  onSelect,
}: ResumeTabsProps) {
  return (
    <div className="flex flex-col gap-3">
      {RESUME_DATA.map((item) => {
        const Icon = item.icon;
        const isActive = activeId === item.id;

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect(item.id)}
            className={`group relative flex w-full items-center justify-between rounded-2xl border p-4 text-left transition-all duration-300 ${
              isActive
                ? "border-emerald-500/40 bg-white shadow-lg shadow-emerald-500/5 ring-1 ring-emerald-500/20"
                : "border-slate-200/80 bg-white/70 hover:border-slate-300 hover:bg-white hover:shadow-sm"
            }`}
          >
            <div className="flex items-center gap-4">
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
                    : "bg-slate-100 text-slate-600 group-hover:bg-slate-200/70 group-hover:text-slate-900"
                }`}
              >
                <Icon className="h-5 w-5" />
              </div>

              <div>
                <p
                  className={`text-sm font-semibold transition-colors ${
                    isActive ? "text-slate-900" : "text-slate-700 group-hover:text-slate-900"
                  }`}
                >
                  {item.label}
                </p>
                <p className="text-xs text-slate-500">
                  {item.description || "ATS-optimized layout & structure"}
                </p>
              </div>
            </div>

            <ChevronRight
              className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                isActive
                  ? "translate-x-0.5 text-emerald-600"
                  : "text-slate-400 opacity-0 group-hover:opacity-100"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}