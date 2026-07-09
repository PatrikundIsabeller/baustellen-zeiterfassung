import { Bell, Menu, Plus, Search, User } from "lucide-react";
import { SidebarNav } from "@/components/navigation/sidebar-nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <aside className="fixed inset-y-0 left-0 hidden w-72 border-r border-slate-200 bg-slate-950 text-white lg:flex lg:flex-col">
        <div className="flex h-20 items-center gap-3 border-b border-white/10 px-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 font-bold">
            B
          </div>
          <div>
            <div className="text-lg font-bold tracking-tight">BuildTrack</div>
            <div className="text-xs text-slate-400">
              Baustellen- & Zeiterfassung
            </div>
          </div>
        </div>

        <div className="flex-1 px-4 py-6">
          <SidebarNav />
        </div>

        <div className="space-y-4 border-t border-white/10 p-4">
          <Button className="w-full justify-start gap-2 bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4" />
            Neu erstellen
          </Button>

          <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
            <Avatar>
              <AvatarFallback>BT</AvatarFallback>
            </Avatar>
            <div>
              <div className="text-sm font-medium">Patrik</div>
              <div className="text-xs text-slate-400">Administrator</div>
            </div>
          </div>
        </div>
      </aside>

      <div className="lg:pl-72">
        <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-white px-4 lg:px-8">
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>

          <div>
            <div className="text-sm text-muted-foreground">BuildTrack Office</div>
            <div className="font-semibold">Dashboard</div>
          </div>

          <div className="relative ml-auto hidden w-full max-w-sm md:block">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input className="pl-9" placeholder="Suchen..." />
          </div>

          <Button variant="outline" className="hidden gap-2 md:flex">
            <Plus className="h-4 w-4" />
            Neu
          </Button>

          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>

          <Separator orientation="vertical" className="h-6" />

          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </header>

        <main className="p-4 lg:p-8">{children}</main>
      </div>
    </div>
  );
}