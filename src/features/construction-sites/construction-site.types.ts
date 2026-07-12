import type { ConstructionSiteStatus } from "./construction-site.enums";

export type ConstructionSite = {
  id: string;
  slug: string;
  name: string;
  projectNumber: string;
  customerName: string;
  address: string;
  city: string;
  postalCode: string;
  status: ConstructionSiteStatus;
  employeeCount: number;
  startDate: string;
  endDate?: string;
  managerName?: string;
  notes?: string;
};