import { AboutSection } from "@/components/about-section";
import { PageHero } from "@/components/page-hero";
import { SiteLayout } from "@/components/site-layout";
import { WhyChooseUsSection } from "@/components/why-choose-us-section";

export default function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        badge="About"
        title="A long-term digital partner for Power Platform, integration, website, and application initiatives."
        description="This page explains how we approach app delivery, workflow automation, connected systems, and scalable digital solutions."
      />
      <AboutSection />
      <WhyChooseUsSection />
    </SiteLayout>
  );
}
