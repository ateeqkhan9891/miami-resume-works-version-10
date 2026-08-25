import Link from "next/link";
import { Infinity } from "lucide-react";

const footerSections = [
  {
    title: "Resumes",
    links: [
      { label: "Resume Builder", href: "/resume/ai-resume-builder" },
      { label: "Templates", href: "/resume/templates" },
      { label: "Examples", href: "/resume/examples" },
      { label: "Resume Checker", href: "/resume/resume-checker" },
    ],
  },
  {
    title: "Cover Letters",
    links: [
      { label: "Builder", href: "/cover-letters/builder" },
      { label: "Templates", href: "/cover-letters/templates" },
      { label: "Examples", href: "/cover-letters/examples" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Learning", href: "/learning" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 md:grid-cols-[1.4fr_2fr]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2.5"
            >
              <Infinity
                className="size-8 text-primary"
                strokeWidth={2.2}
              />

              <span className="text-lg font-semibold tracking-tight">
                MiamiResumeWorks
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
              Create professional resumes and career documents that help you
              move forward.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold">
                  {section.title}
                </h3>

                <ul className="mt-4 space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} MiamiResumeWorks. All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy
            </Link>

            <Link href="/terms" className="hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}