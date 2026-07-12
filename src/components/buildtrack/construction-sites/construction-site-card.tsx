import Link from "next/link";

import { Building2, MapPin, Users } from "lucide-react";

import type { ConstructionSite } from "@/features/construction-sites/construction-site.types";
import { InfoRow } from "@/components/buildtrack/ui/info-row";

import { ConstructionSiteStatus } from "./construction-site-status";

type Props = {
  site: ConstructionSite;
};

export function ConstructionSiteCard({ site }: Props) {
  return (
      <Link
        href={`/construction-sites/${site.slug}`}
        className="block rounded-3xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
      >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold">
            {site.name}
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">
            {site.projectNumber}
          </p>
        </div>

        <ConstructionSiteStatus status={site.status} />
      </div>

      <div className="mt-6 space-y-3">
        <InfoRow
          icon={Building2}
          value={site.customerName}
        />

        <InfoRow
          icon={MapPin}
          value={`${site.postalCode} ${site.city}`}
        />

        <InfoRow
          icon={Users}
          value={`${site.employeeCount} Mitarbeiter`}
        />
      </div>
    </Link>
  );
}