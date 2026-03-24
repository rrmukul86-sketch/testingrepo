"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AnimatedButton } from "@/components/animated-button";
import { SectionBadge } from "@/components/section-badge";
import { contactDetails } from "@/lib/data";

export function ContactSection() {
  return (
    <section className="section-shell py-20 md:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <SectionBadge>Contact</SectionBadge>
          <h2 className="section-heading mt-6">Clean contact experience with placeholder details.</h2>
          <p className="section-copy mt-5">
            This form is presentational for now, giving you a polished contact section while we keep the
            backend and submission flow separate.
          </p>

          <div className="mt-8 space-y-4">
            {contactDetails.map((item) => (
              <div key={item.label} className="theme-transition rounded-2xl px-5 py-4 glass-panel">
                <div className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">{item.label}</div>
                <div className="mt-2 text-sm text-[var(--text)]">{item.value}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.form
          className="theme-transition rounded-[2rem] p-6 glass-panel md:p-8"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              { label: "Name", type: "text", placeholder: "Your name" },
              { label: "Company", type: "text", placeholder: "Company name" },
              { label: "Email", type: "email", placeholder: "you@company.com" },
              { label: "Phone", type: "text", placeholder: "+91" }
            ].map((field) => (
              <label key={field.label} className="block">
                <span className="mb-2 block text-sm text-[var(--text-muted)]">{field.label}</span>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="theme-transition w-full rounded-2xl border bg-[var(--surface-muted)] px-4 py-3 text-sm text-[var(--text)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:bg-[var(--surface-strong)]"
                />
              </label>
            ))}
          </div>

          <label className="mt-5 block">
            <span className="mb-2 block text-sm text-[var(--text-muted)]">Project details</span>
            <textarea
              rows={5}
              placeholder="Tell us about ERP, payroll, POS, cloud, or automation needs..."
              className="theme-transition w-full rounded-[1.5rem] border bg-[var(--surface-muted)] px-4 py-3 text-sm text-[var(--text)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:bg-[var(--surface-strong)]"
            />
          </label>

          <div className="mt-6">
            <AnimatedButton href="/contact">
              <span className="inline-flex items-center gap-2">
                Send Inquiry
                <ArrowRight className="h-4 w-4" />
              </span>
            </AnimatedButton>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
