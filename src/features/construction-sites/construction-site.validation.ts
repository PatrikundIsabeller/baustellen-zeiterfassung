/**
 * ==========================================================
 * Feature: Construction Site Validation
 * ==========================================================
 *
 * Zweck:
 * Zentrale Validierung für Baustellen.
 *
 * Verantwortlich für:
 * - Zod Schema
 * - Formulardaten
 * - Standardwerte
 *
 * Nicht verantwortlich für:
 * - Darstellung
 * - Datenbank
 * - API
 *
 * Verwendet in:
 * - ConstructionSiteForm
 * - Import
 * - API
 * - Tests
 *
 * Erstellt in:
 * Version 0.3.0 (EPIC 2 – Baustellenverwaltung)
 * ==========================================================
 */

import { z } from "zod";

export const constructionSiteSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Bitte einen Baustellennamen eingeben."),

  projectNumber: z
    .string()
    .trim()
    .min(2, "Bitte eine Projektnummer eingeben."),

  customerName: z
    .string()
    .trim()
    .min(2, "Bitte einen Kunden eingeben."),

  address: z
    .string()
    .trim()
    .min(2, "Bitte eine Adresse eingeben."),

  postalCode: z
    .string()
    .trim()
    .min(3, "Bitte eine Postleitzahl eingeben."),

  city: z
    .string()
    .trim()
    .min(2, "Bitte einen Ort eingeben."),

  status: z.enum([
    "active",
    "paused",
    "completed",
    "archived",
  ]),

  employeeCount: z
    .number()
    .int()
    .min(0, "Die Mitarbeiteranzahl darf nicht negativ sein."),

  startDate: z
    .string()
    .min(1, "Bitte ein Startdatum auswählen."),

  managerName: z
    .string()
    .trim()
    .optional(),

  notes: z
    .string()
    .trim()
    .optional(),
});

export type ConstructionSiteFormValues =
  z.infer<typeof constructionSiteSchema>;

export const defaultConstructionSiteValues: ConstructionSiteFormValues = {
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