import { ContactSection } from "@/components/contact-section";
import { PageHero } from "@/components/page-hero";
import { SiteLayout } from "@/components/site-layout";

export default function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        badge="Contact"
        title="Talk to us about Power Apps, Power Automate, integrations, websites, or custom applications."
        description="Use the form below to send your requirement directly to the backend and capture every inquiry in one place."
      />
      <ContactSection />
    </SiteLayout>
  );
}
