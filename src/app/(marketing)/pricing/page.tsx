import PricingHero from "@/components/marketing/pricing/PricingHero";
import PricingPlans from "@/components/marketing/pricing/PricingPlans";
import PricingComparison from "@/components/marketing/pricing/PricingComparison";
import PricingValueSection from "@/components/marketing/pricing/PricingValueSection";
import PricingFAQ from "@/components/marketing/pricing/PricingFAQ";
import PricingFinalCTA from "@/components/marketing/pricing/PricingFinalCTA";

export default function PricingPage() {
  return (
    <main className="bg-[#fdfbf7]">
      <PricingHero />
      <PricingPlans />
      <PricingComparison />
      <PricingValueSection />
      <PricingFAQ />
      <PricingFinalCTA />
    </main>
  );
}