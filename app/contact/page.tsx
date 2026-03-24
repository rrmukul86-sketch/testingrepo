import { ContactSection } from "@/components/contact-section";
import { PageHero } from "@/components/page-hero";
import { SiteLayout } from "@/components/site-layout";

export default function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        badge="Contact"
        title="Talk to us about ERP, payroll, cloud services, or custom automation."
        description="Use the form below as a placeholder lead capture experience while backend handling is still being planned."
      />
      <ContactSection />
    </SiteLayout>
  );
}
