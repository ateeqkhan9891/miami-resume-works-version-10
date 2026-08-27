interface ProfessionalSummaryProps {
  summary: string;
}

export default function ProfessionalSummary({
  summary,
}: ProfessionalSummaryProps) {
  return (
    <section className="px-10 pt-6">
      <div className="flex items-center gap-3">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-950">
          Professional Summary
        </h2>

        <div className="h-px flex-1 bg-slate-200" />
      </div>

      <p className="mt-3 max-w-[690px] text-[10px] leading-[1.75] text-slate-600">
        {summary}
      </p>
    </section>
  );
}