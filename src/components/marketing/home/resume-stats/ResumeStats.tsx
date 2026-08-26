import Image from "next/image";
import ResumeStatsCard from "./ResumeStatsCard";

export default function ResumeStats() {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-20">
      {/* Decorative images */}
      <Image
        src="/images/others/pointing.png"
        alt=""
        width={100}
        height={100}
        className="absolute bottom-0 left-0 translate-x-2 scale-x-[-1]"
      />

      <Image
        src="/images/others/leaves.png"
        alt=""
        width={300}
        height={100}
        className="absolute right-0 top-0  scale-x-[-1] opacity-25"
      />

      <div className="mx-auto flex max-w-6xl items-center gap-16">
        
        {/* LEFT */}
        <div className="w-1/2">
          <ResumeStatsCard />
        </div>

        {/* RIGHT */}
        <div className="w-1/2">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider">
            Trusted worldwide
          </p>

          <h2 className="text-4xl font-semibold leading-tight">
            Chosen by{" "}
            <span className="font-serif border-2 border-green px-2 py-2">10 million</span>{" "}
            job applicants around the world
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Build a resume that brings your experience, skills, and value
            to the forefront. Create professional, ATS-friendly resumes
            with flexible templates and intuitive editing tools.
          </p>

          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Whether you're applying in finance, healthcare, software, or
            design, create a resume that feels genuinely yours and helps
            you stand out from other candidates.
          </p>
        </div>

      </div>
    </section>
  );
}