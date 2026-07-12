import type { ConstructionSite } from "@/features/construction-sites/construction-site.types";

import { ConstructionSiteCard } from "./construction-site-card";

type Props = {
  sites: ConstructionSite[];
};

export function ConstructionSiteList({
  sites,
}: Props) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {sites.map((site) => (
        <ConstructionSiteCard
          key={site.id}
          site={site}
        />
      ))}
    </div>
  );
}