import { MoreHorizontal, Building2 } from "lucide-react";

export default function JobTrackerGraphic() {
  const columns = [
    { title: "Applied (4)", company: "Stripe", role: "Frontend Dev", date: "2d ago" },
    { title: "Interview (2)", company: "Vercel", role: "Fullstack Eng", date: "Tomorrow" },
    { title: "Offer (1)", company: "Supabase", role: "Tech Lead", date: "$165k" },
  ];

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      {columns.map((col, idx) => (
        <div key={idx} className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-3.5">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
            {col.title}
          </span>
          <div className="rounded-xl border border-slate-700/80 bg-slate-900/90 p-3 shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Building2 className="h-3.5 w-3.5 text-slate-400" />
                <span className="text-xs font-semibold text-white">{col.company}</span>
              </div>
              <MoreHorizontal className="h-3.5 w-3.5 text-slate-500" />
            </div>
            <p className="mt-2 text-[11px] text-slate-400">{col.role}</p>
            <div className="mt-3 flex justify-between text-[10px] text-emerald-400 font-medium">
              <span>Status</span>
              <span>{col.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}