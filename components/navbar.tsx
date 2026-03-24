"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { AnimatedButton } from "@/components/animated-button";
import { navLinks } from "@/lib/data";

export function Navbar() {
  const pathname = usePathname();

  return (
    <motion.header
      className="section-shell sticky top-0 z-50 pt-6"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <nav className="flex items-center justify-between rounded-full border border-sky-100 bg-white/85 px-4 py-3 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl md:px-6">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold tracking-wide text-slate-950">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-200">
            <Sparkles className="h-4 w-4" />
          </span>
          CompactSoft
        </Link>

        <div className="hidden items-center gap-6 text-sm md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition ${active ? "text-sky-700" : "text-slate-600 hover:text-sky-700"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <AnimatedButton href="/contact" className="px-5 py-2.5">
            Contact Us
          </AnimatedButton>
        </div>
      </nav>
    </motion.header>
  );
}
