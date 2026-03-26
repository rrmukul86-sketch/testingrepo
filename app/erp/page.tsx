"use client";

import { motion } from "framer-motion";
import { AnimatedButton } from "@/components/animated-button";
import { AutoImageSlider } from "@/components/auto-image-slider";
import { PageHero } from "@/components/page-hero";
import { SiteLayout } from "@/components/site-layout";
import { erpHighlights, erpModules, services } from "@/lib/data";

export default function ErpPage() {
  return (
    <SiteLayout>
      <PageHero
        badge="Power Platform"
        title="Power Apps, Power Automate, model-driven apps, and integration delivery in one place."
        description="Explore how we design business applications, automate workflows, and connect systems with scalable Microsoft-based solutions."
      />

      <section className="section-shell py-16 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="theme-transition overflow-hidden rounded-[2rem] glass-panel">
            <div className="relative h-[420px]">
              <AutoImageSlider images={services[0]?.images ?? []} className="h-full" />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--heading)]">Power Platform solution overview</h2>
            <p className="mt-5 text-base leading-8 text-[var(--text-muted)]">
              Use this section to present Power Apps, automation flows, model-driven experiences, dashboards,
              and integration examples that show how the platform supports your business operations.
            </p>
            <div className="mt-8 space-y-4">
              {erpHighlights.map((item) => (
                <div key={item} className="theme-transition rounded-2xl px-5 py-4 text-sm text-[var(--text)] glass-panel">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <AnimatedButton href="/contact">Book Demo</AnimatedButton>
              <AnimatedButton href="/services" variant="secondary">
                Explore Services
              </AnimatedButton>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {erpModules.map((module) => {
            const Icon = module.icon;
            return (
              <motion.article
                key={module.title}
                className="theme-transition flex min-h-[260px] flex-col rounded-[1.75rem] p-7 glass-panel"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45 }}
                whileHover={{ y: -8, scale: 1.01 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--primary),var(--accent))] text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[var(--heading)]">{module.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{module.description}</p>
              </motion.article>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}
