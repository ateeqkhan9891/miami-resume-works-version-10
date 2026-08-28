import { Fragment } from "react";
import { Check, Minus } from "lucide-react";

type ComparisonRow = {
  label: string;
  free: boolean;
  pro: boolean;
};

type ComparisonCategory = {
  category: string;
  rows: ComparisonRow[];
};

const COMPARISON: ComparisonCategory[] = [
  {
    category: "Resume Builder",
    rows: [
      { label: "Resume workspace", free: true, pro: true },
      { label: "Multiple resumes", free: false, pro: true },
    ],
  },
  {
    category: "Templates",
    rows: [
      { label: "Selected templates", free: true, pro: true },
      { label: "All templates", free: false, pro: true },
    ],
  },
  {
    category: "Customization",
    rows: [
      { label: "Basic customization", free: true, pro: true },
      { label: "Fonts, colors & spacing", free: false, pro: true },
      { label: "Section reordering", free: false, pro: true },
    ],
  },
  {
    category: "Exports",
    rows: [
      { label: "Standard export", free: true, pro: true },
      { label: "Advanced export options", free: false, pro: true },
    ],
  },
  {
    category: "ATS & Optimization",
    rows: [
      { label: "ATS compatibility check", free: false, pro: true },
    ],
  },
];

export default function PricingComparison() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-14">
      <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        Compare plans
      </h2>

      {/* Desktop table */}
      <div className="mt-10 hidden overflow-hidden rounded-2xl border border-slate-200 sm:block">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="px-5 py-3 text-left font-semibold text-slate-500">
                Feature
              </th>
              <th className="px-5 py-3 text-center font-semibold text-slate-500">
                Free
              </th>
              <th className="px-5 py-3 text-center font-semibold text-emerald-700">
                Pro
              </th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON.map((group) => (
              <Fragment key={group.category}>
                <tr className="bg-slate-50/60">
                  <td
                    colSpan={3}
                    className="px-5 py-2 text-xs font-bold uppercase tracking-wide text-slate-400"
                  >
                    {group.category}
                  </td>
                </tr>
                {group.rows.map((row) => (
                  <tr key={row.label} className="border-t border-slate-100">
                    <td className="px-5 py-3 text-slate-700">{row.label}</td>
                    <td className="px-5 py-3 text-center">
                      <CellIcon active={row.free} />
                    </td>
                    <td className="px-5 py-3 text-center">
                      <CellIcon active={row.pro} accent />
                    </td>
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: stacked list */}
      <div className="mt-10 flex flex-col gap-6 sm:hidden">
        {COMPARISON.map((group) => (
          <div key={group.category}>
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-400">
              {group.category}
            </p>
            <div className="rounded-xl border border-slate-200 divide-y divide-slate-100">
              {group.rows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between px-4 py-3"
                >
                  <span className="text-sm text-slate-700">{row.label}</span>
                  <div className="flex items-center gap-3 text-xs font-semibold">
                    <span className="flex items-center gap-1 text-slate-400">
                      <CellIcon active={row.free} /> Free
                    </span>
                    <span className="flex items-center gap-1 text-emerald-700">
                      <CellIcon active={row.pro} accent /> Pro
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CellIcon({ active, accent }: { active: boolean; accent?: boolean }) {
  if (!active) return <Minus className="mx-auto size-3.5 text-slate-300" />;
  return (
    <Check
      className={`mx-auto size-4 ${accent ? "text-emerald-600" : "text-slate-400"}`}
    />
  );
}