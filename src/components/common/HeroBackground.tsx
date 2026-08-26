interface SectionBackgroundProps {
  variant?: "emerald-grid" | "indigo-dots" | "slate-blueprint" | "sunset-mesh" | "minimal";
}

export default function SectionBackground({
  variant = "emerald-grid",
}: SectionBackgroundProps) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none">

      {/* 1. Emerald Precision Grid */}
      {variant === "emerald-grid" && (
        <>
          <div className="absolute inset-0 bg-slate-50/70" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98115_1px,transparent_1px),linear-gradient(to_bottom,#10b98115_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          <div className="absolute left-1/2 top-0 size-[520px] -translate-x-1/2 rounded-full bg-emerald-400/15 blur-[120px]" />
          <div className="absolute -right-20 top-40 size-[380px] rounded-full bg-teal-300/15 blur-[100px]" />
        </>
      )}

      {/* 2. Indigo & Sky Stippled Dots */}
      {variant === "indigo-dots" && (
        <>
          <div className="absolute inset-0 bg-slate-50/50" />
          <div className="absolute inset-0 bg-[radial-gradient(#6366f125_1.5px,transparent_1.5px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_20%,#000_60%,transparent_100%)]" />
          <div className="absolute -left-32 top-0 size-[480px] rounded-full bg-indigo-500/10 blur-[130px]" />
          <div className="absolute right-0 top-1/4 size-[420px] rounded-full bg-sky-400/15 blur-[110px]" />
        </>
      )}

      {/* 3. Slate Architectural Blueprint */}
      {variant === "slate-blueprint" && (
        <>
          <div className="absolute inset-0 bg-slate-900/[0.02]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a0d_1px,transparent_1px),linear-gradient(to_bottom,#0f172a0d_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a18_1px,transparent_1px),linear-gradient(to_bottom,#0f172a18_1px,transparent_1px)] bg-[size:192px_192px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_100%)]" />
          <div className="absolute left-1/2 -top-24 size-[600px] -translate-x-1/2 rounded-full bg-slate-400/10 blur-[140px]" />
        </>
      )}

      {/* 4. Warm Sunset Gradient Mesh */}
      {variant === "sunset-mesh" && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-amber-50/40 via-white to-orange-50/30" />
          <div className="absolute inset-0 bg-[radial-gradient(#f59e0b20_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_50%,transparent_100%)]" />
          <div className="absolute -left-20 top-10 size-[450px] rounded-full bg-amber-300/15 blur-[120px]" />
          <div className="absolute right-10 top-0 size-[500px] rounded-full bg-rose-400/10 blur-[130px]" />
        </>
      )}

  
      {variant === "minimal" && (
        <div className="absolute inset-0 bg-background" />
      )}

    </div>
  );
}