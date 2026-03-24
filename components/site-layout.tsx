import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

type SiteLayoutProps = {
  children: React.ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_50%,#eff6ff_100%)] text-slate-950">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_24%),radial-gradient(circle_at_90%_10%,rgba(14,165,233,0.12),transparent_22%)]" />
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
