import type { ResumePreviewData } from "@/types/resume";

interface ProfessionalSkillsProps {
  skills: ResumePreviewData["skills"];
}

const skillGroups = [
  {
    title: "Programming",
    skills: ["Python", "SQL"],
  },
  {
    title: "Data Engineering",
    skills: [
      "Apache Spark",
      "Apache Airflow",
      "Kafka",
      "dbt",
      "ETL / ELT",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["AWS", "Docker", "Linux", "Git"],
  },
  {
    title: "Data Platforms",
    skills: [
      "PostgreSQL",
      "Snowflake",
      "Data Warehousing",
      "Data Modeling",
    ],
  },
];

export default function ProfessionalSkills({
  skills,
}: ProfessionalSkillsProps) {
  const availableSkills = new Set(skills);

  const groups = skillGroups
    .map((group) => ({
      ...group,
      skills: group.skills.filter((skill) =>
        availableSkills.has(skill),
      ),
    }))
    .filter((group) => group.skills.length > 0);

  const groupedSkills = new Set(
    groups.flatMap((group) => group.skills),
  );

  const otherSkills = skills.filter(
    (skill) => !groupedSkills.has(skill),
  );

  return (
    <section>
      <div className="mb-5 flex items-center gap-3">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-950">
          Technical Skills
        </h2>

        <div className="h-px flex-1 bg-slate-200" />
      </div>

      <div className="space-y-4">
        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-1 text-[8px] font-bold uppercase tracking-[0.12em] text-slate-400">
              {group.title}
            </h3>

            <p className="text-[9px] leading-[1.6] text-slate-700">
              {group.skills.join("  •  ")}
            </p>
          </div>
        ))}

        {otherSkills.length > 0 && (
          <div>
            <h3 className="mb-1 text-[8px] font-bold uppercase tracking-[0.12em] text-slate-400">
              Additional
            </h3>

            <p className="text-[9px] leading-[1.6] text-slate-700">
              {otherSkills.join("  •  ")}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}