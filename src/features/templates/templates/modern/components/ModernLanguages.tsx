import type { ResumePreviewData } from "@/types/resume";
import { ModernTemplateIcons } from "../ModernTemplateIcons";

interface ModernLanguagesProps {
  languages: ResumePreviewData["languages"];
}

export default function ModernLanguages({
  languages,
}: ModernLanguagesProps) {
  const LanguageIcon = ModernTemplateIcons.languages;

  return (
    <section>
      <div className="mb-3 flex items-center gap-2.5">
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-cyan-50 text-cyan-600">
          <LanguageIcon size={11} strokeWidth={2.2} />
        </div>

        <h2 className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-900">
          Languages
        </h2>

        <div className="h-px flex-1 bg-cyan-100" />
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-3">
        {languages.map((language) => (
          <div key={language.id} className="min-w-0">
            <div className="flex items-center justify-between gap-2">
              <span className="truncate text-[9px] font-semibold text-slate-700">
                {language.name}
              </span>

              <span className="shrink-0 text-[7.5px] capitalize text-slate-400">
                {language.proficiency}
              </span>
            </div>

            <div className="mt-1 h-1 overflow-hidden rounded-full bg-cyan-50">
              <div
                className="h-full rounded-full bg-cyan-400"
                style={{
                  width:
                    language.proficiency.toLowerCase() === "native"
                      ? "100%"
                      : language.proficiency.toLowerCase() ===
                          "professional"
                        ? "80%"
                        : language.proficiency.toLowerCase() ===
                            "advanced"
                          ? "75%"
                          : language.proficiency.toLowerCase() ===
                              "intermediate"
                            ? "60%"
                            : "40%",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}