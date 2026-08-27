import type { ResumePreviewData } from "@/types/resume";

interface ProfessionalCertificationsProps {
  certifications: ResumePreviewData["certifications"];
}

export default function ProfessionalCertifications({
  certifications,
}: ProfessionalCertificationsProps) {
  return (
    <section>
      <div className="mb-5 flex items-center gap-3">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-950">
          Certifications
        </h2>

        <div className="h-px flex-1 bg-slate-200" />
      </div>

      <div className="space-y-4">
        {certifications.map((certification) => (
          <article key={certification.id}>
            <h3 className="text-[9.5px] font-bold leading-[1.45] text-slate-950">
              {certification.name}
            </h3>

            <div className="mt-1 flex items-center justify-between gap-3">
              <p className="text-[8.5px] text-slate-600">
                {certification.issuer}
              </p>

              {certification.date && (
                <span className="shrink-0 text-[8px] font-medium text-slate-400">
                  {certification.date}
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}