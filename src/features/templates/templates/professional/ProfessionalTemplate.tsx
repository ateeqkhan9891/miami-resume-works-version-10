import type { ResumePreviewData } from "@/types/resume";

import ProfessionalHeader from "./components/ProfessionalHeader";
import ProfessionalSummary from "./components/ProfessionalSummary";
import ProfessionalExperience from "./components/ProfessionalExperience";
import ProfessionalProjects from "./components/ProfessionalProjects";
import ProfessionalEducation from "./components/ProfessionalEducation";
import ProfessionalSkills from "./components/ProfessionalSkills";
import ProfessionalCertifications from "./components/ProfessionalCertifications";
import ProfessionalLanguages from "./components/ProfessionalLanguages";
import ProfessionalAwards from "./components/ProfessionalAwards";

interface ProfessionalTemplateProps {
  data: ResumePreviewData;
  isEditable?: boolean;
}

export default function ProfessionalTemplate({
  data,
  isEditable = true,
}: ProfessionalTemplateProps) {
  return (
    <div className="mx-auto flex min-h-[1123px] w-[794px] flex-col bg-white font-sans text-[11px] leading-relaxed text-slate-900 shadow-2xl">
      <ProfessionalHeader profile={data.profile} isEditable={isEditable} />

      {(data.profile.summary || isEditable) && (
        <ProfessionalSummary summary={data.profile.summary || ""} isEditable={isEditable} />
      )}

      <div className="flex-1 px-10 py-8">
        <div className="grid grid-cols-12 gap-9">
          <main className="col-span-8 flex flex-col space-y-7">
            {(data.experience.length > 0 || isEditable) && (
              <ProfessionalExperience
                experience={data.experience}
                isEditable={isEditable}
              />
            )}

            {(data.projects.length > 0 || isEditable) && (
              <ProfessionalProjects
                projects={data.projects}
                isEditable={isEditable}
              />
            )}
          </main>

          <aside className="col-span-4 flex flex-col space-y-7">
            {(data.skills.length > 0 || isEditable) && (
              <ProfessionalSkills
                skills={data.skills}
                isEditable={isEditable}
              />
            )}

            {(data.education.length > 0 || isEditable) && (
              <ProfessionalEducation
                education={data.education}
                isEditable={isEditable}
              />
            )}

            {(data.certifications.length > 0 || isEditable) && (
              <ProfessionalCertifications
                certifications={data.certifications}
                isEditable={isEditable}
              />
            )}

            {(data.languages.length > 0 || isEditable) && (
              <ProfessionalLanguages
                languages={data.languages}
                isEditable={isEditable}
              />
            )}

            {(data.awards.length > 0 || isEditable) && (
              <ProfessionalAwards
                awards={data.awards}
                isEditable={isEditable}
              />
            )}
          </aside>
        </div>
      </div>

      <footer className="mx-10 flex items-center justify-between border-t border-slate-200 py-3 text-[8px] text-slate-400">
        <span>{data.profile.website || "miamiresume.com"}</span>
        <span>Powered by MiamiResume</span>
      </footer>
    </div>
  );
}