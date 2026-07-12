/**
 * ==========================================================
 * Repository: Construction Sites
 * ==========================================================
 *
 * Zweck:
 * Kapselt den Datenzugriff für Baustellen.
 *
 * Verantwortlich für:
 * - Baustellen aus der aktuellen Datenquelle laden
 * - Einzelne Baustellen anhand des Slugs finden
 *
 * Nicht verantwortlich für:
 * - Darstellung
 * - Formularvalidierung
 * - Navigation
 *
 * Verwendet in:
 * - ConstructionSiteService
 *
 * Abhängigkeiten:
 * - construction-sites.data.ts
 * - construction-site.types.ts
 *
 * Erstellt in:
 * Version 0.3.0 (EPIC 2 – Baustellenverwaltung)
 * ==========================================================
 */

import type { ConstructionSite } from "./construction-site.types";
import { constructionSites } from "./construction-sites.data";

export type ConstructionSiteRepository = {
  findAll: () => Promise<ConstructionSite[]>;
  findBySlug: (slug: string) => Promise<ConstructionSite | undefined>;
};

export const mockConstructionSiteRepository: ConstructionSiteRepository = {
  async findAll() {
    return [...constructionSites];
  },

  async findBySlug(slug) {
    return constructionSites.find((site) => site.slug === slug);
  },
};