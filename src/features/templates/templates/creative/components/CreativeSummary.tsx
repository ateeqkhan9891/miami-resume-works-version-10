interface CreativeSummaryProps {
  summary: string;
}

export default function CreativeSummary({
  summary,
}: CreativeSummaryProps) {
  return (
    <section className="px-10 pt-8">
      <div className="flex items-start gap-5">
        <div className="mt-1 h-10 w-1 shrink-0 rounded-full bg-amber-400" />

        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-amber-600">
            About Me
          </p>

          <p className="mt-2 max-w-[650px] text-[10px] leading-[1.8] text-zinc-600">
            {summary}
          </p>
        </div>
      </div>
    </section>
  );
}