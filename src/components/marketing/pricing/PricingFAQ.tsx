"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "Can I start for free?",
    answer:
      "Yes. The Free plan includes a full resume builder workspace with selected templates and basic customization — no card required.",
  },
  {
    question: "Can I switch plans?",
    answer:
      "You can upgrade to Pro at any time to unlock all templates and advanced customization.",
  },
  {
    question: "Can I keep my resumes if I downgrade?",
    answer:
      "Your existing resumes stay in your workspace. Some Pro-only customization options may become read-only until you upgrade again.",
  },
  {
    question: "Can I create multiple resumes?",
    answer:
      "Multiple resumes are available on the Pro plan, so you can tailor a version for each application.",
  },
  {
    question: "Can I export my resume?",
    answer:
      "Yes — both plans support exporting your resume. Pro includes additional export options.",
  },
  {
    question: "Is yearly billing cheaper?",
    answer:
      "Yes, yearly billing on Pro is discounted compared to paying monthly.",
  },
];

export default function PricingFAQ() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-14">
      <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        Frequently asked questions
      </h2>

      <Accordion multiple={false} className="mt-8">
        {FAQS.map((faq, index) => (
          <AccordionItem key={faq.question} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-sm font-semibold text-slate-800">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-6 text-slate-500">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}