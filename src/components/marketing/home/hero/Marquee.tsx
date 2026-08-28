"use client";

import { motion } from "framer-motion";

const COMPANIES = [
  "Google",
  "Microsoft",
  "Amazon",
  "Meta",
  "Apple",
  "Adobe",
  "Deloitte",
  "IBM",
  "Spotify",
  "Netflix",
];

export default function TrustedCompaniesMarquee() {
  return (
    <section className="mt-24 sm:mt-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-6 bg-border" />

          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Designed for modern careers
          </p>

          <div className="h-px w-6 bg-border" />
        </div>

        {/* Logo rail */}
        <div className="relative mt-8">
          <div className="overflow-hidden">
            <motion.div
              className="flex w-max items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 38,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {[...COMPANIES, ...COMPANIES].map((company, index) => (
                <div
                  key={`${company}-${index}`}
                  className="flex items-center"
                >
                  <span
                    className="
                      mx-8
                      whitespace-nowrap
                      text-[18px]
                      font-semibold
                      tracking-[-0.035em]
                      text-foreground/30
                      transition-all
                      duration-300
                      hover:text-foreground/65
                      sm:mx-10
                      sm:text-[20px]
                    "
                  >
                    {company}
                  </span>

                  <span className="h-1 w-1 rounded-full bg-border" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Small supporting line */}
        <p className="mt-6 text-center text-xs text-muted-foreground/70">
          Professional resumes for every stage of your career.
        </p>
      </div>
    </section>
  );
}