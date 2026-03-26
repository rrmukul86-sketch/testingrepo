"use client";

import { motion } from "framer-motion";
import { SectionBadge } from "@/components/section-badge";
import { whyChooseUs } from "@/lib/data";

export function WhyChooseUsSection() {
  return (
    <section className="section-shell py-20 md:py-24">
      <div className="theme-transition rounded-[2rem] p-8 md:p-12 theme-surface-strong theme-ring">
        <div className="flex flex-col gap-6 md:max-w-2xl">
          <SectionBadge>Why Choose Us</SectionBadge>
          <h2 className="section-heading">Practical digital delivery backed by real workflow thinking.</h2>
          <p className="section-copy">
            We focus on solutions that teams can actually use, maintain, and expand as the business grows.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                className="theme-transition flex min-h-[250px] flex-col rounded-[1.5rem] p-6 glass-panel hover:-translate-y-1 hover:shadow-[0_18px_50px_var(--glow)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                whileHover={{ y: -8, scale: 1.01 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--primary),var(--accent))] text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[var(--heading)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
