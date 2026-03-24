"use client";

import { motion } from "framer-motion";
import { SectionBadge } from "@/components/section-badge";
import { productModules } from "@/lib/data";

export function ProductsSection() {
  return (
    <section className="section-shell py-20 md:py-24">
      <div className="rounded-[2rem] border border-sky-100 bg-[linear-gradient(180deg,#eff6ff,#ffffff)] p-8 shadow-[0_30px_80px_rgba(37,99,235,0.08)] md:p-12">
        <div className="flex flex-col gap-6 md:max-w-2xl">
          <SectionBadge>Products & Add-ons</SectionBadge>
          <h2 className="section-heading text-slate-950">Modern modules presented in a clean SaaS grid.</h2>
          <p className="section-copy text-slate-600">
            Dummy tools and module cards help shape the product hierarchy while preserving a premium,
            corporate visual language.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {productModules.map((module, index) => {
            const Icon = module.icon;

            return (
              <motion.article
                key={module.title}
                className="rounded-[1.5rem] border border-sky-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-950">{module.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{module.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
