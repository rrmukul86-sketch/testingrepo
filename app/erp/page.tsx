import Image from "next/image";
import { AnimatedButton } from "@/components/animated-button";
import { PageHero } from "@/components/page-hero";
import { SiteLayout } from "@/components/site-layout";
import { erpHighlights, erpModules } from "@/lib/data";

export default function ErpPage() {
  return (
    <SiteLayout>
      <PageHero
        badge="ERP Solutions"
        title="A modern ERP experience with dummy content, visuals, and module previews."
        description="This page showcases placeholder ERP content so you can continue refining structure, layout, and visual style before adding final business material."
      />

      <section className="section-shell py-16 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-[2rem] border border-sky-100 bg-white shadow-[0_28px_70px_rgba(37,99,235,0.1)]">
            <div className="relative h-[420px]">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80"
                alt="ERP dashboard placeholder"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Dummy ERP overview</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Use this section for ERP screenshots, workflow demos, client case studies, and module breakdowns.
              The current content is intentionally placeholder so we can shape the site structure first.
            </p>
            <div className="mt-8 space-y-4">
              {erpHighlights.map((item) => (
                <div key={item} className="rounded-2xl border border-sky-100 bg-white px-5 py-4 text-sm text-slate-700 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <AnimatedButton href="/contact">Book Demo</AnimatedButton>
              <AnimatedButton href="/services" variant="secondary">
                Explore Services
              </AnimatedButton>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {erpModules.map((module) => {
            const Icon = module.icon;
            return (
              <article
                key={module.title}
                className="rounded-[1.75rem] border border-sky-100 bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">{module.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{module.description}</p>
              </article>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}
