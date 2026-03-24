import { AboutSection } from "@/components/about-section";
import { PageHero } from "@/components/page-hero";
import { SiteLayout } from "@/components/site-layout";
import { WhyChooseUsSection } from "@/components/why-choose-us-section";

export default function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        badge="About"
        title="A long-term technology partner for ERP, payroll, cloud, and automation initiatives."
        description="This page gives the brand a dedicated story instead of compressing everything into one landing page."
      />
      <AboutSection />
      <WhyChooseUsSection />
    </SiteLayout>
  );
}
