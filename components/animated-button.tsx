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
      ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-[0_18px_40px_rgba(37,99,235,0.25)]"
      : "border border-sky-200 bg-white text-sky-900 shadow-[0_14px_30px_rgba(148,163,184,0.12)]";

  return (
    <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex">
      <Link
        href={href}
        className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300 hover:shadow-[0_24px_50px_rgba(37,99,235,0.18)] ${styles} ${className}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}
