"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import type { ConstructionSite } from "@/features/construction-sites/construction-site.types";

const constructionSiteSchema = z.object({
  name: z.string().trim().min(2, "Bitte einen Baustellennamen eingeben."),
  projectNumber: z
    .string()
    .trim()
    .min(2, "Bitte eine Projektnummer eingeben."),
  customerName: z.string().trim().min(2, "Bitte einen Kunden eingeben."),
  address: z.string().trim().min(2, "Bitte eine Adresse eingeben."),
  postalCode: z.string().trim().min(3, "Bitte eine Postleitzahl eingeben."),
  city: z.string().trim().min(2, "Bitte einen Ort eingeben."),
  status: z.enum(["active", "paused", "completed", "archived"]),
  employeeCount: z.coerce
    .number()
    .int()
    .min(0, "Die Mitarbeiteranzahl darf nicht negativ sein."),
  startDate: z.string().min(1, "Bitte ein Startdatum auswählen."),
  managerName: z.string().trim().optional(),
  notes: z.string().trim().optional(),
});

type ConstructionSiteFormValues = z.infer<typeof constructionSiteSchema>;

type ConstructionSiteFormDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreate: (site: ConstructionSite) => void;
};

const defaultValues: ConstructionSiteFormValues = {
  name: "",
  projectNumber: "",
  customerName: "",
  address: "",
  postalCode: "",
  city: "",
  status: "active",
  employeeCount: 0,
  startDate: "",
  managerName: "",
  notes: "",
};

export function ConstructionSiteFormDialog({
  open,
  onOpenChange,
  onCreate,
}: ConstructionSiteFormDialogProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ConstructionSiteFormValues>({
    resolver: zodResolver(constructionSiteSchema),
    defaultValues,
  });

  useEffect(() => {
    if (!open) {
      reset(defaultValues);
    }
  }, [open, reset]);

  function onSubmit(values: ConstructionSiteFormValues) {
    const newSite: ConstructionSite = {
      id: crypto.randomUUID(),
      name: values.name,
      projectNumber: values.projectNumber,
      customerName: values.customerName,
      address: values.address,
      postalCode: values.postalCode,
      city: values.city,
      status: values.status,
      employeeCount: values.employeeCount,
      startDate: values.startDate,
      managerName: values.managerName || undefined,
      notes: values.notes || undefined,
    };

    onCreate(newSite);
    onOpenChange(false);
    reset(defaultValues);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Neue Baustelle anlegen</DialogTitle>

          <DialogDescription>
            Erfasse die wichtigsten Baustellendaten. Weitere Angaben können
            später ergänzt werden.
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
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
              />
            </FormField>

            <FormField
              label="Projektnummer"
              error={errors.projectNumber?.message}
            >
              <Input
                {...register("projectNumber")}
                placeholder="z. B. BT-2026-004"
              />
            </FormField>

            <FormField
              label="Kunde"
              error={errors.customerName?.message}
            >
              <Input
                {...register("customerName")}
                placeholder="Firmen- oder Kundenname"
              />
            </FormField>

            <FormField label="Status" error={errors.status?.message}>
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
              />
            </FormField>

            <FormField
              label="Postleitzahl"
              error={errors.postalCode?.message}
            >
              <Input {...register("postalCode")} placeholder="4020" />
            </FormField>

            <FormField label="Ort" error={errors.city?.message}>
              <Input {...register("city")} placeholder="Linz" />
            </FormField>

            <FormField
              label="Startdatum"
              error={errors.startDate?.message}
            >
              <Input type="date" {...register("startDate")} />
            </FormField>

            <FormField
              label="Zugeordnete Mitarbeiter"
              error={errors.employeeCount?.message}
            >
              <Input
                type="number"
                min={0}
                {...register("employeeCount")}
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

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Abbrechen
            </Button>

            <Button type="submit" disabled={isSubmitting}>
              Baustelle anlegen
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
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
      <Label className="mb-2 block">{label}</Label>

      {children}

      {error && (
        <p className="mt-1.5 text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}