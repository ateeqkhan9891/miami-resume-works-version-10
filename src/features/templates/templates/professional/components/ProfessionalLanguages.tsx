import type { ResumePreviewData } from "@/types/resume";

interface ProfessionalLanguagesProps {
  languages: ResumePreviewData["languages"];
}

const proficiencyLabels = {
  basic: "Basic",
  conversational: "Conversational",
  professional: "Professional",
  fluent: "Fluent",
  native: "Native",
} as const;

export default function ProfessionalLanguages({
  languages,
}: ProfessionalLanguagesProps) {
  return (
    <section>
      <div className="mb-5 flex items-center gap-3">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-950">
          Languages
        </h2>

        <div className="h-px flex-1 bg-slate-200" />
      </div>

      <div className="space-y-2.5">
        {languages.map((language) => (
          <div
            key={language.id}
            className="flex items-center justify-between gap-4"
          >
            <span className="text-[9px] font-semibold text-slate-700">
              {language.name}
            </span>

            <span className="text-[8px] text-slate-400">
              {language.proficiency
                ? proficiencyLabels[language.proficiency]
                : "Professional"}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}