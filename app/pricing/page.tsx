import { PageHero } from "@/components/page-hero";
import { PricingSection } from "@/components/pricing-section";
import { SiteLayout } from "@/components/site-layout";

export default function PricingPage() {
  return (
    <SiteLayout>
      <PageHero
        badge="Pricing"
        title="Flexible engagement models for apps, automation, integrations, websites, and custom builds."
        description="Use these plans as a starting point while your final scope, delivery phases, and support model are being prepared."
      />
      <PricingSection />
    </SiteLayout>
  );
}
