export const CONSTRUCTION_SITE_STATUS = {
    ACTIVE: "active",
    PAUSED: "paused",
    COMPLETED: "completed",
    ARCHIVED: "archived",
  } as const;
  
  export type ConstructionSiteStatus =
    (typeof CONSTRUCTION_SITE_STATUS)[keyof typeof CONSTRUCTION_SITE_STATUS];