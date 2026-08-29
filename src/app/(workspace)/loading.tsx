
// src/app/workspace/loading.tsx

export default function WorkspaceLoading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="h-16 border-b animate-pulse" />

      <div className="flex h-[calc(100vh-4rem)]">
        {/* Editor panel */}
        <div className="w-1/2 border-r p-6 space-y-6">
          <div className="h-8 w-48 rounded-lg bg-muted animate-pulse" />
          <div className="h-32 rounded-xl bg-muted animate-pulse" />
          <div className="h-24 rounded-xl bg-muted animate-pulse" />
        </div>

        {/* Resume preview */}
        <div className="flex-1 flex items-center justify-center bg-muted/30">
          <div className="h-[700px] w-[500px] rounded-lg bg-background shadow-sm animate-pulse" />
        </div>
      </div>
    </div>
  );
}