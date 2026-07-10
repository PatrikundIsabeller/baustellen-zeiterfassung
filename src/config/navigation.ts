import {
  BarChart3,
  Building2,
  Camera,
  Clock3,
  Settings,
  Users,
} from "lucide-react";

export const OFFICE_NAVIGATION = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: BarChart3,
  },
  {
    title: "Baustellen",
    href: "/construction-sites",
    icon: Building2,
  },
  {
    title: "Mitarbeiter",
    href: "/employees",
    icon: Users,
  },
  {
    title: "Zeiterfassung",
    href: "/time-tracking",
    icon: Clock3,
  },
  {
    title: "Fotodokumentation",
    href: "/photo-documentation",
    icon: Camera,
  },
  {
    title: "Auswertungen",
    href: "/reports",
    icon: BarChart3,
  },
  {
    title: "Einstellungen",
    href: "/settings",
    icon: Settings,
  },
] as const;

export function getNavigationItem(pathname: string) {
  return OFFICE_NAVIGATION.find((item) => {
    return (
      pathname === item.href ||
      (item.href !== "/dashboard" &&
        pathname.startsWith(item.href + "/"))
    );
  });
}