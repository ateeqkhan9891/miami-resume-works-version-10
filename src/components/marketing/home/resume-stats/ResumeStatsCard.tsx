export default function ResumeStatsCard() {
  return (
    <div className="grid grid-cols-2 gap-6">

      <div className="rounded-2xl border bg-card p-8 shadow-sm">
        <h1 className="text-6xl font-semibold">15M+</h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">Million Users</p>
      </div>

      <div className="rounded-2xl border bg-card p-8 shadow-sm">
        <h1 className="text-6xl font-semibold">30M+</h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">Resumes Created</p>
      </div>

      <div className="rounded-2xl border bg-card p-8 shadow-sm translate-x-6">
        <h1 className="text-6xl font-semibold">95%</h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">Success Rate</p>
      </div>

      <div className="rounded-2xl border bg-card p-8 shadow-sm translate-x-10">
        <h1 className="text-6xl font-semibold">10M+</h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">Downloads</p>
      </div>

    </div>
  );
}