import { PageHero } from "@/components/page-hero";
import { PricingSection } from "@/components/pricing-section";
import { SiteLayout } from "@/components/site-layout";

export default function PricingPage() {
  return (
    <SiteLayout>
      <PageHero
        badge="Pricing"
        title="Simple pricing that scales from starter setups to enterprise deployments."
        description="Use these placeholder plans as a starting point while final pricing, feature mapping, and service tiers are being prepared."
      />
      <PricingSection />
    </SiteLayout>
  );
}
