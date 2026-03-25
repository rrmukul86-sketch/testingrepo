"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";
import { AnimatedButton } from "@/components/animated-button";
import { SectionBadge } from "@/components/section-badge";
import { pricingPlans } from "@/lib/data";

export function PricingSection() {
  const [showMultiplePlans, setShowMultiplePlans] = useState(false);

  return (
    <section className="section-shell py-20 md:py-24">
      <div className="flex flex-col items-center text-center">
        <SectionBadge>Pricing</SectionBadge>
        <h2 className="section-heading mt-6">Flip between single and multiple plan pricing modes.</h2>
        <p className="section-copy mx-auto mt-5">
          Toggle the switch and every pricing card flips in 3D to reveal a different pricing story and a deeper CTA.
        </p>

        <div className="mt-8 flex items-center gap-4 rounded-full px-4 py-3 theme-surface-strong">
          <span className={`text-sm ${!showMultiplePlans ? "text-[var(--heading)]" : "text-[var(--text-muted)]"}`}>
            Single Plan
          </span>
          <motion.button
            type="button"
            onClick={() => setShowMultiplePlans((current) => !current)}
            className="relative h-8 w-16 rounded-full bg-[var(--surface-muted)]"
            aria-label="Toggle pricing mode"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 24px var(--glow)" }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 320, damping: 20 }}
          >
            <motion.span
              className="absolute left-1 top-1 h-6 w-6 rounded-full bg-[linear-gradient(135deg,var(--primary),var(--accent))]"
              animate={{ x: showMultiplePlans ? 32 : 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 24 }}
            />
          </motion.button>
          <span className={`text-sm ${showMultiplePlans ? "text-[var(--heading)]" : "text-[var(--text-muted)]"}`}>
            Multiple Plans
          </span>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3 [perspective:1800px]">
        {pricingPlans.map((plan) => (
          <motion.div key={plan.name} className="h-[430px]" whileHover={{ y: -8, scale: 1.01 }}>
            <motion.div
              className="relative h-full w-full [transform-style:preserve-3d]"
              animate={{ rotateY: showMultiplePlans ? 180 : 0 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
            >
              <div
                className={`theme-transition absolute inset-0 rounded-[1.9rem] p-7 [backface-visibility:hidden] ${
                  plan.featured ? "theme-surface-strong theme-ring" : "glass-panel"
                }`}
              >
                {plan.featured ? (
                  <div className="absolute right-6 top-6 rounded-full bg-[var(--surface-muted)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                    Most Popular
                  </div>
                ) : null}

                <div className="text-lg font-semibold text-[var(--heading)]">{plan.name}</div>
                <div className="mt-4 flex items-end gap-2">
                  <span className="text-5xl font-bold tracking-tight text-[var(--heading)]">{plan.price}</span>
                  <span className="pb-1 text-sm text-[var(--text-muted)]">{plan.price === "Custom" ? "" : "/ month"}</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">{plan.description}</p>

                <div className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm text-[var(--text)]">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="theme-transition absolute inset-0 rounded-[1.9rem] p-7 glass-panel [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">{plan.altLabel}</div>
                <div className="mt-4 text-5xl font-bold tracking-tight text-[var(--heading)]">{plan.altPrice}</div>
                <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">
                  A richer plan view with implementation-oriented detail, ideal for premium service packaging.
                </p>

                <div className="mt-8 space-y-4">
                  {plan.detailedFeatures.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm text-[var(--text)]">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--surface-muted)] text-[var(--primary)]">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {feature}
                    </div>
                  ))}
                  {plan.altFeatures.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm text-[var(--text)]">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--surface-muted)] text-[var(--primary)]">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <AnimatedButton href="/contact" className="w-full">
                    {plan.cta}
                  </AnimatedButton>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
