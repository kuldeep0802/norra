import Link from "next/link";
import { Logo } from "./Logo";
import { footerLinks } from "@/lib/data/nav";
import { founder } from "@/lib/data/founder";

export function Footer() {
  return (
    <footer className="print-hide bg-night text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo light />
            <p className="mt-4 text-sky max-w-sm leading-relaxed">
              Early-stage navigation and organization tools for life in Canada — guides, checklists, and next steps.
            </p>
            <div className="mt-6 space-y-1.5 text-sm text-sky">
              <p>
                <span className="text-sky/70">Founder:</span> {founder.name}
              </p>
              <p>
                <span className="text-sky/70">Email:</span>{" "}
                <a href={`mailto:${founder.email}`} className="hover:text-cream transition-colors">
                  {founder.email}
                </a>
              </p>
              <p>
                <span className="text-sky/70">Phone:</span>{" "}
                <a href={`tel:${founder.phoneTel}`} className="hover:text-cream transition-colors">
                  {founder.phone}
                </a>
              </p>
            </div>
            <p className="mt-6 text-xs text-sky/80 max-w-md leading-relaxed">
              Norra is an early-stage assistance and navigation product — not a law firm, immigration consultancy,
              medical provider, financial institution, or government organization. No outcomes are guaranteed.
            </p>
          </div>
          {(
            [
              ["Product", footerLinks.product],
              ["Journey", footerLinks.journey],
              ["Company", footerLinks.company],
            ] as const
          ).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-amber mb-4">{title}</h3>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l.href + l.label}>
                    <Link href={l.href} className="text-sm text-sky hover:text-cream transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-sky/80">
          <p>© {new Date().getFullYear()} Norra · Early-stage product. All rights reserved.</p>
          <p>Pronounced NOR-uh · Built for newcomers and anyone navigating Canada.</p>
        </div>
      </div>
    </footer>
  );
}
