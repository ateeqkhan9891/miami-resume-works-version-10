import MatchBanner from "@/features/dashboard/components/MatchBanner";
import ApplyTodayCard from "@/features/dashboard/components/ApplyTodayCard";
import GetStartedChecklist from "@/features/dashboard/components/GetStartedChecklist";
import BrowserExtensionCard from "@/features/dashboard/components/BrowserExtensionCard";
import RecentDocumentsTable from "@/features/dashboard/components/RecentDocumentsTable";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <MatchBanner />
          <ApplyTodayCard />
        </div>

        <div className="space-y-6">
          <GetStartedChecklist />
          <BrowserExtensionCard />
        </div>
      </div>

      <RecentDocumentsTable />
    </div>
  );
}