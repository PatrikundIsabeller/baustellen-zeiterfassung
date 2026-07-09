import {
  Building2,
  Camera,
  Clock3,
  UserPlus,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export function QuickActions() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button className="gap-2">
        <Building2 className="h-4 w-4" />
        Neue Baustelle
      </Button>

      <Button variant="outline" className="gap-2">
        <UserPlus className="h-4 w-4" />
        Mitarbeiter
      </Button>

      <Button variant="outline" className="gap-2">
        <Clock3 className="h-4 w-4" />
        Zeiterfassung
      </Button>

      <Button variant="outline" className="gap-2">
        <Camera className="h-4 w-4" />
        Fotodokumentation
      </Button>
    </div>
  );
}