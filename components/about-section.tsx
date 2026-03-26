"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AutoImageSlider } from "@/components/auto-image-slider";
import { SectionBadge } from "@/components/section-badge";
import { aboutSlides, aboutStats } from "@/lib/data";

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
      <div className="grid gap-10 lg:items-start lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <SectionBadge>About</SectionBadge>
          <h2 className="section-heading mt-6">A delivery partner focused on apps, automation, integration, and digital build work.</h2>
          <p className="section-copy mt-5">
            We help businesses move from manual processes to connected digital workflows with Power Platform,
            websites, custom applications, and third-party integrations tailored to how teams actually work.
          </p>

          <div className="mt-8 overflow-hidden rounded-[2rem] glass-panel">
            <div className="relative min-h-[320px]">
              <AutoImageSlider images={aboutSlides} className="h-full min-h-[320px]" />
            </div>
          </div>
        </motion.div>

        <div className="grid self-start gap-6 sm:grid-cols-3">
          {aboutStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="theme-transition flex min-h-[210px] flex-col rounded-[1.75rem] p-6 glass-panel"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -6, scale: 1.01 }}
            >
              <div className="text-4xl font-bold tracking-tight text-[var(--heading)]">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
