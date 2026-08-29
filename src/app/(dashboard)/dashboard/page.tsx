import MatchBanner from "@/features/dashboard/components/MatchBanner";
import AddJobBanner from "@/features/dashboard/components/AddJobBanner";
import ApplyTodayCard from "@/features/dashboard/components/ApplyTodayCard";
import GetStartedChecklist from "@/features/dashboard/components/GetStartedChecklist";
import ResumeScoreCard from "@/features/dashboard/components/ResumeScoreCard";
import RecentDocumentsTable from "@/features/dashboard/components/RecentDocumentsTable";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
       
        <div className="space-y-6 lg:col-span-2">
          <MatchBanner />
          <AddJobBanner />
          <ApplyTodayCard />
        </div>

    
        <div className="space-y-6">
          <GetStartedChecklist />
          <ResumeScoreCard />
        </div>
      </div>

      <RecentDocumentsTable />
    </div>
  );
}