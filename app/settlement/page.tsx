import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Disclaimer } from "@/components/Disclaimer";

export const metadata = { title: "Settlement" };

export default function SettlementPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Settlement"
          title="Build your life in Canada"
          description="Language, community, employment programs, healthcare registration, and the everyday systems that make a place feel like home."
        />
        <Disclaimer className="mt-8 max-w-3xl">
          Settlement services are often delivered by community agencies funded by government. Norra helps you
          navigate and connect — we are not a replacement for official settlement providers.
        </Disclaimer>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            ["My Canada Plan", "Personalized checklist across housing, work, and admin.", "/plan"],
            ["Language & skills", "Where to look for ESL and bridging programs.", "/resources"],
            ["Community & culture", "City guides and everyday life tips.", "/cities"],
            ["Government setup", "SIN, taxes, benefits, health cards.", "/government"],
            ["Family & children", "Schools, childcare, family logistics.", "/services/family-children"],
            ["Settlement navigators", "Book demo settlement professionals.", "/professionals"],
          ].map(([t, d, h]) => (
            <a key={t} href={h} className="rounded-2xl bg-white border border-night/5 p-6 hover:border-forest/30 transition-colors">
              <h3 className="font-semibold text-lg">{t}</h3>
              <p className="mt-2 text-sm text-muted">{d}</p>
            </a>
          ))}
        </div>
        <Button href="/plan" className="mt-10">
          Start settling with a plan
        </Button>
      </div>
    </div>
  );
}
