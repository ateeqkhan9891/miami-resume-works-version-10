import Link from "next/link";
import Image from "next/image";
import { UploadCloud, Activity  , ArrowRight, ShieldCheck } from "lucide-react";
import { DASHBOARD_BANNER_DATA } from "@/features/dashboard/data/dashboard-data";

export default function MatchBanner() {
  return (
    <section
      aria-label="Smart job match banner"
      className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-xs sm:p-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 size-72 rounded-full bg-primary/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-16 size-72 rounded-full bg-accent-warm/10 blur-3xl"
      />

      <div className="relative z-10 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
        <div className="max-w-xl space-y-4">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold tracking-tight text-primary">
            <Activity   className="size-3 text-accent-warm" />
            <span>AI Match Engine</span>
          </div>

          <div className="space-y-1.5">
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              {DASHBOARD_BANNER_DATA.title}
            </h2>
            <p className="text-xs leading-relaxed text-muted-foreground sm:text-[13.5px]">
              {DASHBOARD_BANNER_DATA.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5 font-medium text-foreground">
              <ShieldCheck className="size-3.5 text-primary" />
              <span>Private & ATS Verified</span>
            </div>
            <span className="size-1 rounded-full bg-border" />
            <span>Under 30 seconds</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href={DASHBOARD_BANNER_DATA.ctaHref}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-xs font-semibold text-primary-foreground shadow-xs transition-all duration-150 hover:opacity-90 active:scale-95"
            >
              <UploadCloud className="size-4" />
              <span>{DASHBOARD_BANNER_DATA.ctaText}</span>
            </Link>

            <Link
              href="/jobs"
              className="inline-flex h-10 items-center justify-center gap-1.5 rounded-xl border border-border bg-background px-4 text-xs font-medium text-foreground transition-colors hover:bg-muted"
            >
              <span>Explore jobs</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>

        <div className="relative hidden shrink-0 self-center lg:block">
          <div className="relative flex size-56 h-66  items-center justify-center">
            <Image
              src={DASHBOARD_BANNER_DATA.image}
              alt="Match experience illustration"
              width={186}
              height={196}
              priority
             
              className="object-contain drop-shadow-sm  -scale-x-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}