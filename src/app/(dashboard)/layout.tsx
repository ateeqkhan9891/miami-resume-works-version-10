import type { ReactNode } from "react";
import DashboardHeader from "@/features/dashboard/components/DashboardHeader";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-stone-50/50">
      <DashboardHeader />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}