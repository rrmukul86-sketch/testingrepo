"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type AnimatedButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function AnimatedButton({
  href,
  children,
  variant = "primary",
  className = ""
}: AnimatedButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-[linear-gradient(135deg,var(--primary),var(--accent))] text-white shadow-[0_20px_45px_var(--glow)]"
      : "theme-surface-strong theme-text";

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.03, boxShadow: "0 22px 48px var(--glow)" }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      className="inline-flex"
    >
      <Link
        href={href}
        className={`theme-transition inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold hover:scale-[1.01] hover:shadow-[0_24px_50px_var(--glow)] ${styles} ${className}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}
