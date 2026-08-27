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

      {/* Full-width Header */}
      <ModernHeader profile={data.profile} />

      {/* Resume Body */}
      <div className="flex-1 px-10 py-8">
        <div className="grid grid-cols-12 gap-8">

          {/* Main Left Column */}
          <main className="col-span-7 flex flex-col space-y-6">

            {/* Summary */}
            {data.profile.summary && (
              <ModernSummary
                summary={data.profile.summary}
              />
            )}

            {/* Experience */}
            {data.experience.length > 0 && (
              <ModernExperience
                experience={data.experience}
              />
            )}

            {/* Education */}
            {data.education.length > 0 && (
              <ModernEducation
                education={data.education}
              />
            )}

          </main>

          {/* Sidebar Right Column */}
          <aside className="col-span-5 flex flex-col space-y-6">

            {/* Key Achievements */}
            {data.achievements.length > 0 && (
              <ModernAchievements
                achievements={data.achievements}
              />
            )}

            {/* Skills */}
            {data.skills.length > 0 && (
              <ModernSkills
                skills={data.skills}
              />
            )}

            {/* Certifications */}
            {data.certifications.length > 0 && (
              <ModernCertifications
                certifications={data.certifications}
              />
            )}

            {/* Languages */}
            {data.languages.length > 0 && (
              <ModernLanguages
                languages={data.languages}
              />
            )}

            {/* Awards */}
            {data.awards.length > 0 && (
              <ModernAwards
                awards={data.awards}
              />
            )}

          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="mx-10 flex items-center justify-between border-t border-slate-100 py-3 text-[9px] text-slate-400">
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