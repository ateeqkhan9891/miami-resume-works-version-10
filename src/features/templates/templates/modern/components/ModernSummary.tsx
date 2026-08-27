interface ModernSummaryProps {
  summary: string;
}

export default function ModernSummary({
  summary,
}: ModernSummaryProps) {
  return (
    <section>
      <div className="flex items-center gap-2.5">
        <span className="h-5 w-1 rounded-full bg-cyan-500" />

        <h2 className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-900">
          Professional Summary
        </h2>

        <div className="h-px flex-1 bg-cyan-100" />
      </div>

      <p className="mt-2.5 text-[10px] leading-[1.65] text-slate-600">
        {summary}
      </p>
    </section>
  );
}