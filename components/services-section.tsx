"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { AutoImageSlider } from "@/components/auto-image-slider";
import { SectionBadge } from "@/components/section-badge";
import { services } from "@/lib/data";

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <section className="section-shell py-20 md:py-24">
      <div className="theme-transition rounded-[2rem] p-8 shadow-sm theme-surface-strong md:p-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <SectionBadge>Services</SectionBadge>
          <h2 className="section-heading">Services built around Microsoft Power Platform and custom delivery.</h2>
          <p className="section-copy max-w-2xl">
            Explore Power Apps, Power Automate, model-driven apps, third-party integrations, websites,
            and custom applications through one clear service experience.
          </p>
        </div>

        <div className="mt-10 md:hidden">
          <div className="theme-transition flex items-center gap-3 rounded-xl px-4 py-3 theme-surface-strong">
            <ChevronDown className="h-4 w-4 text-[var(--primary)]" />
            <select
              value={activeIndex}
              onChange={(event) => setActiveIndex(Number(event.target.value))}
              className="w-full bg-transparent text-sm font-medium text-[var(--heading)] outline-none"
            >
              {services.map((service, index) => (
                <option key={service.title} value={index}>
                  {service.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="mt-12"
          >
            <div className="relative overflow-hidden rounded-[2rem]">
              <div className="relative h-[280px] md:h-[340px]">
                <AutoImageSlider
                  images={activeService.images}
                  className="absolute inset-0 h-full w-full"
                  imageClassName="object-cover"
                />
              </div>
            </div>

            <div className="relative z-10 -mt-20 px-4 md:-mt-24">
              <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  const active = activeIndex === index;

                  return (
                    <motion.button
                      key={service.title}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      whileHover={{ y: -8, scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className={`theme-transition relative flex min-h-[250px] flex-col rounded-2xl p-6 text-center ${
                        active
                          ? "theme-surface-strong shadow-[0_24px_60px_var(--glow)] ring-2 ring-[var(--primary)]"
                          : "glass-panel hover:shadow-[0_18px_40px_var(--glow)]"
                      }`}
                    >
                      <div className="absolute -top-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-xl bg-[linear-gradient(135deg,var(--primary),var(--accent))] text-white shadow-[0_18px_40px_var(--glow)]">
                        <Icon className="h-5 w-5" />
                      </div>

                      <h4 className="mt-8 text-lg font-semibold text-[var(--heading)]">{service.title}</h4>
                      <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">{service.description}</p>
                      <span className="mt-auto pt-5 text-sm font-semibold text-[var(--primary)]">Explore More</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
