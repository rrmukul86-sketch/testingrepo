import { PageHero } from "@/components/page-hero";
import { ProductsSection } from "@/components/products-section";
import { ServicesSection } from "@/components/services-section";
import { SiteLayout } from "@/components/site-layout";

export default function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        badge="Services"
        title="Digital solution services designed for business workflows, usability, and scale."
        description="Explore Power Apps, Power Automate, model-driven apps, integration services, website delivery, and custom application builds."
      />
      <ServicesSection />
      <ProductsSection />
    </SiteLayout>
  );
}
