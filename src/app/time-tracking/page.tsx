import { OfficePage } from "@/components/buildtrack/templates/office-page";
import { PageSection } from "@/components/buildtrack/layout/page-section";

export default function TimeTrackingPage() {
  return (
    <OfficePage
      title="Zeiterfassung"
      description="Kontrolliere Arbeitszeiten, Pausen und offene Einträge."
    >
      <PageSection
        title="Zeiteinträge"
        description="Die Zeiterfassung wird später für Office und Field getrennt optimiert."
      >
        <p className="text-sm text-muted-foreground">
          Hier werden später Arbeitsbeginn, Arbeitsende, Pausen und die
          zugehörigen Baustellen ausgewertet.
        </p>
      </PageSection>
    </OfficePage>
  );
}