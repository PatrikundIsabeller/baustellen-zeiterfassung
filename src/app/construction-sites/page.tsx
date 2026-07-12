import { Building2, CirclePause, CircleCheck, Users } from "lucide-react";

import { StatCard } from "@/components/buildtrack/cards/stat-card";
import { ConstructionSitesOverview } from "@/components/buildtrack/construction-sites/construction-sites-overview";
import { OfficePage } from "@/components/buildtrack/templates/office-page";

import { constructionSites } from "@/features/construction-sites/construction-sites.data";

export default function ConstructionSitesPage() {
  const activeSites = constructionSites.filter(
    (site) => site.status === "active"
  ).length;

  const pausedSites = constructionSites.filter(
    (site) => site.status === "paused"
  ).length;

  const completedSites = constructionSites.filter(
    (site) => site.status === "completed"
  ).length;

  const assignedEmployees = constructionSites.reduce(
    (total, site) => total + site.employeeCount,
    0
  );

  return (
    <OfficePage
      title="Baustellen"
      description="Verwalte aktive, pausierte und abgeschlossene Baustellen."
    >
      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Aktive Baustellen"
          value={String(activeSites)}
          description="derzeit in Arbeit"
          icon={<Building2 className="h-6 w-6 text-slate-700" />}
        />

        <StatCard
          title="Pausiert"
          value={String(pausedSites)}
          description="vorübergehend gestoppt"
          icon={<CirclePause className="h-6 w-6 text-slate-700" />}
        />

        <StatCard
          title="Abgeschlossen"
          value={String(completedSites)}
          description="fertiggestellt"
          icon={<CircleCheck className="h-6 w-6 text-slate-700" />}
        />

        <StatCard
          title="Mitarbeiter zugeordnet"
          value={String(assignedEmployees)}
          description="über alle Baustellen"
          icon={<Users className="h-6 w-6 text-slate-700" />}
        />
      </section>

      <ConstructionSitesOverview sites={constructionSites} />
    </OfficePage>
  );
}