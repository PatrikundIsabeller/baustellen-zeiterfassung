"use client";

/**
 * ==========================================================
 * Component: ConstructionSiteFormDialog
 * ==========================================================
 *
 * Zweck:
 * Stellt das Baustellenformular innerhalb eines Dialogs dar.
 *
 * Verantwortlich für:
 * - Dialog öffnen und schließen
 * - Erzeugen einer neuen Baustelle aus Formularwerten
 * - Übergabe der neuen Baustelle an die Elternkomponente
 *
 * Nicht verantwortlich für:
 * - Darstellung der Eingabefelder
 * - Formularvalidierung
 * - Dauerhafte Speicherung
 *
 * Verwendet in:
 * - ConstructionSitesOverview
 *
 * Abhängigkeiten:
 * - ConstructionSiteForm
 * - create-slug.ts
 * - construction-site.types.ts
 *
 * Erstellt in:
 * Version 0.3.0 (EPIC 2 – Baustellenverwaltung)
 * ==========================================================
 */

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { ConstructionSiteForm } from "./construction-site-form";

import type { ConstructionSite } from "@/features/construction-sites/construction-site.types";
import type { ConstructionSiteFormValues } from "@/features/construction-sites/construction-site.validation";
import { createSlug } from "@/lib/text/create-slug";

type ConstructionSiteFormDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreate: (site: ConstructionSite) => void;
};

export function ConstructionSiteFormDialog({
  open,
  onOpenChange,
  onCreate,
}: ConstructionSiteFormDialogProps) {
  function handleCreate(values: ConstructionSiteFormValues) {
    const newSite: ConstructionSite = {
      id: crypto.randomUUID(),
      slug: createSlug(values.name),
      name: values.name,
      projectNumber: values.projectNumber,
      customerName: values.customerName,
      address: values.address,
      postalCode: values.postalCode,
      city: values.city,
      status: values.status,
      employeeCount: values.employeeCount,
      startDate: values.startDate,
      managerName: values.managerName || undefined,
      notes: values.notes || undefined,
    };

    onCreate(newSite);
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Neue Baustelle anlegen</DialogTitle>

          <DialogDescription>
            Erfasse die wichtigsten Baustellendaten. Weitere Angaben können
            später ergänzt werden.
          </DialogDescription>
        </DialogHeader>

        <ConstructionSiteForm
          key={open ? "open" : "closed"}
          mode="create"
          onSubmit={handleCreate}
          onCancel={() => onOpenChange(false)}
        />
      </DialogContent>
    </Dialog>
  );
}