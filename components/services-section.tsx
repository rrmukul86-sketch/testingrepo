"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedButton } from "@/components/animated-button";
import { SectionBadge } from "@/components/section-badge";
import { services } from "@/lib/data";

export function ServicesSection() {
  return (
    <section className="section-shell py-20 md:py-24">
      <div className="flex flex-col gap-6 md:max-w-2xl">
        <SectionBadge>Services</SectionBadge>
        <h2 className="section-heading text-slate-950">Service cards with dummy visuals for ERP and beyond.</h2>
        <p className="section-copy text-slate-600">
          Each service is shown with placeholder imagery so we can refine the layout and interaction style
          before final content and assets are added.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.article
              key={service.title}
              className="overflow-hidden rounded-[1.8rem] border border-sky-100 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.06)]"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -6 }}
            >
              <div className="relative h-48">
                <Image src={service.image} alt={service.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
                <div className="mt-6">
                  <AnimatedButton href={service.href} className="px-5 py-2.5">
                    Read More
                  </AnimatedButton>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
