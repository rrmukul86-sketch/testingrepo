"use client";

import { motion } from "framer-motion";
import { AutoImageSlider } from "@/components/auto-image-slider";
import { SectionBadge } from "@/components/section-badge";
import { aboutSlides, businessOutcomes, deliveryJourney } from "@/lib/data";

export function ImplementationSection() {
  return (
    <section className="section-shell py-20 md:py-24">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="theme-transition overflow-hidden rounded-[2rem] p-6 glass-panel md:p-8"
        >
          <SectionBadge>Implementation Journey</SectionBadge>
          <h2 className="section-heading mt-6">A clearer view of how your app, automation, or website project gets delivered.</h2>
          <p className="section-copy mt-5 max-w-2xl">
            We move from discovery to launch with a practical implementation approach that keeps business goals,
            user needs, integrations, and adoption aligned throughout the delivery cycle.
          </p>

          <div className="mt-8 overflow-hidden rounded-[1.75rem]">
            <div className="relative min-h-[300px]">
              <AutoImageSlider
                images={aboutSlides}
                className="h-full min-h-[300px]"
                imageClassName="object-cover"
                intervalMs={2800}
              />
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {businessOutcomes.map((outcome, index) => {
              const Icon = outcome.icon;

              return (
                <motion.article
                  key={outcome.title}
                  className="theme-transition rounded-[1.5rem] p-5 theme-surface-strong"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--primary),var(--accent))] text-white shadow-[0_18px_40px_var(--glow)]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-[var(--heading)]">{outcome.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">{outcome.description}</p>
                </motion.article>
              );
            })}
          </div>
        </motion.div>

        <div className="space-y-4">
          {deliveryJourney.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.title}
                className="theme-transition rounded-[1.75rem] p-6 glass-panel"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.01 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--primary),var(--accent))] text-white shadow-[0_18px_40px_var(--glow)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="rounded-full border border-[color:var(--primary)]/25 bg-[color:var(--primary)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                    {step.metric}
                  </div>
                </div>

                <h3 className="mt-5 text-xl font-semibold text-[var(--heading)]">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{step.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
