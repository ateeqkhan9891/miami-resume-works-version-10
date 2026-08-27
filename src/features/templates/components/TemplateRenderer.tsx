import type { Template } from "@/types/template";
import type { ResumePreviewData } from "@/types/resume";

import ModernTemplate from "@/features/templates/templates/modern/ModernTemplate";

interface TemplateRendererProps {
  template: Template;
  data: ResumePreviewData;
}

export default function TemplateRenderer({
  template,
  data,
}: TemplateRendererProps) {
  switch (template.slug) {
    case "miami-modern":
      return <ModernTemplate data={data} />;

    default:
      return null;
  }
}