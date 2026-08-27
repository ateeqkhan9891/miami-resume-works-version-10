import { ModernTemplateIcons } from "../ModernTemplateIcons";

interface ModernSkillsProps {
  skills: string[];
}

export default function ModernSkills({
  skills,
}: ModernSkillsProps) {
  const SkillsIcon = ModernTemplateIcons.skills;

  return (
    <section>
      <div className="mb-3 flex items-center gap-2.5">
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-cyan-50 text-cyan-600">
          <SkillsIcon size={11} strokeWidth={2.2} />
        </div>

        <h2 className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-900">
          Core Skills
        </h2>

        <div className="h-px flex-1 bg-cyan-100" />
      </div>

      <div className="flex flex-wrap gap-1.5">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md border border-cyan-100 bg-cyan-50/60 px-2 py-1 text-[8.5px] font-medium text-slate-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}