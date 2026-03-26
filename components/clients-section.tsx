"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionBadge } from "@/components/section-badge";
import { clientLogos } from "@/lib/data";

type ClientsSectionProps = {
  showLink?: boolean;
  variant?: "default" | "page";
};

export function ClientsSection({ showLink = true, variant = "default" }: ClientsSectionProps) {
  if (variant === "page") {
    return (
      <section className="section-shell pb-20 pt-16 md:pb-24 md:pt-20">
        <div className="relative overflow-hidden rounded-[2.4rem] border border-white/15 bg-[linear-gradient(135deg,var(--surface-muted),var(--surface))] shadow-[0_28px_80px_var(--glow)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--glow),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.25),transparent_28%)]" />
          <div className="absolute inset-y-0 left-0 w-[32%] bg-[radial-gradient(circle_at_left,var(--primary),transparent_70%)] opacity-15" />

          <div className="relative z-10 border-b border-white/10 px-8 py-8 md:px-12">
            <div className="flex items-center gap-4 text-[var(--heading)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--primary),var(--accent))] text-xl font-bold text-white shadow-[0_18px_40px_var(--glow)]">
                K
              </div>
              <div>
                <div className="text-3xl font-bold tracking-tight md:text-4xl">Krishya</div>
                <div className="mt-1 text-sm tracking-[0.24em] text-[var(--text-muted)] uppercase">Our Clients</div>
              </div>
            </div>
          </div>

          <div className="relative z-10 px-6 py-10 md:px-10 md:py-14">
            <div className="relative overflow-hidden rounded-[2.1rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,255,255,0.82))] p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] md:p-12">
              <div className="absolute left-0 top-0 h-24 w-full bg-[linear-gradient(165deg,var(--surface-muted)_0%,var(--surface-muted)_28%,transparent_29%)]" />

              <div className="relative z-10 flex flex-col items-center text-center">
                <SectionBadge>Client Showcase</SectionBadge>
                <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-[var(--heading)] md:text-5xl">
                  Take a look at our clients
                </h1>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--text-muted)] md:text-base">
                  Trusted by brands across digital solutions, application delivery, workflow automation, and integration projects.
                </p>
              </div>

              <div className="relative z-10 mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {clientLogos.map((client, index) => (
                  <motion.div
                    key={client.name}
                    className="theme-transition flex min-h-[120px] items-center justify-center rounded-[1.6rem] border border-[color:var(--primary)]/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,255,255,0.88))] px-6 text-center text-lg font-semibold tracking-[0.06em] text-[var(--heading)] shadow-[0_16px_32px_rgba(15,23,42,0.08)]"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    whileHover={{ y: -6, scale: 1.01 }}
                  >
                    {client.name}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-shell py-20 md:py-24">
      <div className="theme-transition relative overflow-hidden rounded-[2.2rem] border border-white/15 p-8 glass-panel md:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_28%),radial-gradient(circle_at_bottom_right,var(--glow),transparent_26%)]" />
        <div className="absolute left-0 top-0 h-24 w-full bg-[linear-gradient(165deg,var(--surface-muted)_0%,var(--surface-muted)_25%,transparent_26%)] opacity-90" />

        <div className="relative z-10 flex items-center justify-between gap-4">
          <div>
            <SectionBadge>Our Clients</SectionBadge>
            <h2 className="section-heading mt-5">Brands we have worked with</h2>
          </div>
          {showLink ? (
            <Link href="/clients" className="text-sm font-semibold text-[var(--primary)]">
              View all
            </Link>
          ) : null}
        </div>

        <div className="relative z-10 mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {clientLogos.map((client, index) => (
            <motion.div
              key={client.name}
              className="theme-transition flex min-h-[110px] items-center justify-center rounded-[1.5rem] border border-[color:var(--primary)]/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,255,255,0.88))] px-6 text-center text-base font-semibold tracking-[0.05em] text-[var(--heading)] shadow-[0_16px_32px_rgba(15,23,42,0.08)]"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -6, scale: 1.01 }}
            >
              {client.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
