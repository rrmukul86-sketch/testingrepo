import { PageHero } from "@/components/page-hero";
import { ProductsSection } from "@/components/products-section";
import { ServicesSection } from "@/components/services-section";
import { SiteLayout } from "@/components/site-layout";

export default function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        badge="Services"
        title="Business software services designed for clarity, speed, and long-term support."
        description="Explore our ERP, payroll, POS, cloud, and integration offerings with placeholder visuals and demo-ready content."
      />
      <ServicesSection />
      <ProductsSection />
    </SiteLayout>
  );
}
