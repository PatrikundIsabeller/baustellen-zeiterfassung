/**
 * ==========================================================
 * Page: LoginPage
 * ==========================================================
 *
 * Zweck:
 * Platzhalter für den späteren BuildTrack-Login.
 *
 * Verantwortlich für:
 * - Darstellung einer einfachen Login-Vorschau
 *
 * Nicht verantwortlich für:
 * - Authentifizierung
 * - Session-Verwaltung
 * - Supabase-Zugriffe
 *
 * Verwendet in:
 * - /login
 *
 * Erstellt in:
 * Version 0.3.0 (EPIC 2 – Baustellenverwaltung)
 * ==========================================================
 */

import { BRAND } from "@/config/branding";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <section className="w-full max-w-md rounded-3xl border bg-white p-8 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 font-bold text-white">
            BT
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight">
              {BRAND.name}
            </h1>

            <p className="text-sm text-muted-foreground">
              {BRAND.slogan}
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold tracking-tight">
            Anmeldung
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Die Benutzeranmeldung wird im Authentifizierungs-Meilenstein
            umgesetzt.
          </p>
        </div>
      </section>
    </main>
  );
}