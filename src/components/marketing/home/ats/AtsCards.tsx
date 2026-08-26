import { UserCheck, Briefcase, Layers, FileCheck, Check } from "lucide-react";

export default function AtsCards() {
  const cards = [
    {
      icon: UserCheck,
      title: "Readable contact information",
      detail: "Clean email, phone & link formatting",
      badge: "100% Parsed",
      offsetClass: "translate-x-0",
    },
    {
      icon: Briefcase,
      title: "Full experience section parsing",
      detail: "Roles, dates & bullet points mapped",
      badge: "ATS Verified",
      offsetClass: "md:translate-x-6",
    },
    {
      icon: Layers,
      title: "Optimized skills taxonomy",
      detail: "Hard & soft skills indexed accurately",
      badge: "High Match",
      offsetClass: "md:translate-x-12",
    },
    {
      icon: FileCheck,
      title: "Standard section titles",
      detail: "Universal headers recognized by all ATS",
      badge: "Standardized",
      offsetClass: "md:translate-x-18",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {cards.map((card, idx) => {
        const Icon = card.icon;
        return (
          <div
            key={idx}
            className={`group flex items-center justify-between gap-4 rounded-xl border border-slate-200/90 bg-white p-4 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-slate-300 hover:shadow-md ${card.offsetClass}`}
          >
            <div className="flex items-center gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-slate-900">
                  {card.title}
                </p>
                <p className="text-xs text-slate-500">
                  {card.detail}
                </p>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
              <Check className="h-3.5 w-3.5 stroke-[2.5]" />
              <span>{card.badge}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}