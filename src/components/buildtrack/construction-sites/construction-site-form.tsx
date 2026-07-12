"use client";

/**
 * ==========================================================
 * Component: ConstructionSiteForm
 * ==========================================================
 *
 * Zweck:
 * Stellt das wiederverwendbare Formular zum Anlegen und
 * Bearbeiten einer Baustelle bereit.
 *
 * Verantwortlich für:
 * - Darstellung der Eingabefelder
 * - Formularvalidierung
 * - Create- und Edit-Modus
 * - Übergabe validierter Formularwerte
 *
 * Nicht verantwortlich für:
 * - Dialog öffnen oder schließen
 * - Slug oder ID erzeugen
 * - Daten speichern
 * - Navigation
 *
 * Verwendet in:
 * - ConstructionSiteFormDialog
 * - Spätere Bearbeitungsansicht
 *
 * Abhängigkeiten:
 * - react-hook-form
 * - zodResolver
 * - construction-site.validation.ts
 * - construction-site.types.ts
 *
 * Erstellt in:
 * Version 0.3.0 (EPIC 2 – Baustellenverwaltung)
 * ==========================================================
 */

import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import type { ConstructionSite } from "@/features/construction-sites/construction-site.types";
import {
  constructionSiteSchema,
  defaultConstructionSiteValues,
  type ConstructionSiteFormValues,
} from "@/features/construction-sites/construction-site.validation";

type ConstructionSiteFormMode = "create" | "edit";

type ConstructionSiteFormProps = {
  mode: ConstructionSiteFormMode;
  initialValues?: Partial<ConstructionSite>;
  onSubmit: (
    values: ConstructionSiteFormValues
  ) => void | Promise<void>;
  onCancel?: () => void;
};

export function ConstructionSiteForm({
  mode,
  initialValues,
  onSubmit,
  onCancel,
}: ConstructionSiteFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isDirty,
      isSubmitting,
    },
  } = useForm<ConstructionSiteFormValues>({
    resolver: zodResolver(constructionSiteSchema),
    defaultValues: mapConstructionSiteToFormValues(initialValues),
  });

  useEffect(() => {
    reset(mapConstructionSiteToFormValues(initialValues));
  }, [initialValues, reset]);

  async function handleValidSubmit(
    values: ConstructionSiteFormValues
  ) {
    await onSubmit(values);
  }

  const submitLabel =
    mode === "create"
      ? "Baustelle anlegen"
      : "Änderungen speichern";

  return (
    <form
      onSubmit={handleSubmit(handleValidSubmit)}
      className="space-y-6"
      noValidate
    >
      <div className="grid gap-5 md:grid-cols-2">
        <FormField
          label="Baustellenname"
          error={errors.name?.message}
        >
          <Input
            {...register("name")}
            placeholder="z. B. Industriehalle Linz"
            autoComplete="off"
          />
        </FormField>

        <FormField
          label="Projektnummer"
          error={errors.projectNumber?.message}
        >
          <Input
            {...register("projectNumber")}
            placeholder="z. B. BT-2026-004"
            autoComplete="off"
          />
        </FormField>

        <FormField
          label="Kunde"
          error={errors.customerName?.message}
        >
          <Input
            {...register("customerName")}
            placeholder="Firmen- oder Kundenname"
            autoComplete="organization"
          />
        </FormField>

        <FormField
          label="Status"
          error={errors.status?.message}
        >
          <select
            {...register("status")}
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs outline-none transition focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            <option value="active">Aktiv</option>
            <option value="paused">Pausiert</option>
            <option value="completed">Abgeschlossen</option>
            <option value="archived">Archiviert</option>
          </select>
        </FormField>

        <FormField
          label="Straße und Hausnummer"
          error={errors.address?.message}
          className="md:col-span-2"
        >
          <Input
            {...register("address")}
            placeholder="z. B. Industriestraße 15"
            autoComplete="street-address"
          />
        </FormField>

        <FormField
          label="Postleitzahl"
          error={errors.postalCode?.message}
        >
          <Input
            {...register("postalCode")}
            placeholder="4020"
            inputMode="numeric"
            autoComplete="postal-code"
          />
        </FormField>

        <FormField
          label="Ort"
          error={errors.city?.message}
        >
          <Input
            {...register("city")}
            placeholder="Linz"
            autoComplete="address-level2"
          />
        </FormField>

        <FormField
          label="Startdatum"
          error={errors.startDate?.message}
        >
          <Input
            type="date"
            {...register("startDate")}
          />
        </FormField>

        <FormField
          label="Zugeordnete Mitarbeiter"
          error={errors.employeeCount?.message}
        >
          <Input
            type="number"
            min={0}
            step={1}
            {...register("employeeCount", {
              valueAsNumber: true,
            })}
          />
        </FormField>

        <FormField
          label="Bauleiter"
          error={errors.managerName?.message}
          className="md:col-span-2"
        >
          <Input
            {...register("managerName")}
            placeholder="Optional"
            autoComplete="off"
          />
        </FormField>

        <FormField
          label="Notizen"
          error={errors.notes?.message}
          className="md:col-span-2"
        >
          <Textarea
            {...register("notes")}
            placeholder="Optionale Informationen zur Baustelle"
            rows={4}
          />
        </FormField>
      </div>

      <div className="flex flex-col-reverse gap-3 border-t pt-6 sm:flex-row sm:justify-end">
        {onCancel && (
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            disabled={isSubmitting}
          >
            Abbrechen
          </Button>
        )}

        <Button
          type="submit"
          disabled={isSubmitting || (mode === "edit" && !isDirty)}
        >
          {isSubmitting ? "Wird gespeichert..." : submitLabel}
        </Button>
      </div>
    </form>
  );
}

type FormFieldProps = {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
};

function FormField({
  label,
  error,
  children,
  className,
}: FormFieldProps) {
  return (
    <div className={className}>
      <Label className="mb-2 block">
        {label}
      </Label>

      {children}

      {error && (
        <p
          className="mt-1.5 text-xs font-medium text-red-600"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}

function mapConstructionSiteToFormValues(
  site?: Partial<ConstructionSite>
): ConstructionSiteFormValues {
  return {
    name:
      site?.name ??
      defaultConstructionSiteValues.name,

    projectNumber:
      site?.projectNumber ??
      defaultConstructionSiteValues.projectNumber,

    customerName:
      site?.customerName ??
      defaultConstructionSiteValues.customerName,

    address:
      site?.address ??
      defaultConstructionSiteValues.address,

    postalCode:
      site?.postalCode ??
      defaultConstructionSiteValues.postalCode,

    city:
      site?.city ??
      defaultConstructionSiteValues.city,

    status:
      site?.status ??
      defaultConstructionSiteValues.status,

    employeeCount:
      site?.employeeCount ??
      defaultConstructionSiteValues.employeeCount,

    startDate:
      site?.startDate ??
      defaultConstructionSiteValues.startDate,

    managerName:
      site?.managerName ??
      defaultConstructionSiteValues.managerName,

    notes:
      site?.notes ??
      defaultConstructionSiteValues.notes,
  };
}