interface ModernSummaryProps {
  summary: string;
}

export default function ModernSummary({ summary }: ModernSummaryProps) {
  return (
    <section>
      <h2 className="border-b border-cyan-400 pb-1 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-900">
        Summary
      </h2>
      <p className="mt-2.5 text-[10.5px] leading-relaxed text-slate-600">
        {summary}
      </p>
    </section>
  );
}