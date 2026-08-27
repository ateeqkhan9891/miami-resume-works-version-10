import type { ResumePreviewData } from "@/types/resume";
import { ModernTemplateIcons } from "../ModernTemplateIcons";

interface ModernCertificationsProps {
  certifications: ResumePreviewData["certifications"];
}

export default function ModernCertifications({
  certifications,
}: ModernCertificationsProps) {
  const CertificationIcon = ModernTemplateIcons.certifications;

  return (
    <section>
      <div className="mb-3 flex items-center gap-2.5">
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-cyan-50 text-cyan-600">
          <CertificationIcon size={11} strokeWidth={2.2} />
        </div>

        <h2 className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-900">
          Certifications
        </h2>

        <div className="h-px flex-1 bg-cyan-100" />
      </div>

      <div className="space-y-2.5">
        {certifications.map((certification) => (
          <article
            key={certification.id}
            className="border-l-2 border-cyan-100 pl-3"
          >
            <h3 className="text-[9.5px] font-bold leading-snug text-slate-900">
              {certification.name}
            </h3>

            {(certification.issuer || certification.date) && (
              <p className="mt-0.5 text-[8px] text-slate-500">
                {certification.issuer}

                {certification.issuer && certification.date && (
                  <span className="mx-1 text-cyan-400">·</span>
                )}

                {certification.date}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}