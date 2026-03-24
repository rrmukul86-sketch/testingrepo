"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { AnimatedButton } from "@/components/animated-button";
import { heroStats } from "@/lib/data";

export function HeroSection() {
  return (
    <section className="section-shell pb-20 pt-14 md:pb-24 md:pt-20">
      <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex rounded-full border border-sky-100 bg-white px-4 py-2 text-xs font-medium text-sky-700 shadow-sm"
          >
            Smart IT infrastructure for modern businesses
          </motion.div>

          <motion.h1
            className="mt-8 max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-[-0.05em] text-slate-950 md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Empowering Businesses with Smart IT Solutions
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            A premium white-and-blue SaaS website experience for ERP, payroll, POS, cloud services,
            and business automation with clean structure, dummy visuals, and room to scale.
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
              <div key={stat.label} className="rounded-2xl border border-sky-100 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                <div className="text-2xl font-bold text-slate-950">{stat.value}</div>
                <div className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</div>
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
          <div className="absolute -left-6 top-8 h-28 w-28 rounded-full bg-sky-200/60 blur-3xl" />
          <div className="absolute -right-6 bottom-8 h-32 w-32 rounded-full bg-blue-200/70 blur-3xl" />
          <div className="overflow-hidden rounded-[2rem] border border-sky-100 bg-white p-4 shadow-[0_32px_80px_rgba(37,99,235,0.12)]">
            <div className="rounded-[1.6rem] border border-sky-100 bg-[linear-gradient(180deg,#f8fbff,#eef6ff)] p-5">
              <div className="flex items-center justify-between rounded-2xl border border-sky-100 bg-white px-4 py-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Demo dashboard</p>
                  <p className="mt-1 text-sm font-semibold text-slate-950">Business operations overview</p>
                </div>
                <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">
                  Live
                </div>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-3xl bg-slate-950 p-5">
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Operational uplift</div>
                      <div className="mt-2 text-3xl font-bold text-white">+42%</div>
                    </div>
                    <div className="rounded-full bg-sky-500/15 px-3 py-1 text-xs text-sky-200">
                      SaaS-style reporting
                    </div>
                  </div>
                  <div className="mt-6 flex h-40 items-end gap-3">
                    {[36, 58, 70, 88, 84, 108, 126].map((bar, index) => (
                      <motion.div
                        key={bar}
                        className="flex-1 rounded-t-2xl bg-gradient-to-t from-sky-500 via-blue-500 to-cyan-300"
                        initial={{ height: 0 }}
                        animate={{ height: `${bar}px` }}
                        transition={{ duration: 0.6, delay: 0.2 + index * 0.05 }}
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  {["ERP rollout ready", "Payroll automation demo"].map((item, index) => (
                    <motion.div
                      key={item}
                      className="rounded-3xl border border-sky-100 bg-white p-5"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY, delay: index * 0.4 }}
                    >
                      <div className="text-sm font-semibold text-slate-950">{item}</div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Placeholder cards for quick highlights, key modules, or product snapshots.
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
