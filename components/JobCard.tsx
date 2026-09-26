import Link from "next/link";
import { MapPin, Clock, Banknote } from "lucide-react";
import { Job } from "@/lib/data/jobs";
import { Badge } from "./Badge";
import { formatCad } from "@/lib/utils";

export function JobCard({ job }: { job: Job }) {
  const salary =
    job.salaryMin && job.salaryMax
      ? job.type === "Part-time" || job.type === "Internship"
        ? `$${job.salaryMin}–$${job.salaryMax}/hr`
        : `${formatCad(job.salaryMin)}–${formatCad(job.salaryMax)}`
      : "Salary not listed";

  return (
    <Link
      href="/jobs"
      className="group block rounded-2xl bg-white border border-night/5 p-6 shadow-sm hover:shadow-lg hover:border-forest/20 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <Badge variant="demo" icon="demo" className="mb-3">
            Sample (layout only)
          </Badge>
          <h3 className="font-semibold text-lg text-ink group-hover:text-forest transition-colors">
            {job.title}
          </h3>
          <p className="mt-1 text-muted">{job.company}</p>
        </div>
        <Badge variant="muted">{job.type}</Badge>
      </div>
      <div className="mt-4 flex flex-wrap gap-3 text-sm text-muted">
        <span className="inline-flex items-center gap-1">
          <MapPin className="h-3.5 w-3.5" />
          {job.city}, {job.province}
          {job.remote ? " · Remote OK" : ""}
        </span>
        <span className="inline-flex items-center gap-1">
          <Banknote className="h-3.5 w-3.5" />
          {salary}
        </span>
        <span className="inline-flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" />
          {job.postedDaysAgo}d ago
        </span>
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {job.tags.map((t) => (
          <Badge key={t} variant="muted">
            {t}
          </Badge>
        ))}
      </div>
    </Link>
  );
}
