import { SectionHeader } from "@/components/SectionHeader";
import { ContactFounder } from "@/components/ContactFounder";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Contact"
          title="Get in touch"
          description="Reach Norra’s Founder directly, or leave a message. We’re building a Canadian platform people can trust."
        />
        <div className="mt-10">
          <ContactFounder />
        </div>
      </div>
    </div>
  );
}
