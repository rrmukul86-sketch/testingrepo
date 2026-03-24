import Image from "next/image";
import { AnimatedButton } from "@/components/animated-button";
import { PageHero } from "@/components/page-hero";
import { SiteLayout } from "@/components/site-layout";
import { services } from "@/lib/data";

export default function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        badge="Services"
        title="Business software services designed for clarity, speed, and long-term support."
        description="Explore our ERP, payroll, POS, cloud, and integration offerings with placeholder visuals and demo-ready content."
      />

      <section className="section-shell py-16 md:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="overflow-hidden rounded-[2rem] border border-sky-100 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
              >
                <div className="relative h-64">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                </div>
                <div className="p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold text-slate-950">{service.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{service.description}</p>
                  <div className="mt-6">
                    <AnimatedButton href={service.href}>View Details</AnimatedButton>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}
