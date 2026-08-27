import type { ResumePreviewData } from "@/types/resume";

import CreativeHeader from "./components/CreativeHeader";
import CreativeSummary from "./components/CreativeSummary";
import CreativeExperience from "./components/CreativeExperience";
import CreativeProjects from "./components/CreativeProjects";
import CreativeEducation from "./components/CreativeEducation";
import CreativeSkills from "./components/CreativeSkills";
import CreativeLanguages from "./components/CreativeLanguages";
import CreativeCertifications from "./components/CreativeCertifications";
import CreativeAwards from "./components/CreativeAwards";

interface CreativeTemplateProps {
  data: ResumePreviewData;
}

export default function CreativeTemplate({
  data,
}: CreativeTemplateProps) {
  return (
    <div className="mx-auto flex min-h-[1123px] w-[794px] flex-col bg-white font-sans text-[11px] leading-relaxed text-zinc-900 shadow-2xl">
      <CreativeHeader profile={data.profile} />

      {data.profile.summary && (
        <CreativeSummary summary={data.profile.summary} />
      )}

      <div className="flex-1 px-10 py-8">
        <div className="grid grid-cols-12 gap-8">
          <main className="col-span-7 flex flex-col space-y-5">
            {data.experience.length > 0 && (
              <CreativeExperience
                experience={data.experience}
              />
            )}

            {data.projects.length > 0 && (
              <CreativeProjects
                projects={data.projects}
              />
            )}
          </main>

          <aside className="col-span-5 flex flex-col space-y-4">
            {data.education.length > 0 && (
              <CreativeEducation
                education={data.education}
              />
            )}

            {data.skills.length > 0 && (
              <CreativeSkills 
                skills={data.skills}
              />
            )}

            {data.languages.length > 0 && (
              <CreativeLanguages
                languages={data.languages}
              />
            )}

            {data.certifications.length > 0 && (
              <CreativeCertifications
                certifications={data.certifications}
              />
            )}

            {data.awards.length > 0 && (
              <CreativeAwards
                awards={data.awards}
              />
            )}
          </aside>
        </div>
      </div>

      <footer className="mx-10 flex items-center justify-between border-t border-zinc-100 py-3 text-[8px] text-zinc-400">
        <span>
          {data.profile.website || "miamiresume.com"}
        </span>

        <span>Powered by MiamiResume</span>
      </footer>
    </div>
  );
}