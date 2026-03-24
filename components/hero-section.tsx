"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { AnimatedButton } from "@/components/animated-button";
import { AutoImageSlider } from "@/components/auto-image-slider";
import { heroSlides, heroStats } from "@/lib/data";

export function HeroSection() {
  return (
    <section className="section-shell pb-20 pt-14 md:pb-24 md:pt-20">
      <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="theme-transition inline-flex rounded-full px-4 py-2 text-xs font-medium text-[var(--primary)] theme-surface-strong"
          >
            Smart IT infrastructure for modern businesses
          </motion.div>

          <motion.h1
            className="mt-8 max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-[-0.05em] text-[var(--heading)] md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Empowering Businesses with Smart IT Solutions
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-muted)] md:text-lg"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            A high-end multi-page SaaS website experience for ERP, payroll, POS, cloud services, and
            business automation, now with theme switching and richer motion across the interface.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <AnimatedButton href="/services">
              <span className="inline-flex items-center gap-2">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </span>
            </AnimatedButton>
            <AnimatedButton href="/erp" variant="secondary">
              <span className="inline-flex items-center gap-2">
                Explore ERP
                <PlayCircle className="h-4 w-4" />
              </span>
            </AnimatedButton>
          </motion.div>

          <motion.div
            className="mt-14 grid gap-5 sm:grid-cols-3"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {heroStats.map((stat) => (
              <div key={stat.label} className="theme-transition rounded-2xl p-5 glass-panel">
                <div className="text-2xl font-bold text-[var(--heading)]">{stat.value}</div>
                <div className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -left-6 top-8 h-28 w-28 rounded-full bg-[var(--glow)] blur-3xl" />
          <div className="absolute -right-6 bottom-8 h-32 w-32 rounded-full bg-[var(--glow)] blur-3xl" />

          <div className="theme-transition overflow-hidden rounded-[2rem] p-4 glass-panel">
            <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-[420px] overflow-hidden rounded-[1.6rem]">
                <AutoImageSlider images={heroSlides} className="h-full min-h-[420px]" />
                <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-slate-950/60 to-transparent p-6 text-white">
                  <div className="text-xs uppercase tracking-[0.24em] text-[color:var(--accent)]">Auto-changing showcase</div>
                  <div className="mt-2 text-xl font-semibold">Premium SaaS visuals with soft transitions</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="theme-transition rounded-3xl p-5 theme-surface-strong">
                  <div className="text-xs uppercase tracking-[0.22em] text-[var(--text-muted)]">Live insights</div>
                  <div className="mt-2 text-3xl font-bold text-[var(--heading)]">+42%</div>
                  <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                    Placeholder metrics, visual confidence, and premium depth without losing clarity.
                  </p>
                </div>

                <div className="rounded-3xl bg-[linear-gradient(135deg,var(--primary),var(--accent))] p-5 text-white shadow-[0_20px_60px_var(--glow)]">
                  <div className="text-sm font-semibold">Dark mode included</div>
                  <p className="mt-2 text-sm leading-6 text-white/85">
                    Theme variables now drive the UI so the site transitions cleanly between light and dark.
                  </p>
                </div>

                <div className="theme-transition rounded-3xl p-5 theme-surface-muted">
                  <div className="text-sm font-semibold text-[var(--heading)]">Interactive everywhere</div>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                    Buttons glow on hover, sections reveal on scroll, and image systems rotate automatically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
