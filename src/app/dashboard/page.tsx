import { AppShell } from "@/components/layout/app-shell";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Überblick über Baustellen, Mitarbeiter und Arbeitszeiten.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>Arbeitsstunden heute</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">74,5 h</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Aktive Baustellen</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">12</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mitarbeiter aktiv</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">18</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Offene Einträge</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">6</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}