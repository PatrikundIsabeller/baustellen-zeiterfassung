# BuildTrack – Database Design

## Ziel

Die Datenbank soll so aufgebaut werden, dass BuildTrack später mehrere Unternehmen unterstützen kann.

## Geplante Tabellen

### organizations

Speichert Firmen/Mandanten.

Felder:

- id
- name
- address
- created_at

---

### users / profiles

Speichert Benutzerprofile.

Felder:

- id
- organization_id
- name
- email
- role
- active
- created_at

Rollen:

- admin
- manager
- employee

---

### construction_sites

Speichert Baustellen.

Felder:

- id
- organization_id
- name
- address
- customer
- status
- start_date
- end_date
- notes
- created_at

Status:

- active
- paused
- completed
- archived

---

### employee_site_assignments

Verknüpft Mitarbeiter mit Baustellen.

Felder:

- id
- organization_id
- employee_id
- site_id
- created_at

---

### time_entries

Speichert Arbeitszeiten.

Felder:

- id
- organization_id
- employee_id
- site_id
- work_date
- start_time
- end_time
- break_minutes
- total_minutes
- notes
- status
- created_at

Status:

- draft
- submitted
- approved
- rejected

---

### site_photos

Speichert die Fotodokumentation einer Baustelle.

Felder:

- id
- organization_id
- site_id
- employee_id

- photo_number
  Laufende Nummer innerhalb der Baustelle

- category
  Kategorie des Fotos

- location
  Bereich oder Raum innerhalb der Baustelle

- file_url

- description

- taken_at

- latitude (optional)

- longitude (optional)

- created_at

Mögliche Kategorien:

- before_work
- during_work
- after_work
- defects
- material
- other

---

## Beziehungen

- Eine Organisation hat viele Mitarbeiter.
- Eine Organisation hat viele Baustellen.
- Eine Baustelle hat viele Zeiteinträge.
- Ein Mitarbeiter hat viele Zeiteinträge.
- Eine Baustelle hat viele Fotos.
- Ein Mitarbeiter kann mehreren Baustellen zugeordnet sein.

## Sicherheitsprinzip

Alle Datensätze enthalten eine organization_id.

Dadurch sieht jede Firma nur ihre eigenen Daten.