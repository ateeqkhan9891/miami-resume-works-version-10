import type { ResumePreviewData } from "@/types/resume";

import ModernHeader from "./components/ModernHeader";
import ModernSummary from "./components/ModernSummary";
import ModernExperience from "./components/ModernExperience";
import ModernEducation from "./components/ModernEducation";
import ModernSkills from "./components/ModernSkills";
import ModernCertifications from "./components/ModernCertifications";
import ModernAchievements from "./components/ModernAchievements";
import ModernLanguages from "./components/ModernLanguages";
import ModernAwards from "./components/ModernAwards";

interface ModernTemplateProps {
  data: ResumePreviewData;
}

export default function ModernTemplate({
  data,
}: ModernTemplateProps) {
  return (
    <div className="mx-auto flex min-h-[1123px] w-[794px] flex-col bg-white font-sans text-[11px] leading-relaxed text-slate-900 shadow-2xl">
      <ModernHeader profile={data.profile} />

      <div className="flex-1 px-10 py-6">
        <div className="grid grid-cols-12 gap-8">
          <main className="col-span-8 flex flex-col space-y-5">
            {data.profile.summary && (
              <ModernSummary
                summary={data.profile.summary}
              />
            )}

            {data.experience.length > 0 && (
              <ModernExperience
                experience={data.experience}
              />
            )}

            {data.education.length > 0 && (
              <ModernEducation
                education={data.education}
              />
            )}
          </main>

          <aside className="col-span-4 flex flex-col space-y-5 border-l border-slate-100 pl-6">
            {data.skills.length > 0 && (
              <ModernSkills
                skills={data.skills}
              />
            )}

            {data.achievements.length > 0 && (
              <ModernAchievements
                achievements={data.achievements}
              />
            )}

            {data.certifications.length > 0 && (
              <ModernCertifications
                certifications={data.certifications}
              />
            )}

            {data.languages.length > 0 && (
              <ModernLanguages
                languages={data.languages}
              />
            )}

            {data.awards.length > 0 && (
              <ModernAwards
                awards={data.awards}
              />
            )}
          </aside>
        </div>
      </div>

      <footer className="mx-10 flex items-center justify-between border-t border-slate-100 py-3 text-[8px] text-slate-400">
        <span>
          {data.profile.website || "miamiresume.com"}
        </span>

        <span>
          Powered by MiamiResume
        </span>
      </footer>
    </div>
  );
}