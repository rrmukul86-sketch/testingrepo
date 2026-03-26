"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, LoaderCircle } from "lucide-react";
import { SectionBadge } from "@/components/section-badge";
import { contactDetails } from "@/lib/data";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

const initialFormState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: ""
};

export function ContactSection() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "We could not send your inquiry. Please try again.");
      }

      setFormData(initialFormState);
      setSubmitStatus({
        type: "success",
        message: result.message ?? "Your inquiry was sent successfully."
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Something went wrong. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  }

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
          <h2 className="section-heading mt-6">Let&apos;s discuss your app, automation, integration, or website requirement.</h2>
          <p className="section-copy mt-5">
            Share your requirement and the form will submit it to the backend so your team can review Power Platform, website, and application requests from one place.
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
          onSubmit={handleSubmit}
          className="theme-transition rounded-[2rem] p-6 glass-panel md:p-8"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              { label: "Name", name: "name", type: "text", placeholder: "Your name", required: true },
              { label: "Company", name: "company", type: "text", placeholder: "Company name", required: false },
              { label: "Email", name: "email", type: "email", placeholder: "you@company.com", required: true },
              { label: "Phone", name: "phone", type: "text", placeholder: "+91", required: false }
            ].map((field) => (
              <label key={field.name} className="block">
                <span className="mb-2 block text-sm text-[var(--text-muted)]">{field.label}</span>
                <input
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  value={formData[field.name as keyof FormState]}
                  onChange={(event) =>
                    setFormData((current) => ({
                      ...current,
                      [field.name]: event.target.value
                    }))
                  }
                  placeholder={field.placeholder}
                  className="theme-transition w-full rounded-2xl border bg-[var(--surface-muted)] px-4 py-3 text-sm text-[var(--text)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:bg-[var(--surface-strong)]"
                />
              </label>
            ))}
          </div>

          <label className="mt-5 block">
            <span className="mb-2 block text-sm text-[var(--text-muted)]">Project details</span>
            <textarea
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={(event) =>
                setFormData((current) => ({
                  ...current,
                  message: event.target.value
                }))
              }
              placeholder="Tell us about Power Apps, Power Automate, model-driven apps, integrations, websites, or custom applications..."
              className="theme-transition w-full rounded-[1.5rem] border bg-[var(--surface-muted)] px-4 py-3 text-sm text-[var(--text)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:bg-[var(--surface-strong)]"
            />
          </label>

          {submitStatus ? (
            <div
              className={`mt-5 rounded-2xl border px-4 py-3 text-sm ${
                submitStatus.type === "success"
                  ? "border-emerald-400/40 bg-emerald-500/10 text-emerald-100"
                  : "border-rose-400/40 bg-rose-500/10 text-rose-100"
              }`}
            >
              {submitStatus.message}
            </div>
          ) : null}

          <div className="mt-6">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ y: -4, scale: isSubmitting ? 1 : 1.03, boxShadow: "0 22px 48px var(--glow)" }}
              whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
              className="theme-transition inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--primary),var(--accent))] px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_45px_var(--glow)] hover:scale-[1.01] hover:shadow-[0_24px_50px_var(--glow)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
              {isSubmitting ? "Sending..." : "Send Inquiry"}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
