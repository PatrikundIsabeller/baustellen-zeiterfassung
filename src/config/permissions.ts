export const ROLES = {
    ADMIN: "admin",
    MANAGER: "manager",
    EMPLOYEE: "employee",
  } as const;
  
  export type UserRole = (typeof ROLES)[keyof typeof ROLES];
  
  export const PERMISSIONS = {
    admin: ["*"],
  
    manager: [
      "dashboard",
      "construction-sites",
      "employees",
      "time-tracking",
      "photo-documentation",
      "reports",
    ],
  
    employee: [
      "time-tracking",
      "photo-documentation",
    ],
  };