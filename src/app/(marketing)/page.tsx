import Hero from "@/components/marketing/home/Hero";
import TemplateShowcase from "@/components/marketing/home/feature-templates/TemplateShowcase";
import ResumeStats from "@/components/marketing/home/resume-stats/ResumeStats";
import AtsSection from "@/components/marketing/home/ats/AtsSection";
import ResumeExploreSection from "@/components/marketing/home/resume-examples/ResumeExploreSection";
import JobSearchSection from "@/components/marketing/home/job-section/JobSearchSection";


export default function HomePage() {
  return (
        <>

          <Hero />
          <TemplateShowcase />
          <ResumeStats />
          <AtsSection />
          <ResumeExploreSection />
          <JobSearchSection />
        
        </>
  );
}