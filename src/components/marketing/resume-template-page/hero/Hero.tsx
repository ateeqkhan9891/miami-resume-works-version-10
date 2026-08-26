import SectionBackground from "@/components/common/HeroBackground";
import HeroContent from "@/components/marketing/resume-template-page/hero/TemplatesHeroContent";
import TemplatesHeroVisual from "@/components/marketing/resume-template-page/hero/TemplatesHeroVisual";
import { ChevronRight } from "lucide-react";
import Link from "next/link";


export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-1 sm:pt-2 pb-10 lg:pt-3 lg:pb-14">
      <SectionBackground variant="indigo-dots" />

      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col gap-3 lg:col-span-7">
            <nav className="flex mb-10 ml-3 items-center gap-1.5 text-xs font-medium text-slate-500">
              <Link href="/" className="hover:text-slate-900 transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3 w-3 text-slate-400" />
              <span className="font-semibold text-slate-900">Templates</span>
            </nav>

            <HeroContent />
          </div>

          <div className="flex justify-center lg:col-span-5 lg:-mt-6">
            <TemplatesHeroVisual />
          </div>
          
        </div>
            
      </div>
      
    </section>
  );
}