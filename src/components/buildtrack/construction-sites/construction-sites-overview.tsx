"use client";

import { useMemo, useState } from "react";
import { Building2, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/buildtrack/ui/empty-state";

import type { ConstructionSite } from "@/features/construction-sites/construction-site.types";

import { ConstructionSiteList } from "./construction-site-list";

import { ConstructionSiteFormDialog } from "./construction-site-form-dialog";
import {
  ConstructionSiteToolbar,
  type ConstructionSiteStatusFilter,
} from "./construction-site-toolbar";

type ConstructionSitesOverviewProps = {
  sites: ConstructionSite[];
};

export function ConstructionSitesOverview({
  sites,
}: ConstructionSitesOverviewProps) {
  const [localSites, setLocalSites] = useState(sites);
  const [formOpen, setFormOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [statusValue, setStatusValue] =
    useState<ConstructionSiteStatusFilter>("all");

  const filteredSites = useMemo(() => {
    const normalizedSearch = searchValue.trim().toLocaleLowerCase("de");

    return localSites.filter((site) => {
      const matchesStatus =
        statusValue === "all" || site.status === statusValue;

      const searchableContent = [
        site.name,
        site.projectNumber,
        site.customerName,
        site.address,
        site.postalCode,
        site.city,
        site.managerName ?? "",
      ]
        .join(" ")
        .toLocaleLowerCase("de");

      const matchesSearch =
        normalizedSearch.length === 0 ||
        searchableContent.includes(normalizedSearch);

      return matchesStatus && matchesSearch;
    });
  }, [searchValue, statusValue, localSites]);

  function handleCreateSite() {
    setFormOpen(true);
  }
  
  function handleSiteCreated(site: ConstructionSite) {
    setLocalSites((currentSites) => [site, ...currentSites]);
  }

  function resetFilters() {
    setSearchValue("");
    setStatusValue("all");
  }

  return (
    <div className="space-y-6">
      <ConstructionSiteToolbar
        searchValue={searchValue}
        statusValue={statusValue}
        onSearchChange={setSearchValue}
        onStatusChange={setStatusValue}
        onCreateSite={handleCreateSite}
      />

      <div className="flex items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          {filteredSites.length} von {localSites.length} Baustellen angezeigt
        </p>
      </div>

      {filteredSites.length > 0 ? (
        <ConstructionSiteList sites={filteredSites} />
      ) : (
        <EmptyState
          icon={Building2}
          title="Keine Baustellen gefunden"
          description="Passe Deine Suche oder den Statusfilter an. Du kannst auch eine neue Baustelle anlegen."
          actions={
            <>
              <Button variant="outline" onClick={resetFilters}>
                Filter zurücksetzen
              </Button>

              <Button className="gap-2" onClick={handleCreateSite}>
                <Plus className="h-4 w-4" />
                Neue Baustelle
              </Button>
            </>
          }
        />
      )}

      <ConstructionSiteFormDialog
        open={formOpen}
        onOpenChange={setFormOpen}
        onCreate={handleSiteCreated}
      />
    </div>
  );
}