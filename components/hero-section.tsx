"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { AnimatedButton } from "@/components/animated-button";
import { AutoImageSlider } from "@/components/auto-image-slider";
import { heroPillars, heroSlides, heroStats } from "@/lib/data";

export function HeroSection() {
  const heroFeatureCards = [
    {
      eyebrow: "Power Platform",
      title: "Apps that fit work",
      description: "Build focused business apps that match real team processes, approvals, and daily operations.",
      className: "theme-transition rounded-[1.75rem] p-6 theme-surface-strong"
    },
    {
      eyebrow: "Automation first",
      title: "Smarter workflows",
      description: "Replace repeated manual tasks with Power Automate flows, alerts, approvals, and connected actions.",
      className:
        "rounded-[1.75rem] bg-[linear-gradient(135deg,var(--primary),var(--accent))] p-6 text-white shadow-[0_20px_60px_var(--glow)]"
    },
    {
      eyebrow: "Custom delivery",
      title: "Websites and apps",
      description: "Launch websites, portals, integrations, and business applications from one delivery partner.",
      className: "theme-transition rounded-[1.75rem] p-6 theme-surface-muted"
    }
  ];

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
            Power Platform, automation, and custom application delivery
          </motion.div>

          <motion.h1
            className="mt-8 max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-[-0.05em] text-[var(--heading)] md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Build Power Apps, automate workflows, and launch digital solutions faster
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-muted)] md:text-lg"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            We help businesses create Power Apps, Power Automate flows, model-driven apps, third-party
            integrations, websites, and custom applications designed around real operational needs.
          </motion.p>

          <motion.div
            className="mt-8 grid gap-3"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            {heroPillars.map((pillar, index) => (
              <div
                key={pillar}
                className="theme-transition flex items-start gap-3 rounded-2xl border border-[color:var(--primary)]/15 bg-[color:var(--surface)]/70 px-4 py-3 text-sm leading-6 text-[var(--text-muted)] backdrop-blur-sm"
              >
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[linear-gradient(135deg,var(--primary),var(--accent))]" />
                <span>
                  <span className="mr-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                    0{index + 1}
                  </span>
                  {pillar}
                </span>
              </div>
            ))}
          </motion.div>

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
                Explore Power Platform
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
          <div className="absolute left-4 top-8 h-28 w-28 rounded-full bg-[var(--glow)] blur-3xl" />
          <div className="absolute right-0 bottom-8 h-32 w-32 rounded-full bg-[var(--glow)] blur-3xl" />

          <div className="theme-transition overflow-hidden rounded-[2rem] p-4 md:p-5 glass-panel">
            <div className="grid items-stretch gap-4 md:gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.86fr)]">
              <div className="relative min-h-[360px] overflow-hidden rounded-[1.6rem] md:min-h-[420px]">
                <AutoImageSlider images={heroSlides} className="h-full min-h-[360px] md:min-h-[420px]" intervalMs={5600} />
                <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-slate-950/60 to-transparent p-6 text-white">
                  <div className="text-xs uppercase tracking-[0.24em] text-[color:var(--accent)]">Digital solution showcase</div>
                  <div className="mt-2 text-xl font-semibold">Power Platform, integration, and app delivery in motion</div>
                </div>
              </div>

              <div className="grid gap-4 md:gap-5 auto-rows-fr">
                {heroFeatureCards.map((card, index) => (
                  <motion.div
                    key={card.eyebrow}
                    initial={{ opacity: 0, x: 24, y: 12 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.28 + index * 0.1 }}
                    whileHover={{ y: -6, scale: 1.01 }}
                    className={`${card.className} min-h-[150px]`}
                  >
                    <div
                      className={`text-xs uppercase tracking-[0.22em] ${
                        index === 1 ? "text-white/75" : "text-[var(--text-muted)]"
                      }`}
                    >
                      {card.eyebrow}
                    </div>
                    <div
                      className={`mt-3 font-bold ${
                        index === 0 ? "text-3xl text-[var(--heading)]" : "text-2xl text-inherit"
                      }`}
                    >
                      {card.title}
                    </div>
                    <p
                      className={`mt-3 text-sm leading-7 ${
                        index === 1 ? "text-white/85" : "text-[var(--text-muted)]"
                      }`}
                    >
                      {card.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
