import { Suspense } from "react";
import ResumeWorkspace from "@/features/resume-builder/components/workspace/ResumeWorkspace";

export default function NewResumePage() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-full items-center justify-center bg-background">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        </div>
      }
    >
      <ResumeWorkspace />
    </Suspense>
  );
}