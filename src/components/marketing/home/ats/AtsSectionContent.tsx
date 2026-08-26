import { Button } from "@/components/ui/button";

export default function AtsSectionContent() {
  return (
    <div className="flex flex-col gap-6">
      <span className="text-sm font-semibold uppercase tracking-wider text-primary">
        ATS Friendly
      </span>

      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Resumes optimized for Applicant Tracking Systems
      </h2>

      <p className="text-base leading-relaxed text-slate-600">
       We test every Miami template against the major Applicant Tracking Systems (ATS),
        so your resume parses cleanly instead of getting garbled on the way in. Clean layouts,
         readable fonts, and standard section titles keep your details intact for the software.
          And because Certified Professional Résumé Writers review every template,
        it reads just as well for the recruiter who opens it next.
      </p>

      <div className="pt-6">
        <Button variant="outline" size="lg" 
        className="h-auto rounded-xl bg-emerald-600 cursor-pointer px-8 py-4 text-base font-semibold text-white shadow-md shadow-emerald-600/20 transition-all hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/30">
          Build an ATS-Friendly Resume
        </Button>
      </div>
    </div>
  );
}