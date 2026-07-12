/**
 * ==========================================================
 * Feature Utility: GetConstructionSite
 * ==========================================================
 *
 * Zweck:
 * Findet eine einzelne Baustelle anhand ihres Slugs.
 *
 * Verantwortlich für:
 * - Suche in den aktuellen Baustellen-Mock-Daten
 * - Rückgabe einer Baustelle oder undefined
 *
 * Nicht verantwortlich für:
 * - Darstellung
 * - Routing
 * - Datenbankzugriffe
 *
 * Verwendet in:
 * - Baustellen-Detailseite
 *
 * Abhängigkeiten:
 * - construction-sites.data.ts
 *
 * Erstellt in:
 * Version 0.3.0 (EPIC 2 – Baustellenverwaltung)
 * ==========================================================
 */

import { constructionSites } from "./construction-sites.data";

export function getConstructionSiteBySlug(slug: string) {
  return constructionSites.find((site) => site.slug === slug);
}