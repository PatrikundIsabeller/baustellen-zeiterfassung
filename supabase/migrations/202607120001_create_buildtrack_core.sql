/*
==========================================================
Migration: BuildTrack Core Schema
==========================================================

Zweck:
- Erstellt die Organisationsstruktur
- Erstellt die Baustellentabelle
- Aktiviert Row Level Security
- Legt Indizes und Zeitstempel-Automatik an

Erstellt in:
Version 0.3.0 (EPIC 2 – Baustellenverwaltung)
==========================================================
*/

-- ========================================================
-- Erweiterungen
-- ========================================================

create extension if not exists pgcrypto;


-- ========================================================
-- Funktion: updated_at automatisch setzen
-- ========================================================

create or replace function public.set_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;


-- ========================================================
-- Organisationen / Mandanten
-- ========================================================

create table if not exists public.organizations (
  id uuid primary key default gen_random_uuid(),

  name text not null,

  created_at timestamptz not null
    default timezone('utc', now()),

  updated_at timestamptz not null
    default timezone('utc', now()),

  deleted_at timestamptz
);

comment on table public.organizations is
  'Unternehmen beziehungsweise Mandanten innerhalb von BuildTrack.';


-- ========================================================
-- Baustellen
-- ========================================================

create table if not exists public.construction_sites (
  id uuid primary key default gen_random_uuid(),

  organization_id uuid not null
    references public.organizations(id)
    on delete restrict,

  slug text not null,

  project_number text not null,

  name text not null,

  customer_name text not null,

  address text not null,

  postal_code text not null,

  city text not null,

  status text not null default 'active'
    check (
      status in (
        'active',
        'paused',
        'completed',
        'archived'
      )
    ),

  employee_count integer not null default 0
    check (employee_count >= 0),

  manager_name text,

  notes text,

  start_date date not null,

  end_date date,

  created_at timestamptz not null
    default timezone('utc', now()),

  updated_at timestamptz not null
    default timezone('utc', now()),

  deleted_at timestamptz,

  constraint construction_sites_end_date_check
    check (
      end_date is null
      or end_date >= start_date
    ),

  constraint construction_sites_organization_slug_unique
    unique (organization_id, slug),

  constraint construction_sites_organization_project_number_unique
    unique (organization_id, project_number)
);

comment on table public.construction_sites is
  'Baustellen eines BuildTrack-Mandanten.';

comment on column public.construction_sites.deleted_at is
  'Soft Delete: Ein gesetzter Wert kennzeichnet eine gelöschte Baustelle.';


-- ========================================================
-- Indizes
-- ========================================================

create index if not exists
  construction_sites_organization_id_idx
on public.construction_sites (organization_id);

create index if not exists
  construction_sites_status_idx
on public.construction_sites (status);

create index if not exists
  construction_sites_start_date_idx
on public.construction_sites (start_date);

create index if not exists
  construction_sites_active_lookup_idx
on public.construction_sites (organization_id, status)
where deleted_at is null;


-- ========================================================
-- updated_at Trigger
-- ========================================================

drop trigger if exists
  organizations_set_updated_at
on public.organizations;

create trigger organizations_set_updated_at
before update on public.organizations
for each row
execute function public.set_updated_at();


drop trigger if exists
  construction_sites_set_updated_at
on public.construction_sites;

create trigger construction_sites_set_updated_at
before update on public.construction_sites
for each row
execute function public.set_updated_at();


-- ========================================================
-- Row Level Security
-- ========================================================

alter table public.organizations
enable row level security;

alter table public.construction_sites
enable row level security;


/*
Noch keine öffentlichen Policies.

Der Zugriff wird im nächsten Schritt entweder:

1. serverseitig über einen geheimen Supabase-Schlüssel oder
2. nach Einführung von Supabase Auth über rollenbasierte RLS-Policies

geregelt.
*/