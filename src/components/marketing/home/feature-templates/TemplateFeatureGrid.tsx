import { LayoutTemplate, Sliders, User } from "lucide-react";

const FEATURES = [
  {
    icon: LayoutTemplate,
    title: "Professional designs",
    description:
      "Thoughtfully designed templates that help your experience stand out to hiring managers.",
  },
  {
    icon: Sliders,
    title: "Easy to customize",
    description:
      "Change sections, typography, colors, and layouts effortlessly to match your career narrative.",
  },
  {
    icon: User,
    title: "Built for modern hiring",
    description:
      "Engineered clean structural hierarchy optimized for both ATS parsers and human recruiters.",
  },
];

export default function TemplateFeatureGrid() {
  return (
    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
      {FEATURES.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="flex size-10 items-center justify-center text-foreground">
              <Icon className="size-5 stroke-[1.5]" />
            </div>

            <h3 className="mt-3 text-base font-medium text-foreground">
              {feature.title}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {feature.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}