/**
 * ==========================================================
 * Component: EmptyState
 * ==========================================================
 *
 * Zweck:
 * Zeigt einen einheitlichen Leerzustand mit Icon, Titel,
 * Beschreibung und optionalen Aktionen.
 *
 * Verantwortlich für:
 * - Darstellung leerer Zustände
 * - Einheitliches Layout
 * - Optionale Aktionsschaltflächen
 *
 * Nicht verantwortlich für:
 * - Daten laden
 * - Filter zurücksetzen
 * - Fachlogik
 *
 * Verwendet in:
 * - Baustellen
 * - Mitarbeiter
 * - Kunden
 * - Fotodokumentation
 * - Auswertungen
 *
 * Abhängigkeiten:
 * - lucide-react
 * - lib/utils.ts
 *
 * Erstellt in:
 * Version 0.3.0 (EPIC 2 – Baustellenverwaltung)
 * ==========================================================
 */

import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type EmptyStateProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  actions?: ReactNode;
  className?: string;
};

export function EmptyState({
  icon: Icon,
  title,
  description,
  actions,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex min-h-72 flex-col items-center justify-center rounded-3xl border border-dashed bg-white p-8 text-center",
        className
      )}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
        <Icon
          aria-hidden="true"
          className="h-6 w-6 text-slate-600"
        />
      </div>

      <h2 className="mt-5 text-xl font-semibold">
        {title}
      </h2>

      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        {description}
      </p>

      {actions && (
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {actions}
        </div>
      )}
    </div>
  );
}