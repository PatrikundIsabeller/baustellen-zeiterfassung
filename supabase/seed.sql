/*
==========================================================
Seed: BuildTrack Demo Data
==========================================================

Zweck:
- Erstellt einen Demo-Mandanten
- Erstellt drei Demo-Baustellen

Erstellt in:
Version 0.3.0 (EPIC 2 – Baustellenverwaltung)
==========================================================
*/

insert into public.organizations (
  id,
  name
)
values (
  '11111111-1111-4111-8111-111111111111',
  'BuildTrack Demo GmbH'
)
on conflict (id) do update
set name = excluded.name;


insert into public.construction_sites (
  id,
  organization_id,
  slug,
  project_number,
  name,
  customer_name,
  address,
  postal_code,
  city,
  status,
  employee_count,
  manager_name,
  notes,
  start_date,
  end_date
)
values
(
  '20000000-0000-4000-8000-000000000001',
  '11111111-1111-4111-8111-111111111111',
  'industriehalle-linz',
  'BT-2026-001',
  'Industriehalle Linz',
  'Müller Bau GmbH',
  'Industriestraße 15',
  '4020',
  'Linz',
  'active',
  12,
  'Patrik Kabashi',
  'Industriebodenarbeiten in mehreren Hallenabschnitten.',
  '2026-07-01',
  null
),
(
  '20000000-0000-4000-8000-000000000002',
  '11111111-1111-4111-8111-111111111111',
  'wohnanlage-wien',
  'BT-2026-002',
  'Wohnanlage Wien',
  'Wohnbau AG',
  'Hauptstraße 88',
  '1100',
  'Wien',
  'paused',
  8,
  'Max Mustermann',
  'Arbeiten vorübergehend pausiert.',
  '2026-06-10',
  null
),
(
  '20000000-0000-4000-8000-000000000003',
  '11111111-1111-4111-8111-111111111111',
  'schule-graz',
  'BT-2026-003',
  'Schule Graz',
  'Stadt Graz',
  'Schulweg 7',
  '8010',
  'Graz',
  'completed',
  5,
  'Anna Berger',
  'Baustelle erfolgreich abgeschlossen.',
  '2026-04-15',
  '2026-06-30'
)
on conflict (id) do update
set
  organization_id = excluded.organization_id,
  slug = excluded.slug,
  project_number = excluded.project_number,
  name = excluded.name,
  customer_name = excluded.customer_name,
  address = excluded.address,
  postal_code = excluded.postal_code,
  city = excluded.city,
  status = excluded.status,
  employee_count = excluded.employee_count,
  manager_name = excluded.manager_name,
  notes = excluded.notes,
  start_date = excluded.start_date,
  end_date = excluded.end_date;