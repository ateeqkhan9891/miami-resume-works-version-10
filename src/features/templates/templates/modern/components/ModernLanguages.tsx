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
      <h2 className="border-b border-cyan-400 pb-1 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-900">
        Languages
      </h2>

      <div className="mt-3 space-y-2.5">
        {languages.map((language) => (
          <div
            key={language.id}
            className="flex items-center gap-2.5"
          >
            <LanguageIcon
              size={13}
              strokeWidth={2}
              className="shrink-0 text-cyan-600"
            />

            <div className="flex min-w-0 flex-1 items-center justify-between gap-2">
              <span className="text-[10px] font-semibold text-slate-900">
                {language.name}
              </span>

              <span className="text-[9px] capitalize text-slate-500">
                {language.proficiency}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}