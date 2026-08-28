const VALUE_BLOCKS = [
  {
    title: "Build without starting over",
    description:
      "Switch templates, adjust fonts and colors, reorder sections, and see every change reflected instantly — without losing your content.",
  },
  {
    title: "Tailor every application",
    description:
      "Keep multiple resumes, adjust each one for the role you're applying to, and use ATS optimization tools to make sure it gets seen.",
  },
  {
    title: "Keep your career materials organized",
    description:
      "Your resumes live in one workspace, exportable whenever you need them — no digging through old files or outdated versions.",
  },
];

export default function PricingValueSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-14">
      <div className="grid gap-8 sm:grid-cols-3">
        {VALUE_BLOCKS.map((block) => (
          <div key={block.title}>
            <h3 className="text-base font-semibold text-slate-900">
              {block.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              {block.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}