import { OfficePage } from "@/components/buildtrack/templates/office-page";
import { PageSection } from "@/components/buildtrack/layout/page-section";

export default function ReportsPage() {
  return (
    <OfficePage
      title="Auswertungen"
      description="Analysiere Arbeitszeiten nach Zeitraum, Mitarbeiter und Baustelle."
    >
      <PageSection
        title="Berichte und Exporte"
        description="Auswertungen sowie PDF- und Excel-Exporte folgen in einem späteren Meilenstein."
      >
        <p className="text-sm text-muted-foreground">
          Hier werden später Stunden, Pausen, Baustellenkosten und
          Mitarbeiterleistungen übersichtlich dargestellt.
        </p>
      </PageSection>
    </OfficePage>
  );
}