/**
 * ==========================================================
 * Component: ConstructionSiteTabs
 * ==========================================================
 *
 * Zweck:
 * Gliedert die Inhalte einer Baustelle in übersichtliche Tabs.
 *
 * Verantwortlich für:
 * - Tab-Navigation
 * - Platzhalter für Baustellenbereiche
 * - Einheitliche Inhaltsdarstellung
 *
 * Nicht verantwortlich für:
 * - Daten laden
 * - Daten speichern
 * - Routing zwischen separaten Seiten
 *
 * Verwendet in:
 * - Baustellen-Detailseite
 *
 * Abhängigkeiten:
 * - shadcn/ui Tabs
 * - PageSection
 *
 * Erstellt in:
 * Version 0.3.0 (EPIC 2 – Baustellenverwaltung)
 * ==========================================================
 */

import {
    Activity,
    Camera,
    Clock3,
    FileText,
    LayoutDashboard,
    NotebookPen,
  } from "lucide-react";
  
  import { PageSection } from "@/components/buildtrack/layout/page-section";
  import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs";
  
  type ConstructionSiteTabsProps = {
    notes?: string;
  };
  
  export function ConstructionSiteTabs({
    notes,
  }: ConstructionSiteTabsProps) {
    return (
      <Tabs defaultValue="overview" className="space-y-6">
        <div className="overflow-x-auto">
          <TabsList className="h-auto min-w-max justify-start rounded-2xl bg-white p-1.5 shadow-sm">
            <TabsTrigger value="overview" className="gap-2 px-4 py-2.5">
              <LayoutDashboard className="h-4 w-4" />
              Übersicht
            </TabsTrigger>
  
            <TabsTrigger value="time" className="gap-2 px-4 py-2.5">
              <Clock3 className="h-4 w-4" />
              Zeiten
            </TabsTrigger>
  
            <TabsTrigger value="photos" className="gap-2 px-4 py-2.5">
              <Camera className="h-4 w-4" />
              Fotos
            </TabsTrigger>
  
            <TabsTrigger value="documents" className="gap-2 px-4 py-2.5">
              <FileText className="h-4 w-4" />
              Dokumente
            </TabsTrigger>
  
            <TabsTrigger value="notes" className="gap-2 px-4 py-2.5">
              <NotebookPen className="h-4 w-4" />
              Notizen
            </TabsTrigger>
  
            <TabsTrigger value="activity" className="gap-2 px-4 py-2.5">
              <Activity className="h-4 w-4" />
              Aktivitäten
            </TabsTrigger>
          </TabsList>
        </div>
  
        <TabsContent value="overview">
          <PageSection
            title="Baustellenübersicht"
            description="Aktuelle Informationen und Kennzahlen zur Baustelle."
          >
            <p className="text-sm leading-6 text-muted-foreground">
              Hier werden später Arbeitsstunden, Mitarbeiter, offene Aufgaben
              und der aktuelle Baustellenfortschritt angezeigt.
            </p>
          </PageSection>
        </TabsContent>
  
        <TabsContent value="time">
          <PageSection
            title="Zeiterfassung"
            description="Arbeitszeiten und Pausen dieser Baustelle."
          >
            <p className="text-sm leading-6 text-muted-foreground">
              Die Zeiteinträge werden im Zeiterfassungsmodul ergänzt.
            </p>
          </PageSection>
        </TabsContent>
  
        <TabsContent value="photos">
          <PageSection
            title="Fotodokumentation"
            description="Vorher-, Während-, Nachher- und Mängelfotos."
          >
            <p className="text-sm leading-6 text-muted-foreground">
              Die Fotodokumentation wird in einem eigenen Modul umgesetzt.
            </p>
          </PageSection>
        </TabsContent>
  
        <TabsContent value="documents">
          <PageSection
            title="Dokumente"
            description="Pläne, Berichte, Lieferscheine und weitere Dateien."
          >
            <p className="text-sm leading-6 text-muted-foreground">
              Der Dokumentenbereich wird später ergänzt.
            </p>
          </PageSection>
        </TabsContent>
  
        <TabsContent value="notes">
          <PageSection
            title="Notizen"
            description="Interne Informationen zur Baustelle."
          >
            <p className="text-sm leading-6 text-muted-foreground">
              {notes || "Für diese Baustelle wurden noch keine Notizen erfasst."}
            </p>
          </PageSection>
        </TabsContent>
  
        <TabsContent value="activity">
          <PageSection
            title="Aktivitäten"
            description="Letzte Änderungen und Ereignisse."
          >
            <p className="text-sm leading-6 text-muted-foreground">
              Die Aktivitäten-Timeline wird später automatisch aus den
              Baustellenereignissen erzeugt.
            </p>
          </PageSection>
        </TabsContent>
      </Tabs>
    );
  }