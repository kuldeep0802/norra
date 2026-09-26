import Link from "next/link";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="py-24 px-4 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-forest">404</p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-ink">Page not found</h1>
      <p className="mt-4 text-muted max-w-md mx-auto">
        That page doesn&apos;t exist on Norra. Head home or explore services.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/">Go home</Button>
        <Button href="/services" variant="outline">
          Explore services
        </Button>
      </div>
      <p className="mt-6 text-sm">
        <Link href="/contact" className="text-forest hover:underline">
          Contact the Founder
        </Link>
      </p>
    </div>
  );
}
