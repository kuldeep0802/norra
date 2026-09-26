import { SectionHeader } from "@/components/SectionHeader";
import { Disclaimer } from "@/components/Disclaimer";
import { Badge } from "@/components/Badge";
import { FileText, Lock, Upload } from "lucide-react";

export const metadata = { title: "Documents" };

const folders = [
  { name: "Identity & travel", items: ["Passport bio page", "Photo", "eTA / visa confirmation"] },
  { name: "Study / work", items: ["Letter of acceptance", "Offer letter", "Transcripts"] },
  { name: "Financial", items: ["Bank statements", "Tuition receipt", "Proof of funds"] },
  { name: "Arrival", items: ["Flight itinerary", "Temp housing booking", "Insurance"] },
];

export default function DocumentsPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Document organizer"
          title="Keep your paperwork oriented"
          description="A secure-looking organizer UI for planning — this demo does not upload or store sensitive files."
        />
        <Disclaimer variant="warning" className="mt-8">
          <strong>Privacy:</strong> Do not upload real passports, SIN numbers, or financial documents here. This
          is a UI prototype. In a production product, documents would use encrypted storage with clear retention
          controls — and you would always keep master copies offline.
        </Disclaimer>

        <div className="mt-10 flex items-center gap-3 rounded-2xl border border-dashed border-forest/30 bg-sky/20 p-6 text-sm text-muted">
          <Upload className="h-6 w-6 text-forest shrink-0" />
          <div>
            <p className="font-medium text-ink">Upload disabled in demo</p>
            <p>Use the checklist below to track which documents you have prepared locally.</p>
          </div>
          <Lock className="h-5 w-5 text-muted ml-auto shrink-0" />
        </div>

        <div className="mt-8 grid sm:grid-cols-2 gap-5">
          {folders.map((f) => (
            <div key={f.name} className="rounded-2xl bg-white border border-night/5 p-6">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="h-5 w-5 text-forest" />
                <h3 className="font-semibold">{f.name}</h3>
                <Badge variant="demo" className="ml-auto">
                  Demo
                </Badge>
              </div>
              <ul className="space-y-2">
                {f.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
