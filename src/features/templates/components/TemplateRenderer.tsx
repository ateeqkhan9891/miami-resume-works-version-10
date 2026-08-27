

import type { Template } from "@/types/template";

import ModernTemplate from "@/features/templates/templates/modern/ModernTemplate";

interface TemplateRendererProps {
  template: Template;
}

export default function TemplateRenderer({
  template,
}: TemplateRendererProps) {
  switch (template.slug) {
    case "miami-modern":
      return <ModernTemplate />;

    default:
      return null;
  }
}