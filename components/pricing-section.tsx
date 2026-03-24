"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { AnimatedButton } from "@/components/animated-button";
import { SectionBadge } from "@/components/section-badge";
import { pricingPlans } from "@/lib/data";

export function PricingSection() {
  return (
    <section className="section-shell py-20 md:py-24">
      <div className="text-center">
        <SectionBadge>Pricing</SectionBadge>
        <h2 className="section-heading mt-6 text-slate-950">Flexible pricing in a clean white-and-blue layout.</h2>
        <p className="section-copy mx-auto mt-5 text-slate-600">
          These placeholder plans are easy to replace later with real commercial tiers and service bundles.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <motion.article
            key={plan.name}
            className={`relative rounded-[1.9rem] border p-7 shadow-[0_24px_60px_rgba(15,23,42,0.06)] ${
              plan.featured
                ? "border-sky-300 bg-[linear-gradient(180deg,#eff6ff,#ffffff)]"
                : "border-sky-100 bg-white"
            }`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
          >
            {plan.featured ? (
              <div className="absolute right-6 top-6 rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                Most Popular
              </div>
            ) : null}

            <div className="text-lg font-semibold text-slate-950">{plan.name}</div>
            <div className="mt-4 flex items-end gap-2">
              <span className="text-5xl font-bold tracking-tight text-slate-950">{plan.price}</span>
              <span className="pb-1 text-sm text-slate-500">{plan.price === "Custom" ? "" : "/ month"}</span>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600">{plan.description}</p>

            <div className="mt-8 space-y-4">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {feature}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <AnimatedButton href="/contact" variant={plan.featured ? "primary" : "secondary"} className="w-full">
                {plan.cta}
              </AnimatedButton>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
