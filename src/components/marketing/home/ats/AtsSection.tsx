import Image from "next/image";
import AtsSectionContent from "./AtsSectionContent";
import AtsCards from "./AtsCards";

export default function AtsSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 px-6 py-20 lg:py-28">
      <Image
        src="/images/others/background.png"
        alt=""
        fill
        className="object-cover opacity-30"
      />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <AtsSectionContent />
        <AtsCards />
      </div>
    </section>
  );
}