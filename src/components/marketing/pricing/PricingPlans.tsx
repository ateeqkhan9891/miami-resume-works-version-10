"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import PricingToggle, { type BillingInterval } from "./PricingToggle";

type PricingPlan = {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  ctaLabel: string;
  ctaHref: string;
  features: string[];
  highlighted?: boolean;
};

const PLANS: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    description: "Get a professional resume built in minutes.",
    monthlyPrice: 0,
    yearlyPrice: 0,
    ctaLabel: "Start for free",
    ctaHref: "/signup",
    features: [
      "Resume builder workspace",
      "Selected templates",
      "Basic customization",
      "Resume editing",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    description: "Full design control and optimization tools.",
    monthlyPrice: 12,
    yearlyPrice: 8,
    ctaLabel: "Upgrade to Pro",
    ctaHref: "/signup?plan=pro",
    highlighted: true,
    features: [
      "All templates",
      "Unlimited editing",
      "Fonts, colors & spacing",
      "Section reordering",
      "Multiple resumes",
      "ATS optimization tools",
      "Advanced export options",
    ],
  },
];

const YEARLY_SAVINGS_PERCENT = Math.round(
  (1 - PLANS[1].yearlyPrice / PLANS[1].monthlyPrice) * 100,
);

export default function PricingPlans() {
  const [billingInterval, setBillingInterval] =
    useState<BillingInterval>("monthly");

  return (
    <section className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-10">
        <PricingToggle
          value={billingInterval}
          onChange={setBillingInterval}
          yearlySavingsLabel={`Save ${YEARLY_SAVINGS_PERCENT}%`}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {PLANS.map((plan, index) => {
          const price =
            billingInterval === "monthly"
              ? plan.monthlyPrice
              : plan.yearlyPrice;

          return (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <Card
                className={
                  plan.highlighted
                    ? "relative flex h-full flex-col gap-6 overflow-hidden rounded-2xl border-emerald-300 bg-emerald-50/40 p-7 pt-9 shadow-md ring-1 ring-emerald-200 transition-shadow hover:shadow-lg"
                    : "relative flex h-full flex-col gap-6 rounded-2xl border-slate-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
                }
              >
                {plan.highlighted && (
                  <span className="absolute left-0 top-0 rounded-br-xl bg-emerald-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                    Most flexible
                  </span>
                )}

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {plan.description}
                  </p>
                </div>

                <div aria-live="polite">
                  <div className="flex items-baseline gap-1.5">
                    <motion.span
                      key={`${plan.id}-${billingInterval}`}
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-4xl font-bold tracking-tight text-slate-900"
                    >
                      ${price}
                    </motion.span>
                    <span className="text-sm text-slate-400">
                      {price === 0 ? "forever free" : "/ month"}
                    </span>
                  </div>
                  <p className="mt-1 h-4 text-xs text-slate-400">
                    {billingInterval === "yearly" && price > 0
                      ? "Billed annually"
                      : "\u00A0"}
                  </p>
                </div>

                <Link href={plan.ctaHref} className="block w-full">
                  <Button
                    size="lg"
                    variant={plan.highlighted ? "default" : "outline"}
                    className={
                      plan.highlighted
                        ? "w-full rounded-xl bg-emerald-600 hover:bg-emerald-700"
                        : "w-full rounded-xl"
                    }
                  >
                    {plan.ctaLabel}
                  </Button>
                </Link>

                <ul className="flex flex-1 flex-col gap-2.5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}