import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function PricingFinalCTA() {
  return (
    <section className="mx-auto max-w-2xl px-6 pb-24 pt-6 text-center">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        Ready to build a stronger resume?
      </h2>
      <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
        Create your resume with a workspace designed for the entire
        application process.
      </p>
      <Link href="/signup">
  <Button size="lg" className="mt-6 rounded-xl bg-slate-900 hover:bg-slate-800">
    Create my resume
  </Button>
</Link>
    </section>
  );
}