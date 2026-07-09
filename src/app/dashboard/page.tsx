import { AppShell } from "@/components/layout/app-shell";
import { dashboardStats } from "@/features/dashboard/dashboard-data";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="space-y-8">
        <section className="rounded-3xl border bg-white p-8 shadow-sm">
          <p className="text-sm font-medium text-blue-600">BuildTrack Office</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            Guten Morgen, Patrik 👋
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Heute sind 18 Mitarbeiter auf 12 Baustellen unterwegs. Bisher wurden
            74,5 Arbeitsstunden erfasst.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {dashboardStats.map((stat) => (
            <Card key={stat.title} className="rounded-2xl shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="mt-3 flex items-center gap-2 text-sm">
                  <span className="rounded-full bg-blue-50 px-2 py-1 font-medium text-blue-700">
                    {stat.trend}
                  </span>
                  <span className="text-muted-foreground">
                    {stat.description}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="grid gap-4 xl:grid-cols-2">
          <Card className="rounded-2xl shadow-sm">
            <CardHeader>
              <CardTitle>Letzte Aktivitäten</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div>Max hat 8,5 h auf Baustelle Industriehalle Linz erfasst.</div>
              <div>Lukas hat ein Foto als „Vorher“ hochgeladen.</div>
              <div>Anna hat eine Pause von 30 Minuten eingetragen.</div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm">
            <CardHeader>
              <CardTitle>Offene Aufgaben</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div>6 Zeiteinträge warten auf Kontrolle.</div>
              <div>3 Baustellen haben neue Fotodokumentationen.</div>
              <div>1 Mitarbeiter wurde noch keiner Baustelle zugeordnet.</div>
            </CardContent>
          </Card>
        </section>
      </div>
    </AppShell>
  );
}