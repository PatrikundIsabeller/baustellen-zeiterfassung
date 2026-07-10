import { OfficePage } from "@/components/buildtrack/templates/office-page";
import { PageSection } from "@/components/buildtrack/layout/page-section";

export default function PhotoDocumentationPage() {
  return (
    <OfficePage
      title="Fotodokumentation"
      description="Dokumentiere Baustellenzustände einfach und nachvollziehbar."
    >
      <PageSection
        title="Baustellenfotos"
        description="Fotos werden später nach Baustelle und einfacher Kategorie gegliedert."
      >
        <p className="text-sm text-muted-foreground">
          Vorgesehen sind die Kategorien Vorher, Während, Nachher und Mangel.
          Datum, Uhrzeit, Mitarbeiter und Baustelle werden automatisch
          gespeichert.
        </p>
      </PageSection>
    </OfficePage>
  );
}