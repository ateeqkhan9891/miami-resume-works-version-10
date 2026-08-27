import type { ResumePreviewData } from "@/types/resume";

interface CreativeCertificationsProps {
  certifications: ResumePreviewData["certifications"];
}

export default function CreativeCertifications({
  certifications,
}: CreativeCertificationsProps) {
  return (
    <section>
      <div className="mb-5 flex items-center gap-3">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-950">
          Certifications
        </h2>

        <div className="h-px flex-1 bg-zinc-200" />
      </div>

      <div className="space-y-4">
        {certifications.map((certification) => (
          <article
            key={certification.id}
            className="relative pl-4"
          >
            <span className="absolute left-0 top-1 h-2 w-2 rounded-full bg-amber-400" />

            <h3 className="text-[9px] font-bold leading-[1.45] text-zinc-950">
              {certification.name}
            </h3>

            <p className="mt-1 text-[8.5px] font-medium text-zinc-600">
              {certification.issuer}
            </p>

            {certification.date && (
              <p className="mt-0.5 text-[8px] text-zinc-400">
                {certification.date}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}