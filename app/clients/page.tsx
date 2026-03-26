import { ClientsSection } from "@/components/clients-section";
import { SiteLayout } from "@/components/site-layout";

export default function ClientsPage() {
  return (
    <SiteLayout>
      <ClientsSection showLink={false} variant="page" />
    </SiteLayout>
  );
}
