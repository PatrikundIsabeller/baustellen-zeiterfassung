/**
 * ==========================================================
 * Component: InfoRow
 * ==========================================================
 *
 * Zweck:
 * Zeigt eine kurze Information mit Icon und optionalem Label.
 *
 * Verantwortlich für:
 * - Einheitliche Darstellung von Metainformationen
 * - Icon, Label und Wert
 * - Optionale Hervorhebung
 *
 * Nicht verantwortlich für:
 * - Daten laden
 * - Daten formatieren
 * - Fachlogik
 *
 * Verwendet in:
 * - Baustellen
 * - Mitarbeiter
 * - Kunden
 * - Zeiterfassung
 * - Fotodokumentation
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

import { cn } from "@/lib/utils";

type InfoRowProps = {
  icon: LucideIcon;
  value: string;
  label?: string;
  className?: string;
  iconClassName?: string;
  valueClassName?: string;
};

export function InfoRow({
  icon: Icon,
  value,
  label,
  className,
  iconClassName,
  valueClassName,
}: InfoRowProps) {
  return (
    <div
      className={cn(
        "flex min-w-0 items-start gap-2.5 text-sm text-slate-700",
        className
      )}
    >
      <Icon
        aria-hidden="true"
        className={cn(
          "mt-0.5 h-4 w-4 shrink-0 text-slate-400",
          iconClassName
        )}
      />

      <div className="min-w-0">
        {label && (
          <div className="text-xs font-medium text-muted-foreground">
            {label}
          </div>
        )}

        <div className={cn("break-words", valueClassName)}>
          {value}
        </div>
      </div>
    </div>
  );
}