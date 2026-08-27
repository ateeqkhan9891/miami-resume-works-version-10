interface ModernSkillsProps {
  skills: string[];
}

export default function ModernSkills({ skills }: ModernSkillsProps) {
  return (
    <section>
      <h2 className="border-b border-cyan-400 pb-1 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-900">
        Skills
      </h2>

      {/* Pill Badge list style as seen in Enhancv */}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded border border-slate-200 bg-slate-50/70 px-2.5 py-1 text-[10px] font-medium text-slate-700 shadow-xs"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}