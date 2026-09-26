import { SectionHeader } from "@/components/SectionHeader";
import { ContactFounder } from "@/components/ContactFounder";
import { DemoBanner } from "@/components/DemoBanner";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Contact"
          title="Get in touch"
          description="Reach Norra’s Founder directly by email or phone. The on-page form is a demo UI until email delivery is wired."
        />
        <DemoBanner emphasis className="mt-8">
          Prefer a real reply today? Use the Email or Call buttons — those go straight to the Founder. The message
          form below does not send mail yet.
        </DemoBanner>
        <div className="mt-10">
          <ContactFounder />
        </div>
      </div>
    </div>
  );
}
