/**
 * ==========================================================
 * Supabase Client: Admin
 * ==========================================================
 *
 * Zweck:
 * Erstellt einen streng serverseitigen Supabase-Client mit
 * erhöhten Datenbankrechten.
 *
 * Verantwortlich für:
 * - Serverseitige Datenzugriffe ohne Benutzersitzung
 * - Vorübergehende Repository-Zugriffe vor Einführung von Auth
 *
 * Nicht verantwortlich für:
 * - Browserseitige Verwendung
 * - Benutzerbezogene RLS-Prüfungen
 * - Speicherung in Client Components
 *
 * Sicherheit:
 * Der verwendete Secret Key umgeht Row Level Security.
 * Diese Datei darf niemals in Client Components importiert werden.
 *
 * Abhängigkeiten:
 * - @supabase/supabase-js
 * - database.types.ts
 *
 * Erstellt in:
 * Version 0.3.0 (EPIC 2 – Baustellenverwaltung)
 * ==========================================================
 */

import "server-only";

import { createClient } from "@supabase/supabase-js";

import type { Database } from "@/types/database.types";

let adminClient:
  | ReturnType<typeof createClient<Database>>
  | undefined;

export function createSupabaseAdminClient() {
  if (adminClient) {
    return adminClient;
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const secretKey = process.env.SUPABASE_SECRET_KEY;

  if (!supabaseUrl) {
    throw new Error(
      "NEXT_PUBLIC_SUPABASE_URL ist nicht in .env.local gesetzt."
    );
  }

  if (!secretKey) {
    throw new Error(
      "SUPABASE_SECRET_KEY ist nicht in .env.local gesetzt."
    );
  }

  adminClient = createClient<Database>(
    supabaseUrl,
    secretKey,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
        detectSessionInUrl: false,
      },
    }
  );

  return adminClient;
}