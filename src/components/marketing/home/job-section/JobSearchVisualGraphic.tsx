import ResumeBuilderGraphic from "./visuals/ResumeBuilderGraphic";
import ResumeCheckerGraphic from "./visuals/ResumeCheckerGraphic";
import JobTrackerGraphic from "./visuals/JobTrackerGraphic";

interface JobSearchVisualGraphicProps {
  activeTabId: string;
}

export default function JobSearchVisualGraphic({
  activeTabId,
}: JobSearchVisualGraphicProps) {
  const renderVisual = () => {
    switch (activeTabId) {
      case "resume-builder":
        return <ResumeBuilderGraphic />;
      case "resume-checker":
        return <ResumeCheckerGraphic />;
      case "job-tracker":
        return <JobTrackerGraphic />;
      default:
        return <ResumeBuilderGraphic />;
    }
  };

  return (
    <div className="relative min-h-[460px] overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-900/90 to-[#0d121c] p-6 shadow-2xl backdrop-blur-md sm:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px] opacity-25" />

      <div className="relative z-10">
        {renderVisual()}
      </div>
    </div>
  );
}