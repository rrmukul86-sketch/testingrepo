"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Sparkles, X } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import { AnimatedButton } from "@/components/animated-button";
import { ThemeSelector } from "@/components/theme-selector";
import { ThemeToggle } from "@/components/theme-toggle";
import { useClickOutside } from "@/hooks/use-click-outside";
import { useScrollState } from "@/hooks/use-scroll-state";
import { megaMenu, navLinks } from "@/lib/data";

export function Navbar() {
  const pathname = usePathname();
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const isScrolled = useScrollState();
  const closeMenus = useCallback(() => {
    setMegaOpen(false);
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, []);

  useClickOutside(navRef, closeMenus, megaOpen || mobileOpen);

  const baseLinks = navLinks.filter((link) => link.label !== "Services");

  return (
    <motion.header
      className="section-shell sticky top-0 z-50 pt-4 sm:pt-5 md:pt-6"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div ref={navRef} className="relative">
        <nav
          className={`theme-transition flex items-center justify-between rounded-3xl px-4 py-3 sm:px-5 md:rounded-full md:px-6 ${
            isScrolled
              ? "border border-[var(--border)] bg-[color:var(--surface)]/90 shadow-[0_24px_60px_var(--glow)] backdrop-blur-2xl"
              : "glass-panel"
          }`}
        >
          <Link href="/" className="flex items-center gap-3 text-sm font-semibold tracking-wide text-[var(--heading)]">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--primary),var(--accent))] text-white shadow-lg shadow-sky-200">
              <Sparkles className="h-4 w-4" />
            </span>
            CompactSoft
          </Link>

          <div className="hidden items-center gap-6 text-sm lg:flex">
            <Link
              href="/"
              className={`theme-transition ${pathname === "/" ? "text-[var(--primary)]" : "text-[var(--text-muted)] hover:text-[var(--primary)]"}`}
            >
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <motion.button
                type="button"
                onClick={() => setMegaOpen((current) => !current)}
                className={`theme-transition inline-flex items-center gap-1 ${pathname === "/services" || pathname === "/erp" ? "text-[var(--primary)]" : "text-[var(--text-muted)] hover:text-[var(--primary)]"}`}
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 320, damping: 20 }}
              >
                Services
                <ChevronDown className={`h-4 w-4 transition ${megaOpen ? "rotate-180" : ""}`} />
              </motion.button>

              <AnimatePresence>
                {megaOpen ? (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="absolute left-1/2 top-full z-50 mt-5 w-[min(92vw,980px)] -translate-x-1/2"
                  >
                    <div className="theme-transition grid gap-6 rounded-[2rem] p-6 glass-panel md:grid-cols-3">
                      {[
                        { title: "BUSY Services", items: megaMenu.busyServices },
                        { title: "BUSY Add-ons", items: megaMenu.busyAddOns },
                        { title: "Other Services", items: megaMenu.otherServices }
                      ].map((group) => (
                        <div key={group.title}>
                          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                            {group.title}
                          </div>
                          <div className="mt-4 space-y-3">
                            {group.items.map((item) => {
                              const Icon = item.icon;
                              return (
                                <Link
                                  key={item.title}
                                  href={item.href}
                                  onClick={closeMenus}
                                  className="theme-transition block rounded-2xl p-4 theme-surface-strong hover:-translate-y-0.5 hover:shadow-[0_18px_40px_var(--glow)]"
                                >
                                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--primary),var(--accent))] text-white">
                                    <Icon className="h-4 w-4" />
                                  </div>
                                  <div className="mt-3 text-sm font-semibold text-[var(--heading)]">{item.title}</div>
                                  <p className="mt-2 text-xs leading-6 text-[var(--text-muted)]">{item.description}</p>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            {baseLinks
              .filter((link) => link.label !== "Home")
              .map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`theme-transition ${active ? "text-[var(--primary)]" : "text-[var(--text-muted)] hover:text-[var(--primary)]"}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeSelector />
            <ThemeToggle />
            <AnimatedButton href="/contact" className="px-5 py-2.5">
              Contact Us
            </AnimatedButton>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeSelector />
            <ThemeToggle />
            <motion.button
              type="button"
              onClick={() => setMobileOpen((current) => !current)}
              className="theme-transition flex h-11 w-11 items-center justify-center rounded-full theme-surface-strong"
              aria-label="Toggle menu"
              whileHover={{ y: -2, scale: 1.04, boxShadow: "0 14px 28px var(--glow)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 320, damping: 20 }}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.button>
          </div>
        </nav>

        <AnimatePresence>
          {mobileOpen ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="mt-3 lg:hidden"
            >
              <div className="theme-transition rounded-[2rem] p-5 glass-panel">
                <div className="space-y-3">
                  <Link
                    href="/"
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-sm font-medium text-[var(--heading)] theme-surface-strong"
                  >
                    Home
                  </Link>

                  <div className="rounded-2xl theme-surface-strong">
                    <motion.button
                      type="button"
                      onClick={() => setMobileServicesOpen((current) => !current)}
                      className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-[var(--heading)]"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 320, damping: 20 }}
                    >
                      Services
                      <ChevronDown className={`h-4 w-4 transition ${mobileServicesOpen ? "rotate-180" : ""}`} />
                    </motion.button>

                    <AnimatePresence>
                      {mobileServicesOpen ? (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-3 px-4 pb-4">
                            {[...megaMenu.busyServices, ...megaMenu.busyAddOns, ...megaMenu.otherServices].map((item) => {
                              const Icon = item.icon;
                              return (
                                <Link
                                  key={`${item.title}-${item.href}`}
                                  href={item.href}
                                  onClick={() => {
                                    setMobileOpen(false);
                                    setMobileServicesOpen(false);
                                  }}
                                  className="theme-transition block rounded-2xl p-3 hover:bg-[var(--surface-muted)]"
                                >
                                  <div className="flex items-start gap-3">
                                    <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--primary),var(--accent))] text-white">
                                      <Icon className="h-4 w-4" />
                                    </div>
                                    <div>
                                      <div className="text-sm font-semibold text-[var(--heading)]">{item.title}</div>
                                      <div className="mt-1 text-xs leading-5 text-[var(--text-muted)]">{item.description}</div>
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>

                  {baseLinks
                    .filter((link) => link.label !== "Home")
                    .map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={closeMenus}
                        className="block rounded-2xl px-4 py-3 text-sm font-medium text-[var(--heading)] theme-surface-strong"
                      >
                        {link.label}
                      </Link>
                    ))}
                </div>

                <div className="mt-4">
                  <AnimatedButton href="/contact" className="w-full">
                    Contact Us
                  </AnimatedButton>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
