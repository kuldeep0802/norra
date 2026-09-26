import { SectionHeader } from "@/components/SectionHeader";
import { ChatAssistant } from "@/components/ChatAssistant";
import { Disclaimer } from "@/components/Disclaimer";
import { DemoBanner } from "@/components/DemoBanner";

export const metadata = { title: "Nora Assistant" };

export default function AssistantPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Ask Nora"
          title="Your in-product guide"
          description="Rule-based demo assistant that routes you to guides, checklists, and official sources. Not a substitute for licensed advice."
          align="center"
        />
        <DemoBanner emphasis className="mt-8">
          <strong>Demo assistant:</strong> Nora is a rule-based guide in this early product — not AI advice and not
          a substitute for licensed professionals.
        </DemoBanner>
        <Disclaimer className="mt-4">
          Nora does not invent eligibility rules or policies. For immigration, legal, health, or finance topics,
          she points you toward official sources and reminds you to seek authorized help independently.
        </Disclaimer>
        <div className="mt-10">
          <ChatAssistant />
        </div>
      </div>
    </div>
  );
}
