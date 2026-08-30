import type { ResumePreviewData } from "@/types/resume";
import type { Template } from "@/types/template";

import ModernTemplate from "@/features/templates/templates/modern/ModernTemplate";
import CreativeTemplate from "@/features/templates/templates/creative/CreativeTemplate";
import ProfessionalTemplate from "@/features/templates/templates/professional/ProfessionalTemplate";

interface TemplateRendererProps {
  template: Template;
  data: ResumePreviewData;
  isEditable?: boolean;
}

export default function TemplateRenderer({
  template,
  data,
  isEditable = true,
}: TemplateRendererProps) {
  switch (template.slug) {
    case "miami-modern":
      return <ModernTemplate data={data} isEditable={isEditable} />;

    case "creative-folio":
      return <CreativeTemplate data={data} isEditable={isEditable} />;

    case "professional":
      return <ProfessionalTemplate data={data} isEditable={isEditable} />;

    default:
      return null;
  }
}