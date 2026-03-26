import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { ClientsSection } from "@/components/clients-section";
import { HeroSection } from "@/components/hero-section";
import { ImplementationSection } from "@/components/implementation-section";
import { PricingSection } from "@/components/pricing-section";
import { ProductsSection } from "@/components/products-section";
import { ServicesSection } from "@/components/services-section";
import { SiteLayout } from "@/components/site-layout";
import { WhyChooseUsSection } from "@/components/why-choose-us-section";

export default function Home() {
  return (
    <SiteLayout>
      <HeroSection />
      <ServicesSection />
      <ProductsSection />
      <ClientsSection />
      <WhyChooseUsSection />
      <ImplementationSection />
      <PricingSection />
      <AboutSection />
      <ContactSection />
    </SiteLayout>
  );
}
