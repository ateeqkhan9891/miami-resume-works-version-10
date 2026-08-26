import { JobSearchTab } from "./job-search-data";

interface JobSearchTabContentProps {
  tab: JobSearchTab;
}

export default function JobSearchTabContent({ tab }: JobSearchTabContentProps) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3.5">
        <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {tab.title}
        </h3>
        <p className="text-base leading-relaxed text-slate-400">
          {tab.description}
        </p>
      </div>

      <div className="flex flex-col gap-5">
        {tab.features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div key={idx} className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/90 text-emerald-400 shadow-inner">
                <Icon className="h-5 w-5" />
              </div>
              <p className="pt-2 text-sm leading-snug font-medium text-slate-300">
                {feature.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}