
import { CheckCircle2 } from "lucide-react";
import type { ChecklistItem } from "../types";

const CHECKLIST_ITEMS: ChecklistItem[] = [
  { id: "1", label: "Upload your resume", completed: true },
  { id: "2", label: "Add a job and get a match score", completed: true },
  { id: "3", label: "Save 3 jobs that you want to apply to", completed: false },
];

export default function GetStartedChecklist() {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
      <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
        Get Started
      </h3>

      <div className="mt-4 space-y-3">
        {CHECKLIST_ITEMS.map((item) => (
          <div
            key={item.id}
            className={`flex items-center gap-3 text-xs ${
              item.completed ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            {item.completed ? (
              <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
            ) : (
              <div className="size-4 rounded-full border border-border shrink-0" />
            )}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}