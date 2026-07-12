/**
 * ==========================================================
 * Service: Construction Sites
 * ==========================================================
 *
 * Zweck:
 * Stellt die fachliche Schnittstelle für Baustellen bereit.
 *
 * Verantwortlich für:
 * - Baustellenliste bereitstellen
 * - Einzelne Baustellen anhand des Slugs bereitstellen
 * - Zentrale Verwendung des Baustellen-Repositories
 *
 * Nicht verantwortlich für:
 * - Darstellung
 * - Routing
 * - Formularzustände
 *
 * Verwendet in:
 * - Baustellenübersicht
 * - Baustellen-Detailseite
 *
 * Abhängigkeiten:
 * - construction-site.repository.ts
 *
 * Erstellt in:
 * Version 0.3.0 (EPIC 2 – Baustellenverwaltung)
 * ==========================================================
 */

import {
    mockConstructionSiteRepository,
    type ConstructionSiteRepository,
  } from "./construction-site.repository";
  
  export function createConstructionSiteService(
    repository: ConstructionSiteRepository
  ) {
    return {
      getAll() {
        return repository.findAll();
      },
  
      getBySlug(slug: string) {
        return repository.findBySlug(slug);
      },
    };
  }
  
  export const constructionSiteService =
    createConstructionSiteService(mockConstructionSiteRepository);