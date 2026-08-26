import Hero from "@/components/marketing/home/Hero";
import TemplateShowcase from "@/components/marketing/home/feature-templates/TemplateShowcase";
import ResumeStats from "@/components/marketing/home/resume-stats/ResumeStats";
import AtsSection from "@/components/marketing/home/ats/AtsSection";

export default function HomePage() {
  return (
        <>

          <Hero />
          <TemplateShowcase />
          <ResumeStats />
          <AtsSection />
        
        </>
  );
}