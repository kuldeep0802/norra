import { SectionHeader } from "@/components/SectionHeader";
import { PlanChecklist } from "@/components/PlanChecklist";
import { beforeYouArriveItems } from "@/lib/data/checklists";
import { Disclaimer } from "@/components/Disclaimer";
import { Button } from "@/components/Button";

export const metadata = { title: "Before You Arrive" };

export default function BeforeYouArrivePage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Preparation"
          title="Before you arrive in Canada"
          description="Toggle items as you complete them — progress saves in this browser (localStorage)."
        />
        <Disclaimer className="mt-8">
          This checklist is general guidance. Requirements vary by status and destination. Confirm official
          instructions for your visa/permit type.
        </Disclaimer>
        <div className="mt-10">
          <PlanChecklist items={beforeYouArriveItems} storageKey="norra-before-arrive" />
        </div>
        <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-3">
          <Button href="/plan" className="min-h-11">
            Build My Canada Plan
          </Button>
          <Button href="/resources/prepare-before-landing" variant="outline" className="min-h-11">
            Read full prepare-before-landing guide
          </Button>
          <Button href="/arrival" variant="outline" className="min-h-11">
            Arrival services
          </Button>
        </div>
      </div>
    </div>
  );
}
