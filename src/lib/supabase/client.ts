/**
 * ==========================================================
 * Supabase Client: Browser
 * ==========================================================
 *
 * Zweck:
 * Erstellt einen typisierten Supabase-Client für den Browser.
 *
 * Verantwortlich für:
 * - Browserseitige Supabase-Verbindungen
 * - Spätere Authentifizierung
 * - Benutzerbezogene Datenzugriffe über RLS
 *
 * Nicht verantwortlich für:
 * - Administrative Zugriffe
 * - Umgehen von Row Level Security
 * - Verwendung geheimer API-Schlüssel
 *
 * Abhängigkeiten:
 * - @supabase/ssr
 * - database.types.ts
 *
 * Erstellt in:
 * Version 0.3.0 (EPIC 2 – Baustellenverwaltung)
 * ==========================================================
 */

import { createBrowserClient } from "@supabase/ssr";

import type { Database } from "@/types/database.types";

export function createSupabaseBrowserClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const publishableKey =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseUrl) {
    throw new Error(
      "NEXT_PUBLIC_SUPABASE_URL ist nicht in .env.local gesetzt."
    );
  }

  if (!publishableKey) {
    throw new Error(
      "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ist nicht in .env.local gesetzt."
    );
  }

  return createBrowserClient<Database>(
    supabaseUrl,
    publishableKey
  );
}