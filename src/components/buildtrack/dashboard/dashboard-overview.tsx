import {
  Building2,
  Clock3,
  FileWarning,
  Users,
} from "lucide-react";

import { StatCard } from "../cards/stat-card";

const stats = [
  {
    title: "Arbeitsstunden",
    value: "74,5 h",
    trend: "+8 %",
    description: "gegenüber gestern",
    icon: <Clock3 className="h-6 w-6" />,
  },
  {
    title: "Aktive Baustellen",
    value: "12",
    trend: "+2",
    description: "diese Woche",
    icon: <Building2 className="h-6 w-6" />,
  },
  {
    title: "Mitarbeiter",
    value: "18",
    trend: "Heute",
    description: "im Einsatz",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Offene Einträge",
    value: "6",
    trend: "Prüfen",
    description: "offen",
    icon: <FileWarning className="h-6 w-6" />,
  },
];

export function DashboardOverview() {
  return (
    <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          trend={stat.trend}
          description={stat.description}
          icon={stat.icon}
        />
      ))}
    </section>
  );
}