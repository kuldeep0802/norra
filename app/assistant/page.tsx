import { SectionHeader } from "@/components/SectionHeader";
import { ChatAssistant } from "@/components/ChatAssistant";
import { Disclaimer } from "@/components/Disclaimer";

export const metadata = { title: "Nora Assistant" };

export default function AssistantPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Ask Nora"
          title="Your in-product guide"
          description="Rule-based demo assistant that routes you to services, checklists, and professionals. Not a substitute for licensed advice."
          align="center"
        />
        <Disclaimer className="mt-8">
          Nora does not invent eligibility rules or policies. For immigration, legal, health, or finance topics,
          she will point you toward authorized professionals and official sources.
        </Disclaimer>
        <div className="mt-10">
          <ChatAssistant />
        </div>
      </div>
    </div>
  );
}
