# 🏗 BuildTrack – Architektur

## Ziel

BuildTrack wird als langfristig wartbare Software entwickelt.

Der Fokus liegt auf:

- Wiederverwendbarkeit
- Erweiterbarkeit
- Übersichtlichkeit
- Sauberer Trennung von UI und Business-Logik

---

# Projektstruktur

```
src
│
├── app
├── components
├── config
├── features
├── hooks
├── lib
├── services
├── styles
├── types
└── utils
```

---

# Verantwortlichkeiten

## app/

Enthält ausschließlich Seiten.

Keine Business-Logik.

Beispiel:

```
app/
dashboard/
employees/
construction-sites/
```

---

## components/

Enthält ausschließlich UI-Komponenten.

Keine Datenbankzugriffe.

Keine Business-Logik.

---

## config/

Globale Konfiguration.

Beispiele:

- Branding
- Navigation
- Theme
- Rollen

---

## features/

Enthält die komplette Fachlogik.

Jedes Feature besitzt dieselbe Struktur.

Beispiel:

```
construction-sites/

construction-site.enums.ts

construction-site.types.ts

construction-sites.data.ts
```

Weitere Dateien werden erst erstellt, wenn sie benötigt werden.

---

## services/

Projektweite Services.

Beispiele:

- Supabase
- Auth
- Storage
- PDF
- Excel

---

## lib/

Projektweite Hilfsfunktionen.

---

# Entwicklungsregeln

## Neue Features

Immer zuerst:

- enums
- types
- data

Danach:

- Komponenten
- Seiten

Erst anschließend:

- Services
- Datenbank

---

## Komponenten

Komponenten enthalten ausschließlich Darstellung.

Sie kennen keine Datenbank.

Sie enthalten möglichst keine Business-Logik.

---

## Features

Features kennen niemals React-Komponenten.

Die Abhängigkeit ist immer:

Features

↓

Components

↓

Pages

---

# Git Workflow

Nach jedem abgeschlossenen Meilenstein:

- Test
- Dokumentation
- Git Commit
- Git Push

---

# Qualitätsstandard

Neue Funktionen müssen:

- einfach verständlich sein
- wiederverwendbar sein
- responsive sein
- sauber typisiert sein
- dokumentiert sein
- testbar sein

---

# Grundsatz

BuildTrack wird nicht als Projekt entwickelt.

BuildTrack wird als professionelles Softwareprodukt entwickelt.