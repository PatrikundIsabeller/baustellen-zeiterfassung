/**
 * ==========================================================
 * Supabase Client: Server
 * ==========================================================
 *
 * Zweck:
 * Erstellt einen typisierten Supabase-Client für Server
 * Components, Server Actions und Route Handlers.
 *
 * Verantwortlich für:
 * - Serverseitige Benutzerzugriffe
 * - Cookie-basierte Supabase-Sitzungen
 * - Datenzugriffe unter Einhaltung von RLS
 *
 * Nicht verantwortlich für:
 * - Administrative Zugriffe
 * - Umgehen von Row Level Security
 *
 * Abhängigkeiten:
 * - @supabase/ssr
 * - next/headers
 * - database.types.ts
 *
 * Erstellt in:
 * Version 0.3.0 (EPIC 2 – Baustellenverwaltung)
 * ==========================================================
 */

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

import type { Database } from "@/types/database.types";

export async function createSupabaseServerClient() {
  const cookieStore = await cookies();

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

  return createServerClient<Database>(
    supabaseUrl,
    publishableKey,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },

        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(
              ({ name, value, options }) => {
                cookieStore.set(name, value, options);
              }
            );
          } catch {
            /*
             * In reinen Server Components dürfen Cookies nicht
             * immer verändert werden. Die spätere Auth-Middleware
             * übernimmt dann das Aktualisieren der Sitzung.
             */
          }
        },
      },
    }
  );
}