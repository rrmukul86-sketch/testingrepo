import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

type SiteLayoutProps = {
  children: React.ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <main className="theme-transition relative min-h-screen overflow-hidden text-[var(--text)]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,var(--glow),transparent_24%),radial-gradient(circle_at_90%_10%,rgba(14,165,233,0.08),transparent_24%)]" />
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
