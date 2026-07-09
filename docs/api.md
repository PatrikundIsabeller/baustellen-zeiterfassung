# BuildTrack – API Design

## Ziel

Die API wird später über Next.js Server Actions oder API Routes umgesetzt.

Für den ersten Prototyp werden zunächst Mock-Daten verwendet. Supabase wird später angebunden.

## Geplante Bereiche

### Auth

- Login
- Logout
- Session prüfen
- Benutzerrolle laden

---

### Organizations

- Organisation laden
- Organisation bearbeiten

---

### Employees

- Mitarbeiter auflisten
- Mitarbeiter erstellen
- Mitarbeiter bearbeiten
- Mitarbeiter deaktivieren

---

### Construction Sites

- Baustellen auflisten
- Baustelle erstellen
- Baustelle bearbeiten
- Baustelle archivieren

---

### Time Entries

- Zeiteinträge auflisten
- Zeiteintrag erstellen
- Zeiteintrag bearbeiten
- Zeiteintrag löschen
- Zeiteintrag freigeben

---

### Photos

- Foto hochladen
- Fotos je Baustelle anzeigen
- Foto löschen
- Beschreibung bearbeiten

---

### Reports

- Stunden nach Zeitraum
- Stunden nach Mitarbeiter
- Stunden nach Baustelle
- Export als Excel
- Export als PDF

## Grundsatz

Die Oberfläche soll nicht direkt unkontrolliert auf die Datenbank zugreifen. Datenzugriffe werden sauber in Features oder Server Actions gekapselt.