import type { Template } from "@/types/template";

export type SelectedTemplateFilters = Record<
  string,
  string[]
>;

export function filterTemplates(
  templates: Template[],
  selectedFilters: SelectedTemplateFilters
): Template[] {
  return templates.filter((template) => {
    return Object.entries(selectedFilters).every(
      ([filterId, selectedOptions]) => {
        if (selectedOptions.length === 0) {
          return true;
        }

        // Top Picks
        if (filterId === "top-picks") {
          return template.isPopular;
        }

        // ATS
        if (filterId === "ats") {
          return template.isAtsFriendly;
        }

        // Get the tags for this filter
        const templateTags =
          template.tags?.[
            filterId as keyof typeof template.tags
          ];

        if (!templateTags) {
          return false;
        }

        // Convert to string[] so TypeScript knows
        // that .includes() accepts a string.
        const tags = templateTags as string[];

        // Match ANY selected option within this filter
        return selectedOptions.some((option) =>
          tags.includes(option)
        );
      }
    );
  });
}