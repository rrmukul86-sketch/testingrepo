import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SiteLayout } from "@/components/site-layout";
import { getProductModuleBySlug, productModules } from "@/lib/data";

type ProductDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return productModules.map((module) => ({
    slug: module.slug
  }));
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const module = getProductModuleBySlug(slug);

  if (!module) {
    notFound();
  }

  const Icon = module.icon;

  return (
    <SiteLayout>
      <PageHero badge="Solution Module" title={module.title} description={module.overview} />

      <section className="section-shell py-20 md:py-24">
        <div className="grid gap-8 lg:items-start lg:grid-cols-[0.9fr_1.1fr]">
          <div className="theme-transition self-start rounded-[2rem] p-8 glass-panel md:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--primary),var(--accent))] text-white shadow-[0_18px_40px_var(--glow)]">
              <Icon className="h-6 w-6" />
            </div>
            <h2 className="section-heading mt-6">What this module helps you manage</h2>
            <p className="section-copy mt-5">{module.description}</p>

            <div className="mt-8 rounded-[1.5rem] theme-surface-strong p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-[var(--primary)]">Best fit</div>
              <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                This module is ideal for teams that want a more reliable digital workflow, better user visibility,
                and stronger connection between apps, automation, and day-to-day operations.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="theme-transition rounded-[2rem] p-8 theme-surface-strong theme-ring md:p-10">
              <h2 className="section-heading">Key Highlights</h2>
              <div className="mt-8 grid gap-4">
                {module.highlights.map((item) => (
                  <div key={item} className="theme-transition flex items-start gap-3 rounded-[1.25rem] p-4 theme-surface-muted">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-[var(--primary)]" />
                    <p className="text-sm leading-7 text-[var(--text-muted)]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="theme-transition rounded-[2rem] p-8 glass-panel md:p-10">
              <h2 className="section-heading">Typical Use Cases</h2>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {module.useCases.map((item, index) => (
                  <div key={item} className="theme-transition rounded-[1.25rem] p-5 theme-surface-strong">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                      0{index + 1}
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="theme-transition rounded-[2rem] p-8 theme-surface-strong theme-ring md:p-10">
              <h2 className="section-heading">Project Examples</h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {module.projects.map((project, index) => (
                  <div key={project} className="theme-transition rounded-[1.25rem] p-5 theme-surface-muted">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                      Project 0{index + 1}
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{project}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/services"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)]"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
