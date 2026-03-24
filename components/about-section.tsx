"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SectionBadge } from "@/components/section-badge";
import { aboutStats } from "@/lib/data";

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1200;
    const step = Math.max(1, Math.floor(value / 40));
    const interval = window.setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        window.clearInterval(interval);
      } else {
        setCount(start);
      }
    }, duration / 40);

    return () => window.clearInterval(interval);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function AboutSection() {
  return (
    <section className="section-shell py-20 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <SectionBadge>About</SectionBadge>
          <h2 className="section-heading mt-6 text-slate-950">A more credible corporate presence, now spread across real pages.</h2>
          <p className="section-copy mt-5 text-slate-600">
            The site is no longer compressed into a single landing page. This gives room for individual
            service stories, ERP detail pages, and richer trust-building content.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-3">
          {aboutStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="rounded-[1.75rem] border border-sky-100 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.05)]"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <div className="text-4xl font-bold tracking-tight text-slate-950">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
