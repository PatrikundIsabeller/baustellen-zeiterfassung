"use client";

import type { ReactNode } from "react";

import { Bell, Menu, Plus, Search, User } from "lucide-react";

import { BRAND } from "@/config/branding";

import { usePathname } from "next/navigation";
import { getNavigationItem } from "@/config/navigation";

import { SidebarNav } from "@/components/navigation/sidebar-nav";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {

    const pathname = usePathname();

    const currentPage = getNavigationItem(pathname);
  return (
    <div className="min-h-screen bg-slate-50">
      <aside className="fixed inset-y-0 left-0 hidden w-72 border-r border-slate-800 bg-slate-950 text-white lg:flex lg:flex-col">
        <div className="flex h-20 items-center gap-3 border-b border-white/10 px-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-sm font-bold text-white">
            BT
          </div>

          <div className="min-w-0">
            <div className="truncate text-lg font-bold tracking-tight">
              {BRAND.name}
            </div>

            <div className="truncate text-xs text-slate-400">
              {BRAND.slogan}
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-6">
          <SidebarNav />
        </div>

        <div className="space-y-4 border-t border-white/10 p-4">
          <Button className="w-full justify-start gap-2 bg-blue-600 text-white hover:bg-blue-700">
            <Plus className="h-4 w-4" />
            Neu erstellen
          </Button>

          <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-slate-800 text-white">
                PP
              </AvatarFallback>
            </Avatar>

            <div className="min-w-0">
              <div className="truncate text-sm font-medium">Patrik</div>
              <div className="truncate text-xs text-slate-400">
                Administrator
              </div>
            </div>
          </div>

          <div className="pt-1 text-center text-xs text-slate-500">
            Version {BRAND.version}
          </div>
        </div>
      </aside>

      <div className="lg:pl-72">
        <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b border-slate-200 bg-white px-4 lg:px-8">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label="Navigation öffnen"
          >
            <Menu className="h-5 w-5" />
          </Button>

          <div className="min-w-0">
            <div className="truncate text-sm text-muted-foreground">
              {BRAND.name} Office
            </div>
            <div className="truncate font-semibold">{currentPage?.title ?? "BuildTrack"}</div>
          </div>

          <div className="relative ml-auto hidden w-full max-w-sm md:block">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              className="pl-9"
              placeholder="Suchen..."
              aria-label="Suchen"
            />
          </div>

          <Button variant="outline" className="hidden gap-2 md:flex">
            <Plus className="h-4 w-4" />
            Neu
          </Button>

          <Button
            variant="ghost"
            size="icon"
            aria-label="Benachrichtigungen"
          >
            <Bell className="h-5 w-5" />
          </Button>

          <Separator orientation="vertical" className="hidden h-6 sm:block" />

          <Button variant="ghost" size="icon" aria-label="Benutzerprofil">
            <User className="h-5 w-5" />
          </Button>
        </header>

        <main>{children}</main>
      </div>
    </div>
  );
}