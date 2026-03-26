import Link from "next/link";
import { ArrowUpRight, Linkedin, Mail, MapPin, Phone, Send, Sparkles, Twitter } from "lucide-react";
import { contactDetails, navLinks, services, socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="section-shell pb-10 pt-14">
      <div className="relative overflow-hidden rounded-[2rem] glass-panel">
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--accent),transparent)]" />

        <div className="grid gap-10 px-6 py-10 md:grid-cols-2 md:px-8 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 text-[var(--heading)]">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--primary),var(--accent))] text-white shadow-[0_18px_40px_var(--glow)]">
                <Sparkles className="h-4 w-4" />
              </span>
              <div>
                <div className="font-semibold">Krishya</div>
                <div className="text-sm text-[var(--text-muted)]">Power Platform and custom digital solution partner.</div>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-[var(--text-muted)]">
              Built to present Power Apps, Power Automate, model-driven apps, integrations, websites,
              and application delivery with clear business messaging and a polished experience.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { label: "Power Platform", value: "Apps, automation, and integration delivery" },
                { label: "Custom build", value: "Websites, portals, and business applications" }
              ].map((item) => (
                <div key={item.label} className="theme-transition rounded-2xl px-4 py-3 theme-surface-strong">
                  <div className="text-sm font-semibold text-[var(--heading)]">{item.label}</div>
                  <div className="mt-1 text-xs leading-5 text-[var(--text-muted)]">{item.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex gap-3">
              {[
                { href: socialLinks[0]?.href ?? "#", icon: Linkedin, label: "LinkedIn" },
                { href: socialLinks[1]?.href ?? "#", icon: Twitter, label: "X" },
                { href: socialLinks[2]?.href ?? "#", icon: Send, label: "GitHub" }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="theme-transition flex h-11 w-11 items-center justify-center rounded-full theme-surface-strong hover:-translate-y-1 hover:text-[var(--primary)] hover:shadow-[0_16px_30px_var(--glow)]"
                    aria-label={item.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--heading)]">Services</h3>
            <div className="mt-5 space-y-3">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group inline-flex text-sm text-[var(--text-muted)] transition hover:text-[var(--primary)]"
                >
                  <span className="border-b border-transparent transition group-hover:border-[var(--primary)]">
                    {service.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--heading)]">Quick Links</h3>
            <div className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group inline-flex items-center gap-1 text-sm text-[var(--text-muted)] transition hover:text-[var(--primary)]"
                >
                  <span className="border-b border-transparent transition group-hover:border-[var(--primary)]">
                    {link.label}
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--heading)]">Contact Info</h3>
            <div className="mt-5 space-y-4 text-sm text-[var(--text-muted)]">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-[var(--primary)]" />
                <span>{contactDetails[0]?.value}</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-[var(--primary)]" />
                <span>{contactDetails[1]?.value}</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-[var(--primary)]" />
                <span>{contactDetails[2]?.value}</span>
              </div>
            </div>

            <div className="mt-6 rounded-[1.5rem] bg-[linear-gradient(135deg,var(--primary),var(--accent))] p-5 text-white shadow-[0_20px_50px_var(--glow)]">
              <div className="text-xs uppercase tracking-[0.18em] text-white/75">Need a demo</div>
              <p className="mt-3 text-sm leading-6 text-white/85">
                Use the contact form to discuss Power Apps, Power Automate, model-driven apps, integrations,
                website delivery, or a custom application build.
              </p>
              <Link href="/contact" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
                Contact our team
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
