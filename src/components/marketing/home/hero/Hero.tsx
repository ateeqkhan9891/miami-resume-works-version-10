import HeroContent from "./HeroContent";
import HeroResumeShowcase from "./HeroResumeShowcaseLoader";
import HeroSocialProof from "./HeroSocialProof";
import TrustedCompaniesMarquee from "./Marquee";



export default function Hero() {
  return (
    <section className="relative isolate min-h-fit overflow-hidden bg-background py-12 sm:py-16 lg:py-20">
      {/* 1. Base Gradient Overlay */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-primary/10 via-background to-muted/20" />

      {/* 2. Dynamic Ambient Color Blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[32rem] w-[55rem] -translate-x-1/2 overflow-hidden blur-3xl sm:top-[-10rem]"
      >
        <div className="h-full w-full bg-gradient-to-br from-primary/30 via-indigo-500/20 to-pink-500/20 opacity-70" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 right-0 -z-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
      />

      {/* 3. Full-bleed Net / Dot Grid Mask */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#94a3b8_1.2px,transparent_1.2px)] [background-size:20px_20px] opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_45%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#475569_1.2px,transparent_1.2px)]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col gap-6 lg:col-span-6 xl:col-span-7">
            <HeroContent />
            <HeroSocialProof />
          </div>

          <div className="flex justify-center lg:col-span-6 xl:col-span-5">
            <HeroResumeShowcase />
          </div>
        </div>
      </div>
       <TrustedCompaniesMarquee />
    </section>
  );
}