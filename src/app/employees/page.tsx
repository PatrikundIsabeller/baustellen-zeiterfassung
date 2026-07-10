import { OfficePage } from "@/components/buildtrack/templates/office-page";
import { PageSection } from "@/components/buildtrack/layout/page-section";

export default function EmployeesPage() {
  return (
    <OfficePage
      title="Mitarbeiter"
      description="Verwalte Mitarbeiter, Rollen und Baustellenzuweisungen."
    >
      <PageSection
        title="Mitarbeiterübersicht"
        description="Die Mitarbeiterverwaltung wird in einem eigenen Meilenstein umgesetzt."
      >
        <p className="text-sm text-muted-foreground">
          Hier werden später alle aktiven und inaktiven Mitarbeiter sowie deren
          Rollen und Baustellenzuweisungen angezeigt.
        </p>
      </PageSection>
    </OfficePage>
  );
}