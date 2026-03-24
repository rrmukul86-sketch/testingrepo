import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CompactSoft | Smart IT Solutions",
  description:
    "A modern corporate SaaS website for ERP, payroll, cloud, and automation solutions."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
