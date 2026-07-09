# BuildTrack – Requirements

## Produktname

BuildTrack

## Untertitel

Baustellen- & Zeiterfassung

## Vision

BuildTrack ist eine moderne Webanwendung für Bauunternehmen zur Verwaltung von Baustellen, Mitarbeitern, Arbeitszeiten, Pausen, Baustellenfotos und Auswertungen.

Die Anwendung soll zuerst als Webapp/PWA umgesetzt werden und später optional als native iOS-/Android-App erweitert werden.

## Zielgruppe

- Bauunternehmen
- Beschichtungsfirmen
- Sanierungsfirmen
- Handwerksbetriebe
- Montagebetriebe
- Dienstleister mit wechselnden Einsatzorten

## Hauptrollen

### Administrator

- verwaltet Unternehmen
- legt Baustellen an
- legt Mitarbeiter an
- sieht alle Auswertungen
- exportiert Daten

### Bauleiter

- sieht zugewiesene Baustellen
- prüft Zeiten
- sieht Fotos und Notizen
- kann Einträge kontrollieren

### Mitarbeiter

- sieht zugewiesene Baustellen
- erfasst Arbeitszeiten
- trägt Pausen ein
- lädt Baustellenfotos hoch

## Muss-Funktionen Version 1

- Login
- Dashboard
- Baustellenverwaltung
- Mitarbeiterverwaltung
- Zeiterfassung
- Pausenerfassung
- einfache Auswertung
- mobile Bedienbarkeit
- Foto-Upload je Baustelle
- Fotodokumentation je Baustelle mit Kategorien

## Spätere Funktionen

- Excel-Export
- PDF-Export
- GPS optional
- digitale Unterschrift
- Bautagebuch
- Materialverbrauch
- Maschinenstunden
- Urlaub
- Krankenstand
- Freigabeprozess
- Mandantenfähigkeit für mehrere Firmen

## Fotodokumentation

Fotos können folgenden Kategorien zugeordnet werden:

- Vor Arbeitsbeginn
- Während der Arbeiten
- Nach Fertigstellung
- Mängel
- Material
- Sonstige

Zu jedem Foto können zusätzlich folgende Informationen gespeichert werden:

Zu jedem Foto werden gespeichert:

- laufende Bildnummer
- Bereich / Raum
- Beschreibung
- Mitarbeiter
- Datum
- Uhrzeit
- optionale GPS-Position

## UX-Grundsätze

BuildTrack unterscheidet zwischen zwei Benutzeroberflächen.

### BuildTrack Office

Für:

- Administratoren
- Bauleiter
- Büro

Diese Oberfläche darf detaillierter sein und bietet umfangreiche Verwaltungs- und Auswertungsfunktionen.

### BuildTrack Field

Für:

- Mitarbeiter auf der Baustelle
- einfache mobile Bedienung
- Nutzer mit wenig Zeit
- Nutzer mit unterschiedlichen Sprachkenntnissen

Diese Oberfläche muss extrem einfach sein.

Grundregeln:

- maximal drei Klicks bis zur gewünschten Aktion
- möglichst wenig Texteingaben
- große Schaltflächen
- klare Symbole
- automatische Übernahme von Datum, Uhrzeit, Mitarbeiter und Baustelle
- Pflichtfelder auf das Minimum reduzieren
- Fotoaufnahme ohne komplizierte Zusatzangaben
- einfache Begriffe wie Vorher, Während, Nachher und Mangel

Die App muss extrem einfach bedienbar sein. Mitarbeiter sollen auf dem Handy ohne Einschulung Zeiten erfassen können.