/**
 * ==========================================================
 * Component: ConstructionSiteInformation
 * ==========================================================
 *
 * Zweck:
 * Zeigt die wichtigsten Stammdaten einer Baustelle.
 *
 * Verantwortlich für:
 * - Kunde
 * - Adresse
 * - Bauleiter
 * - Mitarbeiteranzahl
 * - Start- und Enddatum
 *
 * Nicht verantwortlich für:
 * - Daten laden
 * - Daten bearbeiten
 * - Daten speichern
 *
 * Verwendet in:
 * - Baustellen-Detailseite
 *
 * Abhängigkeiten:
 * - InfoRow
 * - construction-site.types.ts
 *
 * Erstellt in:
 * Version 0.3.0 (EPIC 2 – Baustellenverwaltung)
 * ==========================================================
 */

import {
    Building2,
    CalendarDays,
    MapPin,
    UserRound,
    Users,
  } from "lucide-react";
  
  import { InfoRow } from "@/components/buildtrack/ui/info-row";
  import type { ConstructionSite } from "@/features/construction-sites/construction-site.types";
  
  type ConstructionSiteInformationProps = {
    site: ConstructionSite;
  };
  
  const dateFormatter = new Intl.DateTimeFormat("de-AT");
  
  export function ConstructionSiteInformation({
    site,
  }: ConstructionSiteInformationProps) {
    return (
      <div className="grid gap-6 sm:grid-cols-2">
        <InfoRow
          icon={Building2}
          label="Kunde"
          value={site.customerName}
        />
  
        <InfoRow
          icon={UserRound}
          label="Bauleiter"
          value={site.managerName ?? "Nicht zugeordnet"}
        />
  
        <InfoRow
          icon={MapPin}
          label="Adresse"
          value={`${site.address}, ${site.postalCode} ${site.city}`}
        />
  
        <InfoRow
          icon={Users}
          label="Mitarbeiter"
          value={`${site.employeeCount} zugeordnet`}
        />
  
        <InfoRow
          icon={CalendarDays}
          label="Startdatum"
          value={dateFormatter.format(new Date(site.startDate))}
        />
  
        <InfoRow
          icon={CalendarDays}
          label="Enddatum"
          value={
            site.endDate
              ? dateFormatter.format(new Date(site.endDate))
              : "Noch offen"
          }
        />
      </div>
    );
  }