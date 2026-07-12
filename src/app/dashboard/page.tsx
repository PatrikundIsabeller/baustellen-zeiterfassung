import { AppShell } from "@/components/layout/app-shell";
import { StatCard } from "@/components/buildtrack/cards/stat-card";
import { DashboardHeader } from "@/components/buildtrack/dashboard/dashboard-header";
import { QuickActions } from "@/components/buildtrack/dashboard/quick-actions";
import { ActivityTimeline } from "@/components/buildtrack/dashboard/activity-timeline";
import { PageContainer } from "@/components/buildtrack/layout/page-container";
import { PageSection } from "@/components/buildtrack/layout/page-section";
import {
  Building2,
  Clock3,
  FileWarning,
  Users,
} from "lucide-react";

const stats = [
  {
    title: "Arbeitsstunden",
    value: "74,5 h",
    trend: "+8 %",
    description: "gegenüber gestern",
    icon: <Clock3 className="h-6 w-6 text-slate-700" />,
  },
  {
    title: "Aktive Baustellen",
    value: "12",
    trend: "+2",
    description: "diese Woche",
    icon: <Building2 className="h-6 w-6 text-slate-700" />,
  },
  {
    title: "Mitarbeiter",
    value: "18",
    trend: "Heute",
    description: "im Einsatz",
    icon: <Users className="h-6 w-6 text-slate-700" />,
  },
  {
    title: "Offene Einträge",
    value: "6",
    trend: "Prüfen",
    description: "offen",
    icon: <FileWarning className="h-6 w-6 text-slate-700" />,
  },
];

export default function DashboardPage() {
  return (
    <AppShell>
      <PageContainer>
        <DashboardHeader
          user="Patrik"
          subtitle="Heute sind 18 Mitarbeiter auf 12 Baustellen unterwegs. Bisher wurden 74,5 Arbeitsstunden erfasst."
          actions={<QuickActions />}
        />

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

        <div className="grid gap-6 xl:grid-cols-2">
          <PageSection title="Letzte Aktivitäten">
            <ActivityTimeline />
          </PageSection>

          <PageSection title="Offene Aufgaben">
            <div className="space-y-4 text-sm">
              <div className="rounded-2xl bg-slate-50 p-4">
                6 Zeiteinträge warten auf Kontrolle.
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                3 Baustellen haben neue Fotodokumentationen.
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                1 Mitarbeiter wurde noch keiner Baustelle zugeordnet.
              </div>
            </div>
          </PageSection>
        </div>
      </PageContainer>
    </AppShell>
  );
}