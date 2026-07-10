import { OfficePage } from "@/components/buildtrack/templates/office-page";
import { PageSection } from "@/components/buildtrack/layout/page-section";

export default function ConstructionSitesPage() {
  return (
    <OfficePage
      title="Baustellen"
      description="Verwalte aktive, pausierte und abgeschlossene Baustellen."
    >
      <PageSection
        title="Baustellenübersicht"
        description="Die Baustellenverwaltung wird im nächsten Fachmeilenstein umgesetzt."
      >
        <p className="text-sm text-muted-foreground">
          Hier werden später alle Baustellen mit Status, Kunde, Adresse und
          verantwortlichem Bauleiter angezeigt.
        </p>
      </PageSection>
    </OfficePage>
  );
}