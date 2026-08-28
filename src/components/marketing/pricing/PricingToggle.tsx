"use client";

import { motion } from "framer-motion";

export type BillingInterval = "monthly" | "yearly";

interface PricingToggleProps {
  value: BillingInterval;
  onChange: (value: BillingInterval) => void;
  yearlySavingsLabel?: string;
}

export default function PricingToggle({
  value,
  onChange,
  yearlySavingsLabel,
}: PricingToggleProps) {
  return (
    <div className="flex justify-center">
      <div
        role="radiogroup"
        aria-label="Billing interval"
        className="relative flex items-center rounded-full border border-slate-200 bg-white p-1 shadow-sm"
      >
        {(["monthly", "yearly"] as const).map((interval) => {
          const active = value === interval;
          return (
            <button
              key={interval}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onChange(interval)}
              className="relative z-10 flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-emerald-600/30"
            >
              {active && (
                <motion.span
                  layoutId="pricing-toggle-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-slate-900"
                  transition={{ type: "spring", stiffness: 300, damping: 28 }}
                />
              )}
              <span className={active ? "text-white" : "text-slate-500"}>
                {interval === "monthly" ? "Monthly" : "Yearly"}
              </span>
              {interval === "yearly" && yearlySavingsLabel && (
                <span
                  className={
                    active
                      ? "rounded-full bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-bold text-emerald-300"
                      : "rounded-full bg-emerald-100 px-1.5 py-0.5 text-[10px] font-bold text-emerald-700"
                  }
                >
                  {yearlySavingsLabel}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}