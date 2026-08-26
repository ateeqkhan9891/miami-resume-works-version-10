
import { JobSearchTab } from "./job-search-data";

interface JobSearchTabsNavProps {
  tabs: JobSearchTab[];
  activeTabId: string;
  onSelect: (id: string) => void;
}

export default function JobSearchTabsNav({
  tabs,
  activeTabId,
  onSelect,
}: JobSearchTabsNavProps) {
  return (
    <div className="no-scrollbar flex max-w-full items-center gap-2 overflow-x-auto rounded-full border border-slate-800/80 bg-slate-900/60 p-1.5 backdrop-blur-xl">
      {tabs.map((tab) => {
        const isActive = activeTabId === tab.id;

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onSelect(tab.id)}
            className={`shrink-0 rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide transition-all duration-300 sm:text-sm ${
              isActive
                ? "bg-emerald-400 text-slate-950 shadow-md shadow-emerald-400/20"
                : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}