import { OfficePage } from "@/components/buildtrack/templates/office-page";
import { PageSection } from "@/components/buildtrack/layout/page-section";

export default function SettingsPage() {
  return (
    <OfficePage
      title="Einstellungen"
      description="Verwalte Unternehmen, Benutzerrollen und Anwendungseinstellungen."
    >
      <PageSection
        title="Allgemeine Einstellungen"
        description="Die konkreten Einstellungen werden schrittweise ergänzt."
      >
        <p className="text-sm text-muted-foreground">
          Hier werden später Firmendaten, Berechtigungen, Sprache und weitere
          Konfigurationen verwaltet.
        </p>
      </PageSection>
    </OfficePage>
  );
}