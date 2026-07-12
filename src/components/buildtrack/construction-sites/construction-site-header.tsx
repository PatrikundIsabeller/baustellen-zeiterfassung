/**
 * ==========================================================
 * Component: ConstructionSiteHeader
 * ==========================================================
 *
 * Zweck:
 * Zeigt den Kopfbereich einer einzelnen Baustelle.
 *
 * Verantwortlich für:
 * - Baustellenname und Projektnummer
 * - Kunde und Ort
 * - Statusanzeige
 * - Optionale Aktionsschaltflächen
 *
 * Nicht verantwortlich für:
 * - Daten laden
 * - Baustelle bearbeiten
 * - Baustelle speichern
 *
 * Verwendet in:
 * - Baustellen-Detailseite
 * - Spätere Druck- und Bearbeitungsansichten
 *
 * Abhängigkeiten:
 * - ConstructionSiteStatus
 * - construction-site.types.ts
 *
 * Erstellt in:
 * Version 0.3.0 (EPIC 2 – Baustellenverwaltung)
 * ==========================================================
 */

import type { ReactNode } from "react";
import { Building2, MapPin } from "lucide-react";

import type { ConstructionSite } from "@/features/construction-sites/construction-site.types";

import { ConstructionSiteStatus } from "./construction-site-status";

type ConstructionSiteHeaderProps = {
  site: ConstructionSite;
  actions?: ReactNode;
};

export function ConstructionSiteHeader({
  site,
  actions,
}: ConstructionSiteHeaderProps) {
  return (
    <section className="rounded-3xl border bg-white p-6 shadow-sm lg:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <ConstructionSiteStatus status={site.status} />

            <span className="text-sm font-medium text-muted-foreground">
              {site.projectNumber}
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
            {site.name}
          </h1>

          <div className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-x-6">
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 shrink-0" />
              <span>{site.customerName}</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0" />
              <span>
                {site.postalCode} {site.city}
              </span>
            </div>
          </div>
        </div>

        {actions && (
          <div className="flex shrink-0 flex-wrap gap-3">
            {actions}
          </div>
        )}
      </div>
    </section>
  );
}