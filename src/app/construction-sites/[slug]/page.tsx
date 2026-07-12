/**
 * ==========================================================
 * Page: ConstructionSiteDetailPage
 * ==========================================================
 *
 * Zweck:
 * Detailseite einer einzelnen Baustelle.
 *
 * Verantwortlich für:
 * - Laden einer Baustelle anhand des Slugs
 * - Zusammensetzen der Detailansicht
 *
 * Nicht verantwortlich für:
 * - Daten speichern
 * - Bearbeiten
 * - Datenbankzugriffe
 *
 * Verwendet in:
 * - /construction-sites/[slug]
 *
 * Erstellt in:
 * Version 0.3.0 (EPIC 2 – Baustellenverwaltung)
 * ==========================================================
 */

import Link from "next/link";
import { ArrowLeft, Pencil } from "lucide-react";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";

import { OfficePage } from "@/components/buildtrack/templates/office-page";
import { PageSection } from "@/components/buildtrack/layout/page-section";

import { ConstructionSiteHeader } from "@/components/buildtrack/construction-sites/construction-site-header";
import { ConstructionSiteInformation } from "@/components/buildtrack/construction-sites/construction-site-information";
import { ConstructionSiteTabs } from "@/components/buildtrack/construction-sites/construction-site-tabs";

import { constructionSiteService } from "@/features/construction-sites/construction-site.service";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ConstructionSiteDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;
  const site = await constructionSiteService.getBySlug(slug);

  if (!site) {
    notFound();
  }

  return (
    <OfficePage
      eyebrow="Baustellen"
      title={site.name}
      description={`${site.projectNumber} · ${site.customerName}`}
    >
      <Link
        href="/construction-sites"
        className="mb-6 -ml-3 inline-flex h-9 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
       >
        <ArrowLeft className="h-4 w-4" />
        Zurück zur Übersicht
       </Link>

      <ConstructionSiteHeader
        site={site}
        actions={
          <Button
            variant="outline"
            className="gap-2"
          >
            <Pencil className="h-4 w-4" />
            Bearbeiten
          </Button>
        }
      />

      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <PageSection
          title="Baustellendaten"
          description="Allgemeine Informationen zur Baustelle."
          className="xl:col-span-2"
        >
          <ConstructionSiteInformation site={site} />
        </PageSection>

        <PageSection
          title="Kurzinfo"
          description="Aktueller Status"
        >
          <div className="space-y-4">
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="text-sm text-muted-foreground">
                Mitarbeiter
              </div>

              <div className="mt-1 text-3xl font-bold">
                {site.employeeCount}
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="text-sm text-muted-foreground">
                Projektstatus
              </div>

              <div className="mt-1 font-semibold capitalize">
                {site.status}
              </div>
            </div>
          </div>
        </PageSection>
      </div>

      <div className="mt-8">
        <ConstructionSiteTabs
          notes={site.notes}
        />
      </div>
    </OfficePage>
  );
}