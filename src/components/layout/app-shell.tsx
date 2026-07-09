import { Bell, Menu, Search } from "lucide-react";
import { SidebarNav } from "@/components/navigation/sidebar-nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-muted/40">
      <aside className="fixed inset-y-0 left-0 hidden w-72 border-r bg-background lg:block">
        <div className="flex h-16 items-center border-b px-6">
          <div>
            <div className="text-lg font-bold tracking-tight">BuildTrack</div>
            <div className="text-xs text-muted-foreground">
              Baustellen- & Zeiterfassung
            </div>
          </div>
        </div>

        <div className="px-4 py-6">
          <SidebarNav />
        </div>
      </aside>

      <div className="lg:pl-72">
        <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-background px-4 lg:px-6">
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>

          <div className="relative hidden max-w-md flex-1 md:block">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input className="pl-9" placeholder="Suchen..." />
          </div>

          <div className="ml-auto flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>

            <Separator orientation="vertical" className="h-6" />

            <Avatar>
              <AvatarFallback>BT</AvatarFallback>
            </Avatar>
          </div>
        </header>

        <main className="p-4 lg:p-8">{children}</main>
      </div>
    </div>
  );
}