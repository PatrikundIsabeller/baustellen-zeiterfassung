"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Building2,
  Camera,
  Clock3,
  Settings,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "Dashboard", href: "/dashboard", icon: BarChart3 },
  { title: "Baustellen", href: "/construction-sites", icon: Building2 },
  { title: "Mitarbeiter", href: "/employees", icon: Users },
  { title: "Zeiterfassung", href: "/time-tracking", icon: Clock3 },
  { title: "Fotos", href: "/photos", icon: Camera },
  { title: "Auswertungen", href: "/reports", icon: BarChart3 },
  { title: "Einstellungen", href: "/settings", icon: Settings },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="space-y-1">
      {navItems.map((item) => {
        const Icon = item.icon;
        const active = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
            "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition",
            active
                ? "bg-white text-slate-950"
                : "text-slate-400 hover:bg-white/10 hover:text-white"
            )}
          >
            <Icon className="h-4 w-4" />
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}