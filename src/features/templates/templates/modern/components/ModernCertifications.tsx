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
      <h2 className="border-b border-cyan-400 pb-1 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-900">
        Courses & Certifications
      </h2>

      <div className="mt-3 space-y-3">
        {certifications.map((certification) => (
          <article
            key={certification.id}
            className="flex items-start gap-2.5"
          >
            {/* Certification Icon */}
            <CertificationIcon
              size={14}
              strokeWidth={2}
              className="mt-0.5 shrink-0 text-cyan-600"
            />

            <div className="min-w-0 flex-1">
              {/* Certification Name */}
              <h3 className="text-[10.5px] font-bold leading-snug text-slate-500">
                {certification.name}
              </h3>

              {/* Issuer / Date */}
              {(certification.issuer || certification.date) && (
                <p className="font-medium text-cyan-600">
                  {certification.issuer}

                  {certification.issuer && certification.date && " · "}

                  {certification.date}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}