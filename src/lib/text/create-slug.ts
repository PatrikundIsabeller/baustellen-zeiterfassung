/**
 * ==========================================================
 * Utility: CreateSlug
 * ==========================================================
 *
 * Zweck:
 * Erzeugt einen URL-tauglichen Slug aus einem Text.
 *
 * Verantwortlich für:
 * - Kleinbuchstaben
 * - Ersetzen deutscher Umlaute
 * - Entfernen von Sonderzeichen
 * - Zusammenfassen von Trennzeichen
 *
 * Nicht verantwortlich für:
 * - Prüfung auf eindeutige Slugs
 * - Datenbankzugriffe
 * - Routing
 *
 * Verwendet in:
 * - Baustellen
 * - Kunden
 * - Dokumente
 * - Weitere spätere Module
 *
 * Erstellt in:
 * Version 0.3.0 (EPIC 2 – Baustellenverwaltung)
 * ==========================================================
 */

export function createSlug(value: string): string {
    return value
      .trim()
      .toLocaleLowerCase("de")
      .replaceAll("ä", "ae")
      .replaceAll("ö", "oe")
      .replaceAll("ü", "ue")
      .replaceAll("ß", "ss")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }