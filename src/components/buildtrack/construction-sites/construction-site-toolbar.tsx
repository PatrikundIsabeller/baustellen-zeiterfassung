"use client";

import { Plus, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import type { ConstructionSiteStatus } from "@/features/construction-sites/construction-site.enums";

export type ConstructionSiteStatusFilter =
  | "all"
  | ConstructionSiteStatus;

type ConstructionSiteToolbarProps = {
  searchValue: string;
  statusValue: ConstructionSiteStatusFilter;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: ConstructionSiteStatusFilter) => void;
  onCreateSite: () => void;
};

export function ConstructionSiteToolbar({
  searchValue,
  statusValue,
  onSearchChange,
  onStatusChange,
  onCreateSite,
}: ConstructionSiteToolbarProps) {
  return (
    <div className="flex flex-col gap-4 rounded-3xl border bg-white p-4 shadow-sm lg:flex-row lg:items-center">
      <div className="relative flex-1">
        <Search
          aria-hidden="true"
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
        />

        <Input
          value={searchValue}
          onChange={(event) => onSearchChange(event.target.value)}
          className="h-11 pl-9"
          placeholder="Baustelle, Kunde oder Ort suchen..."
          aria-label="Baustellen durchsuchen"
        />
      </div>

      <select
        value={statusValue}
        onChange={(event) =>
          onStatusChange(
            event.target.value as ConstructionSiteStatusFilter
          )
        }
        className="h-11 rounded-xl border border-input bg-background px-3 text-sm outline-none transition focus-visible:ring-2 focus-visible:ring-ring"
        aria-label="Baustellenstatus filtern"
      >
        <option value="all">Alle Status</option>
        <option value="active">Aktiv</option>
        <option value="paused">Pausiert</option>
        <option value="completed">Abgeschlossen</option>
        <option value="archived">Archiviert</option>
      </select>

      <Button
        type="button"
        className="h-11 gap-2"
        onClick={onCreateSite}
      >
        <Plus className="h-4 w-4" />
        Neue Baustelle
      </Button>
    </div>
  );
}